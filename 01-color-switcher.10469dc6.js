!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.stopBtn.setAttribute("disabled",!0);var e=null;function n(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled"),e=setInterval((function(){n()}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.stopBtn.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.10469dc6.js.map