import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import TextArea from '../../src/TextArea/windows';
import TextAreaOSX from '../../src/TextArea/macOs';

describe('TextArea', () => {
  describe('Windows', () => {
    it('create text input component with a placeholder', () => {
      const string = renderToString(
        <TextArea placeholder="Placeholder Text" />
      );
      expect(string).to.match(/placeholder="Placeholder Text"/);
    });

    it('create text input component with default text value', () => {
      const string = renderToString(<TextArea defaultValue="Default Text" />);
      expect(string).to.match(/>Default Text</);
    });

  });

  describe('macOS', () => {
    it('create text input component with a placeholder', () => {
      const string = renderToString(
        <TextAreaOSX placeholder="Placeholder Text" />
      );
      expect(string).to.match(/placeholder="Placeholder Text"/);
    });

    it('create text input component with a centered placeholder', () => {
      const string = renderToString(
        <TextAreaOSX centerPlaceholder placeholder="Placeholder Text" />
      );
      expect(string).to.match(/Placeholder Text<\/span>/);
      expect(string).not.to.match(/placeholder="Placeholder Text"/);
    });

    it('create text input component with default text value', () => {
      const string = renderToString(
        <TextAreaOSX defaultValue="Default Text" />
      );
      expect(string).to.match(/>Default Text</);
    });
  });
});
