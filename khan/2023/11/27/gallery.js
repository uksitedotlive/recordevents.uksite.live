document.addEventListener('DOMContentLoaded', function () {
    // Get the photo and video gallery elements
    const photoGallery = document.getElementById('photo-gallery');
    const videoGallery = document.getElementById('video-gallery');

    // Specify the folder where your media files are stored
    const mediaFolder = 'media';

    // List of media files (photos and videos)
    const mediaFiles = [
        'photo1.jpg', 'photo2.JPG', 'photo3.JPG', 'photo9.JPG',
        
        'photo5.JPG', 'photo6.JPG', 'photo7.JPG', 'photo8.JPG',
       
        // Add more files as needed
'photo4.JPG',
    ];


    // Populate the photo gallery
    populateGallery(photoGallery, mediaFiles.filter(isImageFile), enlargePhoto);

    // Populate the video gallery
    populateGallery(videoGallery, mediaFiles.filter(isVideoFile), playVideo);
});

function populateGallery(gallery, mediaFiles, onclickFunction) {
    for (let i = 0; i < mediaFiles.length; i += 4) {
        const row = document.createElement('div');
        row.classList.add('gallery-row');

        for (let j = i; j < i + 4 && j < mediaFiles.length; j++) {
            const thumbnail = createThumbnail('media/' + mediaFiles[j], onclickFunction);
            row.appendChild(thumbnail);
        }

        gallery.appendChild(row);
    }
}

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

function isImageFile(file) {
    return /\.(jpg|jpeg|png|gif)$/i.test(file);
}

function isVideoFile(file) {
    return /\.(mp4|webm|ogg)$/i.test(file);
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