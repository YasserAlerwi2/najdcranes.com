/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://najdcranes.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  alternateRefs: [
    {
      href: 'https://najdcranes.com/',
      hreflang: 'en',
    },
    {
      href: 'https://najdcranes.com/ar/',
      hreflang: 'ar',
    },
  ],
};
