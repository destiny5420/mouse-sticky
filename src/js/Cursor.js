const lerp = function (a, b, n) {
  return (1 - n) * a + n * b
}

function getMousePos(e) {
  let posX = 0
  let posY = 0
  let event = e

  if (!e) {
    event = window.event
  }

  if (event.pageX || event.pageY) {
    console.log('event: ', event)
    console.log('page / X: ', event.pageX, ' / Y: ', event.pageY)
    console.log('-------------------------')
    posX = event.clientX
    posY = event.clientY
    // posX = event.clientX + documentElement.scrollLeft
    // posY = event.clientY + documentElement.scrollTop
  } else if (event.clientX || event.clientY) {
    console.log(2)
    // posX = event.clientX + body.scrollLeft + documentElement.scrollLeft
    // posY = event.clientY + body.scrollTop + documentElement.scrollTop
    posX = event.clientX + documentElement.scrollLeft
    posY = event.clientY + documentElement.scrollTop
  }

  return { x: posX, y: posY }
}

function eventBinding() {
  const self = this

  window.addEventListener('mousemove', (event) => {
    self.mousePos = getMousePos(event)
  })
}

function render() {
  const self = this

  self.lastMousePos.dot.x = lerp(
    self.lastMousePos.dot.x,
    self.mousePos.x - self.bounds.dot.width / 2,
    1,
  )
  self.lastMousePos.dot.y = lerp(
    self.lastMousePos.dot.y,
    self.mousePos.y - self.bounds.dot.height / 2,
    1,
  )
  self.lastMousePos.circle.x = lerp(
    self.lastMousePos.circle.x,
    self.mousePos.x - self.bounds.circle.width / 2,
    0.15,
  )
  self.lastMousePos.circle.y = lerp(
    self.lastMousePos.circle.y,
    self.mousePos.y - self.bounds.circle.height / 2,
    0.15,
  )
  self.lastScale = lerp(self.lastScale, self.scale, 0.15)

  self.DOM.dot.style.transform = `translateX(${self.lastMousePos.dot.x}px) translateY(${self.lastMousePos.dot.y}px)`
  self.DOM.circle.style.transform = `translateX(${self.lastMousePos.circle.x}px) translateY(${self.lastMousePos.circle.y}px) scale(${self.lastScale})`

  requestAnimationFrame(() => render.call(self))
}

function Cursor(element, dot, circle) {
  const self = this

  self.DOM = {
    element,
    dot,
    circle,
  }

  self.bounds = {
    dot: self.DOM.dot.getBoundingClientRect(),
    circle: self.DOM.circle.getBoundingClientRect(),
  }

  self.scale = 1
  self.opacity = 1
  self.mousePos = { x: 0, y: 1 }
  self.lastMousePos = {
    dot: { x: 0, y: 0 },
    circle: { x: 0, y: 0 },
  }

  self.lastScale = 1

  eventBinding.call(this)
  requestAnimationFrame(() => render.call(self))
}

export default Cursor