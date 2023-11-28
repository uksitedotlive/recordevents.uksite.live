document.addEventListener('DOMContentLoaded', function () {
    // Get the photo and video gallery elements
    const photoGallery = document.getElementById('photo-gallery');
    const videoGallery = document.getElementById('video-gallery');

    // Specify the folder where your media files are stored
    const mediaFolder = 'media';

    // List of media files (photos and videos)
    const mediaFiles = [
        'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg',
        'video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4',
        'photo5.jpg', 'photo7.jpg', 'photo8.jpg',
        'video5.mp4', 'video6.mp4', 'video7.mp4', 'video8.mp4',
        // Add more files as needed
'photo9.jpg', 'photo10.jpg', 'photo11.jpg',

'photo13.jpg', 'photo14.jpg', 'photo15.jpg',

'photo17.jpg', 'photo18.jpg', 'photo19.jpg', 'photo20.jpg',

'photo21.jpg', 'photo23.jpg', 'photo24.jpg',

'photo25.jpg', 'photo27.jpg', 'photo28.jpg',

'photo29.jpg', 'photo31.jpg', 'photo32.jpg',

 'photo34.jpg', 'photo35.jpg',

'photo37.jpg', 'photo38.jpg', 'photo40.jpg',

'photo42.jpg', 'photo43.jpg', 

'photo45.jpg', 'photo46.jpg', 'photo47.jpg', 'photo48.jpg',

'photo49.jpg', 'photo51.jpg', 'photo52.jpg',
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
