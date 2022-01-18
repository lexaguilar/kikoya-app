(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{38:function(e,t,a){e.exports=a(56)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a(8),l=a(22),i=a(33),u=a(5);function s(e,t){return e.products}function m(e,t){return e.products.find((function(e){return e.id===t.id}))}var d={items:[],currency:"MEX"};function p(e,t){return Object(u.a)(Object(u.a)({},e),{},{items:[].concat(Object(i.a)(e.items),[t.productId])})}function E(e,t){return Object(u.a)(Object(u.a)({},e),{},{items:e.items.filter((function(e){return e!==t.productId}))})}function f(e){return{type:"cart/REMOVE",payload:{productId:e}}}function b(e,t){return-1!==e.cart.items.indexOf(t.id)}function v(e,t){return e.cart.items.map((function(t){return m(e,{id:t})}))}function g(e,t){return e.cart.currency}function h(e,t){return e.cart.items.reduce((function(t,a){return t+m(e,{id:a}).price}),0)}var O=a(4),y=a(13),j=function(e){var t=e.name,a=e.price,n=e.currency,c=e.onClick;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-danger btn-xs",onClick:c},"X"),r.a.createElement("span",{className:"cart-item__name"},t)),r.a.createElement("div",{className:"cart-item__price"},a," ",n))},N=function(e){var t=e.items,a=e.total,n=e.currency,c=e.removeFromCart,o=Object(O.g)(),l=parseFloat(.16*a).toFixed(2),i=parseFloat(a+parseFloat(l)).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h3",null,"Shopping Cart"),r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-body"},t.length>0&&r.a.createElement("div",{className:"cart__body"},t.map((function(e){return r.a.createElement(j,Object.assign({key:e.id},e,{onClick:function(){return c(e.id)}}))}))),0===t.length&&r.a.createElement("div",{className:"alert alert-info"},"Cart is empty"),t.length>0&&r.a.createElement("div",{className:"cart__total"},"IVA: ",l," ",n),r.a.createElement("div",{className:"cart__total"},"Total: ",i," ",n),t.length>0&&r.a.createElement("button",{className:"btn btn-primary",onClick:function(){o.push("/payment")}},"Comprar")))))},_=(a(49),N),S=Object(o.b)((function(e,t){return{items:v(e),currency:g(e),total:h(e)}}),(function(e){return{removeFromCart:function(t){return e(f(t))}}}))(_),w=a(27),k=a(28),C=a(35),I=a(32),T=function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){var t=e.props,a=t.id,n=t.addToCart,r=t.removeFromCart;t.isInCart?r(a):n(a)},e}return Object(k.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.price,n=e.currency,c=e.image,o=e.isInCart;return r.a.createElement("div",{className:"product thumbnail"},r.a.createElement("img",{src:c,alt:"product"}),r.a.createElement("div",{className:"caption"},r.a.createElement("h3",null,t),r.a.createElement("div",{className:"product__price"},a," ",n),r.a.createElement("div",{className:"product__button-wrap"},r.a.createElement("button",{className:o?"btn btn-danger":"btn btn-primary",onClick:this.handleClick},o?"Remove":"Add"))))}}]),a}(n.Component),x=(a(50),T),D=Object(o.b)((function(e,t){return{isInCart:b(e,t)}}),(function(e){return{addToCart:function(t){return e({type:"cart/ADD",payload:{productId:t}})},removeFromCart:function(t){return e(f(t))}}}))(x),U=function(e){var t=e.products;return r.a.createElement("div",null,r.a.createElement("h3",null,"Products"),r.a.createElement("ul",{className:"product-list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"product-list__item"},r.a.createElement(D,e))}))))},X=(a(51),U),A=Object(o.b)((function(e,t){return{products:s(e)}}))(X),F=a(12),M=a(16),R=[{role:"user",modules:[{id:1,option:"Tienda"},{id:2,option:"Productos"},{id:3,option:"Ventas"}]},{role:"admin",modules:[{id:1,option:"Usuarios"},{id:2,option:"Productos"},{id:3,option:"Administraci\xf3n"}]}],P=[{id:1,username:"GUEST",role:"user",password:"123456"},{id:2,username:"GUEST ADMIN",role:"admin",password:"123456"}],V=function(e){return localStorage.setItem("token",e)},J=function(){return localStorage.getItem("token")},L=function(e){return new Promise((function(t,a){var n=P.find((function(t){return t.username===e.username&&t.password===e.password})),r=null!=n;r&&V(n),setTimeout((function(){t(Object(u.a)({isOk:r},n))}),1e3)}))},G=function(){return localStorage.removeItem("token")},q=function(){return null!=J()},B=function(e){return R.find((function(t){return t.role===e}))},K=(a(52),function(e){var t=Object(o.d)((function(e){return e.user})).role,a=Object(n.useState)(!1),c=Object(F.a)(a,1)[0],l=B(t||"admin");return r.a.createElement("div",null,r.a.createElement(M.c,{color:"light",light:!0,expand:"md"},r.a.createElement(M.a,{isOpen:c,navbar:!0},r.a.createElement(M.b,{className:"ml-auto",navbar:!0},r.a.createElement(M.d,{href:"#"}),r.a.createElement("div",{className:"menu"},r.a.createElement("div",null,l.role),l&&l.modules.map((function(e,t){return r.a.createElement("div",{key:t,className:"submenu"},e.option)})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.history.push({pathname:"/login"})}},"Salir")))))))}),z=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"Virtual Shop"))),t)},H=function(e){return r.a.createElement(z,null,r.a.createElement(K,{history:e.history}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(S,null))),r.a.createElement("footer",null,r.a.createElement("small",null,"powered by ",r.a.createElement("a",{href:"http://www.kikoya.mx/"},"Kikoya"))))},Q=a(21),W=a.n(Q),Y=a(31),Z=a(18),$=function(e){return{type:"UPDATE_USER",payload:e}},ee=(a(54),function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(F.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(!1),s=Object(F.a)(i,2),m=s[0],d=s[1],p=Object(n.useState)(""),E=Object(F.a)(p,2),f=E[0],b=E[1],v=Object(o.c)(),g=function(e){l(Object(u.a)(Object(u.a)({},c),{},Object(Z.a)({},e.target.name,e.target.value)))},h=function(){var t=Object(Y.a)(W.a.mark((function t(a){var n,r,o;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),d(!0),t.next=4,L(c);case 4:n=t.sent,d(!1),n.isOk?(r=n.username,o=n.role,v($({username:r,role:o})),e.history.push({pathname:"/app"})):b("Usuario o contrase\xf1a incorrectos");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){G()}),[0]),r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{width:"400px",marginTop:"50px"}},r.a.createElement("form",{className:"form-signin",onSubmit:h},r.a.createElement("div",{style:{paddingTop:5}},r.a.createElement("h4",{className:"h4-secundary"},"Iniciar sesi\xf3n"),r.a.createElement("input",{value:c.username,onChange:g,type:"text",className:"form-control login-control",name:"username",placeholder:"Usuario",required:!0,autoFocus:!0}),r.a.createElement("input",{value:c.password,onChange:g,type:"password",className:"form-control login-control",name:"password",placeholder:"Contrase\xf1a",required:!0}),r.a.createElement("span",{className:"text-danger"},f)),r.a.createElement("input",{className:"btn btn-lg btn-primary btn-block btn-login",type:"submit",value:m?"Iniciando...":"Login",disabled:m}),r.a.createElement("br",null),r.a.createElement("br",null))))}),te=function(){var e=Object(o.d)((function(e){return e})).products;return r.a.createElement(z,null,r.a.createElement("div",{className:"container"},e.length>0&&r.a.createElement("div",{className:"cart__body"},e.map((function(e){return r.a.createElement(j,Object.assign({key:e.id},e))})))))},ae=a(34),ne=["component"],re=function(e){var t=e.component,a=Object(ae.a)(e,ne),n=q();return r.a.createElement(O.b,Object.assign({exact:!0},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(O.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ce=function(){return r.a.createElement(y.a,null,r.a.createElement(O.d,null,r.a.createElement(re,{path:"/app",component:H}),r.a.createElement(re,{path:"/payment",component:te}),r.a.createElement(O.b,{path:"/login",component:ee}),r.a.createElement(O.a,{to:"/app"})))},oe=[{id:1,name:"Ohrensessel Josslyn",price:499.99,currency:"MEX",image:"images/01.jpg"},{id:2,name:"Sessel Sofie",price:249.99,currency:"MEX",image:"images/02.jpg"},{id:4,name:"Schlafsessel Rovigo",price:239.99,currency:"MEX",image:"images/04.jpg"},{id:6,name:"Sessel Little",price:119.99,currency:"MEX",image:"images/06.jpg"},{id:5,name:"Sessel Peacock",price:599.99,currency:"MEX",image:"images/05.jpg"},{id:3,name:"Sessel Anna",price:149.99,currency:"MEX",image:"images/03.jpg"}],le=(a(55),{username:"",role:""});var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_USER":var r=JSON.parse(localStorage.getItem("user"));return Object(u.a)(Object(u.a)({},e),r);case"UPDATE_USER":var c=Object(u.a)(Object(u.a)({},e),n);return c;default:var o=JSON.parse(localStorage.getItem("user"));return Object(u.a)(Object(u.a)({},e),o)}},ue=Object(l.a)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"cart/ADD":return p(e,t.payload);case"cart/REMOVE":return E(e,t.payload);default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e},user:ie}),se=Object(l.b)(ue,{products:oe},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(c.render)(r.a.createElement(o.a,{store:se},r.a.createElement(ce,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1f85cdc5.chunk.js.map