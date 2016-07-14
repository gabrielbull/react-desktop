import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import CheckboxOSX from '../../src/checkbox/macOs/checkbox';
import CheckboxWindows from '../../src/checkbox/windows/checkbox';

describe('Checkbox', () => {
  it('create osx checkbox', () => {
    const string = renderToString(<CheckboxOSX label="my label"/>);
    expect(string).to.match(/my label/);
  });

  it('create windows checkbox', () => {
    const string = renderToString(<CheckboxWindows label="my label"/>);
    expect(string).to.match(/my label/);
  });
});
