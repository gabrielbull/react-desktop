import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ListView from '../../src/ListView/macOs';
import ListViewFooter from '../../src/ListView/macOs/Footer';
import ListViewHeader from '../../src/ListView/macOs/Header';
import ListViewRow from '../../src/ListView/macOs/Row';
import ListViewSection from '../../src/ListView/macOs/Section';
import ListViewSectionHeader from '../../src/ListView/macOs/Section/Header';
import ListViewSeparator from '../../src/ListView/macOs/Separator';

describe('ListView', () => {
  it('create list view component', () => {
    const string = renderToString(<ListView />);
    expect(string).to.match(/<section/);
  });

  it('create list view footer component', () => {
    const string = renderToString(<ListViewFooter />);
    expect(string).to.match(/<footer/);
  });

  it('create list view header component', () => {
    const string = renderToString(<ListViewHeader />);
    expect(string).to.match(/<header/);
  });

  it('create list view row component', () => {
    const string = renderToString(<ListViewRow />);
    expect(string).to.match(/<li/);
  });

  it('create list view section component', () => {
    const string = renderToString(<ListViewSection />);
    expect(string).to.match(/<section/);
  });

  it('create list view section header component', () => {
    const string = renderToString(<ListViewSectionHeader />);
    expect(string).to.match(/<header/);
  });

  it('create list view separator component', () => {
    const string = renderToString(<ListViewSeparator />);
    expect(string).to.match(/<hr/);
  });
});
