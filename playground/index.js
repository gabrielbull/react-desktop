import * as React from 'react';
import { render } from 'react-dom';
import Playground from './playground';

document.title = 'React Desktop Playground';
document.documentElement.style.width = '100%';
document.documentElement.style.height = '100%';
document.body.style.background = 'white';
document.body.style.backgroundImage = 'url(assets/background.jpg)';
document.body.style.backgroundSize = 'cover';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.overflow = 'hidden';

document.body.innerHTML = `
  <div id="main" style="width: 100%; height: 100%;"></div>
`;

render(<Playground/>, document.getElementById('main'));
