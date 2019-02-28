const panels = document.querySelectorAll('#panel');
const shows = document.querySelectorAll('#show');
panels.forEach((panel, ind) => {
    panel.addEventListener('click', () => {
        if (shows[ind].style.display === "none") {
            shows.forEach(show => show.style.display = "none");
            shows[ind].style.display = "block";
        } else {
            shows.forEach(show => show.style.display = "none");
            shows[ind].style.display = "block";
        }
    });
});