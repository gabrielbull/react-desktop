import React, { Component } from 'react';
import './nav.scss';
import LinksDecorator  from '../../shared/linksDecorator/linksDecorator';

@LinksDecorator
export default class extends Component {
  componentDidMount() {
    const links = this.refs.element.getElementsByTagName('a');
    for (let i = 0, len = links.length; i < len; ++i) {
      if (links[i].getAttribute('href') === window.location.pathname) {
        links[i].className = 'selected';
      }
    }
  }

  onLinkClick(e) {
    const links = document.getElementsByClassName('selected');
    for (let i = 0, len = links.length; i < len; ++i) {
      links[i].className = '';
    }
    e.currentTarget.className = 'selected';
  };

  render() {
    let content;
    content = require('../../../raw-docs/nav.html');

    return (
      <nav ref="element" className="nav" dangerouslySetInnerHTML={{__html: content}} />
    );
  }
}
