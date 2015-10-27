import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import LinksDecorator  from '../Shared/LinksDecorator/LinksDecorator';
import Nav from './Nav/Nav';
import hljs from 'highlight.js';
import monokai from 'highlight.js/styles/monokai.css';
import styles from './Docs.scss';

@LinksDecorator
export default class extends Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const codes = findDOMNode(this).getElementsByTagName('code');

    hljs.configure({});

    for (var i = 0, len = codes.length; i < len; ++i) {
      codes[i].className = 'html';
      hljs.highlightBlock(codes[i]);
    }
  }

  render() {
    let content;
    if (this.props.params.splat) {
      content = require(`../../raw-docs/${this.props.params.splat}.html`);
    } else {
      content = require('../../raw-docs/index.html');
    }

    return (
      <div ref="element" className="docs-container">
        <Nav/>
        <div className="docs" dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}
