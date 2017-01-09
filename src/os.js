export const MACOS = 'macOs';
export const WINDOWS = 'windows';

export default function os() {
  // explicitly set these to avoid issues
  const window = window || null;
  const navigator = navigator || null;
  const process = process || (window && window.process) || null;

  // via node
  if (process && process.platform) {
    if (process.platform === 'darwin') {
      return MACOS;
    }
    if (process.platform.includes('win')) {
      return WINDOWS;
    }
  }

  // via user agent
  if (navigator && navigator.userAgent) {
    if (navigator.userAgent.includes('Macintosh')) {
      return MACOS;
    }
    if (navigator.userAgent.includes('Windows')) {
      return WINDOWS;
    }
  }

  // default to macOs
  return MACOS;
}
