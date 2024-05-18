const movies = [
    { title: "filme1", image: "images/movie-gallery/filme1.jpg" },
    { title: "filme2", image: "images/movie-gallery/filme2.jpg" },
    { title: "filme3", image: "images/movie-gallery/filme3.jpg" },
    { title: "filme4", image: "images/movie-gallery/filme4.jpg" },
    { title: "filme5", image: "images/movie-gallery/filme5.jpg" },
    { title: "filme6", image: "images/movie-gallery/filme6.jpg" },
    { title: "filme7", image: "images/movie-gallery/filme7.jpg" },
    { title: "filme8", image: "images/movie-gallery/filme8.jpg" },
];

const videoUrl = "https://www.youtube.com/embed/jmaz41xf9_0";

const movieCatalog = document.getElementById('movie-catalog');
const modal = document.getElementById('modal');
const youtubeVideo = document.getElementById('youtube-video');
const closeButton = document.querySelector('.close-btn');

movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const imgElement = document.createElement('img');
    imgElement.classList.add('movie-img');
    imgElement.src = movie.image;
    imgElement.alt = movie.title;
    imgElement.addEventListener('click', () => {
        youtubeVideo.src = `${videoUrl}?autoplay=1`;
        modal.style.display = "block";
    });

    movieElement.appendChild(imgElement);
    movieCatalog.appendChild(movieElement);
});

closeButton.addEventListener('click', () => {
    youtubeVideo.src = "";
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        youtubeVideo.src = "";
        modal.style.display = "none";
    }
});