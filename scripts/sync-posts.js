#!/usr/bin/env node
/**
 * Sync script: Reads content collection and generates src/data/posts.ts
 * This makes the Markdown files the source of truth for post metadata.
 */

import { readFile, readdir, writeFile } from "fs/promises";
import { join } from "path";

const CONTENT_DIR = "src/content/journal";
const OUTPUT_FILE = "src/data/posts.ts";

const HEADER = `// Journal entries. This file is auto-generated from src/content/journal/*.md
// Do not edit directly — modify the Markdown files instead.

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  image: string;
  imageAlt: string;
  url: string;
  readMinutes: number;
}

`;

const FOOTER = `
export function getPostBySlug(slug: string): Post | null {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getOtherPosts(slug: string, limit = 3): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}

export function postsByTag(tag: string): Post[] {
  const t = tag.toLowerCase();
  return posts.filter((p) => (p.tags ?? []).some((x) => x.toLowerCase() === t));
}

export function latestPosts(limit = 3): Post[] {
  return posts
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

export function postsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
`;

// Simple frontmatter parser
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const lines = match[1].split("\n");
  const result = {};
  let currentKey = null;
  let currentArray = null;

  for (const line of lines) {
    const trimmed = line.trim();

    // Array end
    if (currentArray && !trimmed.startsWith("- ") && trimmed.includes(":")) {
      result[currentKey] = currentArray;
      currentArray = null;
      currentKey = null;
    }

    // Array item
    if (currentArray && trimmed.startsWith("- ")) {
      currentArray.push(trimmed.slice(2).replace(/^["']|["']$/g, ""));
      continue;
    }

    // Key: value or Key: [inline array]
    const colonMatch = trimmed.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (colonMatch) {
      const key = colonMatch[1];
      const value = colonMatch[2].trim();

      // Start of multi-line array
      if (value === "[" || (value === "" && !trimmed.endsWith("]"))) {
        // Check if next non-empty line starts with "-"
        currentKey = key;
        currentArray = [];
        continue;
      }

      // Inline array
      if (value.startsWith("[") && value.endsWith("]")) {
        const items = value
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^["']|["']$/g, ""))
          .filter((s) => s);
        result[key] = items;
      } else if (value === "true") {
        result[key] = true;
      } else if (value === "false") {
        result[key] = false;
      } else if (/^\d+$/.test(value)) {
        result[key] = parseInt(value, 10);
      } else if (/^".*"$/.test(value) || /^'.*'$/.test(value)) {
        result[key] = value.slice(1, -1);
      } else {
        result[key] = value;
      }
    }
  }

  // Close any open array
  if (currentArray && currentKey) {
    result[currentKey] = currentArray;
  }

  return result;
}

async function syncPosts() {
  console.log("🔄 Syncing posts from content collection...\n");

  const files = await readdir(CONTENT_DIR);
  const mdFiles = files.filter((f) => f.endsWith(".md"));

  if (mdFiles.length === 0) {
    console.error("❌ No Markdown files found in", CONTENT_DIR);
    process.exit(1);
  }

  const posts = [];

  for (const file of mdFiles.sort()) {
    const content = await readFile(join(CONTENT_DIR, file), "utf-8");

    const frontmatter = parseFrontmatter(content);
    if (!frontmatter) {
      console.warn(`  ⚠️ No frontmatter found in ${file}, skipping`);
      continue;
    }

    // Build post object matching the Post interface
    const post = {
      slug: frontmatter.slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      category: frontmatter.category,
      tags: frontmatter.tags || [],
      author: frontmatter.author,
      date: frontmatter.date,
      image: frontmatter.image,
      imageAlt: frontmatter.imageAlt,
      url: `/journal/${frontmatter.slug}`,
      readMinutes: frontmatter.readMinutes,
    };

    posts.push(post);
    console.log(`  ✅ ${file} → ${post.slug}`);
  }

  // Sort by date descending
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  // Generate the posts array as a string
  const postsArray = `export const posts: Post[] = ${JSON.stringify(posts, null, 2)};`;

  // Write the output file
  const output = HEADER + postsArray + FOOTER;
  await writeFile(OUTPUT_FILE, output, "utf-8");

  console.log(`\n✅ Synced ${posts.length} posts to ${OUTPUT_FILE}`);
}

syncPosts().catch((err) => {
  console.error("❌ Sync failed:", err);
  process.exit(1);
});
