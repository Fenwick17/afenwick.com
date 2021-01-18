const SkipLink = () => {
  const mainContent = document.getElementById("main-content");
  mainContent.setAttribute('tabIndex', '-1');
  mainContent.focus();
  mainContent.addEventListener('blur', (event) => {
    mainContent.removeAttribute('tabIndex')
  });
}

export default SkipLink;