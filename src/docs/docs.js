import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Nav from './nav/nav';
import hljs from 'highlight.js';
import 'highlight.js/styles/paraiso-dark.css';
import './docs.scss';
import Example from './example/example';

export default class extends Component {
  constructor(props, context, updater) {
    super(props, context, updater);
  }

  componentDidMount() {
    this.highlightCode();
    this.moveContentBeforeDemo();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.params.splat !== this.props.params.splat) return true;
    return false;
  }

  componentDidUpdate() {
    this.highlightCode();
    this.moveContentBeforeDemo();
  }

  highlightCode() {
    const codes = findDOMNode(this).getElementsByTagName('code');

    hljs.configure({});

    for (var i = 0, len = codes.length; i < len; ++i) {
      codes[i].className = 'jsx';
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
        if (children[i] && children[i].tagName === 'P' && children[i].childNodes[0].tagName === 'A') {
          const anchor = children[i].childNodes[0];
          if (anchor.id.match(/^demo\-/)) {
            break;
          }
        } else if (children[i] && children[i].tagName === 'H1') {
          nodes = [...nodes, children[i]];
          children[i].parentNode.removeChild(children[i]);
        }
      }

      for (let i = 0, len = nodes.length; i < len; ++i) {
        topNode.appendChild(nodes[i]);
      }
    }
  }

  render() {
    let content;

    let ExampleContent;
    try {
      let name = this.props.params.splat.replace(/-./, match => match.substr(1).toUpperCase());
      ExampleContent = require('../../examples/' + name);
      ExampleContent = ExampleContent.default;
    } catch (err) {
    }

    if (this.props.params.splat) {
      content = require(`../../raw-docs/${this.props.params.splat}.html`);
    } else {
      content = require('../../raw-docs/index.html');
    }

    return (
      <div ref="element" className="docs-container">
        <Nav/>
        <div className="docs">
          <div ref="before-demo" className="docs-content"/>
          <div id="demos" className="doc-demo">
            {ExampleContent ? <Example ref="demo"><ExampleContent/></Example> : null}
          </div>
          <div className="docs-content" ref="docs" dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    );
  }
}
