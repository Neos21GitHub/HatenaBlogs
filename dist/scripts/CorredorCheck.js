window.Neos21={},window.Neos21.styles=function(e){if(document.readyState&&"interactive"!==document.readyState)if("loading"!==document.readyState){if(null!=e&&"number"==typeof e){var t=["https://neos21.github.io/HatenaBlogs/dist/styles/Corredor.css","https://unpkg.com/@neos21/hatena-blogs@1.0.1/dist/styles/Corredor.css","https://cdn.jsdelivr.net/npm/@neos21/hatena-blogs@1.0.1/dist/styles/Corredor.css","https://raw.githack.com/Neos21/HatenaBlogs/master/dist/styles/Corredor.css","https://rawcdn.githack.com/Neos21/HatenaBlogs/8369a67962cb30e83825980a334316de2c193696/dist/styles/Corredor.css","https://raw.githubusercontent.com/Neos21/HatenaBlogs/master/dist/styles/Corredor.css"],s=document.getElementById("n-check");if(s){if(0!==parseInt(window.getComputedStyle(s).fontSize)){var o=e+1;if(t.length<=o)console.log("CSS フォールバック不可");else{var r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("href",t[o]),r.setAttribute("onload","Neos21.styles("+o+");"),r.setAttribute("onerror","Neos21.styles("+o+");"),document.querySelector("head").appendChild(r)}}}else console.log("検証用要素なし・中止")}}else document.addEventListener("DOMContentLoaded",function(){window.Neos21.styles(e)});else window.addEventListener("load",function(){window.Neos21.styles(e)})},window.Neos21.scripts=function(e){if(null!=e&&"number"==typeof e){var t=["https://neos21.github.io/HatenaBlogs/dist/scripts/Corredor.js","https://unpkg.com/@neos21/hatena-blogs@1.0.1/dist/scripts/Corredor.js","https://cdn.jsdelivr.net/npm/@neos21/hatena-blogs@1.0.1/dist/scripts/Corredor.js","https://raw.githack.com/Neos21/HatenaBlogs/master/dist/scripts/Corredor.js","https://rawcdn.githack.com/Neos21/HatenaBlogs/8369a67962cb30e83825980a334316de2c193696/dist/scripts/Corredor.js","https://raw.githubusercontent.com/Neos21/HatenaBlogs/master/dist/scripts/Corredor.js"];if(!window.Neos21||!window.Neos21.scriptLoaded){var s=e+1;if(t.length<=s)console.log("JS フォールバック不可");else{var o=document.createElement("script");o.setAttribute("src",t[s]),o.setAttribute("onload","Neos21.scripts("+s+");"),o.setAttribute("onerror","Neos21.scripts("+s+");"),document.querySelector("head").appendChild(o)}}}};