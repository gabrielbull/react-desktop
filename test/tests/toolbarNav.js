import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ToolbarNav from '../../src/toolbar/macOs/nav/nav';
import ToolbarNavItem from '../../src/toolbar/macOs/nav/item/item';

describe('ToolbarNav', () => {
  it('create toolbar nav component', () => {
    const string = renderToString(<ToolbarNav/>);
    expect(string).to.match(/<div/);
  });

  it('create toolbar nav item component', () => {
    const string = renderToString(<ToolbarNavItem/>);
    expect(string).to.match(/<a/);
  });
});
