import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { history } from '../Router';
import styles from './Docs.scss';

export default class extends Component {
  componentDidMount() {
    this.bindLinkEvents();
  }

  componentDidUpdate() {
    this.bindLinkEvents();
  }

  bindLinkEvents() {
    const links = this.refs.element.getElementsByTagName('a');
    for(var prop in links) {
      if(links.hasOwnProperty(prop)) {
        links[prop].addEventListener('click', this.handleLink);
      }
    }
  }

  handleLink(event) {
    const link = event.currentTarget.getAttribute('href');
    if (!link.match(/^http/)) {
      event.preventDefault();
      console.log('push stste?');
      history.pushState(null, event.currentTarget.getAttribute('href'));
    }
  }

  render() {
    let content;
    if (this.props.params.splat) {
      if (this.props.location.pathname.match(/\/$/)) {
        content = require(`../../raw-docs/${this.props.params.splat}.html`);
      } else {
        content = require(`../../raw-docs/${this.props.params.splat}.html`);
      }
    } else {
      content = require('../../raw-docs/index.html');
    }

    return (
      <div ref="element" className="docs">
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}
