# Raiyan Rashid Prodhan — Portfolio

A light, editorial portfolio built with Astro for Raiyan Rashid Prodhan, Senior Full Stack Developer. It includes responsive layouts, optimized imagery, structured SEO metadata, an XML sitemap, downloadable resume, work history, project case studies and a working contact form.

## Local development

Use Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

The production build is created with:

```sh
npm run build
```

## Production URL

Set `SITE_URL` to the final origin before building so canonical URLs, Open Graph metadata, `robots.txt` and the sitemap use the deployed domain:

```sh
SITE_URL=https://raiyanprodhan.com npm run build
```

If `SITE_URL` is omitted, the production URL defaults to `https://raiyanprodhan.com`.

## Sitemap maintenance

The `@astrojs/sitemap` integration generates `sitemap-index.xml` and its child
sitemap files during every production build. New static routes under `src/pages`
are included automatically. Dynamic routes are included when they are generated
with Astro's `getStaticPaths()`.

Do not add `changefreq`, `priority` or `lastmod` globally unless the values are
accurate. If a future page is marked `noindex` or is only a utility route, also
add its pathname to `sitemapExcludedPaths` in `astro.config.mjs`.

## Contact form activation

The contact form posts to FormSubmit and delivers enquiries to `rrprodhan1998@gmail.com`. On the first submission, FormSubmit sends a one-time activation email to that inbox. Open it and confirm the endpoint before publishing or testing with real visitors.

## Main assets

- Resume: `public/files/Raiyan_Rashid_Prodhan_Resume.pdf`
- Social sharing portrait: `public/images/raiyan-rashid-prodhan.jpg`
- Optimized on-page portrait source: `src/assets/raiyan-portrait.png`
