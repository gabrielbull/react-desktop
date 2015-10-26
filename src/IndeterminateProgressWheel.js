import Desktop from './Desktop';
import ProgressRingWindows
  from './ProgressRing/ProgressRing.windows';
import IndeterminateCircularProgressIndicatorOSX from
  'IndeterminateCircularProgressIndicator/IndeterminateCircularProgressIndicator.osx';

export default Desktop.os === 'win' ? ProgressRingWindows : IndeterminateCircularProgressIndicatorOSX;
