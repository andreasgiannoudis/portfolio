import Typed from 'typed.js';

export function typedAnimation(selector, translationKeys, typeSpeed, backSpeed, backDelay, loop, languageData, currentLanguage) {
  const strings = translationKeys.map(key => languageData[currentLanguage][key]);
  let currentIndex = 0;
  const typeNextWord = () => {
    if (currentIndex < strings.length) {
      const typedInstance = new Typed(selector, {
        strings: [strings[currentIndex]],
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
        onComplete: () => {
          currentIndex++;
          typeNextWord();
        }
      });
    }
  };
  // Start typing the first word asynchronously
  setTimeout(typeNextWord, 0);
}
