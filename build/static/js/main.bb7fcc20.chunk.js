(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(8),l=n.n(i),s=(n(15),n(2)),o=n(3),u=n(5),r=n(4),h=n(6),p=(n(16),n(1)),d=(n(17),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(r.a)(e).call(this,t))).handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleAnimationEnd=n.handleAnimationEnd.bind(Object(p.a)(n)),n.state={active:!1,spanClass:"value",x:0,y:0},n}return Object(h.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t){var e=t.currentTarget.getBoundingClientRect();this.setState({active:!0,spanClass:"value active",x:"".concat(t.clientX-e.left-5,"px"),y:"".concat(t.clientY-e.top-5,"px")}),console.log("left: ".concat(this.state.x," top: ").concat(this.state.y))}},{key:"handleAnimationEnd",value:function(t){this.setState({active:!1,spanClass:"value"})}},{key:"render",value:function(){return c.a.createElement("button",{className:"button",onClick:this.handleClick},c.a.createElement("span",{className:this.state.spanClass},this.props.value),!0===this.state.active?c.a.createElement("span",{className:"circle",onAnimationEnd:this.handleAnimationEnd,style:{left:this.state.x,top:this.state.y}}):"")}}]),e}(c.a.Component)),m=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Button component"),c.a.createElement(d,{value:"Button1"}),c.a.createElement(d,{value:"Button2"}),c.a.createElement(d,{value:"Button3"}))}}]),e}(a.Component);l.a.render(c.a.createElement(m,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.bb7fcc20.chunk.js.map