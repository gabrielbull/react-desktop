export const MACOS = 'macOs';
export const WINDOWS = 'windows';

export default function os() {
  // explicitly set these to avoid issues
  const w = window || null;
  const n = navigator || null;
  const p = process || (w && w.process) || null;

  // via node
  if (p && p.platform) {
    if (p.platform === 'darwin') {
      return MACOS;
    }
    if (p.platform.includes('win')) {
      return WINDOWS;
    }
  }

  // via user agent
  if (n && n.userAgent) {
    if (n.userAgent.includes('Macintosh')) {
      return MACOS;
    }
    if (n.userAgent.includes('Windows')) {
      return WINDOWS;
    }
  }

  // default to macOs
  return MACOS;
}
