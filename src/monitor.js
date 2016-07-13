window.addEventListener('focus', windowFocus);
window.addEventListener('blur', windowBlur);

let isWindowFocused = document.hasFocus();

function windowFocus() {
  isWindowFocused = true;
}

function windowBlur() {
  isWindowFocused = false;
}

export function windowIsFocused() {
  return isWindowFocused;
}
