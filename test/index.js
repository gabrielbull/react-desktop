import { expect } from 'chai';
import {
  Box,
  Button,
  Desktop,
  Form,
  IndeterminateProgressWheel,
  Label,
  SegmentedControl,
  TextBlock,
  TextInput,
  Toolbar,
  TitleBar,
  Window,
  Checkbox,
  SplitView,
  Windows,
  OSX
} from '../src/index';

describe('index', () => {
  it('should be exported', () => {
    expect(Box).to.exist;
    expect(Button).to.exist;
    expect(Desktop).to.exist;
    expect(Form).to.exist;
    expect(IndeterminateProgressWheel).to.exist;
    expect(Label).to.exist;
    expect(SegmentedControl).to.exist;
    expect(TextBlock).to.exist;
    expect(TextInput).to.exist;
    expect(Toolbar).to.exist;
    expect(TitleBar).to.exist;
    expect(Window).to.exist;
    expect(Checkbox).to.exist;
    expect(SplitView).to.exist;
    expect(Windows).to.exist;
    expect(OSX).to.exist;
  });
});
