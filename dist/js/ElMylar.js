/*!
 * Neo's World - El Mylar - 2017-04-09
 * http://neo.s21.xrea.com/
 * http://neos21.hateblo.jp/
 */
!function(e,t,n,r){var o=function(t){return~(r+e.body.className+r).replace(/[\n\t]/g,r).indexOf(r+t+r)},a=function(r,o){var a=e[n]("neos21-share-template");a.removeAttribute("id"),Array.prototype.forEach.call(e[t](r),function(e){var n=e[t]("entry-title-link")[0],r=encodeURIComponent(n.innerText),i=n.getAttribute("href"),c=a.cloneNode(!0),h=function(e,n){c[t]("neos21-share-"+e+"-link")[0].setAttribute("href",n)};h("hatebu","http://b.hatena.ne.jp/entry/"+i),h("twitter","https://twitter.com/share?url="+i+"&amp;text="+r),h("facebook","http://www.facebook.com/share.php?u="+i),h("pocket","http://getpocket.com/edit?url="+i+"&amp;title="+r),e[t](o)[0].appendChild(c)}),e[n]("neos21-template").removeChild(a)},i=function(r){var o=e[n]("neos21-adsense-footer"),a=o.cloneNode(!0);o.parentNode.removeChild(o),e[t](r)[0].appendChild(a)};e.addEventListener("DOMContentLoaded",function(){o("page-index")?(a("hentry","customized-footer"),i("hentry")):o("page-archive")?(a("archive-entry","archive-entry-body"),i("archive-entry")):o("page-entry")&&i("hentry")},!1)}(document,"getElementsByClassName","getElementById"," ");