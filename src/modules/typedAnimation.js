import Typed from 'typed.js';

export function typedAnimation(selector, translationKeys, typeSpeed, backSpeed, backDelay, loop, languageData, currentLanguage) {
  const strings = translationKeys.map(key => languageData[currentLanguage][key]);

  return new Typed(selector, {
    strings,
    typeSpeed,
    backSpeed,
    backDelay,
    loop,
  });
}
