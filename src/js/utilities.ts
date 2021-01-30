const SkipLink = (): void => {
  const mainContent: HTMLElement | null = document.getElementById('main-content');
  if (mainContent != null) {
    mainContent.setAttribute('tabIndex', '-1');
    mainContent.focus();
    mainContent.addEventListener('blur', () => {
      mainContent.removeAttribute('tabIndex');
    });
  }
};

export default SkipLink;
