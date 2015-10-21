import Desktop from './Desktop';
import WindowOSX from './Window/Window.osx';
import WindowWindows from './Window/Window.windows';

export default Desktop.os === 'win' ? WindowWindows : WindowOSX;
