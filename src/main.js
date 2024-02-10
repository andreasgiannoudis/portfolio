import { typedAnimation } from "./modules/typedAnimation";
import { randomAnimation } from "./modules/animatedBackground";
import { toggle } from "./modules/toggleDarkLightMode";
import {scrollBehavior} from "./modules/navBarScroll";
import webbshopp from './img/projects-img/webbshopp.png';
import weatherApp from './img/projects-img/weather-app.png';
import rps from './img/projects-img/rps.png';
import mysqlPhp from './img/projects-img/php_mysql.png';
import wordpressProjectLorum from './img/projects-img/wordpress-project-lorum.png'; 
import wordpressProductPage from './img/projects-img/productpage.png'; 
scrollBehavior();//scroll behavior for the nav bar




//translations of all the contents of the page in english and swedish
const languageData = {
  en: {
    navAboutMe: "About me",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    webbshopName: "Web Shop",
    webbshopDescription: "Web shop using React and Node.js. You can add products to the cart and 'purchase' them (no real payment).",
    wordpressProjectLorumName: "Wordpress Project",
    stenSaxPaseName: "Rock Paper Scissors",
    stenSaxPaseDescription: "Rock, paper, scissors game. You can play against the computer and see the top 5 players and their high scores.",
    vaderAppName: "Weather App",
    vaderAppDescription: "Weather application. You can search for a city and choose how many hours of forecast you want to see.",
    mysqlPhp: "Database and php",
    databashanteringProjekt: "Webshop application using myql and php. A project that manages the database and web server. There is the webshop and the admin site that displays the orders.",
    wordpressProjectLorumDescription: "Wordpress project that is completely custom, own theme, used by php and wordpress editor and sass for styling. All content is dynamic. Unfortunately it's not live so you can see it.",
    projectsTitle: "My challenges",
    projectsDescription: "As a web developer, I love taking on new and exciting challenges. I have worked on different types of projects, from e-commerce to games to weather apps. Every project has taught me something new and developed my skills!",
    whoAmI: "Who am I?",
    iAm: "I am",
    descriptionMe: "I am a web development student with a focus on e-commerce at Grit Academy in Malmö. I am passionate about creating modern and user-friendly websites and applications using HTML, CSS, JavaScript, WordPress. So far I have developed some projects that show my skills and my creativity. WordPress enthusiast. I am creating my own e-commerce, for my own company, in wordpress and woocommerce.",
    ShowMoreBtn: "Show more",
    mySkills: "My Skills",
    frontEndSkills: "Front-end Skills",
    backEndSkills: "Back-end Skills",
    contact: "Contact me",
    typedName: "Andreas Giannoudis",
    typedOccupation1: "web developer!",
    typedOccupation2: "problem solver!",
    typedOccupation3: "ambitious!",
    cvPath: './assets/cv_en.pdf',
    wordpressProductPageName: "Wordpress product page",
    wordpressProductPageDescription: "Product page created with wordpress/woocommerce. Use PHP, Sass and Vitejs. Everything is customized except the product, is created in woocommerce. Unfortunately they are not live.",
  },
  sv: {
    navAboutMe: "Om mig",
    navSkills: "Kompetenser",
    navProjects: "Projekt",
    navContact: "Kontakt",
    webbshopName: "Webbshop",
    webbshopDescription: "Webbshop med hjälp av React och Node.js. Du kan lägga till produkter i varukorgen och 'köpa' dem (ingen riktig betalning).",
    stenSaxPaseName: "Sten Sax Påse",
    stenSaxPaseDescription: "Sten, sax, påse-spel. Du kan spela mot datorn och se de 5 bästa spelarna och deras högsta poäng.",
    vaderAppName: "Väder App",
    wordpressProjectLorumName: "Wordpress Projekt",
    vaderAppDescription: "Väderapplikation. Du kan söka efter en stad och välja hur många timmars prognos du vill se.",
    mysqlPhp: "Databashantering",
    databashanteringProjekt: "Webshopapplikation med myql och php. Ett projekt som hanterar databasen och webbservern. Det finns webbshopen och adminsidan som visar beställningarna.",
    wordpressProjectLorumDescription: "Wordpress projekt som är helt custom, eget tema, använd av php och wordpress editor och sass för styling. Allt innehåll är dynamiskt. Tyvärr är de inte live så att du kan se.",
    projectsTitle: "Mina utmaningar",
    projectsDescription: "Som webbutvecklare älskar jag att ta mig an nya och spännande utmaningar. Jag har arbetat med olika typer av projekt, från e-handel till spel till väderappar. Varje projekt har lärt mig något nytt och utvecklat mina färdigheter!",
    whoAmI: "Vem är jag?",
    iAm: "Jag är",
    descriptionMe: " Jag är en webbutvecklingsstudent med fokus på e-handel vid Grit Academy i Malmö. Jag brinner för att skapa moderna och användarvänliga webbplatser och applikationer med hjälp av HTML, CSS, JavaScript, WordPress. Hittills har jag utvecklat några projekt som visar mina kunskaper och min kreativitet. WordPress entusiast. Jag håller på att skapa min egen e-handel, för mitt eget företag, i wordpress och woocommerce.",
    ShowMoreBtn: "Läs mer",
    mySkills: "Mina Kompetenser",
    frontEndSkills: "Front-end Kompetenser",
    backEndSkills: "Back-end Kompetenser",
    contact: "Kontakta mig",
    typedName: "Andreas Giannoudis",
    typedOccupation1: "webbutvecklare!",
    typedOccupation2: "problemlösare!",
    typedOccupation3: "ambitös!",
    cvPath: './assets/cv_swe.pdf',
    wordpressProductPageName: "Wordpress produktsida",
    wordpressProductPageDescription: "Produktsida skapad med wordpress/woocommerce. Använd PHP, Sass, och Vitejs. Allt är custom förutom produkten, är skapad i woocommerce. Tyvärr är de inte live."
  }
};


