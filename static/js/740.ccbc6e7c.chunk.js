"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{510:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(689),a=n(87),u="MovieList_list__yjDCC",c="MovieList_item__tDivI",s="MovieList_link__+cn-g",i=n(184),o=function(e){var t=e.movies,n=(0,r.TH)();return(0,i.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,r=e.original_title;return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(a.rU,{className:s,state:{from:n},to:"/movies/".concat(t),children:r})},t)}))})}},740:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(87),o=n(697),f="Form_form__e1yzW",p="Form_input__FTtTw",l="Form_btn__0ebGo",v=n(184),m=function(e){var t=e.setSearchParams,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,v.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),t({query:u})},children:[(0,v.jsx)("input",{className:p,type:"text",placeholder:"Name movie",autoFocus:!0,value:u,onChange:function(e){var t=e.target.value;c(t)}}),(0,v.jsx)("button",{className:l,type:"submit",disabled:!u,children:"Search"})]})},h=n(510),d=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],f=(0,i.lr)(),p=(0,a.Z)(f,2),l=p[0],d=p[1];return(0,s.useEffect)((function(){var e=l.get("query");if(e){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.I2)(e);case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[l]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{setSearchParams:d}),n.length>0&&(0,v.jsx)(h.Z,{movies:n})]})}},697:function(e,t,n){n.d(t,{I2:function(){return l},UF:function(){return o},fU:function(){return p},l2:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s="https://api.themoviedb.org/3/",i="3f48006f1c293d69c1d3e6663b29e8d0",o=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"trending/movie/day"),{params:{api_key:i,language:"en-US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t),{params:{api_key:i,language:"en-US"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"search/movie"),{params:{api_key:i,language:"en-US",query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=740.ccbc6e7c.chunk.js.map