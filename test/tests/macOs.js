import { expect } from 'chai';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  Label,
  Link,
  ListView,
  ListViewFooter,
  ListViewHeader,
  ListViewRow,
  ListViewSection,
  ListViewSectionHeader,
  ListViewSeparator,
  Pin,
  ProgressCircle,
  Radio,
  SearchField,
  SegmentedControl,
  SegmentedControlItem,
  Text,
  TextInput,
  TitleBar,
  Toolbar,
  ToolbarNav,
  ToolbarNavItem,
  View,
  Window
} from '../../macOs';

describe('OSX', () => {
  it('should be exported', () => {
    expect(Box).to.exist;
    expect(Button).to.exist;
    expect(Checkbox).to.exist;
    expect(Dialog).to.exist;
    expect(Label).to.exist;
    expect(Link).to.exist;
    expect(ListView).to.exist;
    expect(ListViewFooter).to.exist;
    expect(ListViewHeader).to.exist;
    expect(ListViewRow).to.exist;
    expect(ListViewSection).to.exist;
    expect(ListViewSectionHeader).to.exist;
    expect(ListViewSeparator).to.exist;
    expect(Pin).to.exist;
    expect(ProgressCircle).to.exist;
    expect(Radio).to.exist;
    expect(SearchField).to.exist;
    expect(SegmentedControl).to.exist;
    expect(SegmentedControlItem).to.exist;
    expect(Text).to.exist;
    expect(TextInput).to.exist;
    expect(TitleBar).to.exist;
    expect(Toolbar).to.exist;
    expect(ToolbarNav).to.exist;
    expect(ToolbarNavItem).to.exist;
    expect(View).to.exist;
    expect(Window).to.exist;
  });
});
