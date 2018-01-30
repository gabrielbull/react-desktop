let ids = [];
let animations = {};

const framerate = 60;
const duration = 1900;

function animate(elements) {
  this.currentStep = 0;
  this.steps = duration / framerate;
  this.increment = 1 / this.steps;
  animateStep.apply(this, [elements]);
  animations[this.id] = setInterval(() => animateStep.apply(this, [elements]), 1000 / framerate);
}

function animateStep(elements) {
  this.currentStep++;
  if (this.currentStep > this.steps) {
    this.currentStep = 1;
  }

  for (let i = 0, len = 12; i < len; ++i) {
    elements[11-i].style.opacity = this.increment * findStep.apply(this, [i]);
  }
}

function findStep(index) {
  let step = this.currentStep + (this.steps / 12 * index);
  if (step > this.steps) {
    step = -this.steps + step;
  }
  return this.steps - step;
}

export function startAnimation(...elements) {
  let id = 0;
  if (ids.length) id = ids[ids.length - 1] + 1;
  ids.push(id);
  animate.apply({ id }, [elements]);
  return id;
}

export function stopAnimation(animation) {
  window.clearInterval(animations[animation]);
}
