import Typed from 'typed.js';

export function typedAnimation(selector, strings, typeSpeed, backSpeed, backDelay, loop) {
  return new Typed(selector, {
    strings,
    typeSpeed,
    backSpeed,
    backDelay,
    loop,
  });
}
