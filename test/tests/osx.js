import { expect } from 'chai';
import {
  Box,
  Button,
  Checkbox,
  Label,
  ProgressCircle,
  SegmentedControl,
  Text,
  TextInput,
  TitleBar,
  Toolbar,
  View,
  Window
} from '../../src/osx';

describe('OSX', () => {
  it('should be exported', () => {
    expect(Box).to.exist;
    expect(Button).to.exist;
    expect(Checkbox).to.exist;
    expect(Label).to.exist;
    expect(ProgressCircle).to.exist;
    expect(SegmentedControl).to.exist;
    expect(Text).to.exist;
    expect(TextInput).to.exist;
    expect(TitleBar).to.exist;
    expect(Toolbar).to.exist;
    expect(View).to.exist;
    expect(Window).to.exist;
  });
});
