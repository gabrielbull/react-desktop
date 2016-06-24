import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Link from '../../src/link/macOs/link';

describe('Link', () => {
  it('create osx link', () => {
    const string = renderToString(<Link>My Link</Link>);
    expect(string).to.match(/My Link/);
  });
});
