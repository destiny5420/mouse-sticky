function TouchObj(elements, cursor) {
  Array.prototype.forEach.call(elements, (element) => {
    element.addEventListener('mouseenter', (e) => {
      const color = e.currentTarget.dataset.color || 'transparent'
      const size = e.currentTarget.dataset.size || 20
      cursor.onEnter(color, size)
    })

    element.addEventListener('mouseleave', () => {
      cursor.onLeave()
    })
  })
}

export default TouchObj
