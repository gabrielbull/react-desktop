import Desktop from './Desktop';
import TitleBarOX from './TitleBar/TitleBar.osx';
import TitleBarWindows from './TitleBar/TitleBar.windows';

export default Desktop.os === 'win' ? TitleBarWindows : TitleBarOX;
