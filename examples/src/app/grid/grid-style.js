"use strict";function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.defineProperty(exports,"__esModule",{value:!0});var gridSpacing=8,itemWidth=210,itemWidthPx=itemWidth+"px",imageHolderPadding=10,imageHolderPaddingPx=imageHolderPadding+"px",makeMediaStyle=function(which,cols){return _defineProperty({},"@media ("+which+"-width: "+((cols+1)*itemWidth+cols*gridSpacing)+"px)",{".mithril-infinite__scroll-view.grid":{" .mithril-infinite__scroll-content":{" .mithril-infinite__content":{width:cols*itemWidth+(cols-1)*gridSpacing+"px"}}}})},styles=[makeMediaStyle("min",4),makeMediaStyle("max",4),makeMediaStyle("max",3),makeMediaStyle("max",2),makeMediaStyle("max",1),{".mithril-infinite__scroll-view.grid":{margin:"0 auto"," .mithril-infinite__scroll-content":{padding:2*gridSpacing+"px 0"," .mithril-infinite__content":{margin:"0 auto","font-size":0,"line-height":0," .mithril-infinite__page":{margin:"0 "+-gridSpacing/2+"px"}," .grid-item":{display:"inline-block",height:itemWidthPx,width:itemWidthPx,"background-color":"#f0f0f0",margin:[0,gridSpacing/2,gridSpacing,gridSpacing/2].map(function(v){return v+"px"}).join(" ")," .image-holder":{height:itemWidth-2*imageHolderPadding+"px",width:itemWidth-2*imageHolderPadding+"px",overflow:"hidden",position:"relative",margin:imageHolderPaddingPx," .image":{position:"absolute",left:"auto",top:0,right:"auto",bottom:0,width:"100%","background-size":"contain","background-repeat":"no-repeat","background-position-x":"50%",opacity:0,transition:"opacity .7s"}}}}}}}];exports["default"]=styles,module.exports=exports["default"];
//# sourceMappingURL=grid-style.js.map