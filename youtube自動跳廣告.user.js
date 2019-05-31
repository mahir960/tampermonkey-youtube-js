// ==UserScript==
// @name         youtube自動跳廣告
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @include      https://www.youtube.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    function checkForMoniDisplayChange () {
        if($(".ytp-ad-skip-button")){
        $(".ytp-ad-skip-button").click();
        }
        if($(".ytp-ad-overlay-close-button")){
        $(".ytp-ad-overlay-close-button").click();
        }
}
window.setInterval (checkForMoniDisplayChange, 5000);
alert ={}

})();