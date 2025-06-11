"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyManager = void 0;
var ProxyManager = /** @class */ (function () {
    function ProxyManager(proxies) {
        this.proxies = proxies;
        this.index = 0;
    }
    ProxyManager.prototype.getNext = function () {
        if (this.proxies.length === 0)
            throw new Error('No proxies configured');
        var proxy = this.proxies[this.index];
        this.index = (this.index + 1) % this.proxies.length;
        return proxy;
    };
    return ProxyManager;
}());
exports.ProxyManager = ProxyManager;
