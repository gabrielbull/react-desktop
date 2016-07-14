import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Box from '../../src/box/macOs/box';

describe('Box', () => {
  it('create box component with label', () => {
    const string = renderToString(<Box label="My Label"/>);
    expect(string).to.match(/My Label/);
  });
});
