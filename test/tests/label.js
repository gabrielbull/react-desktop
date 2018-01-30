import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Label from '../../src/Label/windows';

describe('Label', () => {
  it('create label component with text', () => {
    const string = renderToString(<Label>Hello</Label>);
    expect(string).to.match(/Hello/);
  });

  it('create label component with one node', () => {
    const string = renderToString(
      <Label>
        <span>Hello</span>
      </Label>
    );
    expect(string).to.match(/<span.*>Hello/);
  });

  it('create label component with multiple nodes', () => {
    const string = renderToString(
      <Label>
        <span>Hello</span>
        <span>World</span>
      </Label>
    );
    expect(string).to.match(/<span.*>Hello/);
    expect(string).to.match(/<span.*>World/);
  });
});
