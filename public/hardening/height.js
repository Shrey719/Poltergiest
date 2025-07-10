let rWidth = Math.random()
rWidth = rWidth*(10**13)
rWidth = Math.floor(rWidth)
rWidth = rWidth/(10**13)

let rHeight = Math.random()
rHeight = rHeight*(10**13)
rHeight = Math.floor(rHeight)
rHeight = rHeight/(10**13)

Object.defineProperty(window.screen, 'width', {
  get: () => 1920, 
  configurable: true
});

Object.defineProperty(window.screen, 'height', {
  get: () => 1080,  
  configurable: true
});

Object.defineProperty(window.screen, "availWidth", {
  get: () => 1920,
  configurable: true
})

Object.defineProperty(window.screen, "availHeight", {
  get: () => 1043,
  configurable: true
})

Object.defineProperty(window, "innerWidth", {
  get: () => 1919,
  configurable: true
})

Object.defineProperty(window, "innerHeight", {
  get: () => 967,
  configurable: true
})

Object.defineProperty(window, "outerWidth", {
  get: () => 1920,
  configurable: true
})

Object.defineProperty(window, "outerHeight", {
  get: () => 1050,
  configurable: true
})

Object.defineProperty(document.documentElement, "clientWidth", {
  get: () => 1920,
  configurable: true
})

Object.defineProperty(document.documentElement, "clientHeight", {
  get: () => 969,
  configurable: true
})

Object.defineProperty(window, "devicePixelRatio", {
  get: () => 1,
  configurable: true
})

Object.defineProperty(window.visualViewport, "width", {
  get: () => 1920+rWidth,
  configurable: true
})

Object.defineProperty(window.visualViewport, "height", {
  get: () => 969+rHeight,
  configurable: true
})

Object.defineProperty(window, "screenX", {
  get: () => 0,
  configurable: true
})

Object.defineProperty(window, "screenY", {
  get: () => 0,
  configurable: true
})

Object.defineProperty(window, "screenLeft", {
  get: () => 0,
  configurable: true
})

Object.defineProperty(window, "screenTop", {
  get: () => 0,
  configurable: true
})