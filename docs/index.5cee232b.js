function t(t){return t&&t.__esModule?t.default:t}var e=globalThis,s={},n={},a=e.parcelRequiree588;function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}null==a&&((a=function(t){if(t in s)return s[t].exports;if(t in n){var e=n[t];delete n[t];var a={id:t,exports:{}};return s[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequiree588=a),(0,a.register)("27Lyk",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>s,set:t=>s=t,enumerable:!0,configurable:!0});var s,n=new Map;s=function(t,e){for(var s=0;s<e.length-1;s+=2)n.set(e[s],{baseUrl:t,path:e[s+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["b9Fgu","index.5cee232b.js","6QAC3","webbshopp.91a1cca9.png","55wFe","weather-app.9fd7157c.png","9APVw","rps.09d5a3ba.png","8lbX4","php_mysql.afebe26a.png"]'));var r={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},o=new/*#__PURE__*/(function(){function t(){}var e=t.prototype;return e.load=function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=i({},r,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(t.stringsElement.children),a=n.length;if(a)for(var o=0;o<a;o+=1)t.strings.push(n[o].innerHTML.trim())}for(var c in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[c]=c;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(s)}},t}()),c=new/*#__PURE__*/(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n,a=t.substring(e).charAt(0);if("<"===a||"&"===a){for(n="<"===a?">":";";t.substring(e+1).charAt(0)!==n&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n,a=t.substring(e).charAt(0);if(">"===a||";"===a){for(n=">"===a?"<":"&";t.substring(e-1).charAt(0)!==n&&!(--e<0););e--}return e},t}()),p=/*#__PURE__*/function(){function t(t,e){o.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),a=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=c.typeHtmlChars(t,e,s);var n,i=0,r=t.substring(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)&&(n=1+(r=/\d+/.exec(r)[0]).length,i=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+n),s.toggleBlinking(!0)),"`"===r.charAt(0)){for(;"`"!==t.substring(e+a).charAt(0)&&!(e+ ++a>t.length););var o=t.substring(0,e),p=t.substring(o.length+1,e+a);t=o+p+t.substring(e+a+1),a--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,a),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},i)},n):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,e+=s);this.replaceText(n),this.typewrite(t,e)},e.doneTyping=function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))},e.backspace=function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=c.backSpaceHtmlChars(t,e,s);var n=t.substring(0,e);if(s.replaceText(n),s.smartBackspace){var a=s.strings[s.arrayPos+1];s.stopNum=a&&n===a.substring(0,e)?e:0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();function l(t,e,s,n,a,i,r,o){let c=e.map(t=>r[o][t]);return new p(t,{strings:c,typeSpeed:s,backSpeed:n,backDelay:a,loop:i})}const u=document.getElementById("toggleDark"),d=document.querySelector("body");u.addEventListener("click",function(){let t=this.classList.contains("bi-brightness-high-fill");t?(// Switch to light mode
d.classList.remove("dark-theme"),d.classList.add("light-theme")):(// Switch to dark mode
d.classList.remove("light-theme"),d.classList.add("dark-theme")),// Toggle the 'bi-brightness-high-fill' and 'bi-moon' classes
this.classList.toggle("bi-brightness-high-fill"),this.classList.toggle("bi-moon")});var h={};h=new URL("webbshopp.91a1cca9.png",import.meta.url).toString();var m={};m=new URL("weather-app.9fd7157c.png",import.meta.url).toString();var g={};g=new URL("rps.09d5a3ba.png",import.meta.url).toString();var y={};y=new URL("php_mysql.afebe26a.png",import.meta.url).toString(),function(){let t=document.querySelector(".nav"),e=window.scrollY;window.addEventListener("scroll",()=>{let s=window.scrollY;s>e?t.style.display="none":t.style.display="flex",e=s})}();//translations of all the contents of the page in english and swedish
const f={en:{navAboutMe:"About me",navSkills:"Skills",navProjects:"Projects",navContact:"Contact",webbshopName:"Web Shop",webbshopDescription:"Web shop using React and Node.js. You can add products to the cart and 'purchase' them (no real payment).",stenSaxPaseName:"Rock Paper Scissors",stenSaxPaseDescription:"Rock, paper, scissors game. You can play against the computer and see the top 5 players and their high scores.",vaderAppName:"Weather App",vaderAppDescription:"Weather application. You can search for a city and choose how many hours of forecast you want to see.",mysqlPhp:"Database and php",databashanteringProjekt:"Webshop application using myql and php. A project that manages the database and web server. There is the webshop and the admin site that displays the orders.",projectsTitle:"My challenges",projectsDescription:"As a web developer, I love taking on new and exciting challenges. I have worked on different types of projects, from e-commerce to games to weather apps. Every project has taught me something new and developed my skills!",whoAmI:"Who am I?",iAm:"I am",descriptionMe:"I am a web development student with a focus on e-commerce at Grit Academy in Malm\xf6. I am passionate about creating modern and user-friendly websites and applications using HTML, CSS, JavaScript, WordPress. So far I have developed some projects that show my skills and my creativity. WordPress enthusiast. I am creating my own e-commerce, for my own company, in wordpress and woocommerce.",ShowMoreBtn:"Show more",mySkills:"My Skills",frontEndSkills:"Front-end Skills",backEndSkills:"Back-end Skills",contact:"Contact me",typedName:"Andreas Giannoudis",typedOccupation1:"web developer!",typedOccupation2:"problem solver!",typedOccupation3:"ambitious!",cvPath:"./assets/cv_en.pdf"},sv:{navAboutMe:"Om mig",navSkills:"Kompetenser",navProjects:"Projekt",navContact:"Kontakt",webbshopName:"Webbshop",webbshopDescription:"Webbshop med hj\xe4lp av React och Node.js. Du kan l\xe4gga till produkter i varukorgen och 'k\xf6pa' dem (ingen riktig betalning).",stenSaxPaseName:"Sten Sax P\xe5se",stenSaxPaseDescription:"Sten, sax, p\xe5se-spel. Du kan spela mot datorn och se de 5 b\xe4sta spelarna och deras h\xf6gsta po\xe4ng.",vaderAppName:"V\xe4der App",vaderAppDescription:"V\xe4derapplikation. Du kan s\xf6ka efter en stad och v\xe4lja hur m\xe5nga timmars prognos du vill se.",mysqlPhp:"Databashantering",databashanteringProjekt:"Webshopapplikation med myql och php. Ett projekt som hanterar databasen och webbservern. Det finns webbshopen och adminsidan som visar best\xe4llningarna.",projectsTitle:"Mina utmaningar",projectsDescription:"Som webbutvecklare \xe4lskar jag att ta mig an nya och sp\xe4nnande utmaningar. Jag har arbetat med olika typer av projekt, fr\xe5n e-handel till spel till v\xe4derappar. Varje projekt har l\xe4rt mig n\xe5got nytt och utvecklat mina f\xe4rdigheter!",whoAmI:"Vem \xe4r jag?",iAm:"Jag \xe4r",descriptionMe:" Jag \xe4r en webbutvecklingsstudent med fokus p\xe5 e-handel vid Grit Academy i Malm\xf6. Jag brinner f\xf6r att skapa moderna och anv\xe4ndarv\xe4nliga webbplatser och applikationer med hj\xe4lp av HTML, CSS, JavaScript, WordPress. Hittills har jag utvecklat n\xe5gra projekt som visar mina kunskaper och min kreativitet. WordPress entusiast. Jag h\xe5ller p\xe5 att skapa min egen e-handel, f\xf6r mitt eget f\xf6retag, i wordpress och woocommerce.",ShowMoreBtn:"L\xe4s mer",mySkills:"Mina Kompetenser",frontEndSkills:"Front-end Kompetenser",backEndSkills:"Back-end Kompetenser",contact:"Kontakta mig",typedName:"Andreas Giannoudis",typedOccupation1:"webbutvecklare!",typedOccupation2:"probleml\xf6sare!",typedOccupation3:"ambit\xf6s!",cvPath:"./assets/cv_swe.pdf"}},b=document.querySelector("#language-select"),v=[{code:"sv",label:"SV"},{code:"en",label:"ENG"}];function k(){let t=document.querySelectorAll("[data-i18n]");t.forEach(t=>{let e=t.getAttribute("data-i18n");t.textContent=f[S][e]})}//setting the initial language to Swedish
let S="sv";//typed text that will appear in the about section
const w=document.querySelector("#typed-text");let C=l(w,["typedName","typedOccupation1","typedOccupation2","typedOccupation3"],40,25,1500,!0,f,S);k(),//call the function to populate the dropdown
function(){for(let t of v){let e=document.createElement("option");e.value=t.code,e.textContent=t.label,b.appendChild(e)}// default language sv
b.value="sv"}(),document.addEventListener("DOMContentLoaded",()=>{//call the updatePageLanguage function when the page is loaded
k();let t=document.getElementById("cv-link");t.href=f[S].cvPath}),b.addEventListener("change",t=>{S=t.target.value,k(),C.destroy(),C=l(w,["typedName","typedOccupation1","typedOccupation2","typedOccupation3"],40,25,1500,!0,f,S);let e=document.getElementById("cv-link");e.href=f[S].cvPath});//array for the projects i want to show on page
const x=[{nameTranslationKey:"webbshopName",descriptionTranslationKey:"webbshopDescription",image:/*@__PURE__*/t(h),link:"https://github.com/andreasgiannoudis/webb23-js2-slutprojekt-andreas-giannoudis",stats:{htmlCss:26.2,javascript:73.8}},{nameTranslationKey:"stenSaxPaseName",descriptionTranslationKey:"stenSaxPaseDescription",image:/*@__PURE__*/t(g),link:"https://github.com/andreasgiannoudis/webb23-js2-inlamning1-andreas-giannoudis.git",stats:{htmlCss:24.9,javascript:75.1}},{nameTranslationKey:"vaderAppName",descriptionTranslationKey:"vaderAppDescription",image:/*@__PURE__*/t(m),link:"https://andreasgiannoudis.github.io/webb23-js1-slutprojekt-andreas-giannoudis/",stats:{htmlCss:26.7,javascript:72.3}},{nameTranslationKey:"mysqlPhp",descriptionTranslationKey:"databashanteringProjekt",image:/*@__PURE__*/t(y),link:"https://github.com/andreasgiannoudis/databashantering.git",stats:{htmlCss:0,javascript:0}}],E=document.querySelector(".cards");//the actual display of the projects
for(const t of x){let e=document.createElement("div");e.classList.add("card"),E.append(e);let s=document.createElement("div");s.classList.add("card-img"),e.append(s);let n=document.createElement("img"),a=new URL(t.image,"file:///src/main.js");n.src=a.href,s.append(n);let i=document.createElement("div");i.classList.add("desc"),e.append(i);// Project Name
let r=document.createElement("h6");r.classList.add("primary-text"),r.setAttribute("data-i18n",t.nameTranslationKey),i.append(r);// Project Description
let o=document.createElement("h6");o.classList.add("secondary-text"),o.setAttribute("data-i18n",t.descriptionTranslationKey),i.append(o);// Project Link
let c=document.createElement("a");c.href=t.link,e.append(c);// Project Button
let p=document.createElement("button");p.classList.add("primary-text","button"),p.setAttribute("data-i18n",t.nameTranslationKey),p.textContent=`Visa ${t.nameTranslationKey}`,c.append(p);// Project Details
let l=document.createElement("div");l.classList.add("details"),e.append(l);// Rating HTML/CSS
let u=document.createElement("div");u.classList.add("rating"),l.append(u);let d=document.createElement("h6");d.classList.add("primary-text","stats-htmlcss"),d.textContent=t.stats.htmlCss+"%",u.append(d);let h=document.createElement("h6");h.classList.add("secondary-text","stats-js"),h.textContent="HTML/CSS",u.append(h);// Rating JavaScript
let m=document.createElement("div");m.classList.add("activity"),l.append(m);let g=document.createElement("h6");g.classList.add("primary-text"),g.textContent=t.stats.javascript+"%",m.append(g);let y=document.createElement("h6");y.classList.add("secondary-text"),y.textContent="JavaScript",m.append(y)}const P=document.getElementById("button"),L=document.getElementById("nav-ul");function T(){L.classList.remove("toggle")}P.addEventListener("click",function(){L.classList.toggle("toggle")});const A=document.querySelectorAll("#nav-ul li a");A.forEach(function(t){t.addEventListener("click",T)});//# sourceMappingURL=index.5cee232b.js.map

//# sourceMappingURL=index.5cee232b.js.map
