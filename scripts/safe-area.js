// ==UserScript==
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function () {
    var top = 24;
    var bottom = 48;

    document.documentElement.style.setProperty('--safe-area-inset-top', top + 'px');
    document.documentElement.style.setProperty('--safe-area-inset-bottom', bottom + 'px');
    document.dispatchEvent(new CustomEvent('WebToApkInsetsApplied'));
})();
