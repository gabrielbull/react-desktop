import Desktop from './Desktop';
import CheckboxWindows from './Checkbox/Checkbox.windows';

export default Desktop.os === 'win' ? CheckboxWindows : CheckboxWindows;
