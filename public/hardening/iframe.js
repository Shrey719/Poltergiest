// makes it spoof things to make SURE the proxied site  does not know its in an iframe
Object.defineProperty(window, 'top', {
  get: () => window,
});
Object.defineProperty(window, 'parent', {
  get: () => window,
});
