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

// Form animation
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})
