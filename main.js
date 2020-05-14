let displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src',`images/pic${i}.jpg`);
newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', newImage.getAttribute("src"))
})
newImage.addEventListener('touch', function() {
    displayedImage.setAttribute('src', newImage.getAttribute("src"))
})
thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    if (btn.getAttribute('class') == 'dark'){
       
    }
}