import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Button from '../../src/Button/windows';

describe('Button', () => {
  it('create button component with text', () => {
    const string = renderToString(<Button>Hello</Button>);
    expect(string).to.match(/Hello/);
  });

  it('create button component with one node', () => {
    const string = renderToString(
      <Button>
        <span>Hello</span>
      </Button>
    );
    expect(string).to.match(/<span.*>Hello/);
  });

  it('create button component with multiple nodes', () => {
    const string = renderToString(
      <Button>
        <span>Hello</span>
        <span>World</span>
      </Button>
    );
    expect(string).to.match(/<span.*>Hello/);
    expect(string).to.match(/<span.*>World/);
  });
});