const languageSelect = document.querySelector('#language-select');
//language select options
const languageOptions = [
  { code: 'sv', label: 'SV'},
  { code: 'en', label: 'ENG'}
];


function populateLanguageOptions() {
  for (const language of languageOptions) {
    const option = document.createElement('option');
    option.value = language.code;
    option.textContent = language.label;
    languageSelect.appendChild(option);
  }

  // default language sv
  languageSelect.value = 'sv';
}

function updatePageLanguage() {
  const textElements = document.querySelectorAll('[data-i18n]');

  textElements.forEach((element) => {
    const translationKey = element.getAttribute('data-i18n');
    element.textContent = languageData[currentLanguage][translationKey];
  });
}


//setting the initial language to Swedish
let currentLanguage = 'sv';

//typed text that will appear in the about section
const typedText = document.querySelector("#typed-text");

let typeInstance = typedAnimation(
  typedText,
  [
    "typedName",
    "typedOccupation1",
    "typedOccupation2",
    "typedOccupation3",
  ],
  40,
  25,
  1500,
  true,
  languageData,
  currentLanguage
);
updatePageLanguage();
//call the function to populate the dropdown
populateLanguageOptions();

document.addEventListener('DOMContentLoaded', () => {
  //call the updatePageLanguage function when the page is loaded
  updatePageLanguage();
  const cvLink = document.getElementById('cv-link');
  cvLink.href = languageData[currentLanguage].cvPath;
});

languageSelect.addEventListener('change', (event) => {
  currentLanguage = event.target.value;
  updatePageLanguage();
  typeInstance.destroy();
  
  typeInstance = typedAnimation(
    typedText,
    [
      "typedName",
      "typedOccupation1",
      "typedOccupation2",
      "typedOccupation3",
    ],
    40,
    25,
    1500,
    true,
    languageData,
    currentLanguage
  );

  const cvLink = document.getElementById('cv-link');
  cvLink.href = languageData[currentLanguage].cvPath;
});


