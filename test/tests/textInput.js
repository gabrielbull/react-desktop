import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import TextField from '../../src/textInput/windows/textInput';

describe('TextInput', () => {
  it('create text input component with a placeholder', () => {
    const string = renderToString(<TextField placeholder="Placeholder Text" />);
    expect(string).to.match(/placeholder="Placeholder Text"/);
  });

  it('create text input component with default text value', () => {
    const string = renderToString(<TextField defaultValue="Default Text" />);
    expect(string).to.match(/value="Default Text"/);
  });
});
