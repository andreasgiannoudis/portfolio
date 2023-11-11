function scrollBehavior() {
  const nav = document.querySelector('.nav');
  let lastScrollPosition = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      //scrolling down, hide the navigation bar
      nav.style.display = 'none';
    } else {
      //scrolling up, show the navigation bar
      nav.style.display = 'flex';
    }

    lastScrollPosition = currentScrollPosition;
  });
}

export { scrollBehavior };
