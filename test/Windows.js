import { expect } from 'chai';
import {
  Button,
  Form,
  ProgressRing,
  TextBlock,
  TextBox,
  TitleBar,
  Window,
  Checkbox,
  SplitView,
  Grid
} from '../src/Windows';

describe('Windows', () => {
  it('should be exported', () => {
    expect(Button).to.exist;
    expect(Form).to.exist;
    expect(ProgressRing).to.exist;
    expect(TextBlock).to.exist;
    expect(TextBox).to.exist;
    expect(TitleBar).to.exist;
    expect(Window).to.exist;
    expect(Checkbox).to.exist;
    expect(SplitView).to.exist;
    expect(Grid).to.exist;
  });
});
