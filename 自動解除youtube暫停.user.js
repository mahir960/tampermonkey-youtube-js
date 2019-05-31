// ==UserScript==
// @name         自動解除youtube暫停
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
        if($("paper-button.yt-button-renderer")){
        $("paper-button.yt-button-renderer").click();
        }
        $("paper-toast.paper-toast-open").removeAttr("opacity");

}
window.setInterval (checkForMoniDisplayChange, 5000);
alert ={}

})();