import BezierEasing from '../../animation/bezierEasing';

let requestAnimationFrame;
if (typeof window !== 'undefined') {
  requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
}

let startTimestamp;
const duration = 350;
const easing = BezierEasing(.3,.14,0,1);

function moveLabel(timestamp, label, start, current, end, cb) {
  if (start === end) return null;
  if (!startTimestamp) startTimestamp = timestamp;
  let progress = 1 - (timestamp - startTimestamp) / duration;
  if (progress < 0) progress = 0;
  progress = 1 - (easing.get(1 - progress));
  if (start > end) {
    current = progress * start;
  } else {
    current = (1 - progress) * end + start;
  }

  label.style.left = current + 'px';
  if (start > end && current > end || start < end && current < end) {
    requestAnimationFrame(timestamp => moveLabel(timestamp, label, start, current, end));
  } else {
    label.style.left = end + 'px';
    if (cb) cb();
  }
}

function animateLabel(label, start, end) {
  return new Promise(resolve => {
    if (requestAnimationFrame) {
      requestAnimationFrame(timestamp => moveLabel(timestamp, label, start, start, end, resolve));
    }
  });
}

export function pullLeft(input, label) {
  startTimestamp = null;
  const start = label.offsetLeft;
  input.style.color = 'transparent';
  label.style.position = 'absolute';
  setTimeout(() => {
    animateLabel(label, start, 2);
    setTimeout(() => input.style.color = null, 300);
  }, 10);
}

export function pushCenter(input, label) {
  startTimestamp = null;
  label.style.position = 'relative';
  const end = label.offsetLeft;
  label.style.position = 'absolute';

  setTimeout(() => {
    animateLabel(label, 2, end)
      .then(() => label.style.position = 'relative');
  }, 10);
}
