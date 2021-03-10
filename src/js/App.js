import Cursor from './Cursor'

const eventBinding = function () {
  const self = this

  $('.interactive-obj').on('mouseenter', (e) => {
    const color = $(e.currentTarget).data('color') || 'transparent'
    const size = $(e.currentTarget).data('size') || 20
    self.cursor.onEnter(color, size)

    const mouseX = e.clientX
    const mouseY = e.clientY
    const elementPosX = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2
    const elementPosY = e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2
    const offsetX = (mouseX - elementPosX) * 0.5
    const offsetY = (mouseY - elementPosY) * 0.5
    $(e.currentTarget).css('border-width', '0px')
    $(e.currentTarget).css('transform', `translateX(${offsetX}px) translateY(${offsetY}px)`)
  })

  $('.interactive-obj').on('mouseleave', (e) => {
    self.cursor.onLeave()

    $(e.currentTarget).css('border-width', '3px')
    $(e.currentTarget).css('transform', `translateX(0px) translateY(0px)`)
  })

  $('.interactive-obj').on('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const elementPosX = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2
    const elementPosY = e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2
    const offsetX = (mouseX - elementPosX) * 0.5
    const offsetY = (mouseY - elementPosY) * 0.5

    $(e.currentTarget).css('transform', `translateX(${offsetX}px) translateY(${offsetY}px)`)
  })
}

function App() {
  console.log('The construct of App.')

  const cursorEl = document.getElementById('cursor')
  const cursorDot = document.getElementById('cursor-dot')
  const cursorCircle = document.getElementById('cursor-circle')
  const cursorChild = document.getElementById('cursor-circle-child')

  this.cursor = new Cursor(cursorEl, cursorDot, cursorCircle, cursorChild)

  eventBinding.call(this)
}

export default App
