Neos21={append:function(t,s,e){var a=document,n="setAttribute",l="Neos21."+(t?"styles":"scripts")+"("+s+");",r=a.createElement(t?"link":"script");t&&r[n]("rel","stylesheet"),r[n](t?"href":"src",e),r[n]("onload",l),r[n]("onerror",l),a.querySelector("head").appendChild(r)},styles:function(t){if("number"==typeof t){var s=window,e=document;if(e.readyState&&"interactive"!==e.readyState)if("loading"!==e.readyState){var a=["https://unpkg.com/@neos21/hatena-blogs@1.0.7/dist/styles/ElMylar.css","https://cdn.jsdelivr.net/gh/Neos21/hatena-blogs@latest/dist/styles/ElMylar.css","https://cdn.jsdelivr.net/npm/@neos21/hatena-blogs@1.0.7/dist/styles/ElMylar.css","https://raw.githack.com/Neos21/hatena-blogs/master/dist/styles/ElMylar.css","https://raw.githubusercontent.com/Neos21/hatena-blogs/master/dist/styles/ElMylar.css"],n=e.getElementById("n-check");if(n)if(0!==parseInt(s.getComputedStyle(n).fontSize)){var l=t+1;a.length<=l||Neos21.append(!0,l,a[l])}}else e.addEventListener("DOMContentLoaded",function(){Neos21.styles(t)});else s.addEventListener("load",function(){Neos21.styles(t)})}},scripts:function(t){if("number"==typeof t){var s=["https://unpkg.com/@neos21/hatena-blogs@1.0.7/dist/scripts/ElMylar.js","https://cdn.jsdelivr.net/gh/Neos21/hatena-blogs@latest/dist/scripts/ElMylar.js","https://cdn.jsdelivr.net/npm/@neos21/hatena-blogs@1.0.7/dist/scripts/ElMylar.js","https://raw.githack.com/Neos21/hatena-blogs/master/dist/scripts/ElMylar.js","https://raw.githubusercontent.com/Neos21/hatena-blogs/master/dist/scripts/ElMylar.js"];if(!Neos21.scriptLoaded){var e=t+1;s.length<=e||Neos21.append(!1,e,s[e])}}}};