
'use strict';

/*
 * Basic toggle for dark and light modes
 */

let btn = document.getElementById('twilight');
let query = window.matchMedia('(prefers-color-scheme: dark)');
let classList = document.documentElement.classList;
let isDark = query.matches;

let toggle = function (dark) {
  isDark = dark;
  classList.toggle('dark', isDark);
  if (btn !== undefined) {
    btn.innerText = isDark ? '🌙' : '☀️';
  }
};

query.addListener(e => toggle(e.matches));
toggle(isDark);

if (btn !== undefined) {
  btn.addEventListener('click', e => toggle(!isDark));
}
