// ==UserScript==
// @name        Text Selection Everywhere
// @author      microcoded (https://github.com/microcoded)
// @version     1.0
// @description Stop websites from blocking text selection – copy and paste away!
// @grant       GM_addStyle
// @match       *://*/*
// @run-at      document-idle
// ==/UserScript==

GM_addStyle('*{-webkit-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important;');
