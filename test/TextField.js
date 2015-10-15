import chai, { expect } from 'chai';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import TextField from '../src/TextField';

describe('TextField', () => {
  it('create text field component with a placeholder', () => {
    const string = ReactDOMServer.renderToString(<TextField placeholder="Placeholder Text" />);
    expect(string).to.match(/placeholder="Placeholder Text"/);
  });

  it('create text field component with default text value', () => {
    const string = ReactDOMServer.renderToString(<TextField defaultValue="Default Text" />);
    expect(string).to.match(/value="Default Text"/);
  });

});
