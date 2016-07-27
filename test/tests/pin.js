import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Pin from '../../src/pin/macOs/pin';

describe('Pin', () => {
  it('create osx pin', () => {
    const string = renderToString(<Pin length={1}/>);
    expect(string).to.match(/input/);
  });
});
