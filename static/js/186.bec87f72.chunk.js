"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,r){r.r(n);var t=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),o=r(689),i=r(697),p=r(184);n.default=function(){var e=(0,o.UO)().movieId,n=(0,s.useState)([]),r=(0,a.Z)(n,2),u=r[0],f=r[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.I2)(e);case 3:r=n.sent,f(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),0===u.length?(0,p.jsx)("p",{children:"Sorry, there are no reviews"}):(0,p.jsx)("ul",{children:u.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{children:"Author:"}),r]}),(0,p.jsx)("p",{children:t})]},n)}))})}},697:function(e,n,r){r.d(n,{I2:function(){return l},UF:function(){return i},fU:function(){return f},l2:function(){return p}});var t=r(861),a=r(757),u=r.n(a),c=r(243),s="https://api.themoviedb.org/3/",o="3f48006f1c293d69c1d3e6663b29e8d0",i=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"trending/movie/day"),{params:{api_key:o,language:"en-US"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(n),{params:{api_key:o,language:"en-US"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(n,"/credits"),{params:{api_key:o,language:"en-US"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"search/movie"),{params:{api_key:o,language:"en-US",query:n}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.bec87f72.chunk.js.map