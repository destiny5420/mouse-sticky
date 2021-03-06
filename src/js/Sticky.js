function Sticky(elements) {
  Array.prototype.forEach.call(elements, (element) => {
    element.addEventListener('mouseenter', (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY
      const elementPosX = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2
      const elementPosY = e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2
      const offsetX = (mouseX - elementPosX) * 0.5
      const offsetY = (mouseY - elementPosY) * 0.5
      $(e.currentTarget).css('border-width', '0px')
      $(e.currentTarget).css('transform', `translateX(${offsetX}px) translateY(${offsetY}px)`)
    })

    element.addEventListener('mouseleave', (e) => {
      $(e.currentTarget).css('border-width', '3px')
      $(e.currentTarget).css('transform', `translateX(0px) translateY(0px)`)
    })

    element.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY
      const elementPosX = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2
      const elementPosY = e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2
      const offsetX = (mouseX - elementPosX) * 0.5
      const offsetY = (mouseY - elementPosY) * 0.5

      $(e.currentTarget).css('transform', `translateX(${offsetX}px) translateY(${offsetY}px)`)
    })
  })
}

export default Sticky
