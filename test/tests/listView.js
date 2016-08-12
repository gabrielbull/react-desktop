import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ListView from '../../src/listView/macOs/listView';
import ListViewFooter from '../../src/listView/macOs/footer/footer';
import ListViewHeader from '../../src/listView/macOs/header/header';
import ListViewRow from '../../src/listView/macOs/row/row';
import ListViewSection from '../../src/listView/macOs/section/section';
import ListViewSectionHeader from '../../src/listView/macOs/section/header/header';
import ListViewSeparator from '../../src/listView/macOs/separator/separator';

describe('ListView', () => {
  it('create list view component', () => {
    const string = renderToString(<ListView/>);
    expect(string).to.match(/<section/);
  });

  it('create list view footer component', () => {
    const string = renderToString(<ListViewFooter/>);
    expect(string).to.match(/<footer/);
  });

  it('create list view header component', () => {
    const string = renderToString(<ListViewHeader/>);
    expect(string).to.match(/<header/);
  });

  it('create list view row component', () => {
    const string = renderToString(<ListViewRow/>);
    expect(string).to.match(/<li/);
  });

  it('create list view section component', () => {
    const string = renderToString(<ListViewSection/>);
    expect(string).to.match(/<section/);
  });

  it('create list view section header component', () => {
    const string = renderToString(<ListViewSectionHeader/>);
    expect(string).to.match(/<header/);
  });

  it('create list view separator component', () => {
    const string = renderToString(<ListViewSeparator/>);
    expect(string).to.match(/<hr/);
  });
});
