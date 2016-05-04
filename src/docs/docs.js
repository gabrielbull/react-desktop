import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import LinksDecorator  from '../shared/linksDecorator/linksDecorator';
import Nav from './nav/nav';
import hljs from 'highlight.js';
import autoit from 'highlight.js/lib/languages/autoit';
import monokai from 'highlight.js/styles/monokai.css';
import styles from './docs.scss';
import * as WindowsDemo from '../examples/windows';

@LinksDecorator
export default class extends Component {
  constructor(props, context, updater) {
    super(props, context, updater);
  }

  componentDidMount() {
    this.highlightCode();
    this.moveContentBeforeDemo();
  }

  componentDidUpdate() {
    this.highlightCode();
    this.moveContentBeforeDemo();
  }

  highlightCode() {
    const codes = findDOMNode(this).getElementsByTagName('code');

    hljs.configure({});

    for (var i = 0, len = codes.length; i < len; ++i) {
      codes[i].className = 'html';
      hljs.highlightBlock(codes[i]);
    }
  }

  moveContentBeforeDemo() {
    const topNode = findDOMNode(this.refs['before-demo']);
    while (topNode.hasChildNodes()) {
      topNode.removeChild(topNode.lastChild);
    }

    if (this.refs.demo) {
      let nodes = [];
      const children = findDOMNode(this.refs.docs).childNodes;
      for (let i = 0, len = children.length; i < len; ++i) {
        if (children[i].tagName === 'P' && children[i].childNodes[0].tagName === 'A') {
          const anchor = children[i].childNodes[0];
          if (anchor.id.match(/^demo\-/)) {
            break;
          }
        } else {
          nodes = [...nodes, children[i]];
          children[i].parentNode.removeChild(children[i]);
        }
      }

      for (let i = 0, len = nodes.length; i < len; ++i) {
        topNode.appendChild(nodes[i]);
      }
    }
  }

  getDemo(content) {
    let demos = [];
    const anchors = content.match(/<a.+<\/a>/g);
    if (anchors) {
      for (var i = 0, len = anchors.length; i < len; ++i) {
        const matches = anchors[i].match(/id=".+"/);
        if (matches && matches[0]) {
          const id = matches[0].replace(/^id="/, '').replace(/"$/, '');
          if (id) {
            const demo = id.replace(/^demo\-(Windows|Mac)\./, '');
            demos = [...demos, WindowsDemo[demo]];
          }
        }
      }
    }
    return demos;
  }

  render() {
    let content;
    if (this.props.params.splat) {
      content = require(`../../raw-docs/${this.props.params.splat}.html`);
    } else {
      content = require('../../raw-docs/index.html');
    }

    let demos = this.getDemo(content);
    const Demo = demos && demos[0] ? demos[0] : null;
    const demo = Demo ? <Demo ref="demo"/> : null;

    return (
      <div ref="element" className="docs-container">
        <Nav/>
        <div className="docs">
          <div ref="before-demo"/>
          <div id="demos" className="doc-demo">
            {demo}
          </div>
          <div id="docs" ref="docs" dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    );
  }
}
