import BezierEasing from '../../Animation/BezierEasing';

let requestAnimationFrame;
if (window) {
  requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
}

const totalIterations = 95;
const cireclesInterval = 220;
const restartInterval = 250;
const stopRotationAt = totalIterations * 2 / 1.02;
const easing = BezierEasing(0, 0.47, 0.9, .25);
let bounding;

function rotateCircle(circle) {
  const value = easing.get(1 / totalIterations * this.iteration) * 2 * Math.PI * -1;

  circle.setAttributeNS(null, 'fill-opacity', 1);
  circle.setAttributeNS(null, 'cx', 75 + (bounding * Math.sin(value)));
  circle.setAttributeNS(null, 'cy', 75 + (bounding * Math.cos(value)));

  this.currentIteration++;
  if (this.iteration < totalIterations) {
    this.iteration++;
  } else {
    this.iteration = 0;
  }

  if (this.readyCallback) {
    this.readyCallback();
    this.readyCallback = null;
  }

  if (this.currentIteration >= stopRotationAt) {
    if (this.endCallback) {
      this.endCallback();
      this.endCallback = null;
    }

    circle.setAttributeNS(null, 'fill-opacity', 0);
    return;
  }

  requestAnimationFrame(rotateCircle.bind(this, circle));
}

function animateCircle(circle, last) {
  return new Promise(function(resolve) {
    rotateCircle.apply({
      iteration: 0,
      currentIteration: 0,
      readyCallback: !last ? () => setTimeout(function () {
        resolve();
      }, cireclesInterval) : null,
      endCallback: last ?  () => setTimeout(function () {
        resolve();
      }, restartInterval) : null
    }, [circle]);
  });
}

let currentTry = 0;
export function startAnimation(...elements) {
  if (requestAnimationFrame) {
    if (elements[0].getBBox().width === 0 && currentTry <= 100) {
      currentTry++;
      setTimeout(() => startAnimation(...elements), 100);
      return;
    }
    bounding = 75 - elements[0].getBBox().width / 2;

    animateCircle(elements[0])
      .then(animateCircle.bind(null, elements[1]))
      .then(animateCircle.bind(null, elements[2]))
      .then(animateCircle.bind(null, elements[3]))
      .then(animateCircle.bind(null, elements[4]))
      .then(animateCircle.bind(null, elements[5], true))
      .then(startAnimation.bind(null, ...elements));
  }
}
