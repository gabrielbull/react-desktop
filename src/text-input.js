import Desktop from './Desktop';
import TextFieldOSX from './TextInput/TextField.osx';
import TextBoxWindows from './TextInput/TextBox.windows';

export default Desktop.os === 'win' ? TextBoxWindows : TextFieldOSX;
