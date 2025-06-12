"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeCounter = void 0;
exports.setupMetrics = setupMetrics;
const prom_client_1 = require("prom-client");
exports.scrapeCounter = new prom_client_1.Counter({
    name: 'scraper_requests_total',
    help: 'Total number of scrape requests handled by the scraper service'
});
function setupMetrics() {
    prom_client_1.register.setDefaultLabels({
        app: 'bot2-scraper'
    });
}
