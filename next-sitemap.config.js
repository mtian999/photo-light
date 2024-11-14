/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://fate.maomaoyu.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
