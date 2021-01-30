// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles

// Highlighting for code blocks
import "./src/style.css"

import { copyToClipboard } from './src/js/copyToClipboard';

export const onRouteUpdate = ({ location }) => {
  if(location.pathname.includes("blog")) {
    copyToClipboard();
  }
}