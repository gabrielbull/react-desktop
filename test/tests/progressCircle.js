import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ProgressCirecleOSX from '../../src/ProgressCircle/macOs';
import ProgressCirecleWindows from '../../src/ProgressCircle/windows';

describe('Progress Circle', () => {
  it('create osx progress circle', () => {
    const string = renderToString(<ProgressCirecleOSX size={50} />);
    expect(string).to.match(/width: ?50px/);
  });

  it('create windows progress circle', () => {
    const string = renderToString(<ProgressCirecleWindows size={50} />);
    expect(string).to.match(/width: ?50px/);
  });
});
