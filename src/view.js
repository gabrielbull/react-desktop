import Desktop from './Desktop';
import ViewWindows from './View/View.windows';

export default Desktop.os === 'win' ? ViewWindows : ViewWindows;
