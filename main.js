let displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src',`pic${i}.jpg`);
newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', newImage.getAttribute("src"))
})

thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
