# Netlify Project Migration Plan

This document outlines the steps to migrate the `OpenAtlas.github.io` project to Netlify to enable Decap CMS functionality, while preserving analytics and page indexing.

## Phase 1: Initial Setup and Testing on Netlify

1.  **Connect GitHub Repository to Netlify (User Action Required)**:
    *   Go to [Netlify](https://app.netlify.com/start).
    *   Click on "Add new site" -> "Import an existing project".
    *   Connect to GitHub and select the `OpenAtlas.github.io` repository.
    *   **Build settings**: Netlify should auto-detect Astro. Confirm the build command is `astro build` and the publish directory is `dist`.
    *   Deploy the site.
    *   **Verification**: Once deployed, note the Netlify-generated subdomain (e.g., `your-project-name.netlify.app`). Verify the site builds and renders correctly at this URL.

2.  **Enable Netlify Identity and Git Gateway (User Action Required)**:
    *   In your Netlify site dashboard, go to "Site settings" -> "Identity".
    *   Click "Enable Identity".
    *   Under "Services" -> "Git Gateway", click "Enable Git Gateway".
    *   **Registration**: In "Identity" -> "Registration", set to "Open" or "Invite only" depending on your preference for new users.

3.  **Test Decap CMS (User Action Required)**:
    *   Navigate to `your-project-name.netlify.app/admin/`.
    *   Attempt to log in using GitHub (via Netlify Identity).
    *   Verify you can access the CMS, see the "Journal" collection, and attempt to create a new entry (e.g., a test post). Save it.
    *   **Verification**: Check your GitHub repository to ensure the new entry has been committed to `src/content/journal/`.
    *   **Verification**: Check the Netlify deploy logs to see that a new build was triggered by the CMS commit and that the site updated successfully with the new test post.

## Phase 2: Domain Migration (Optional - after successful testing)

This phase should only be executed once Phase 1 is fully verified and you are confident that the Netlify deployment is stable and functional.

1.  **Update DNS Records (User Action Required)**:
    *   In your domain registrar's settings, change your domain's DNS records to point to Netlify.
        *   Remove any existing A records pointing to GitHub Pages.
        *   Add a new A record pointing your root domain (`@`) to Netlify's load balancer IP address (usually `75.2.60.5`).
        *   Add a CNAME record for `www` pointing to your Netlify site's subdomain (e.g., `your-project-name.netlify.app`).
    *   In your Netlify site dashboard, go to "Site settings" -> "Domain management" and add your custom domain.
    *   **Verification**: After DNS propagation (which can take a few minutes to several hours), verify your site is accessible at `your-domain.com` and is being served by Netlify.

2.  **Verify Decap CMS on Custom Domain (User Action Required)**:
    *   Navigate to `your-domain.com/admin/`.
    *   Log in and ensure all CMS functionalities (creating, editing, saving) work correctly with your custom domain.

## Considerations

*   **Analytics**: Your existing analytics tags will continue to function as they are part of your site's code, which Netlify deploys.
*   **SEO**: Migrating the domain with correct DNS changes will not negatively impact your SEO. Netlify provides automatic HTTPS, which is beneficial for SEO.
*   **Build Configuration**: Ensure `netlify.toml` is configured if you have complex build needs (e.g., specific environment variables, functions).

## Key Files:

*   [public/admin/index.html](file:///Users/chad/Desktop/Projects/OpenAtlas.github.io/public/admin/index.html)
*   [public/admin/config.yml](file:///Users/chad/Desktop/Projects/OpenAtlas.github.io/public/admin/config.yml)
*   [Netlify Project Merger Plan.md](file:///Users/chad/Desktop/Projects/OpenAtlas.github.io/Netlify%20Project%20Merger%20Plan.md)
