import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import SearchField from '../../src/SearchField/macOs';

describe('SearchField', () => {
  it('create search field component', () => {
    const string = renderToString(<SearchField />);
    expect(string).to.match(/<input/);
  });
});
