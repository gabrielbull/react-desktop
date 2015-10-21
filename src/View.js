import Desktop from './Desktop';
import GridWindows from './Grid/Grid.windows';

export default Desktop.os === 'win' ? GridWindows : GridWindows;
