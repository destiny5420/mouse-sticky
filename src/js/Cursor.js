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
    posX = event.clientX
    posY = event.clientY
  } else if (event.clientX || event.clientY) {
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
    self.data.circle.moveFactor,
  )
  self.lastScale = lerp(self.lastScale, self.scale, 0.15)

  self.data.dot.element.style.transform = `translateX(${self.lastMousePos.dot.x}px) translateY(${self.lastMousePos.dot.y}px)`
  self.data.circle.element.style.transform = `translateX(${self.lastMousePos.circle.x}px) translateY(${self.lastMousePos.circle.y}px) scale(${self.lastScale})`

  requestAnimationFrame(() => render.call(self))
}

function Cursor(datas) {
  const self = this

  self.data = datas

  self.bounds = {
    dot: self.data.dot.element.getBoundingClientRect(),
    circle: self.data.circle.element.getBoundingClientRect(),
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

Cursor.prototype.onEnter = function (backgroundColor, size) {
  $(this.data.dot.element).css('opacity', 0)

  $(this.data.circleChild.element).css('background-color', backgroundColor)
  $(this.data.circleChild.element).css('border-width', `0px`)
  $(this.data.circleChild.element).css('width', `${size}px`)
  $(this.data.circleChild.element).css('height', `${size}px`)
}

Cursor.prototype.onLeave = function () {
  $(this.data.dot.element).css('opacity', 1)

  $(this.data.circleChild.element).css('background-color', this.data.circle.originBackgroundColor)
  $(this.data.circleChild.element).css('border-width', `${this.data.circle.originBorderWidth}px`)
  $(this.data.circleChild.element).css('width', `${this.data.circle.originSize}px`)
  $(this.data.circleChild.element).css('height', `${this.data.circle.originSize}px`)
}

export default Cursor
