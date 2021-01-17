const copyToClipboard = () => {
  const codeBlocks = document.getElementById("blog-body")?.getElementsByClassName('gatsby-highlight');
  if(codeBlocks) {
    Array.from(codeBlocks).forEach(ele => {
      const codeBlock = ele.querySelector('code')
      const copyToClipboardContainer = document.createElement('div');
      copyToClipboardContainer.className = "copy-clipboard-container";
      copyToClipboardContainer.innerHTML = `<button class="button copy-clipboard-button" aria-live="assertive">Copy to clipboard</button>`;
      const copyToClipboardButton = copyToClipboardContainer.querySelector('.copy-clipboard-button') 
      copyToClipboardButton.onclick = () => {
        const code = codeBlock.innerText;
        navigator.clipboard.writeText(code)
        copyToClipboardButton.innerText = "Copied to clipboard"
        setTimeout(() => {
          copyToClipboardButton.innerText = "Copy to clipboard" 
        }, 3000)
      }
      ele.insertBefore(copyToClipboardContainer, ele.firstChild)
    });
  }
};

export default copyToClipboard;