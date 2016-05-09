import React, { Component } from 'react';
import Logo from './Logo';
import './header.scss';
import { browserHistory } from 'react-router';
import GithubSVG from './github.svg';
import LinksDecorator  from '../../shared/linksDecorator/linksDecorator';

@LinksDecorator
export default class extends Component {
  click(event) {
    event.preventDefault();
    browserHistory.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <header>
        <a href="/">
          <Logo width="200px" height="40px"/>
        </a>

        <nav>
          <ul>
            <li>
              <a onClick={this.click} href="/docs/">Docs</a>
            </li>
            <li>
              <a onClick={this.click} href="/demo/">Demo</a>
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
