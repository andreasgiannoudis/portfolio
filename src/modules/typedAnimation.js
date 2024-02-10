import Typed from 'typed.js';

let typeInstance = null;
let throttleTimer = null;

export function typedAnimation(selector, translationKeys, typeSpeed, backSpeed, backDelay, loop, languageData, currentLanguage) {
  // Check if there's an existing typing instance, destroy it if present
  if (typeInstance) {
    typeInstance.destroy();
  }
  
  const strings = translationKeys.map(key => languageData[currentLanguage][key]);

  typeInstance = new Typed(selector, {
    strings,
    typeSpeed,
    backSpeed,
    backDelay,
    loop,

    onStringTyped: function() {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          throttleTimer = null;
          updatePageLanguage();
        }, 100);
      }
    }
  });

  // Return the typing instance
  return typeInstance;
}