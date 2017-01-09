if (typeof window !== 'undefined') {
  window.addEventListener('focus', windowFocus);
  window.addEventListener('blur', windowBlur);
}

let isWindowFocused = true;

if (typeof document === 'object' && typeof document.hasFocus === 'function') {
  isWindowFocused = document.hasFocus();
}

function windowFocus() {
  isWindowFocused = true;
}

function windowBlur() {
  isWindowFocused = false;
}

export function windowIsFocused() {
  return isWindowFocused;
}
