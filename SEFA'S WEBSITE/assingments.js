const images = JSON.parse(localStorage.getItem("images"));
const imageContainer = document.querySelector("#image-container");

if (images) {
    images.forEach(imageSrc => {
        const img = document.createElement("img");
        img.src = imageSrc;
        imageContainer.appendChild(img);
    });
}
