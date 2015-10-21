import Desktop from './Desktop';
import ButtonOSX from './Button/PushButton.osx';
import ButtonWindows from './Button/Button.windows';

export default Desktop.os === 'win' ? ButtonWindows : ButtonOSX;
