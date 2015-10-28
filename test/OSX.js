import { expect } from 'chai';
import {
  Box,
  Form,
  IndeterminateCircularProgressIndicator,
  Label,
  PushButton,
  SegmentedControl,
  TextField,
  TitleBar,
  Toolbar,
  Window
} from '../src/OSX';

describe('OSX', () => {
  it('should be exported', () => {
    expect(Box).to.exist;
    expect(Form).to.exist;
    expect(IndeterminateCircularProgressIndicator).to.exist;
    expect(Label).to.exist;
    expect(PushButton).to.exist;
    expect(SegmentedControl).to.exist;
    expect(TextField).to.exist;
    expect(TitleBar).to.exist;
    expect(Toolbar).to.exist;
    expect(Window).to.exist;
  });
});
