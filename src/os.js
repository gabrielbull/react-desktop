"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = os;
var MACOS = (exports.MACOS = "macOs");
var WINDOWS = (exports.WINDOWS = "windows");

function os() {
  // Check if we are running in a browser
  var isBrowser =
    typeof window !== "undefined" && typeof navigator !== "undefined";

  // get process from window if it exists there
  var p = isBrowser ? window.process : process;

  // via node
  if (p && p.platform) {
    if (p.platform === "darwin") {
      return MACOS;
    }
    if (p.platform.includes("win")) {
      return WINDOWS;
    }
  }

  // via user agent
  if (isBrowser && navigator.userAgent) {
    if (navigator.userAgent.includes("Macintosh")) {
      return MACOS;
    }
    if (navigator.userAgent.includes("Windows")) {
      return WINDOWS;
    }
  }

  // default to macOs
  return MACOS;
}
