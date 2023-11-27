document.addEventListener('DOMContentLoaded', function () {
    // Get the photo and video gallery elements
    const photoGallery = document.getElementById('photo-gallery');
    const videoGallery = document.getElementById('video-gallery');

    // List of photo and video filenames (change these to match your actual file names)
    const photoFiles = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'];
    const videoFiles = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4'];

    // Populate the photo gallery
    photoFiles.forEach(file => {
        const thumbnail = createThumbnail('photos/' + file, 'enlargePhoto(this)');
        photoGallery.appendChild(thumbnail);
    });

    // Populate the video gallery
    videoFiles.forEach(file => {
        const thumbnail = createThumbnail('videos/' + file, 'playVideo(this)');
        videoGallery.appendChild(thumbnail);
    });
});

function createThumbnail(src, onclick) {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');

    const image = document.createElement('img');
    image.src = src;
    image.alt = 'Thumbnail';

    thumbnail.appendChild(image);
    thumbnail.setAttribute('onclick', onclick);

    return thumbnail;
}

function enlargePhoto(element) {
    element.classList.toggle('enlarged');
}

function playVideo(element) {
    const videoUrl = element.firstChild.src;
    const videoElement = document.createElement('video');
    videoElement.controls = true;
    videoElement.src = videoUrl;
    element.innerHTML = '';
    element.appendChild(videoElement);
}
