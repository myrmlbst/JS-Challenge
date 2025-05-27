const images = [image1, image2, image3, image4, image5];

function updateImages(suffix) {
  images.forEach((img, i) => {
    img.src = `images/image${i + 1}${suffix}.jpg`;
  }); // could've also used this method to make step 5 shorter
}

const triggerImage = document.querySelector("img");

triggerImage.addEventListener('mouseover', () => updateImages('_2'));
triggerImage.addEventListener('mouseout', () => updateImages(''));
