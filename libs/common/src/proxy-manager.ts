export class ProxyManager {
  private proxies: Array<{ host: string; port: number }>;
  private index: number;

  constructor(proxies: Array<{ host: string; port: number }>) {
    this.proxies = proxies;
    this.index = 0;
  }

  getNext() {
    if (this.proxies.length === 0) throw new Error('No proxies configured');
    const proxy = this.proxies[this.index];
    this.index = (this.index + 1) % this.proxies.length;
    return proxy;
  }
}