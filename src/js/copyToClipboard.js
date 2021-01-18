const copyToClipboard = () => {
  const codeBlocks = document.getElementById('blog-body')?.getElementsByTagName('pre');
  if (codeBlocks) {
    Array.from(codeBlocks).forEach((ele) => {
      const codeBlock = ele.querySelector('code');
      const copyToClipboardButton = document.createElement('button');
      copyToClipboardButton.className = 'button copy-clipboard-button';
      copyToClipboardButton.textContent = 'Copy to clipboard';
      ele.insertBefore(copyToClipboardButton, ele.firstChild);
      copyToClipboardButton.onclick = () => {
        const code = codeBlock.innerText;
        navigator.clipboard.writeText(code);
        copyToClipboardButton.setAttribute('aria-live', 'assertive');
        copyToClipboardButton.textContent = 'Copied to clipboard';
        setTimeout(() => {
          copyToClipboardButton.textContent = 'Copy to clipboard';
          copyToClipboardButton.removeAttribute('aria-live', 'assertive');
        }, 5000);
      };
    });
  }
};

export default copyToClipboard;
