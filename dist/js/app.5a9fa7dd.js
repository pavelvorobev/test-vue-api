(function(e){function n(n){for(var r,i,l=n[0],u=n[1],d=n[2],s=0,p=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(n);while(p.length)p.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,l=1;l<t.length;l++){var u=t[l];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var c=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"28cf":function(e,n,t){"use strict";t("63b0")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("1da1"),a=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("96cf"),t("d3b7"),t("7a23")),o=Object(a["b"])('<nav><div class="nav-wrapper"><ul class="left hide-on-med-and-down"><li><a class="dropdown-button" href="#" data-activates="dropdown1" data-beloworigin="true">Menu1</a></li></ul></div></nav><ul id="dropdown1" class="dropdown-content dropdown-nested"><li><a class="dropdown-button" href="#!" data-activates="dropdown2" data-hover="true" data-alignment="left">1<span class="right-triangle">▸</span></a></li><li><a href="#!">2</a></li><li><a href="#!">3</a></li></ul><ul id="dropdown2" class="dropdown-content dropdown-nested"><li><a href="#!">4</a></li><li><a class="dropdown-button" href="#!" data-activates="dropdown3" data-hover="hover" data-alignment="left">5<span class="right-triangle">▸</span></a></li><li><a href="#!">6</a></li></ul><ul id="dropdown3" class="dropdown-content dropdown-nested"><li><a href="#!">7</a></li><li><a href="#!">8</a></li><li><a href="#!">9</a></li><li><a href="#!">10</a></li></ul>',4);function i(e,n,t,r,a,i){return o}var l={},u=(t("28cf"),t("6b0d")),d=t.n(u);const c=d()(l,[["render",i]]);var s=c;t("8266"),t("619b");function p(e,n){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}Object(a["a"])(s).mount("#app"),p("https://belferat.online/test.php",{act:"get_menu"}).then((function(e){console.log(e)}))},"63b0":function(e,n,t){}});
//# sourceMappingURL=app.5a9fa7dd.js.map