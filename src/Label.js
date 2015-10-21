import Desktop from './Desktop';
import LabelOSX from './Label/Label.osx';
import TextBlockWindows from './TextBlock/TextBlock.windows';

export default Desktop.os === 'win' ? TextBlockWindows : LabelOSX;
