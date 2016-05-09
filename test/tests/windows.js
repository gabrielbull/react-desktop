import { expect } from 'chai';
import {
  Button,
  Checkbox,
  Label,
  MasterDetailsView,
  NavPane,
  ProgressCircle,
  Text,
  TextInput,
  TitleBar,
  View,
  Window
} from '../../windows';

describe('Windows', () => {
  it('should be exported', () => {
    expect(Button).to.exist;
    expect(Checkbox).to.exist;
    expect(Label).to.exist;
    expect(MasterDetailsView).to.exist;
    expect(NavPane).to.exist;
    expect(ProgressCircle).to.exist;
    expect(Text).to.exist;
    expect(TextInput).to.exist;
    expect(TitleBar).to.exist;
    expect(View).to.exist;
    expect(Window).to.exist;
  });
});
