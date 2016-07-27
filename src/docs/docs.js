import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Nav from './nav/nav';
import hljs from 'highlight.js';
import 'highlight.js/styles/paraiso-dark.css';
import './docs.scss';
import Example from './example/example';
import LinksDecorator  from '../shared/linksDecorator/linksDecorator';
import Warning from '../warning/warning';

@LinksDecorator
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
      let name = this.props.params.splat.replace(/-./g, match => match.substr(1).toUpperCase());
      name = name.replace(/\//, '/components/');
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
          <Warning/>
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
              <svg x="0px" y="0px" width="10px" height="9.6px" viewBox="0 0 10 9.6">
                <path d="M7.1,1C6.3,0.5,5.2,0.9,4.2,1.7L8,3.9C8.2,2.6,7.9,1.4,7.1,1z"/>
                <path d="M9.5,4.2L7.9,4.4c0-0.1,0-0.1,0-0.2l-4-2.3c0,0-0.1,0.1-0.1,0.1L3.1,0.7C3,0.5,2.7,0.4,2.5,0.5C2.2,0.6,2.1,0.9,2.2,1.2
                  l0.9,1.7C3,3.1,2.9,3.3,2.8,3.5L1.3,2.6C1,2.5,0.8,2.6,0.6,2.8C0.5,3.1,0.6,3.3,0.8,3.5l1.5,0.9C2.3,4.5,2.2,4.7,2.2,4.8L0.5,5
                  C0.2,5,0,5.2,0,5.5C0,5.8,0.2,6,0.5,6L2,5.8C1.8,7,2.1,8,2.7,8.5l1.8-2.6L3.2,8.7C4,8.9,4.9,8.6,5.7,8l0.7,1.3
                  C6.5,9.5,6.8,9.6,7,9.5c0.2-0.1,0.3-0.4,0.2-0.7L6.4,7.2C6.5,7.1,6.7,7,6.8,6.8l1.6,0.9c0.2,0.1,0.5,0,0.7-0.2C9.1,7.3,9,7,8.8,6.9
                  L7.3,6c0.1-0.2,0.2-0.4,0.3-0.6l2-0.2C9.8,5.2,10,5,10,4.7C10,4.4,9.7,4.2,9.5,4.2z"/>
                <circle cx="5.9" cy="0.3" r="0.3"/>
                <circle cx="8.3" cy="1.7" r="0.3"/>
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
