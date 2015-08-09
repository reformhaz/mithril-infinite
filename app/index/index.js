"bundle";System.registerDynamic("app/index/index",["lib/mithril/mithril.min","app/images/images","app/grid/grid","app/table/table","app/short/short","app/horizontal/horizontal","app/index/index.css!lib/system-css/css"],!0,function(require,e,t){function n(e){return e&&e.__esModule?e:{"default":e}}var r=this,i=r.define;r.define=void 0;var a=require("lib/mithril/mithril.min"),o=n(a),l=require("app/images/images"),s=n(l),u=require("app/grid/grid"),c=n(u),d=require("app/table/table"),f=n(d),h=require("app/short/short"),g=n(h),p=require("app/horizontal/horizontal"),m=n(p);require("app/index/index.css!lib/system-css/css");var v=[{href:"/images",title:"Images",subtitle:"200 images of various heights"},{href:"/grid",title:"Image grid",subtitle:"Responsive grid with 1, 2, 3 and 4 columns"},{href:"/table",title:"Data table",subtitle:"Table rows of various heights"},{href:"/short",title:"Short content",subtitle:"Automatically finds loadable space"},{href:"/horizontal",title:"Horizontal",subtitle:"Horizontal scroller"}],y=o["default"]("ul.menu",[o["default"]("li.header","Examples"),v.map(function(e){return o["default"]("li",o["default"]("a",{href:e.href,config:o["default"].route},[o["default"]("span.title",e.title),o["default"]("span.subtitle",e.subtitle)]))})]),b={};return b.view=function(){return o["default"]("div",[o["default"]("h1","Infinite scroll for Mithril"),y])},o["default"].route.mode="hash",o["default"].route(document.body,"/",{"/":b,"/images":s["default"],"/grid":c["default"],"/table":f["default"],"/short":g["default"],"/horizontal":m["default"]}),r.define=i,t.exports}),System.registerDynamic("app/images/images",["lib/mithril/mithril.min","lib/mithril-infinite/mithril-infinite","app/images/images.css!lib/system-css/css"],!0,function(require,e,t){function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return"app/images/data/page-"+e+".json"}function i(){h.toggle("before")}function a(e){console&&console.log("page",e)}var o=this,l=o.define;o.define=void 0,Object.defineProperty(e,"__esModule",{value:!0});var s=require("lib/mithril/mithril.min"),u=n(s),c=require("lib/mithril-infinite/mithril-infinite"),d=n(c);require("app/images/images.css!lib/system-css/css");var f="http://arthurclemens.github.io/assets/mithril-infinite-scroll/thumbs/",h={expanded:{},dirty:{},toggle:function(e){h.expanded[e]?delete h.expanded[e]:h.expanded[e]=1,h.dirty[e]=1},isExpanded:function(e){return h.expanded[e]},isDirty:function(e){return h.dirty[e]},clearDirty:function(e){return delete h.dirty[e]}},g=function(e,t){var n=t.page+e.src,r=h.isExpanded(n),i=h.isDirty(n),a=r?.5:.25;return u["default"]("a.list-item",{style:{height:Math.floor(parseInt(e.height,10)*a)+"px"},onclick:function(){h.toggle(n)}},[u["default"]("span.pageNum",t.page),u["default"](".image",{style:{height:Math.floor(parseInt(e.height,10)*a)+"px",width:Math.floor(parseInt(e.width,10)*a)+"px"},config:function(t,r,a){if((!a.inited||i)&&d["default"].isElementInViewport({el:t})){var o=f+e.src;t.style.backgroundImage=t.style.backgroundImage="url("+o+")",a.inited=!0,h.clearDirty(n)}}}),u["default"](".toggle",r?u["default"].trust("&#150;"):u["default"].trust("&#43;"))])},p={};return p.view=function(){return u["default"].component(d["default"],{maxPages:20,item:g,pageUrl:r,preloadPages:3,"class":"images",before:u["default"]("a",{"class":["list-item",h.isExpanded("before")?"open":"closed"].join(" "),onclick:i},[u["default"]("div",u["default"].trust('A list of pugs. Courtesy the <a href="http://airbnb.io/infinity/demo-off.html">AirBnb Infinity demo</a>.')),u["default"](".toggle",h.isExpanded("before")?u["default"].trust("&#150;"):u["default"].trust("&#43;"))]),after:u["default"]("div.list-item",u["default"].trust("That was the last pug.")),pageChange:a})},e["default"]=p,t.exports=e["default"],o.define=l,t.exports}),System.registerDynamic("app/grid/grid",["lib/mithril/mithril.min","lib/mithril-infinite/mithril-infinite","app/grid/grid.css!lib/system-css/css"],!0,function(require,e,t){function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return"app/grid/data/page-"+e+".json"}function i(e){console&&console.log("page",e)}var a=this,o=a.define;a.define=void 0,Object.defineProperty(e,"__esModule",{value:!0});var l=require("lib/mithril/mithril.min"),s=n(l),u=require("lib/mithril-infinite/mithril-infinite"),c=n(u);require("app/grid/grid.css!lib/system-css/css");var d="http://arthurclemens.github.io/assets/mithril-infinite-scroll/thumbs/",f={seen:{}},h=function(e,t){function n(){i()}var r=d+t,i=function(){e.style.backgroundImage="url("+r+")",e.style.opacity=1,f.seen[r]=1};if(f.seen[r])i();else{var a=new Image;a.onload=n,a.src=r}},g=function(e){return s["default"]("a.grid-item",s["default"](".image-holder",s["default"](".image",{config:function(t,n,r){r.inited||c["default"].isElementInViewport({el:t})&&(h(t,e.src),r.inited=!0)}})))},p={};return p.view=function(){return s["default"].component(c["default"],{maxPages:16,item:g,pageUrl:r,"class":"grid",pageChange:i})},e["default"]=p,t.exports=e["default"],a.define=o,t.exports}),System.registerDynamic("app/table/table",["lib/mithril/mithril.min","lib/mithril-infinite/mithril-infinite","app/table/table.css!lib/system-css/css"],!0,function(require,e,t){function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return"app/table/data/page-"+e+".json"}function i(e){console&&console.log("page",e)}var a=this,o=a.define;a.define=void 0,Object.defineProperty(e,"__esModule",{value:!0});var l=require("lib/mithril/mithril.min"),s=n(l),u=require("lib/mithril-infinite/mithril-infinite"),c=n(u);require("app/table/table.css!lib/system-css/css");var d=function(e,t){return s["default"](".list-item",[s["default"]("div",t.page),s["default"]("div",e||s["default"].trust("&nbsp;"))])},f={};return f.view=function(){return s["default"].component(c["default"],{maxPages:10,item:d,pageUrl:r,"class":"table",pageChange:i})},e["default"]=f,t.exports=e["default"],a.define=o,t.exports}),System.registerDynamic("app/short/short",["lib/mithril/mithril.min","lib/mithril-infinite/mithril-infinite","app/short/short.css!lib/system-css/css"],!0,function(require,e,t){function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return"app/short/data/page-"+e+".json"}function i(e){console&&console.log("page",e)}var a=this,o=a.define;a.define=void 0,Object.defineProperty(e,"__esModule",{value:!0});var l=require("lib/mithril/mithril.min"),s=n(l),u=require("lib/mithril-infinite/mithril-infinite"),c=n(u);require("app/short/short.css!lib/system-css/css");var d={};return d.item=function(e){var t=e[1]||"transparent",n=e[1]?"":s["default"](".title",e[0]);return s["default"](".list-item",{"class":n?"has-title":"",style:{"background-color":t}},n)},d.view=function(){return s["default"].component(c["default"],{item:d.item,maxPages:21,preloadSlots:1,pageUrl:r,"class":"short",pageChange:i})},e["default"]=d,t.exports=e["default"],a.define=o,t.exports}),System.registerDynamic("app/horizontal/horizontal",["lib/mithril/mithril.min","lib/mithril-infinite/mithril-infinite","app/horizontal/horizontal.css!lib/system-css/css"],!0,function(require,e,t){function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return"app/horizontal/data/page-"+e+".json"}function i(e){return 218*(e.length||12)}function a(e){console&&console.log("page",e)}var o=this,l=o.define;o.define=void 0,Object.defineProperty(e,"__esModule",{value:!0});var s=require("lib/mithril/mithril.min"),u=n(s),c=require("lib/mithril-infinite/mithril-infinite"),d=n(c);require("app/horizontal/horizontal.css!lib/system-css/css");var f="http://arthurclemens.github.io/assets/mithril-infinite-scroll/thumbs/",h={seen:{}},g=function(e,t){function n(){i()}var r=f+t,i=function(){e.style.backgroundImage="url("+r+")",e.style.opacity=1,h.seen[r]=1};if(h.seen[r])i();else{var a=new Image;a.onload=n,a.src=r}},p=function(e){return u["default"]("a.grid-item",u["default"](".image-holder",u["default"](".image",{config:function(t,n,r){r.inited||d["default"].isElementInViewport({el:t})&&(g(t,e.src),r.inited=!0)}})))},m={};return m.view=function(){return u["default"].component(d["default"],{maxPages:16,item:p,pageUrl:r,"class":"horizontal",axis:"x",pageSize:i,pageChange:a})},e["default"]=m,t.exports=e["default"],o.define=l,t.exports}),function(){var e=System.get("@@amd-helpers").createDefine(),t=function n(e,t){function r(e){M=e.document,N=e.location,I=e.cancelAnimationFrame||e.clearTimeout,A=e.requestAnimationFrame||e.setTimeout}function i(){var e,t=[].slice.call(arguments),n=!(null==t[1]||P.call(t[1])!==z||"tag"in t[1]||"view"in t[1]||"subtree"in t[1]),r=n?t[1]:{},i="class"in r?"class":"className",a={tag:"div",attrs:{}},o=[];if(P.call(t[0])!=D)throw new Error("selector in m(selector, attrs, children) should be a string");for(;e=V.exec(t[0]);)if(""===e[1]&&e[2])a.tag=e[2];else if("#"===e[1])a.attrs.id=e[2];else if("."===e[1])o.push(e[2]);else if("["===e[3][0]){var l=U.exec(e[3]);a.attrs[l[1]]=l[3]||(l[2]?"":!0)}var s=t.slice(n?2:1);a.children=1===s.length&&P.call(s[0])===_?s[0]:s;for(var u in r)r.hasOwnProperty(u)&&(u===i&&null!=r[u]&&""!==r[u]?(o.push(r[u]),a.attrs[u]=""):a.attrs[u]=r[u]);return o.length>0&&(a.attrs[i]=o.join(" ")),a}function a(e,n,r,u,d,f,h,g,p,m,v){try{(null==d||null==d.toString())&&(d="")}catch(y){d=""}if("retain"===d.subtree)return f;var b=P.call(f),w=P.call(d);if(null==f||b!==w){if(null!=f)if(r&&r.nodes){var x=g-u,S=x+(w===_?d:f.nodes).length;s(r.nodes.slice(x,S),r.slice(x,S))}else f.nodes&&s(f.nodes,f);f=new d.constructor,f.tag&&(f={}),f.nodes=[]}if(w===_){for(var C=0,E=d.length;E>C;C++)P.call(d[C])===_&&(d=d.concat.apply([],d),C--,E=d.length);for(var j=[],O=f.length===d.length,T=0,k=1,N=2,A=3,I={},V=!1,C=0;C<f.length;C++)f[C]&&f[C].attrs&&null!=f[C].attrs.key&&(V=!0,I[f[C].attrs.key]={action:k,index:C});for(var U=0,C=0,E=d.length;E>C;C++)if(d[C]&&d[C].attrs&&null!=d[C].attrs.key){for(var $=0,E=d.length;E>$;$++)d[$]&&d[$].attrs&&null==d[$].attrs.key&&(d[$].attrs.key="__mithril__"+U++);break}if(V){var H=!1;if(d.length!=f.length)H=!0;else for(var q,W,C=0;q=f[C],W=d[C];C++)if(q.attrs&&W.attrs&&q.attrs.key!=W.attrs.key){H=!0;break}if(H){for(var C=0,E=d.length;E>C;C++)if(d[C]&&d[C].attrs&&null!=d[C].attrs.key){var F=d[C].attrs.key;I[F]=I[F]?{action:A,index:C,from:I[F].index,element:f.nodes[I[F].index]||M.createElement("div")}:{action:N,index:C}}var G=[];for(var J in I)G.push(I[J]);var K=G.sort(o),X=new Array(f.length);X.nodes=f.nodes.slice();for(var Y,C=0;Y=K[C];C++){if(Y.action===k&&(s(f[Y.index].nodes,f[Y.index]),X.splice(Y.index,1)),Y.action===N){var Q=M.createElement("div");Q.key=d[Y.index].attrs.key,e.insertBefore(Q,e.childNodes[Y.index]||null),X.splice(Y.index,0,{attrs:{key:d[Y.index].attrs.key},nodes:[Q]}),X.nodes[Y.index]=Q}Y.action===A&&(e.childNodes[Y.index]!==Y.element&&null!==Y.element&&e.insertBefore(Y.element,e.childNodes[Y.index]||null),X[Y.index]=f[Y.from],X.nodes[Y.index]=Y.element)}f=X}}for(var C=0,Z=0,E=d.length;E>C;C++){var te=a(e,n,f,g,d[C],f[Z],h,g+T||T,p,m,v);te!==t&&(te.nodes.intact||(O=!1),T+=te.$trusted?(te.match(/<[^\/]|\>\s*[^<]/g)||[0]).length:P.call(te)===_?te.length:1,f[Z++]=te)}if(!O){for(var C=0,E=d.length;E>C;C++)null!=f[C]&&j.push.apply(j,f[C].nodes);for(var ne,C=0;ne=f.nodes[C];C++)null!=ne.parentNode&&j.indexOf(ne)<0&&s([ne],[f[C]]);d.length<f.length&&(f.length=d.length),f.nodes=j}}else if(null!=d&&w===z){for(var ie=[],ae=[];d.view;){var oe=d.view.$original||d.view,le="diff"==i.redraw.strategy()&&f.views?f.views.indexOf(oe):-1,se=le>-1?f.controllers[le]:new(d.controller||B),F=d&&d.attrs&&d.attrs.key;if(d=0==re||f&&f.controllers&&f.controllers.indexOf(se)>-1?d.view(se):{tag:"placeholder"},"retain"===d.subtree)return f;F&&(d.attrs||(d.attrs={}),d.attrs.key=F),se.onunload&&ee.push({controller:se,handler:se.onunload}),ie.push(oe),ae.push(se)}if(!d.tag&&ae.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");d.attrs||(d.attrs={}),f.attrs||(f.attrs={});var ue=Object.keys(d.attrs),ce=ue.length>("key"in d.attrs?1:0);if((d.tag!=f.tag||ue.sort().join()!=Object.keys(f.attrs).sort().join()||d.attrs.id!=f.attrs.id||d.attrs.key!=f.attrs.key||"all"==i.redraw.strategy()&&(!f.configContext||f.configContext.retain!==!0)||"diff"==i.redraw.strategy()&&f.configContext&&f.configContext.retain===!1)&&(f.nodes.length&&s(f.nodes),f.configContext&&typeof f.configContext.onunload===R&&f.configContext.onunload(),f.controllers))for(var se,C=0;se=f.controllers[C];C++)typeof se.onunload===R&&se.onunload({preventDefault:B});if(P.call(d.tag)!=D)return;var ne,de=0===f.nodes.length;if(d.attrs.xmlns?m=d.attrs.xmlns:"svg"===d.tag?m="http://www.w3.org/2000/svg":"math"===d.tag&&(m="http://www.w3.org/1998/Math/MathML"),de){if(ne=d.attrs.is?m===t?M.createElement(d.tag,d.attrs.is):M.createElementNS(m,d.tag,d.attrs.is):m===t?M.createElement(d.tag):M.createElementNS(m,d.tag),f={tag:d.tag,attrs:ce?l(ne,d.tag,d.attrs,{},m):d.attrs,children:null!=d.children&&d.children.length>0?a(ne,d.tag,t,t,d.children,f.children,!0,0,d.attrs.contenteditable?ne:p,m,v):d.children,nodes:[ne]},ae.length){f.views=ie,f.controllers=ae;for(var se,C=0;se=ae[C];C++)if(se.onunload&&se.onunload.$old&&(se.onunload=se.onunload.$old),re&&se.onunload){var fe=se.onunload;se.onunload=B,se.onunload.$old=fe}}f.children&&!f.children.nodes&&(f.children.nodes=[]),"select"===d.tag&&"value"in d.attrs&&l(ne,d.tag,{value:d.attrs.value},{},m),e.insertBefore(ne,e.childNodes[g]||null)}else ne=f.nodes[0],ce&&l(ne,d.tag,d.attrs,f.attrs,m),f.children=a(ne,d.tag,t,t,d.children,f.children,!1,0,d.attrs.contenteditable?ne:p,m,v),f.nodes.intact=!0,ae.length&&(f.views=ie,f.controllers=ae),h===!0&&null!=ne&&e.insertBefore(ne,e.childNodes[g]||null);if(typeof d.attrs.config===R){var he=f.configContext=f.configContext||{},ge=function(e,t){return function(){return e.attrs.config.apply(e,t)}};v.push(ge(d,[ne,!de,he,f]))}}else if(typeof d!=R){var j;0===f.nodes.length?(d.$trusted?j=c(e,g,d):(j=[M.createTextNode(d)],e.nodeName.match(L)||e.insertBefore(j[0],e.childNodes[g]||null)),f="string number boolean".indexOf(typeof d)>-1?new d.constructor(d):d,f.nodes=j):f.valueOf()!==d.valueOf()||h===!0?(j=f.nodes,p&&p===M.activeElement||(d.$trusted?(s(j,f),j=c(e,g,d)):"textarea"===n?e.value=d:p?p.innerHTML=d:((1===j[0].nodeType||j.length>1)&&(s(f.nodes,f),j=[M.createTextNode(d)]),e.insertBefore(j[0],e.childNodes[g]||null),j[0].nodeValue=d)),f=new d.constructor(d),f.nodes=j):f.nodes.intact=!0}return f}function o(e,t){return e.action-t.action||e.index-t.index}function l(e,t,n,r,i){for(var a in n){var o=n[a],l=r[a];if(a in r&&l===o)"value"===a&&"input"===t&&e.value!=o&&(e.value=o);else{r[a]=o;try{if("config"===a||"key"==a)continue;if(typeof o===R&&0===a.indexOf("on"))e[a]=d(o,e);else if("style"===a&&null!=o&&P.call(o)===z){for(var s in o)(null==l||l[s]!==o[s])&&(e.style[s]=o[s]);for(var s in l)s in o||(e.style[s]="")}else null!=i?"href"===a?e.setAttributeNS("http://www.w3.org/1999/xlink","href",o):"className"===a?e.setAttribute("class",o):e.setAttribute(a,o):a in e&&"list"!==a&&"style"!==a&&"form"!==a&&"type"!==a&&"width"!==a&&"height"!==a?("input"!==t||e[a]!==o)&&(e[a]=o):e.setAttribute(a,o)}catch(u){if(u.message.indexOf("Invalid argument")<0)throw u}}}return r}function s(e,t){for(var n=e.length-1;n>-1;n--)if(e[n]&&e[n].parentNode){try{e[n].parentNode.removeChild(e[n])}catch(r){}t=[].concat(t),t[n]&&u(t[n])}0!=e.length&&(e.length=0)}function u(e){if(e.configContext&&typeof e.configContext.onunload===R&&(e.configContext.onunload(),e.configContext.onunload=null),e.controllers)for(var t,n=0;t=e.controllers[n];n++)typeof t.onunload===R&&t.onunload({preventDefault:B});if(e.children)if(P.call(e.children)===_)for(var r,n=0;r=e.children[n];n++)u(r);else e.children.tag&&u(e.children)}function c(e,t,n){var r=e.childNodes[t];if(r){var i=1!=r.nodeType,a=M.createElement("span");i?(e.insertBefore(a,r||null),a.insertAdjacentHTML("beforebegin",n),e.removeChild(a)):r.insertAdjacentHTML("beforebegin",n)}else e.insertAdjacentHTML("beforeend",n);for(var o=[];e.childNodes[t]!==r;)o.push(e.childNodes[t]),t++;return o}function d(e,t){return function(n){n=n||event,i.redraw.strategy("diff"),i.startComputation();try{return e.call(t,n)}finally{ie()}}}function f(e){var t=q.indexOf(e);return 0>t?q.push(e)-1:t}function h(e){var t=function(){return arguments.length&&(e=arguments[0]),e};return t.toJSON=function(){return e},t}function g(e,t){var n=function(){return(e.controller||B).apply(this,t)||this},r=function(n){return arguments.length>1&&(t=t.concat([].slice.call(arguments,1))),e.view.apply(e,t?[n].concat(t):[n])};r.$original=e.view;var i={controller:n,view:r};return t[0]&&null!=t[0].key&&(i.attrs={key:t[0].key}),i}function p(){Q&&(Q(),Q=null);for(var e,t=0;e=G[t];t++)if(K[t]){var n=J[t].controller&&J[t].controller.$$args?[K[t]].concat(J[t].controller.$$args):[K[t]];i.render(e,J[t].view?J[t].view(K[t],n):"")}Z&&(Z(),Z=null),X=null,Y=new Date,i.redraw.strategy("diff")}function m(e){return e.slice(le[i.route.mode].length)}function v(e,t,n){ae={};var r=n.indexOf("?");-1!==r&&(ae=x(n.substr(r+1,n.length)),n=n.substr(0,r));var a=Object.keys(t),o=a.indexOf(n);if(-1!==o)return i.mount(e,t[a[o]]),!0;for(var l in t){if(l===n)return i.mount(e,t[l]),!0;var s=new RegExp("^"+l.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(s.test(n))return n.replace(s,function(){for(var n=l.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2),a=0,o=n.length;o>a;a++)ae[n[a].replace(/:|\./g,"")]=decodeURIComponent(r[a]);i.mount(e,t[l])}),!0}}function y(e){if(e=e||event,!e.ctrlKey&&!e.metaKey&&2!==e.which){e.preventDefault?e.preventDefault():e.returnValue=!1;for(var t=e.currentTarget||e.srcElement,n="pathname"===i.route.mode&&t.search?x(t.search.slice(1)):{};t&&"A"!=t.nodeName.toUpperCase();)t=t.parentNode;i.route(t[i.route.mode].slice(le[i.route.mode].length),n)}}function b(){"hash"!=i.route.mode&&N.hash?N.hash=N.hash:e.scrollTo(0,0)}function w(e,n){var r={},i=[];for(var a in e){var o=n?n+"["+a+"]":a,l=e[a],s=P.call(l),u=null===l?encodeURIComponent(o):s===z?w(l,o):s===_?l.reduce(function(e,t){return r[o]||(r[o]={}),r[o][t]?e:(r[o][t]=!0,e.concat(encodeURIComponent(o)+"="+encodeURIComponent(t)))},[]).join("&"):encodeURIComponent(o)+"="+encodeURIComponent(l);l!==t&&i.push(u)}return i.join("&")}function x(e){"?"===e.charAt(0)&&(e=e.substring(1));for(var t=e.split("&"),n={},r=0,i=t.length;i>r;r++){var a=t[r].split("="),o=decodeURIComponent(a[0]),l=2==a.length?decodeURIComponent(a[1]):null;null!=n[o]?(P.call(n[o])!==_&&(n[o]=[n[o]]),n[o].push(l)):n[o]=l}return n}function S(e){var n=f(e);s(e.childNodes,W[n]),W[n]=t}function C(e,t){var n=i.prop(t);return e.then(n),n.then=function(n,r){return C(e.then(n,r),t)},n}function E(e,t){function n(e){d=e||u,h.map(function(e){d===s&&e.resolve(f)||e.reject(f)})}function r(e,t,n,r){if((null!=f&&P.call(f)===z||typeof f===R)&&typeof e===R)try{var a=0;e.call(f,function(e){a++||(f=e,t())},function(e){a++||(f=e,n())})}catch(o){i.deferred.onerror(o),f=o,n()}else r()}function a(){var u;try{u=f&&f.then}catch(h){return i.deferred.onerror(h),f=h,d=l,a()}r(u,function(){d=o,a()},function(){d=l,a()},function(){try{d===o&&typeof e===R?f=e(f):d===l&&"function"==typeof t&&(f=t(f),d=o)}catch(a){return i.deferred.onerror(a),f=a,n()}f===c?(f=TypeError(),n()):r(u,function(){n(s)},n,function(){n(d===o&&s)})})}var o=1,l=2,s=3,u=4,c=this,d=0,f=0,h=[];c.promise={},c.resolve=function(e){return d||(f=e,d=o,a()),this},c.reject=function(e){return d||(f=e,d=l,a()),this},c.promise.then=function(e,t){var n=new E(e,t);return d===s?n.resolve(f):d===u?n.reject(f):h.push(n),n.promise}}function j(e){return e}function O(n){if(!n.dataType||"jsonp"!==n.dataType.toLowerCase()){var r=new e.XMLHttpRequest;if(r.open(n.method,n.url,!0,n.user,n.password),r.onreadystatechange=function(){4===r.readyState&&(r.status>=200&&r.status<300?n.onload({type:"load",target:r}):n.onerror({type:"error",target:r}))},n.serialize===JSON.stringify&&n.data&&"GET"!==n.method&&r.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize===JSON.parse&&r.setRequestHeader("Accept","application/json, text/*"),typeof n.config===R){var i=n.config(r,n);null!=i&&(r=i)}var a="GET"!==n.method&&n.data?n.data:"";if(a&&P.call(a)!=D&&a.constructor!=e.FormData)throw"Request data should be either be a string or FormData. Check the `serialize` option in `m.request`";return r.send(a),r}var o="mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),l=M.createElement("script");e[o]=function(r){l.parentNode.removeChild(l),n.onload({type:"load",target:{responseText:r}}),e[o]=t},l.onerror=function(){return l.parentNode.removeChild(l),n.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),e[o]=t,!1},l.onload=function(){return!1},l.src=n.url+(n.url.indexOf("?")>0?"&":"?")+(n.callbackKey?n.callbackKey:"callback")+"="+o+"&"+w(n.data||{}),M.body.appendChild(l)}function T(e,t,n){if("GET"===e.method&&"jsonp"!=e.dataType){var r=e.url.indexOf("?")<0?"?":"&",i=w(t);e.url=e.url+(i?r+i:"")}else e.data=n(t);return e}function k(e,t){var n=e.match(/:[a-z]\w+/gi);if(n&&t)for(var r=0;r<n.length;r++){var i=n[r].slice(1);e=e.replace(n[r],t[i]),delete t[i]}return e}var M,N,A,I,z="[object Object]",_="[object Array]",D="[object String]",R="function",P={}.toString,V=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,U=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/,L=/^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/,B=function(){};r(e);var $,H={appendChild:function(e){$===t&&($=M.createElement("html")),M.documentElement&&M.documentElement!==e?M.replaceChild(e,M.documentElement):M.appendChild(e),this.childNodes=M.childNodes},insertBefore:function(e){this.appendChild(e)},childNodes:[]},q=[],W={};i.render=function(e,n,r){var i=[];if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var o=f(e),l=e===M,u=l||e===M.documentElement?H:e;l&&"html"!=n.tag&&(n={tag:"html",attrs:{},children:n}),W[o]===t&&s(u.childNodes),r===!0&&S(e),W[o]=a(u,null,t,t,n,W[o],!1,0,null,t,i);for(var c=0,d=i.length;d>c;c++)i[c]()},i.trust=function(e){return e=new String(e),e.$trusted=!0,e},i.prop=function(e){return(null!=e&&P.call(e)===z||typeof e===R)&&typeof e.then===R?C(e):h(e)};var F,G=[],J=[],K=[],X=null,Y=0,Q=null,Z=null,ee=[],te=16;i.component=function(e){return g(e,[].slice.call(arguments,1))},i.mount=i.module=function(e,t){if(!e)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var n=G.indexOf(e);0>n&&(n=G.length);for(var r,a=!1,o={preventDefault:function(){a=!0,Q=Z=null}},l=0;r=ee[l];l++)r.handler.call(r.controller,o),r.controller.onunload=null;if(a)for(var r,l=0;r=ee[l];l++)r.controller.onunload=r.handler;else ee=[];if(K[n]&&typeof K[n].onunload===R&&K[n].onunload(o),!a){i.redraw.strategy("all"),i.startComputation(),G[n]=e,arguments.length>2&&(t=subcomponent(t,[].slice.call(arguments,2)));var s=F=t=t||{controller:function(){}},u=t.controller||B,c=new u;return s===F&&(K[n]=c,J[n]=t),ie(),K[n]}};var ne=!1;i.redraw=function(t){ne||(ne=!0,X&&t!==!0?(A===e.requestAnimationFrame||new Date-Y>te)&&(X>0&&I(X),X=A(p,te)):(p(),X=A(function(){X=null},te)),ne=!1)},i.redraw.strategy=i.prop();var re=0;i.startComputation=function(){re++},i.endComputation=function(){re=Math.max(re-1,0),0===re&&i.redraw()};var ie=function(){"none"==i.redraw.strategy()?(re--,i.redraw.strategy("diff")):i.endComputation()};i.withAttr=function(e,t){return function(n){n=n||event;var r=n.currentTarget||this;t(e in r?r[e]:r.getAttribute(e))}};var ae,oe,le={pathname:"",hash:"#",search:"?"},se=B,ue=!1;return i.route=function(){if(0===arguments.length)return oe;if(3===arguments.length&&P.call(arguments[1])===D){var t=arguments[0],n=arguments[1],r=arguments[2];se=function(e){var a=oe=m(e);if(!v(t,r,a)){if(ue)throw new Error("Ensure the default route matches one of the routes defined in m.route");ue=!0,i.route(n,!0),ue=!1}};var a="hash"===i.route.mode?"onhashchange":"onpopstate";e[a]=function(){var e=N[i.route.mode];"pathname"===i.route.mode&&(e+=N.search),oe!=m(e)&&se(e)},Q=b,e[a]()}else if(arguments[0].addEventListener||arguments[0].attachEvent){var o=arguments[0],l=(arguments[1],arguments[2],arguments[3]);o.href=("pathname"!==i.route.mode?N.pathname:"")+le[i.route.mode]+l.attrs.href,o.addEventListener?(o.removeEventListener("click",y),o.addEventListener("click",y)):(o.detachEvent("onclick",y),o.attachEvent("onclick",y))}else if(P.call(arguments[0])===D){var s=oe;oe=arguments[0];var u=arguments[1]||{},c=oe.indexOf("?"),d=c>-1?x(oe.slice(c+1)):{};for(var f in u)d[f]=u[f];var h=w(d),g=c>-1?oe.slice(0,c):oe;h&&(oe=g+(-1===g.indexOf("?")?"?":"&")+h);var p=(3===arguments.length?arguments[2]:arguments[1])===!0||s===arguments[0];e.history.pushState?(Q=b,Z=function(){e.history[p?"replaceState":"pushState"](null,M.title,le[i.route.mode]+oe)},se(le[i.route.mode]+oe)):(N[i.route.mode]=oe,se(le[i.route.mode]+oe))}},i.route.param=function(e){if(!ae)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return ae[e]},i.route.mode="search",i.route.buildQueryString=w,i.route.parseQueryString=x,i.deferred=function(){var e=new E;return e.promise=C(e.promise),e},i.deferred.onerror=function(e){if("[object Error]"===P.call(e)&&!e.constructor.toString().match(/ Error/))throw e},i.sync=function(e){function t(e,t){return function(i){return o[e]=i,t||(n="reject"),0===--a&&(r.promise(o),r[n](o)),i}}var n="resolve",r=i.deferred(),a=e.length,o=new Array(a);if(e.length>0)for(var l=0;l<e.length;l++)e[l].then(t(l,!0),t(l,!1));else r.resolve([]);return r.promise},i.request=function(e){e.background!==!0&&i.startComputation();var t=new E,n=e.dataType&&"jsonp"===e.dataType.toLowerCase(),r=e.serialize=n?j:e.serialize||JSON.stringify,a=e.deserialize=n?j:e.deserialize||JSON.parse,o=n?function(e){return e.responseText}:e.extract||function(e){return 0===e.responseText.length&&a===JSON.parse?null:e.responseText};return e.method=(e.method||"GET").toUpperCase(),e.url=k(e.url,e.data),e=T(e,e.data,r),e.onload=e.onerror=function(n){try{n=n||event;var r=("load"===n.type?e.unwrapSuccess:e.unwrapError)||j,l=r(a(o(n.target,e)),n.target);if("load"===n.type)if(P.call(l)===_&&e.type)for(var s=0;s<l.length;s++)l[s]=new e.type(l[s]);else e.type&&(l=new e.type(l));t["load"===n.type?"resolve":"reject"](l)}catch(n){i.deferred.onerror(n),t.reject(n)}e.background!==!0&&i.endComputation()},O(e),t.promise=C(t.promise,e.initialValue),t.promise},i.deps=function(t){return r(e=t||e),e},i.deps.factory=n,i}("undefined"!=typeof window?window:{});"undefined"!=typeof module&&null!==module&&module.exports?module.exports=t:"function"==typeof define&&define.amd&&define("lib/mithril/mithril.min",[],function(){return t}),e()}(),System.registerDynamic("lib/mithril-infinite/mithril-infinite",["lib/verge/verge.min","lib/mithril/mithril.min","lib/mithril-infinite/mithril-infinite.css!lib/system-css/css"],!0,function(require,e,t){function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(){c["default"].redraw()}var a=this,o=a.define;a.define=void 0,Object.defineProperty(e,"__esModule",{value:!0});var l=require("lib/verge/verge.min"),s=n(l),u=require("lib/mithril/mithril.min"),c=n(u);require("lib/mithril-infinite/mithril-infinite.css!lib/system-css/css");var d="000000",f=200,h=500,g=100;Object.assign||(Object.assign=function(e,t){for(var n=1,r=void 0;n in arguments;++n){t=arguments[n];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e});var p={};p.numToId=function(e){return d.substring(0,d.length-(""+e).length)+e},p.getElementSize=function(e,t){var n=window.getComputedStyle(e);if("x"===t){var r=parseFloat(n.marginLeft)+parseFloat(n.marginRight);return Math.ceil(e.scrollWidth+r)}var r=parseFloat(n.marginTop)+parseFloat(n.marginBottom);return Math.ceil(e.scrollHeight+r)},p.getCurrentPage=function(e,t){var n=Object.keys(t.dimensions).sort(),r=t.before||0,i=1;return n.forEach(function(n){e>r&&(i=parseInt(n,10));var a=t.dimensions[n];r+=a}),i},p.calculateSize=function(e,t,n){var r=Math.max(0,e-1);if(r>t)return 0;var i=t,a=Object.keys(n.dimensions).sort().slice(r,i),o=n.before||0;return a.forEach(function(e){o+=n.dimensions[e]||0}),o+=n.after||0},p.calculateStartToContent=function(e,t,n){var r=1,i=e+t;return p.calculateSize(r,i,n)},p.calculateContentSize=function(e,t,n){var r=e-t,i=e+t;return p.calculateSize(r,i,n)},p.calculatePaddingAfter=function(e,t,n){var r=e+t,i=Object.keys(n.dimensions).length;return p.calculateSize(r,i,n)},p.isElementInViewport=function(e){var t=e.el,n=e.leeway||g,r=e.axis||"y";return{x:s["default"].inX(t,n),y:s["default"].inY(t,n),both:s["default"].inViewport(t,n)}[r]};var m=function(e){return c["default"].request({method:"GET",url:e,initialValue:[],background:!0})},v={};v.controller=function(){var e=void 0===arguments[0]?{}:arguments[0],t=void 0;if(e.pageData)t=e.pageData(e.page);else{var n=e.pageUrl(e.page);t=m(n)}return t.then(c["default"].redraw),{content:t}},v.view=function(e){var t=void 0===arguments[1]?{}:arguments[1],n=p.numToId(t.page),r=t.pageTag||"div",i=["page",t.page%2===0?"even":"odd"].join(" "),a=t.processPageData||function(e,n){return e.map(function(e,r){return t.item(e,n,r)})},o=t.state.dimensions[n]||0,l=0;t.pageSize&&(l=t.pageSize(e.content()),t.state.dimensions[n]=l);var s=l?l+"px":t.isScrolling&&o?o+"px":"auto";return c["default"](r,{"data-page":n,"class":i,style:o?Object.assign({},"x"===t.axis?{width:s}:{height:s}):{},config:l?{}:function(e){var r=p.getElementSize(e,t.axis);r&&(t.state.dimensions[n]=r)}},a(e.content(),t))},p.controller=function(e){return{state:{dimensions:{}},maxPages:e.maxPages||Number.MAX_VALUE,scrollView:null,isScrolling:!1,scrollWatchScrollingStateId:null,scrollWatchUpdateStateId:null,paddingAfter:null,preloadSlots:e.preloadPages||1,boundingClientRect:{},currentPage:0}},p.view=function(e,t){function n(){e.isScrolling=!1,c["default"].redraw()}function i(){c["default"].redraw(),e.scrollWatchUpdateStateId=null}function a(){e.isScrolling=!0,clearTimeout(e.scrollWatchScrollingStateId),e.scrollWatchScrollingStateId=setTimeout(n,f),e.scrollWatchUpdateStateId||(e.scrollWatchUpdateStateId=setTimeout(i,f))}var o=e.state,l=e.scrollView?"x"===t.axis?e.scrollView.scrollLeft:e.scrollView.scrollTop:0,s=p.getCurrentPage(l,o);s!==e.currentPage&&t.pageChange&&t.pageChange(s),e.currentPage=s;for(var u=[],d=-e.preloadSlots;d<=e.preloadSlots;d++){var h=s+d;h>0&&h<=e.maxPages&&u.push(h)}var g=t.contentTag||"div",m=["scroll-view","scroll-view-"+(t.axis||"y"),t["class"]],y=p.calculateStartToContent(s,e.preloadSlots,o),b=p.calculateContentSize(s,e.preloadSlots,o),w=y-b,x=p.calculatePaddingAfter(s,e.preloadSlots,o);if(e.scrollView){var S=e.scrollView.getBoundingClientRect();e.boundingClientRect=e.boundingClientRect||S,(S.width!==e.boundingClientRect.width||S.height!==e.boundingClientRect.height)&&(e.preloadSlots=t.preloadPages||1),e.boundingClientRect=S,0===b?c["default"].redraw():b>0&&b<S.height&&(e.preloadSlots++,c["default"].redraw())}var C=c["default"]("div",{config:function(n,i,o){var l;if(!i){t.scrollView?e.scrollView=document.querySelector(t.scrollView):e.scrollView=n;var s=m.join(" ").split(" ");(l=e.scrollView.classList).add.apply(l,r(s));var u=a;e.scrollView.addEventListener("scroll",u),o.onunload=function(){e.scrollView.removeEventListener("scroll",u)}}}},c["default"](".scroll-content",{style:Object.assign({},"x"===t.axis?{width:w+b+x+"px"}:{height:w+b+x+"px"})},[c["default"](".paddingBefore",{style:Object.assign({},"x"===t.axis?{width:w+"px"}:{height:w+"px"})}),c["default"](g,{"class":"content"},[t.before?c["default"](".before",{config:function(n){var r=p.getElementSize(n,t.axis);r&&(e.state.before=r)}},t.before):null,c["default"](".pages",u.map(function(n){return c["default"].component(v,Object.assign({},t,{page:n,key:n,
isScrolling:e.isScrolling,scrollView:e.scrollView,state:o}))})),t.after?c["default"](".after",{config:function(n){var r=p.getElementSize(n,t.axis);r&&(e.state.after=r)}},t.after):null]),c["default"](".paddingAfter",{style:Object.assign({},"x"===t.axis?{width:x+"px"}:{height:x+"px"})})]));return C};var y=0;return window.onresize=function(){clearTimeout(y),y=setTimeout(i,h)},e["default"]=p,t.exports=e["default"],a.define=o,t.exports}),System.registerDynamic("lib/verge/verge.min",[],!0,function(require,e,t){var n=this,r=n.define;return n.define=void 0,!function(e,n,r){"undefined"!=typeof t&&t.exports?t.exports=r():e[n]=r()}(this,"verge",function(){function e(){return{width:c(),height:d()}}function t(e,t){var n={};return t=+t||0,n.width=(n.right=e.right+t)-(n.left=e.left-t),n.height=(n.bottom=e.bottom+t)-(n.top=e.top-t),n}function n(e,n){return e=e&&!e.nodeType?e[0]:e,e&&1===e.nodeType?t(e.getBoundingClientRect(),n):!1}function r(t){t=null==t?e():1===t.nodeType?n(t):t;var r=t.height,i=t.width;return r="function"==typeof r?r.call(t):r,i="function"==typeof i?i.call(t):i,i/r}var i={},a="undefined"!=typeof window&&window,o="undefined"!=typeof document&&document,l=o&&o.documentElement,s=a.matchMedia||a.msMatchMedia,u=s?function(e){return!!s.call(a,e).matches}:function(){return!1},c=i.viewportW=function(){var e=l.clientWidth,t=a.innerWidth;return t>e?t:e},d=i.viewportH=function(){var e=l.clientHeight,t=a.innerHeight;return t>e?t:e};return i.mq=u,i.matchMedia=s?function(){return s.apply(a,arguments)}:function(){return{}},i.viewport=e,i.scrollX=function(){return a.pageXOffset||l.scrollLeft},i.scrollY=function(){return a.pageYOffset||l.scrollTop},i.rectangle=n,i.aspect=r,i.inX=function(e,t){var r=n(e,t);return!!r&&r.right>=0&&r.left<=c()},i.inY=function(e,t){var r=n(e,t);return!!r&&r.bottom>=0&&r.top<=d()},i.inViewport=function(e,t){var r=n(e,t);return!!r&&r.bottom>=0&&r.right>=0&&r.top<=d()&&r.left<=c()},i}),n.define=r,t.exports});