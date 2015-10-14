import chai, { expect } from 'chai';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PushButton from '../src/PushButton';

describe('PushButton', () => {
  it('create button component with text', () => {
    const string = ReactDOMServer.renderToString(<PushButton>Hello</PushButton>);
    expect(string).to.match(/Hello/);
  });

  it('create button component with one node', () => {
    const string = ReactDOMServer.renderToString(<PushButton><span>Hello</span></PushButton>);
    expect(string).to.match(/<span.*>Hello/);
  });

  it('create button component with multiple nodes', () => {
    const string = ReactDOMServer.renderToString(<PushButton><span>Hello</span><span>World</span></PushButton>);
    expect(string).to.match(/<span.*>Hello/);
    expect(string).to.match(/<span.*>World/);
  });
});
