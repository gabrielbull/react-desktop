import React, { Component } from 'react';
import Logo from './Logo';
import style from './Header.scss';
import { history } from '../../Router';
import GithubSVG from './github.svg';

export default class extends Component {
  click(event) {
    event.preventDefault();
    history.pushState(null, event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <header>
        <a>
          <Logo width="200px" height="40px"/>
        </a>

        <nav>
          <ul>
            <li>
              <a onClick={this.click} href="/react-desktop/">Docs</a>
            </li>
            <li>
              <a onClick={this.click} href="/react-desktop/demo">Demo</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a className="github" href="https://github.com/gabrielbull/react-desktop" target="_blank">
                <span dangerouslySetInnerHTML={{__html: GithubSVG}} />
                Github
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
