/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.najdcranes.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  alternateRefs: [
    {
      href: 'https://www.najdcranes.com/',
      hreflang: 'en',
    },
    {
      href: 'https://www.najdcranes.com/ar/',
      hreflang: 'ar',
    },
  ],
};
