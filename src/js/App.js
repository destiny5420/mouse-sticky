import Cursor from './Cursor'

function App() {
  console.log('The construct of App.')

  const cursorEl = document.getElementById('cursor')
  const cursorDot = document.getElementById('cursor-dot')
  const cursorCircle = document.getElementById('cursor-circle')

  const cursor = new Cursor(cursorEl, cursorDot, cursorCircle)
}

export default App
