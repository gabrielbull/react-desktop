import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import TextOSX from '../../src/text/macOs/text';
import TextWindows from '../../src/text/windows/text';

describe('Text', () => {
  it('create osx text', () => {
    const string = renderToString(<TextOSX>My Text</TextOSX>);
    expect(string).to.match(/My Text/);
  });

  it('create windows text', () => {
    const string = renderToString(<TextWindows>My Text</TextWindows>);
    expect(string).to.match(/My Text/);
  });
});
