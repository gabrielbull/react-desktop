function detectOS() {
  // explicit set these to avoid issues
  const window = window || null;
  const navigator = navigator || null;
  const process = process || window ? window.process : null || null;

  // via node
  if (process && process.platform) {
    if (process.platform === 'darwin') {
      return 'osx';
    }
    if (process.platform.includes('win')) {
      return 'win';
    }
  }

  // via user agent
  if (navigator && navigator.userAgent) {
    if (navigator.userAgent.includes('Macintosh')) {
      return 'osx';
    }
    if (navigator.userAgent.includes('Windows')) {
      return 'win';
    }
  }

  // default to osx
  return 'osx';
}

export default class Desktop {
  static OS = detectOS();
}

export let OS = Desktop.OS;
