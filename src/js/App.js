import Cursor from './Cursor'

const eventBinding = function () {
  const self = this

  $('.interactive-obj').on('mouseenter', (e) => {
    const color = $(e.currentTarget).data('color') || 'transparent'
    const size = $(e.currentTarget).data('size') || 20
    self.cursor.onEnter(color, size)
  })

  $('.interactive-obj').on('mouseleave', (e) => {
    self.cursor.onLeave()
  })

  $('.interactive-obj').on('mousemove', (e) => {
    // console.log(e)
  })
}

function App() {
  console.log('The construct of App.')

  const cursorEl = document.getElementById('cursor')
  const cursorDot = document.getElementById('cursor-dot')
  const cursorCircle = document.getElementById('cursor-circle')

  this.cursor = new Cursor(cursorEl, cursorDot, cursorCircle)

  eventBinding.call(this)
}

export default App
