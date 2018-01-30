import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ToolbarNav from '../../src/Toolbar/macOs/Nav';
import ToolbarNavItem from '../../src/Toolbar/macOs/Nav/Item';

describe('ToolbarNav', () => {
  it('create toolbar nav component', () => {
    const string = renderToString(<ToolbarNav />);
    expect(string).to.match(/<div/);
  });

  it('create toolbar nav item component', () => {
    const string = renderToString(<ToolbarNavItem />);
    expect(string).to.match(/<a/);
  });
});
