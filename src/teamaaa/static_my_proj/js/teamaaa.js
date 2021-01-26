const panels = document.querySelectorAll('.panel')

// expand on click
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        console.log("hello")
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

//expand on hover
panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => panel.classList.add('active'))
    panel.addEventListener('mouseleave', () => panel.classList.remove('active'))
})