!function(r,c,a,t){function e(e){return~(t+r.body.className+t).replace(/[\n\t]/g,t).indexOf(t+e+t)}function n(e,i){var d=r[a]("n-st");d.removeAttribute("id"),[].forEach.call(r[c](e),function(e){function t(e,t){o[c]("n-s-"+e+"-l")[0].setAttribute("href",t)}var n=e[c]("entry-title-link")[0],r=encodeURIComponent(n.innerText),a=n.getAttribute("href"),o=d.cloneNode(!0);t("ha","http://b.hatena.ne.jp/entry/"+a),t("tw","https://twitter.com/share?url="+a+"&amp;text="+r),t("fb","http://www.facebook.com/share.php?u="+a),t("po","http://getpocket.com/edit?url="+a+"&amp;title="+r),e[c](i)[0].appendChild(o)}),r[a]("n-stw").removeChild(d)}function o(e){var t=r[a]("n-gaf"),n=t.cloneNode(!0);t.parentNode.removeChild(t),r[c](e)[0].appendChild(n)}function i(){e("page-index")?(n("hentry","customized-footer"),o("hentry")):e("page-archive")?(n("archive-entry","archive-entry-body"),o("archive-entry")):e("page-entry")&&o("hentry"),r.addEventListener("touchstart",function(){})}r.readyState&&"interactive"!==r.readyState?"loading"===r.readyState?r.addEventListener("DOMContentLoaded",i):i():window.addEventListener("load",i),Neos21||(Neos21={}),Neos21.scriptLoaded=!0}(document,"getElementsByClassName","getElementById"," ");