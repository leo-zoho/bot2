import { Counter, register } from 'prom-client';

export const scrapeCounter = new Counter({
  name: 'scraper_requests_total',
  help: 'Total number of scrape requests handled by the scraper service'
});

export function setupMetrics() {
  register.setDefaultLabels({
    app: 'bot2-scraper'
  });
}
