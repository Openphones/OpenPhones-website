import { IProduct } from "../dataIO";

export function generateCarousel(product: IProduct) {
    const carouselContainer = document.createElement("div")
    carouselContainer.classList.add("carousel")
    carouselContainer.id = `${product.id}-images`
    carouselContainer.innerHTML = `
            <div class="images"></div>
            <button type="button" class="prev-button" title="Previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg></button>
            <button type="button" class="next-button" title="Next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z"/></svg></button>
            `
    
    const imagesContainer = carouselContainer.querySelector(".images") as HTMLElement
    const images = product.images;

    for (const image of images) {
        const imageElement = new Image()
        imageElement.src = image
        imageElement.alt = `Photo of ${product.short_name}`
        imagesContainer.append(imageElement)
    }

    const prevButton = carouselContainer.querySelector(".prev-button") as HTMLButtonElement
    const nextButton = carouselContainer.querySelector(".next-button") as HTMLButtonElement
    
    let currentImage = 0;
    (imagesContainer.children[currentImage] as HTMLImageElement).style.display = "block";

    prevButton.addEventListener('click', () => {
        if (currentImage > 0) {
            (imagesContainer.children[currentImage] as HTMLImageElement).style.display = "none";
            currentImage--;
            (imagesContainer.children[currentImage] as HTMLImageElement).style.display = "block";
        }

        if (currentImage === 0) {
            prevButton.style.display = "none"
        } else {
            prevButton.style.display = "block"
            nextButton.style.display = "block"
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentImage < images.length - 1) {
            (imagesContainer.children[currentImage] as HTMLImageElement).style.display = "none";
            currentImage++;
            (imagesContainer.children[currentImage] as HTMLImageElement).style.display = "block";
        }

        if (currentImage === images.length - 1) {
            nextButton.style.display = "none"
        } else {
            nextButton.style.display = "block"
            prevButton.style.display = "block"
        }
    });

    if (images.length <= 1) {
        nextButton.style.display = "none"
        prevButton.style.display = "none"
    }

    return carouselContainer
}