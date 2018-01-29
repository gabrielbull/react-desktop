import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Toolbar from '../../src/toolbar/macOs';

describe('Toolbar', () => {
  it('create toolbar component', () => {
    const string = renderToString(<Toolbar/>);
    expect(string).to.match(/<div/);
  });
});
