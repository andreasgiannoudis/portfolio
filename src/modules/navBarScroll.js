function scrollBehavior() {
  const nav = document.querySelector('.nav');
  let lastScrollPosition = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down, hide the navigation bar
      nav.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up, show the navigation bar
      nav.style.transform = 'translateY(0)';
    }

    lastScrollPosition = currentScrollPosition;
  });
}

export { scrollBehavior };
