import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import SearchField from '../../src/searchField/macOs/searchField';

describe('SearchField', () => {
  it('create search field component', () => {
    const string = renderToString(<SearchField/>);
    expect(string).to.match(/<input/);
  });
});
