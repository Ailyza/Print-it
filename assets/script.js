const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		
	},
	
]

/************Les variables***********/
const arrowDroite = document.querySelector(".arrow_right");
const arrowGauche = document.querySelector(".arrow_left");
const imgBanner = document.querySelector(".banner-img");
const pBanner = document.querySelector("#banner p");
const dotsContainerElement = document.querySelector('.dots')

let index = 0;

/******Changement image et p******/
const changeBanner = () => {
	imgBanner.src = './assets/images/slideshow/' + slides[index].image;
	pBanner.innerHTML = slides[index].tagLine;
  };

  const changeCssDotElement = () => {
	const allDotsElements = document.querySelectorAll('.dot')
	allDotsElements.forEach((dot, i) => {
		dot.classList.remove('dot_selected')
		if (i === index) {
			dot.classList.add('dot_selected')
		}
	})
  }
/*****Je change les images flèche droite*****/
arrowDroite.addEventListener('click', () => {
	index++;
	if (index > slides.length - 1) {// Pour la première boucle : Si 0 est supérieur à 4-1 
	  index = 0;
	}
	changeBanner();
	changeCssDotElement();
  });
/*****Je change les images flèche gauche*****/
arrowGauche.addEventListener('click', () => {
	index--;
	if (index < 0) { //Pour la première boucle : Si 0 est inférieur à 0 
		index = slides.length - 1} // 0 = 4-1 
		changeBanner();
		changeCssDotElement();
})


/************dots **********/

for (n = 0; 
	n < slides.length; 
	n++) {
		console.log(n);

let dotElement = document.createElement('span'); //creation div dans HTML
dotElement.classList.add('dot'); // ajout class CSS '.dot'

if (n === index) {
	dotElement.classList.add('dot_selected')
}

// dotsContainerElement.appendChild(dotElement) <= (manère différente)
document.querySelector('.dots').appendChild(dotElement)

	}






