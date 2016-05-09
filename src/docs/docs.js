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
          <div className="issues">
            <a
              target="github"
              href={'https://github.com/gabrielbull/react-desktop/edit/master/docs/' + this.props.params.splat + '.md'}
            >
              <svg x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10">
                <polygon points="0,10 3.6,10 0,6.4 "/>
                <path
                  d="M9.8,3.1L6.9,0.2c-0.2-0.2-0.5-0.2-0.7,0L4,2.3L7.7,6l2.2-2.2C10.1,3.6,10.1,3.3,9.8,3.1z"
                />
                <path
                  d="M4,8.2c-0.2,0.2-0.5,0.2-0.7,0C3.1,8,3.1,7.6,3.3,7.4l2.6-2.6L5.1,4.2L2.6,6.7C2.4,6.9,2,6.9,1.8,6.7
                  C1.6,6.5,1.6,6.2,1.8,6l2.6-2.6L3.6,2.7L0.4,6L4,9.6l3.3-3.3L6.6,5.6L4,8.2z"
                />
              </svg>
              <span>Edit page</span>
            </a>
            <a href="https://github.com/gabrielbull/react-desktop/issues/new" target="github">
              <svg x="0px" y="0px" width="10px" height="5.8px" viewBox="0 0 10 5.8">
                <circle cx="4.2" cy="2.5" r="0.4"/>
                <path
                  d="M8.8,3.1C8.2,3.2,7.9,3.7,7.9,3.7S7.1,2.8,6.5,2.5C6.3,2.3,6,2.3,5.7,2.2C5.4,1,4.3,0,2.9,0
                  C1.4,0,0.2,1.1,0,2.5c0.1-0.4,0.4-0.7,0.8-0.7c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9C0.4,3.6,0,3.3,0,2.8c0,0,0,0.1,0,0.1
                  c0,1.6,1.3,2.9,2.9,2.9c1.5,0,2.7-1.1,2.9-2.5c0,0.1,0,0.3,0,0.4c0,0.8-0.3,1.5-0.8,2c0.4,0,1.5,0.1,2,0c1.3-0.2,1.4-0.3,1.9-1.2
                  C9.1,4.1,10,3.9,10,3.7C10,3.5,9.4,2.9,8.8,3.1z M3.9,3.6C3.4,3.6,3,3.2,3,2.7c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9
                  C4.8,3.2,4.4,3.6,3.9,3.6z"
                />
                <circle cx="1.1" cy="2.5" r="0.4"/>
              </svg>
              <span>Submit bug</span>
            </a>
          </div>
          <div ref="before-demo" className="docs-content"/>
          <div id="demos" className="doc-example">
            {ExampleContent ? <Example ref="demo"><ExampleContent/></Example> : null}
          </div>
          <div className="docs-content" ref="docs" dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    );
  }
}
