
'use strict';

/*
 * Basic toggle for dark and light modes
 */

let lightToggle = document.getElementById('twilight');
let query = window.matchMedia('(prefers-color-scheme: dark)');
let classList = document.documentElement.classList;
let isDark = query.matches;

let toggle = function (dark) {
  isDark = dark;
  classList.toggle('dark', isDark);
};

query.addListener(e => toggle(e.matches));
toggle(isDark);

if (lightToggle !== undefined) {
  lightToggle.addEventListener('click', e => toggle(!isDark));
}
