// ==UserScript==
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function () {
    var top = 24;
    var bottom = 48;

    var el = document.documentElement;
    var existingTop = el.style.getPropertyValue('--safe-area-inset-top');
    if (!existingTop || parseFloat(existingTop) === 0) {
        el.style.setProperty('--safe-area-inset-top', top + 'px');
        el.style.setProperty('--safe-area-inset-bottom', bottom + 'px');
        document.dispatchEvent(new CustomEvent('WebToApkInsetsApplied'));
    }
})();
