import Cursor from './Cursor'
import Sticky from './Sticky'

function App() {
  console.log('The construct of App.')

  const cursorDot = document.getElementById('cursor-dot')
  const cursorCircle = document.getElementById('cursor-circle')
  const cursorChild = document.getElementById('cursor-circle-child')
  const cursorConfigure = {
    dot: {
      element: cursorDot,
      originSize: 4,
      originOpacity: 1,
    },
    circle: {
      element: cursorCircle,
      originBackgroundColor: 'transparent',
      originSize: 40,
      originOpacity: 1,
      originBorderWidth: 1,
      moveFactor: 0.15,
    },
    circleChild: {
      element: cursorChild,
    },
  }

  this.cursor = new Cursor(cursorConfigure)
  this.sticky = new Sticky(this.cursor)
}

export default App
