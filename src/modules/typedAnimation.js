import Typed from 'typed.js';

let typeInstance = null;

export function typedAnimation(selector, translationKeys, typeSpeed, backSpeed, backDelay, loop, languageData, currentLanguage) {
  // Check if there's an existing typing instance, destroy it if present
  if (typeInstance) {
    typeInstance.destroy();
  }
  
  const strings = translationKeys.map(key => languageData[currentLanguage][key]);

  // Initialize the typing animation
  typeInstance = new Typed(selector, {
    strings,
    typeSpeed,
    backSpeed,
    backDelay,
    loop,
  });

  // Return the typing instance
  return typeInstance;
}