//array for the projects i want to show on page
const projectsArray = [

  {
    nameTranslationKey: 'wordpressProjectLorumName',
    descriptionTranslationKey: 'wordpressProjectLorumDescription',
    image: wordpressProjectLorum,
    link: '#',
    stats: {
      htmlCss: 0,
      javascript: 0,
    },
  },
  {
    nameTranslationKey: 'wordpressProductPageName',
    descriptionTranslationKey: 'wordpressProductPageDescription',
    image: wordpressProductPage,
    link: '#',
    stats: {
      htmlCss: 0,
      javascript: 0,
    },
  },
  {
    nameTranslationKey: 'webbshopName',
    descriptionTranslationKey: 'webbshopDescription',
    image: webbshopp,
    link: 'https://github.com/andreasgiannoudis/webb23-js2-slutprojekt-andreas-giannoudis',
    stats: {
      htmlCss: 26.2,
      javascript: 73.8,
    },
  },
  {
    nameTranslationKey: 'vaderAppName',
    descriptionTranslationKey: 'vaderAppDescription',
    image: weatherApp,
    link: 'https://andreasgiannoudis.github.io/webb23-js1-slutprojekt-andreas-giannoudis/',
    stats: {
      htmlCss: 26.7,
      javascript: 72.3,
    },
  },
  {
    nameTranslationKey: 'mysqlPhp',
    descriptionTranslationKey: 'databashanteringProjekt',
    image: mysqlPhp,
    link: 'https://github.com/andreasgiannoudis/databashantering.git',
    stats: {
      htmlCss: 0,
      javascript: 0,
    },
  },
  
];



const container = document.querySelector('.cards');

//the actual display of the projects
for (const project of projectsArray) {
  const card = document.createElement('div');
  card.classList.add('card');
  container.append(card);

  const cardImg = document.createElement('div');
  cardImg.classList.add('card-img');
  card.append(cardImg);

  const projectImg = document.createElement('img');
  const imgUrl = new URL(project.image, import.meta.url);
  projectImg.src = imgUrl.href;
  cardImg.append(projectImg);

  const desc = document.createElement('div');
  desc.classList.add('desc');
  card.append(desc);

  // Project Name
  const projectName = document.createElement('h6');
  projectName.classList.add('primary-text');
  projectName.setAttribute('data-i18n', project.nameTranslationKey);
  desc.append(projectName);

  // Project Description
  const projectDescription = document.createElement('h6');
  projectDescription.classList.add('secondary-text');
  projectDescription.setAttribute('data-i18n', project.descriptionTranslationKey);
  desc.append(projectDescription);

  // Project Link
  const projectLink = document.createElement('a');
  projectLink.href = project.link;
  card.append(projectLink);

  // Project Button
  const projectButton = document.createElement('button');
  projectButton.classList.add('primary-text', 'button');
  projectButton.setAttribute('data-i18n', project.nameTranslationKey);
  projectButton.textContent = `Visa ${project.nameTranslationKey}`;
  projectLink.append(projectButton);

  // Project Details
  const details = document.createElement('div');
  details.classList.add('details');
  card.append(details);

  // Rating HTML/CSS
  const ratingHTMLCSS = document.createElement('div');
  ratingHTMLCSS.classList.add('rating');
  details.append(ratingHTMLCSS);

  const ratingHTMLCSSValue = document.createElement('h6');
  ratingHTMLCSSValue.classList.add('primary-text', 'stats-htmlcss');
  ratingHTMLCSSValue.textContent = project.stats.htmlCss + '%';
  ratingHTMLCSS.append(ratingHTMLCSSValue);

  const ratingHTMLCSSText = document.createElement('h6');
  ratingHTMLCSSText.classList.add('secondary-text', 'stats-js');
  ratingHTMLCSSText.textContent = 'HTML/CSS';
  ratingHTMLCSS.append(ratingHTMLCSSText);

  // Rating JavaScript
  const ratingJavaScript = document.createElement('div');
  ratingJavaScript.classList.add('activity');
  details.append(ratingJavaScript);

  const ratingJavaScriptValue = document.createElement('h6');
  ratingJavaScriptValue.classList.add('primary-text');
  ratingJavaScriptValue.textContent = project.stats.javascript + '%';
  ratingJavaScript.append(ratingJavaScriptValue);

  const ratingJavaScriptText = document.createElement('h6');
  ratingJavaScriptText.classList.add('secondary-text');
  ratingJavaScriptText.textContent = 'JavaScript';
  ratingJavaScript.append(ratingJavaScriptText);

}



const btn = document.getElementById('button');
const nav = document.getElementById('nav-ul');

function closeMenu() {
  nav.classList.remove('toggle');
}

btn.addEventListener('click', function () {
  nav.classList.toggle('toggle');
});

const navItems = document.querySelectorAll('#nav-ul li a');

navItems.forEach(function (item) {
  item.addEventListener('click', closeMenu);
});