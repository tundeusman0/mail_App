let panels = document.querySelectorAll('#panel')
let okays = document.querySelectorAll('#show')
panels.forEach((panel, ind) => {
    panel.addEventListener('click', () => {
        if (okays[ind].style.display === "none") {
            okays.forEach(show => show.style.display = "none")
            okays[ind].style.display = "block"
        } else {
            okays.forEach(show => show.style.display = "none")
            okays[ind].style.display = "block"
        }
    })
});