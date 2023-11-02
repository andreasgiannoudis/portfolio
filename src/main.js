import { typedAnimation } from "./modules/typedAnimation";
import { randomAnimation } from "./modules/animatedBackground";
import { toggle } from "./modules/toggleDarkLightMode";
import { scrollBehavior } from "./modules/navBarScroll";
import webbshopp from './img/projects-img/webbshopp.png';
import weatherApp from './img/projects-img/weather-app.png';
import rps from './img/projects-img/rps.png';
scrollBehavior();//scroll behavior for the nav bar


//typed text that will appear in the about section
const typedText = document.querySelector("#typed-text");

typedAnimation(
  typedText, //the animation to be animated to the typed text and has different
  [
    "Andreas Giannoudis",
    "webbutvecklare!",
    "en problemlösare!",
    "ambitös!",
  ],
  40,
  25,
  1500,
  true
);




//array for the projects i want to show on page
const projectsArray = [
  {
    name: "Webbshop",
    description: "Webbshop med hjälp av React och nodejs. Det går att lägga till produkter i kundvagnen och att köpa (inte riktigt betalning)!",
    image: webbshopp,
    link: "https://github.com/andreasgiannoudis/webb23-js2-slutprojekt-andreas-giannoudis",
    stats: {
      htmlCss: 26.2,
      javascript: 73.8,
    },
  },
  {
    name: "Sten sax påse",
    description: "Sten sax påse spel. Det går att spela mot datorn. Visas alltid de 5 högsta spelare och deras highscore.",
    image: rps,
    link: "https://github.com/andreasgiannoudis/webb23-js2-inlamning1-andreas-giannoudis.git",
    stats: {
      htmlCss: 24.9,
      javascript: 75.1,
    }
  },
  {
    name: "Väder app",
    description: "Väder applikation. Man söker en stad och väljer hur många timmars prognos man vill se.",
    image: weatherApp,
    link: "https://andreasgiannoudis.github.io/webb23-js1-slutprojekt-andreas-giannoudis/",
    stats: {
      htmlCss: 26.7,
      javascript: 72.3
    }
  }
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

  const projectName = document.createElement('h6');
  projectName.classList.add('primary-text');
  projectName.textContent = project.name;
  desc.append(projectName);

  const projectDescription = document.createElement('h6');
  projectDescription.classList.add('secondary-text');
  projectDescription.textContent = project.description;
  desc.append(projectDescription);

  const projectLink = document.createElement('a');
  projectLink.href = project.link;
  card.append(projectLink);

  const projectButton = document.createElement('button');
  projectButton.classList.add('primary-text', 'button');
  projectButton.textContent = `Visa ${project.name}`;
  projectLink.append(projectButton);

  const details = document.createElement('div');
  details.classList.add('details');
  card.append(details);

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


