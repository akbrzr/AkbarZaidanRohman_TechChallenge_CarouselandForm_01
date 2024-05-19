// Fungsi Mentor Design
const galleryContainerMentor = document.querySelector('.gallery-container-mentor');
const galleryItems = document.querySelectorAll('.gallery-item-mentor');
const arrowLeft = document.getElementById('arrowleft');
const arrowRight = document.getElementById('arrowright');

class Carousel {
    constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
        this.totalItems = items.length;
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-mentor-1');
            el.classList.remove('gallery-item-mentor-2');
            el.classList.remove('gallery-item-mentor-3');
            el.style.opacity = 0;
        });

        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`gallery-item-mentor-${i+1}`);
            el.style.opacity = 1;
        });
    }

    setCurrentState(direction) {
        if (direction === 'previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    useControls() {
        arrowLeft.addEventListener('click', () => {
            this.setCurrentState('previous');
        });
        arrowRight.addEventListener('click', () => {
            this.setCurrentState('next');
        });
    }
}

const exampleCarousel = new Carousel(galleryContainerMentor, galleryItems);

exampleCarousel.useControls();
exampleCarousel.updateGallery();