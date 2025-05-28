const footerToggle = document.querySelectorAll(".footerToggle"); 
const questionArrow = document.querySelector(".questionArrow");
const infoArrow = document.querySelector(".infoArrow");
const contactContainer = document.querySelector(".contact");
const footerContent = document.querySelector(".footerContent");
const visieToggle = document.querySelector(".rectangleBasicTwo");
const visieContainer = document.querySelector(".visieTekstContainer");
const visieArrow = document.querySelector(".arrow");
const faceImage = document.querySelector(".faceContainer img");
const middagToggle = document.querySelector(".rectangleBasicThree")
const programWrapper = document.querySelector(".programWrapper")
const options = document.querySelectorAll(".option")
const titel = document.querySelector('h1');

const moveableChildren = contactContainer.querySelectorAll(
  ":scope > :not(.rectangleVerticalOne)"
);

footerToggle.forEach(toggle => {
  toggle.addEventListener("click", () => {
    moveableChildren.forEach(el => el.classList.toggle("slideOut"));
    footerContent.classList.toggle("slideOut");
    questionArrow.classList.toggle("rotated");
    infoArrow.classList.toggle("rotated");
  });
});

visieToggle.addEventListener("click", () => {
  visieContainer.style.display =
  visieContainer.style.display === "block" ? "none" : "block";
  visieArrow.classList.toggle("rotated");
});

middagToggle.addEventListener("click", () => {
  programWrapper.classList.toggle("namiddagSelected");
  options.forEach(el => el.classList.toggle("selected"));
});


const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'GreenBlue',
  'Teal',
  'Blue',
  'Purple',
  'Pink'
];

const colorRotationMap = {
  Pink: '0deg',
  Purple: '22.5deg',
  Blue: '45deg',
  Teal: '67.5deg',
  GreenBlue: '90deg',
  Green: '112.5deg',
  Yellow: '135deg',
  Orange: '157.5deg',
  Red: '180deg'
};

const selectedSchemeMap = {
  Pink: '#A82F6C',
  Purple: '#4E2F69',
  Blue: '#2F7AAC',
  Teal: '#4B8B6F',
  GreenBlue: '#4B8B6F',
  Green: '#4A801F',
  Yellow: '#A59F0B',
  Orange: '#A96E0B',
  Red: '#8A0E0E'
};

const faceImageMap = {
  eli: ['Red', 'Orange', 'Pink'],
  verf: ['Green', 'GreenBlue', 'Yellow'],
  jorden: ['Blue', 'Teal', 'Purple']
};

colors.forEach(color => {
  const segment = document.getElementById(`segment${color}`);
  if (segment) {
    segment.addEventListener('click', () => {
      const folder = color.toLowerCase();

      document.documentElement.style.setProperty('--color-one', `url('../img/${folder}/coloredOne.png')`);
      document.documentElement.style.setProperty('--color-two', `url('../img/${folder}/coloredTwo.png')`);
      document.documentElement.style.setProperty('--color-three', `url('../img/${folder}/coloredThree.png')`);
      document.documentElement.style.setProperty('--color-four', `url('../img/${folder}/coloredFour.png')`);
      document.documentElement.style.setProperty('--color-five', `url('../img/${folder}/coloredFive.png')`);
      document.documentElement.style.setProperty('--color-six', `url('../img/${folder}/coloredSix.png')`);

      const rotation = colorRotationMap[color] || '0deg';
      document.documentElement.style.setProperty('--arrow-rotation', rotation);

      const selectedColor = selectedSchemeMap[color] || '#000000';
      document.documentElement.style.setProperty('--Selected-scheme', selectedColor);

      faceImage.classList.remove('redFace', 'greenFace', 'blueFace');

      if (faceImageMap.eli.includes(color)) {
        faceImage.src = './img/eliPng.png';
        faceImage.classList.add('redFace');
      } else if (faceImageMap.verf.includes(color)) {
        faceImage.src = './img/verfPng.png';
        faceImage.classList.add('greenFace');
      } else if (faceImageMap.jorden.includes(color)) {
        faceImage.src = './img/jordenPng.png';
        faceImage.classList.add('blueFace');
      }
    });
  }
});

function updateTitel() {
  if (window.innerWidth > 450) {
    titel.innerHTML = "Beleef kunst in <br> elke vorm en kleur"; 
    document.documentElement.style.setProperty('--background-image-form', `url('../img/sfeerbeeldHorizontalThree.jpg')`);

  } else {
    titel.innerHTML = "Beleef kunst <br> in elke vorm <br> en kleur";  
    document.documentElement.style.setProperty('--background-image-form', `url('../img/sfeerbeeldVerticalOne.jpg')`);
  }
}

updateTitel();
window.addEventListener('resize', updateTitel);

