import chai, { expect } from 'chai';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Label from '../src/Label';

describe('Label', () => {
  it('create label component with text', () => {
    const string = ReactDOMServer.renderToString(<Label>Hello</Label>);
    expect(string).to.match(/Hello/);
  });

  it('create label component with one node', () => {
    const string = ReactDOMServer.renderToString(<Label><span>Hello</span></Label>);
    expect(string).to.match(/<span.*>Hello/);
  });

  it('create label component with multiple nodes', () => {
    const string = ReactDOMServer.renderToString(<Label><span>Hello</span><span>World</span></Label>);
    expect(string).to.match(/<span.*>Hello/);
    expect(string).to.match(/<span.*>World/);
  });
});
