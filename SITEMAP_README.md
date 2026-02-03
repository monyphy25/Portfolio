# Sitemap Documentation

This document explains the sitemaps created for the Mony Phy Portfolio project.

## Files Created

### 1. **sitemap.xml** (XML Sitemap)
**Location:** `public/sitemap.xml`

**Purpose:** This is the primary sitemap for search engines (Google, Bing, etc.). It helps search engine crawlers understand the structure of your website and index all pages efficiently.

**Sections Included:**
- Homepage (Priority: 1.0)
- About Section (Priority: 0.8)
- Skills Section (Priority: 0.8)
- Experience Section (Priority: 0.8)
- Projects Section (Priority: 0.9)
- Education Section (Priority: 0.7)
- Guestbook Section (Priority: 0.7)
- Contact Section (Priority: 0.8)

**Update Frequency:**
- Homepage & Projects: Weekly
- Guestbook: Daily (due to user interactions)
- Other sections: Monthly

### 2. **sitemap.html** (HTML Sitemap)
**Location:** `public/sitemap.html`

**Purpose:** A user-friendly, visually appealing sitemap that visitors can use to navigate your portfolio. Features a premium design with:
- Animated cosmic background matching your portfolio theme
- Interactive cards for each section
- Smooth hover effects and transitions
- Responsive design for all devices

**Access:** `https://monyphy.vercel.app/sitemap.html`

### 3. **robots.txt**
**Location:** `public/robots.txt`

**Purpose:** Instructs search engine crawlers on which parts of your site to crawl and where to find the sitemap.

**Configuration:**
- Allows all user-agents to crawl the site
- References the XML sitemap location
- Blocks crawling of development files (node_modules, src, .git, .env)

## SEO Enhancements

The following updates were made to `index.html`:

```html
<!-- Sitemap and Canonical URL -->
<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
<link rel="canonical" href="https://monyphy.vercel.app/" />
```

These tags help search engines:
- Discover your sitemap automatically
- Understand the canonical (preferred) URL for your site

## Submitting Your Sitemap to Search Engines

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (monyphy.vercel.app)
3. Navigate to **Sitemaps** in the left sidebar
4. Enter `sitemap.xml` in the "Add a new sitemap" field
5. Click **Submit**

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add/verify your site
3. Navigate to **Sitemaps**
4. Submit `https://monyphy.vercel.app/sitemap.xml`

## Maintenance

### When to Update the Sitemap

Update the `lastmod` date in `sitemap.xml` when you:
- Add new projects
- Update major content in any section
- Change the structure of your portfolio

### Automatic Updates (Optional)

For automatic sitemap generation, you can:
1. Use a build-time script to generate the sitemap
2. Implement a sitemap generator in your build process
3. Use services like `next-sitemap` if you migrate to Next.js

## Verification

After deployment, verify your sitemaps are accessible:

✅ XML Sitemap: https://monyphy.vercel.app/sitemap.xml
✅ HTML Sitemap: https://monyphy.vercel.app/sitemap.html
✅ Robots.txt: https://monyphy.vercel.app/robots.txt

## Benefits

Having proper sitemaps provides:

1. **Better SEO**: Search engines can discover and index all your content
2. **Faster Indexing**: New content gets indexed more quickly
3. **User Navigation**: HTML sitemap helps visitors find content easily
4. **Professional Appearance**: Shows attention to detail and best practices
5. **Analytics**: Track which sections get the most attention

## Next Steps

1. ✅ Sitemaps created
2. ⏳ Deploy to Vercel
3. ⏳ Submit sitemap to Google Search Console
4. ⏳ Submit sitemap to Bing Webmaster Tools
5. ⏳ Monitor indexing status

---

**Created:** February 3, 2026
**Last Updated:** February 3, 2026
