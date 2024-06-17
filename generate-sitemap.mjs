import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs to include in the sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/map', changefreq: 'daily', priority: 1.0 },
  // Add other static routes and dynamic routes as needed
];

(async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://www.1inone.com' });

  urls.forEach(url => {
    sitemapStream.write(url);
  });

  sitemapStream.end();

  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);

  streamToPromise(sitemapStream).then(data => writeStream.end(data));
})();
