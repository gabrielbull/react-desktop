export function os() {
  // explicitly set these to avoid issues
  const window = window || null;
  const navigator = navigator || null;
  const process = process || (window && window.process) || null;

  // via node
  if (process && process.platform) {
    if (process.platform === 'darwin') {
      return 'osx';
    }
    if (process.platform.includes('win')) {
      return 'windows';
    }
  }

  // via user agent
  if (navigator && navigator.userAgent) {
    if (navigator.userAgent.includes('Macintosh')) {
      return 'osx';
    }
    if (navigator.userAgent.includes('Windows')) {
      return 'windows';
    }
  }

  // default to osx
  return 'osx';
}
