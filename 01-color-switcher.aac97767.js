const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.stopBtn.setAttribute("disabled",!0);let e=null;function o(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(()=>{t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled"),e=setInterval((()=>{o()}),1e3)})),t.stopBtn.addEventListener("click",(()=>{t.stopBtn.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled"),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.aac97767.js.map
