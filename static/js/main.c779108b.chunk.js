(this.webpackJsonpipl=this.webpackJsonpipl||[]).push([[0],{19:function(e,t,a){},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){var n={"./all.min":12,"./all.min.js":12,"./fr":13,"./fr.js":13,"./fr.min":14,"./fr.min.js":14,"./it":15,"./it.js":15,"./it.min":16,"./it.min.js":16,"./pt":17,"./pt.js":17,"./pt.min":18,"./pt.min.js":18};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=33},34:function(e,t,a){e.exports=a.p+"static/media/vs.59a9d2e5.png"},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),l=a.n(r),i=(a(32),a(6)),s=(a(11),"sp7cwxyFuZgKM1UQ439jbMv7wvr2"),m=function(){return c.a.createElement("div",{className:"sandbox sandbox-correct-pronounciation"},c.a.createElement("h5",{className:"heading heading-correct-pronounciation"},c.a.createElement("em",null,"LIVE CRICKET"),"Score"))},o=a(20),u=a(57),d=(a(19),function(e){var t=Object(n.useState)({}),r=Object(i.a)(t,2),l=r[0],m=r[1],d=Object(n.useState)(!1),E=Object(i.a)(d,2),p=E[0],f=E[1];var v=function(){f(!0)},h=function(){f(!1)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{style:{marginBottom:20},className:"col-md-4 "},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"background_cover"},c.a.createElement("div",{className:"teamName"},c.a.createElement("p",{className:"mt-4"},e["team-1"])),c.a.createElement("div",{className:"VsImage"},c.a.createElement("img",{src:a(34),className:"img-fluid",alt:"live score"})),c.a.createElement("div",{className:"teamName"},c.a.createElement("p",null,e["team-2"]))),c.a.createElement("div",{className:"mb-2"},c.a.createElement("div",{className:"text-center p-3"},c.a.createElement("button",{style:{marginRight:10},className:"show-button",onClick:function(){(function(e){var t="https://cricapi.com/api/cricketScore?apikey=".concat(s,"&unique_id=").concat(e);return fetch(t).then((function(e){return e.json()})).catch((function(e){return alert(e)}))})(e.unique_id).then((function(e){console.log("Match data",e),m(e),v()})).catch((function(e){return alert("error match data",e)}))}},"Show Detail"),c.a.createElement("div",{className:"match-date"},o(e.dateTimeGMT).format("MMM Do")),c.a.createElement("div",{className:"match-status"},e.matchStarted?"Match is finshed":"Match is yet to start"))))),c.a.createElement(u.a,{open:p,onClose:h},c.a.createElement("div",{className:"popup"},c.a.createElement("p",null,"MATCH STATUS")),c.a.createElement("div",{className:"content"},c.a.createElement("div",{id:"alert-dialog-text"},l.stat?c.a.createElement("p",{className:"description"},l.stat):"",l.score?c.a.createElement("p",{className:"description"},l.score):"",l.description?c.a.createElement("p",{className:"description"},l.description," "):"")),c.a.createElement("div",{className:"text-center mb-2"},c.a.createElement("button",{className:"btn btn-close",onClick:h},"CLOSE"))))}),E=function(){return c.a.createElement("div",{className:"bottom section-padding"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 text-center"},c.a.createElement("div",{className:"copyright"},c.a.createElement("p",null,"Developed by ",c.a.createElement("span",null,"\xa9")," ",c.a.createElement("a",{href:"javascript:void(0)",className:"transition"},"Akshay Kumar")," All rights reserved."))))))};var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e="https://cricapi.com/api/matches?apikey=".concat(s);return fetch(e).then((function(e){return e.json()})).catch((function(e){return alert(e)}))})().then((function(e){console.log(e),r(e.matches)})).catch((function(e){return alert(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},a.map((function(e,t){return c.a.createElement(d,Object.assign({key:t},e))})))),c.a.createElement(E,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c779108b.chunk.js.map