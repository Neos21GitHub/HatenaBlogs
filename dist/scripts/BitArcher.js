/*! Bit-Archer : Neo (@Neos21) http://bit-archer.hatenablog.com/ */
!function(e,t,n,r){var o=function(t){return~(r+e.body.className+r).replace(/[\n\t]/g,r).indexOf(r+t+r)},a=function(r,o){var a=e[n]("n-st");a.removeAttribute("id"),Array.prototype.forEach.call(e[t](r),function(e){var n=e[t]("entry-title-link")[0],r=encodeURIComponent(n.innerText),i=n.getAttribute("href"),c=a.cloneNode(!0),p=function(e,n){c[t]("n-s-"+e+"-l")[0].setAttribute("href",n)};p("ha","http://b.hatena.ne.jp/entry/"+i),p("tw","https://twitter.com/share?url="+i+"&amp;text="+r),p("fb","http://www.facebook.com/share.php?u="+i),p("po","http://getpocket.com/edit?url="+i+"&amp;title="+r),e[t](o)[0].appendChild(c)}),e[n]("n-stw").removeChild(a)};e.addEventListener("DOMContentLoaded",function(){o("page-index")?a("hentry","customized-footer"):o("page-archive")&&a("archive-entry","archive-entry-body")},!1)}(document,"getElementsByClassName","getElementById"," ");