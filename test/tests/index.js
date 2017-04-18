import { expect } from 'chai';
import { MACOS, WINDOWS } from '../../src/os';
import * as components from '../../index'

describe('index', () => {
  it('detect os', () => {
    expect(components.os()).to.be.oneOf([MACOS, WINDOWS]);
  });

  it('should be exported', () => {
    expect(components.Box).to.exist;
    expect(components.Button).to.exist;
    expect(components.Checkbox).to.exist;
    expect(components.Dialog).to.exist;
    expect(components.Label).to.exist;
    expect(components.Link).to.exist;
    expect(components.ListView).to.exist;
    expect(components.ListViewFooter).to.exist;
    expect(components.ListViewHeader).to.exist;
    expect(components.ListViewRow).to.exist;
    expect(components.ListViewSection).to.exist;
    expect(components.ListViewSectionHeader).to.exist;
    expect(components.ListViewSeparator).to.exist;
    expect(components.MasterDetailsView).to.exist;
    expect(components.NavPane).to.exist;
    expect(components.Pin).to.exist;
    expect(components.ProgressCircle).to.exist;
    expect(components.Radio).to.exist;
    expect(components.SearchField).to.exist;
    expect(components.SegmentedControl).to.exist;
    expect(components.SegmentedControlItem).to.exist;
    expect(components.Text).to.exist;
    expect(components.TextInput).to.exist;
    expect(components.TitleBar).to.exist;
    expect(components.Toolbar).to.exist;
    expect(components.ToolbarNav).to.exist;
    expect(components.ToolbarNavItem).to.exist;
    expect(components.View).to.exist;
    expect(components.Window).to.exist;
  });
});
