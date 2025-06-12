"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const common_1 = require("@bot2/common");
const metrics_1 = require("./metrics");
async function scrapePage(url) {
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();
    await browser.close();
    return content;
}
async function main() {
    console.log('Scraper service started');
    // Metrics setup
    (0, metrics_1.setupMetrics)();
    // Example usage of proxy manager
    const proxies = [
        { host: 'proxy1.example.com', port: 8080 },
        { host: 'proxy2.example.com', port: 8080 }
    ];
    const proxyManager = new common_1.ProxyManager(proxies);
    const proxy = proxyManager.getNext(); // Get a proxy
    console.log(`Using proxy: ${proxy.host}:${proxy.port}`);
    const url = 'https://example.com';
    metrics_1.scrapeCounter.inc(); // Increment scrape counter
    const content = await scrapePage(url);
    console.log('Content:', content);
}
main().catch(console.error);
