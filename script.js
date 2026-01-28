
document.addEventListener('DOMContentLoaded', () => {
    // CONFIGURATION: Gallery Images
    const imageFiles = [
        "Derby1.JPG", "Derby2.JPG", "League1.jpg", "League2.jpg", "League3.jpg",
        "League4.jpg", "League5.JPG", "League6.JPG", "League7.JPG", "League8.JPG",
        "League9.JPG", "League10.JPG", "League11.JPG", "League12.JPG", "League13.JPG",
        "League14.JPG", "League15.JPG", "League16.JPG", "MECup1.jpg", "MECup2.jpg",
        "MECup3.jpg", "MECup4.jpg", "MECup5.jpg", "WairarapaShieldWinners.jpg"
    ];

    const galleryMain = document.querySelector('.gallery-main');
    const thumbContainer = document.querySelector('.gallery-thumbnails');

    if (imageFiles.length > 0) {
        // Set initial main image
        const firstImg = `assets/gallery/${imageFiles[0]}`;
        galleryMain.innerHTML = `<img id="gallery-main-image" src="${firstImg}" alt="Featured Photo">`;
        thumbContainer.innerHTML = '';

        imageFiles.forEach((filename, index) => {
            const img = document.createElement('img');
            img.src = `assets/gallery/${filename}`;
            img.className = index === 0 ? 'gallery-thumb active' : 'gallery-thumb';
            img.alt = `Photo ${index + 1}`;
            img.loading = "lazy"; // Performance optimization!

            img.addEventListener('click', () => updateGallery(index));
            thumbContainer.appendChild(img);
        });
    }

    const mainImage = document.getElementById('gallery-main-image');
    // Re-query thumbnails now that they are in the DOM
    const thumbnails = document.querySelectorAll('.gallery-thumb');
    let currentIndex = 0;

    // Updated function with 'isAuto' flag to prevent jumping
    function updateGallery(index, isAuto = false) {
        mainImage.style.opacity = '0.5';

        setTimeout(() => {
            mainImage.src = thumbnails[index].src;
            mainImage.style.opacity = '1';

            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnails[index].classList.add('active');

            // Only scroll thumbnail into view if USER clicked (not auto-rotate)
            // This prevents the page from jumping while reading other sections
            if (!isAuto) {
                thumbnails[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }, 200);

        currentIndex = index;
    }

    // Auto rotate every 5 seconds
    if (imageFiles.length > 1) {
        setInterval(() => {
            let nextIndex = (currentIndex + 1) % imageFiles.length;
            updateGallery(nextIndex, true); // Pass true to indicate auto-rotation
        }, 5000);
    }
});
