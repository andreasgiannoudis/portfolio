import Typed from 'typed.js';

let typeInstance = null;
let throttleTimer = null;

export function typedAnimation(selector, translationKeys, startDelay, backSpeed, backDelay, loop, languageData, currentLanguage) {
  // Check if there's an existing typing instance, destroy it if present
  if (typeInstance) {
    typeInstance.destroy();
  }
  
  const strings = translationKeys.map(key => languageData[currentLanguage][key]);

  // Initialize the typing animation
  typeInstance = new Typed(selector, {
    strings,
    startDelay, // Set a delay before the text appears
    backSpeed,
    backDelay,
    loop,
    // Callback function to throttle DOM updates
    onStringTyped: function() {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          throttleTimer = null;
          updatePageLanguage();
        }, 100); // Adjust the throttle duration as needed
      }
    }
  });

  // Return the typing instance
  return typeInstance;
}

// Your other code remains the same
