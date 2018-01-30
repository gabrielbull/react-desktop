let requestAnimationFrame;
if (typeof window !== 'undefined') {
  requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
}

let startTimestamp;
const duration = 150;

function animateCancelIcon(timestamp, element) {
  if (!startTimestamp) startTimestamp = timestamp;
  let progress = (timestamp - startTimestamp) / duration;
  if (progress > 1) progress = 1;

  element.style.height = (14 * progress) + 'px';
  element.style.width = (14 * progress) + 'px';
  element.style.opacity = progress;

  if (progress !== 1) {
    requestAnimationFrame(timestamp => animateCancelIcon(timestamp, element));
  }
}

export default function(element) {
  if (requestAnimationFrame) {
    startTimestamp = null;
    const icon = element.getElementsByTagName('svg')[0];
    requestAnimationFrame(timestamp => animateCancelIcon(timestamp, icon));
  }
}
