(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(3),s=n.n(c),a=(n(12),n(4)),o=n(5),i=n(7),h=n(6),l=n(0),d=function(e){var t=e.id,n=e.name,r=e.username,c=e.email;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("p",{children:c})]})]})},b=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email,username:t[n].username},n)}))})},u=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"searchSection",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue br4",type:"search",placeholder:"Search Anime Characters",onChange:t})})},j=(n(14),function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})}),f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},console.log("constructor"),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield;console.log("render");var r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"Anime Bots"}),Object(l.jsx)(u,{searchChange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(b,{robots:r})}),Object(l.jsx)("footer",{className:"pv4 ph3 ph5-m ph6-l mid-gray",children:"\xa9 Aman Pardeshi"})]}):Object(l.jsx)("h1",{className:"tc f1-l fw1",children:"Loading..."})}}]),n}(r.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15);s.a.render(Object(l.jsx)(f,{}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.1dd7c8ed.chunk.js.map