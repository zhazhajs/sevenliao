(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(69)},44:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(31),c=n.n(o),r=n(8),s=n(9),i=n(10),m=n(11),u=n(34),p=n(1),h=n(19),f=n.n(h),v=n(33);var d,b=n(3),g=n(37),E={str:"---store test--"},k=Object(g.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;arguments.length>1&&arguments[1];return e}),y=(n(44),n(12)),j=n.n(y),O=function(e){return j.a.post("/linkBar/pagelist",e).then(function(e){return e.data}).catch(function(e){console.log(e)})},N=(n(63),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={pageData:[],name:""},e.getPageDatas=function(){O({}).then(function(t){if(t){var n=t.message,a=t.result;t.success;if(t.success)return void e.setState({pageData:a});console.log(n)}})},e.renderLi=function(e){return l.a.createElement("li",{key:"id-"+e.id},l.a.createElement("div",{className:"block"},l.a.createElement("a",{className:"alink aicon",href:e.href,style:{backgroundImage:"url("+e.bg+")"},"data-title":e.title,target:"_blank"},e.name)))},e}return Object(s.a)(n,[{key:"componentWillMount",value:function(){this.getPageDatas()}},{key:"componentDidMount",value:function(){console.log("nav-componentDidMount")}},{key:"componentWillReceiveProps",value:function(e){}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,n=t.pageData,a=void 0===n?[]:n;t.name;return l.a.createElement("ul",{className:"common-list"},a&&a.map(function(t){return e.renderLi(t)}))}}]),n}(a.Component)),w=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={name:"-"},a.deal=function(e){console.log(e),alert(e),a.setState({name:e})},a}return Object(s.a)(n,[{key:"componentWillMount",value:function(){console.log("componentWillMount")}},{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"componentWillReceiveProps",value:function(e){}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(b.b)(Object(b.a)(this.props),Object(b.a)(e))||Object(b.b)(Object(b.a)(this.state),Object(b.a)(t))}},{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"common-block"},l.a.createElement("p",{className:"common-title"},l.a.createElement("strong",null,"\u94fe\u63a5")),l.a.createElement(N,null)),l.a.createElement("div",{className:"common-block"},l.a.createElement("p",{className:"common-title"},l.a.createElement("strong",null,"\u8f7b\u677e\u4e00\u4e0b")),l.a.createElement("ul",{className:"list",style:{textAlign:"left"}},l.a.createElement("li",null,l.a.createElement("a",{href:"./../../h5game/tuita/index.html",target:"_blank"},"\u63a8\u5854\u6e38\u620f")))),l.a.createElement("div",{className:"common-block"},l.a.createElement("p",{className:"common-title"},l.a.createElement("strong",null,"\u76f4\u64ad")),l.a.createElement("div",{className:"common-tips"},"\u9ad8\u6e05\u76f4\u64ad\uff0c\u8ba9\u770b\u7535\u89c6\u66f4\u52a0\u65b9\u4fbf\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u624b\u673a\u7f51\u9875\u770b\u7535\u89c6\u5427"),l.a.createElement("div",{className:"common-tips-moblie"},"\u6e29\u99a8\u63d0\u793a\uff1a\u4e3a\u4e86\u4fdd\u8bc1\u89c6\u9891\u6d41\u7a0b\uff0c\u5efa\u8bae\u5728\u8f83\u597d\u7f51\u7edc\u524d\u63d0\u4e0b"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,l.a.createElement("a",{className:"button",href:"http://sevenliao.com/cctv1.html",target:"_blank"},"CCTV1(\u9ad8\u6e05)")),l.a.createElement("li",null,l.a.createElement("a",{className:"button",href:"http://sevenliao.com/cctv3.html",target:"_blank"},"CCTV3(\u9ad8\u6e05)")),l.a.createElement("li",null,l.a.createElement("a",{className:"button",href:"http://sevenliao.com/cctv5.html",target:"_blank"},"CCTV5+(\u9ad8\u6e05)")),l.a.createElement("li",null,l.a.createElement("a",{className:"button",href:"http://sevenliao.com/cctv6.html",target:"_blank"},"CCTV6(\u9ad8\u6e05)")),l.a.createElement("li",null,l.a.createElement("a",{className:"button",href:"http://sevenliao.com/hunan.html",target:"_blank"},"\u6e56\u5357\u536b\u89c6")),l.a.createElement("li",null,l.a.createElement("a",{className:"button",href:"http://sevenliao.com/HKcaijin.html",target:"_blank"},"\u9999\u6e2f\u8d22\u7ecf")),l.a.createElement("li",null,l.a.createElement("a",{className:"button",href:"http://sevenliao.com/KRgoodTv.html",target:"_blank"},"\u97e9\u56fdGoodTV")),l.a.createElement("li",null,l.a.createElement("a",{className:"button",href:"http://sevenliao.com/USA2.html",target:"_blank"},"\u7f8e\u56fd2")))),l.a.createElement("div",{className:"common-block"},l.a.createElement("p",{className:"common-title"},l.a.createElement("strong",null,"\u5e7f\u544a")),l.a.createElement("ul",{className:"list"},l.a.createElement("li",{style:{textAlign:"left"}},l.a.createElement("h3",null,"1.\u641c\u7d22\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7\uff1asevenliao\uff0c\u5185\u5bb9\u66f4\u7cbe\u5f69"),l.a.createElement("img",{style:{width:"120px",height:"120px",display:" inline-block"},src:"http://sevenliao.com/images/7.jpg"}),l.a.createElement("h3",null,l.a.createElement("a",{href:"http://www.sevenliao.cn/"},"2.\u524d\u7aef\u5f00\u53d1\u6280\u672f\u6587\u7ae0")),l.a.createElement("h3",null,l.a.createElement("a",{href:"http://13culb.com/actgame/index.html"},"3.13Culb\u6e38\u620f\u4e2d\u5fc3")),l.a.createElement("h3",null,"4.\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u300a\u5927\u5934\u8d34\u7eb8\u300b\uff0c\u7ed9\u81ea\u5df1\u56fe\u7247\u7f8e\u989c\u4e00\u4e0b\u6216\u8005\u52a0\u4e2a\u5934\u50cf\u5457"),l.a.createElement("img",{style:{width:"150px",height:"150px",display:" inline-block"},src:"http://sevenliao.com/images/dttz.jpg"}),l.a.createElement("h3",null,l.a.createElement("a",{href:"https://juejin.cn/user/2736016885557869",target:"_blank"},"5.\u7a00\u571f\u6398\u91d1\u4e3b\u9875"))))),l.a.createElement("div",{className:"common-block"},l.a.createElement("p",{className:"common-title"},l.a.createElement("strong",null,"\u8d5e\u8d4f")),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,l.a.createElement("h3",null,"\u559c\u6b22\u5c31\u8fd9\u4e2a\u9875\u9762\uff0c\u5c31\u6253\u8d4f\u676f\u5496\u5561\u676f\u5457\uff01"),l.a.createElement("img",{style:{width:"220px",height:"220px",display:" inline-block"},src:"http://sevenliao.com/images/pay.jpg"})))),l.a.createElement("p",{style:{color:"#333333",fontSize:"12px"}},"\u8bf4\u660e\uff1a \u4e2a\u4eba\u5b66\u4e60\u4ee3\u7801\uff0c\u4e0d\u505a\u4efb\u4f55\u5546\u4e1a\u7528\u9014"))}}]),n}(a.Component),x=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={name:"-"},a.deal=function(e){console.log(e),alert(e),a.setState({name:e})},a.jump=function(e){console.log("jump"),console.log(e),a.props.history.push("/record")},a}return Object(s.a)(n,[{key:"componentWillMount",value:function(){this.setState({name:"hello world"}),this.setState({name:k.getState().str})}},{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"componentWillReceiveProps",value:function(e){}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(b.b)(Object(b.a)(this.props),Object(b.a)(e))||Object(b.b)(Object(b.a)(this.state),Object(b.a)(t))}},{key:"render",value:function(){this.state.name;return l.a.createElement("div",null,l.a.createElement(w,null))}}]),n}(a.Component),C=(d=function(){return n.e(3).then(n.bind(null,70))},function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={component:null},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?l.a.createElement(e,this.props):null}}]),n}(a.Component)),D=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",exact:!0,component:x}),l.a.createElement(p.a,{path:"/home",exact:!0,component:x}),l.a.createElement(p.a,{path:"/record",component:C})))}}]),n}(a.Component),W="http://39.108.188.233:8080/api/";console.log("BASEURL:",W),j.a.defaults.baseURL=W,j.a.defaults.timeout=15e3,j.a.defaults.responseType="json",j.a.interceptors.request.use(function(e){var t=JSON.parse(localStorage.getItem("token"));return t&&(e.headers.common.Authorization="Bearer ".concat(t)),e},function(e){return console.log("request err:",e),Promise.reject(e)}),j.a.interceptors.response.use(function(e){if(200==e.status)return e;console.log("\u63a5\u53e3\u5f02\u5e38")},function(e){if(console.log("response err:",e),e&&e.stack.indexOf("timeout")>-1&&console.log("\u767b\u9646\u8d85\u65f6\uff01\u8bf7\u91cd\u65b0\u767b\u9646\uff01"),e.response){switch(e.response.status){case 401:console.log("401 \u767b\u9646\u8d85\u65f6\uff01\u8bf7\u91cd\u65b0\u767b\u9646\uff01")}return Promise.reject(e.response.data)}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U;U=D,c.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.03877be7.chunk.js.map