(function(){"use strict";var e={376:function(e,t,n){var o=n(963),u=n(252),i=n(577),a=n(262),r=n(275),l=n(355),s=n(831),c=n(349);const v={id:"status"},f={key:0,class:"text-5xl text-white"},p={key:1,class:"text-7xl text-white font-bold"},d={key:2,class:"text-7xl text-white font-bold"},g={id:"time",class:"text-9xl text-white mx-auto text-center"},w={id:"minutes"},x=(0,u.Uk)(" : "),m={id:"seconds"},h={id:"controls",class:"flex flex-col justify-center items-center gap-4 bg-gray-800 p-2 text-xl rounded-lg text-gray-100"},b={key:0,id:"sessions"},y={id:"modifysessions",class:"bg-gray-400 text-black rounded-full"},k=(0,u._)("img",{src:r,alt:"-"},null,-1),_=[k],O={class:"px-2"},j={class:""},D=(0,u._)("img",{src:l,alt:"+"},null,-1),z=[D],C={id:"totaltime",class:"text-center"},H={key:0,class:"w-5",src:s,alt:"start"},$={key:1,class:"w-5",src:c,alt:"pause"};var S=(0,u.aZ)({setup(e){function t(e){return""+e}const n=new Audio(t("sound/end-of-work.mp3")),o=new Audio(t("sound/end-of-pause.mp3")),r=25,l=5,s=(0,a.iH)(!1),c=(0,a.iH)(!0),k=(0,a.iH)(4),D=(0,a.iH)(r),S=(0,a.iH)(0);function T(){D.value=r,S.value=0,c.value=!0}function U(){D.value=l,S.value=0,c.value=!1}function P(e){const t=Math.floor(e/60),n=t>0?`${t} hour${t>1?"s":""} `:"",o=e%60,u=o>0?`${o} minutes`:"0 minute";return`${n}${u}`}let A=-1;const F=(0,a.Fl)((()=>(s.value?"Stop":"Start")+" Timer"));function I(e){return e<10?`0${e}`:e}function Z(){console.log("Timer started"),s.value?E():q()}function q(){s.value||(s.value=!0),A=setInterval((()=>{if(0===S.value){if(0===D.value)return E(),void(c.value?n.play().then((()=>{U(),q()})):o.play().then((()=>{T(),k.value>0&&(k.value--,q())})));D.value--,S.value=59}else S.value--}),1e3)}function E(){clearInterval(A),s.value=!1}return(e,t)=>((0,u.wg)(),(0,u.iD)("div",{class:(0,i.C_)(["wrapper h-screen w-full flex flex-col justify-center gap-20 items-center",{idle:!s.value,work:s.value&&c.value,break:s.value&&!c.value}])},[(0,u._)("div",v,[s.value?c.value?((0,u.wg)(),(0,u.iD)("h1",p,"work")):((0,u.wg)(),(0,u.iD)("h1",d,"pause")):((0,u.wg)(),(0,u.iD)("h1",f,"Start when ready!"))]),(0,u._)("div",g,[(0,u._)("span",w,(0,i.zw)(I(D.value)),1),x,(0,u._)("span",m,(0,i.zw)(I(S.value)),1)]),(0,u._)("div",h,[s.value?(0,u.kq)("",!0):((0,u.wg)(),(0,u.iD)("div",b,[(0,u._)("div",y,[(0,u._)("button",{class:"button",onClick:t[0]||(t[0]=e=>{k.value>1&&k.value--})},_),(0,u._)("span",O,[(0,u._)("b",j,(0,i.zw)(k.value),1),(0,u.Uk)(" study session"+(0,i.zw)(k.value>1?"s":""),1)]),(0,u._)("button",{class:"button",onClick:t[1]||(t[1]=e=>k.value++)},z)]),(0,u._)("div",C,(0,i.zw)(P(30*k.value)),1)])),(0,u._)("button",{class:"bg-gray-100 p-2 text-black flex gap-4",onClick:Z},[(0,u.Uk)((0,i.zw)((0,a.SU)(F))+" ",1),s.value?((0,u.wg)(),(0,u.iD)("img",$)):((0,u.wg)(),(0,u.iD)("img",H))])])],2))}});const T=S;var U=T,P=n(119),A=(0,u.aZ)({setup(e){return(e,t)=>((0,u.wg)(),(0,u.iD)("div"))}});const F=A;var I=F;const Z=[{path:"/",name:"Home",component:I}],q=(0,P.p7)({history:(0,P.PO)(""),routes:Z});var E=q;(0,o.ri)(U).use(E).mount("#app")},275:function(e,t,n){e.exports=n.p+"img/minus.eb613828.svg"},349:function(e,t,n){e.exports=n.p+"img/pause.71f2e740.svg"},831:function(e,t,n){e.exports=n.p+"img/play.cf42cce7.svg"},355:function(e,t,n){e.exports=n.p+"img/plus.b99ad06a.svg"}},t={};function n(o){var u=t[o];if(void 0!==u)return u.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,u,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],u=e[c][1],i=e[c][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(r=!1,i<a&&(a=i));if(r){e.splice(c--,1);var s=u();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,u,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var u,i,a=o[0],r=o[1],l=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(u in r)n.o(r,u)&&(n.m[u]=r[u]);if(l)var c=l(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[a[s]]=0;return n.O(c)},o=self["webpackChunkpomodoro"]=self["webpackChunkpomodoro"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(376)}));o=n.O(o)})();
//# sourceMappingURL=app.5a1f275c.js.map