(this["webpackJsonpreact-bookmarking-app"]=this["webpackJsonpreact-bookmarking-app"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),r=n(9),o=n.n(r),c=(n(15),n(8)),s=n(3),u=n(4),l=n(2),h=n(6),b=n(5),j=(n(16),n(10)),d=n(0),m=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={title:"",tag:"",url:""},a.handleInput=a.handleInput.bind(Object(l.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(j.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.addBookmark(this.state),this.setState({title:"",tag:"",url:""})}},{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("input",{type:"text",name:"title",onChange:this.handleInput}),Object(d.jsx)("input",{type:"text",name:"tag",onChange:this.handleInput}),Object(d.jsx)("input",{type:"url",name:"url",onChange:this.handleInput}),Object(d.jsx)("button",{type:"submit",children:"Save"})]})}}]),n}(a.Component);var k=function(t){var e=t.bookmarks.map((function(t,e){return Object(d.jsx)("li",{children:Object(d.jsx)("h2",{children:Object(d.jsx)("a",{href:t.url,children:t.title})})})}));return Object(d.jsx)("ul",{children:e})},p=[{url:"https://www.seaofthieves.com/news/a-pirates-life-announcement",title:"Sea of Thieves Update",tag:"Gaming"},{url:"https://news.bitcoin.com/venezuela-numbers-cryptocurrency-adoption-factors/",title:"Venezuela adopts Bitcoin",tag:"Finance"},{url:"https://www.youtube.com/watch?v=Zcz-Hq1NP98",title:"Monkey plays game with his mind",tag:"tech"}],f=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={bookmarks:p,filter:null},a.addBookmark=a.addBookmark.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"addBookmark",value:function(t){var e=Object(c.a)(this.state.bookmarks);e.push(t),this.setState({bookmarks:e})}},{key:"render",value:function(){var t=this,e=this.state.bookmarks.map((function(t){return t.tag})),n=Object(c.a)(new Set(e)).map((function(e,n){return Object(d.jsx)("button",{onClick:function(){return t.setState({filter:e})},children:e.toUpperCase()},n)})),a=this.state.filter?this.state.bookmarks.filter((function(e){return e.tag===t.state.filter})):this.state.bookmarks;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("nav",{children:[n,Object(d.jsx)("button",{onClick:function(){return t.setState({filter:null})},children:"ALL"})]}),Object(d.jsx)(m,{addBookmark:this.addBookmark}),Object(d.jsx)(k,{bookmarks:a})]})}}]),n}(a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),r(t),o(t)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.755750a4.chunk.js.map