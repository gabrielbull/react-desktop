import Desktop from './Desktop';
import IndeterminateProgressRingWindows
  from './IndeterminateProgressWheel/IndeterminateProgressRing.windows/IndeterminateProgressRing.windows';
import IndeterminateCircularProgressIndicatorOSX from
  './IndeterminateProgressWheel/IndeterminateCircularProgressIndicator.osx/IndeterminateCircularProgressIndicator.osx';

export default Desktop.os === 'win' ? IndeterminateProgressRingWindows : IndeterminateCircularProgressIndicatorOSX;
