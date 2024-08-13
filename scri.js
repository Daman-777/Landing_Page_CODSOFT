function toggleVideo(){
    const trailer= document.querySelector('.trail');
    const video= document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}
function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    // Ensure the image path is correct and force browser to reload the image
    banner.style.background = `url("./Movies/${bg}")`;
    

    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    // Loop through contents and update the active class
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
