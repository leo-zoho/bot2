import puppeteer from 'puppeteer';
import { ProxyManager } from '@bot2/common';
import { setupMetrics, scrapeCounter } from './metrics';

async function scrapePage(url: string): Promise<string> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const content = await page.content();
  await browser.close();
  return content;
}

async function main() {
  console.log('Scraper service started');

  // Metrics setup
  setupMetrics();

  // Example usage of proxy manager
  const proxies = [
    { host: 'proxy1.example.com', port: 8080 },
    { host: 'proxy2.example.com', port: 8080 }
  ];
  const proxyManager = new ProxyManager(proxies);

  const proxy = proxyManager.getNext(); // Get a proxy
  console.log(`Using proxy: ${proxy.host}:${proxy.port}`);

  const url = 'https://example.com';
  scrapeCounter.inc(); // Increment scrape counter
  const content = await scrapePage(url);
  console.log('Content:', content);
}

main().catch(console.error);
