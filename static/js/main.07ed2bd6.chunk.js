(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){t.exports={layout:"Layout_layout__2GhTw"}},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var c,a=n(1),s=n(0),o=n(7),i=n.n(o),r=n(25),l=n.n(r),u=function(t){var e=t.children;return Object(a.jsx)("div",{className:l.a.layout,children:e})},j=n(13),b=n(14),O=n(16),m=n(15),d=n(6),f=n(5),h=n(8),p=n(9),x=Object(p.b)("contacts/addContacts"),N=Object(p.b)("contacts/filterContacts"),v=Object(p.b)("contacts/deleteContacts"),y=n(55),C=(n(42),function(t){Object(O.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.onHendleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(h.a)({},c,a))},t.onHendleSubmite=function(e){if(e.preventDefault(),t.props.contacts.some((function(e){return e.name===t.state.name})))return t.props.openModal(),t.setState({name:"",number:""});t.props.onAddContacts(Object(f.a)(Object(f.a)({},t.state),{},{id:Object(y.a)()})),t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:"form-styles",onSubmit:this.onHendleSubmite,children:[Object(a.jsxs)("label",{className:"label-form",children:["Name",Object(a.jsx)("input",{className:"input-form",type:"text",name:"name",value:e,onChange:this.onHendleChange})]}),Object(a.jsxs)("label",{className:"label-form",children:["Number",Object(a.jsx)("input",{className:"input-form",type:"text",name:"number",value:n,onChange:this.onHendleChange})]}),Object(a.jsx)("button",{className:"button-form",type:"submit",children:"Add contacts"})]})}}]),n}(s.Component)),g={onAddContacts:x},k=Object(d.b)((function(t){return{contacts:t.contact.contacts}}),g)(C),M=(n(23),function(t){var e=t.contact,n=t.hendleClick;return Object(a.jsx)("li",{className:"contacts-list-item",children:Object(a.jsxs)("div",{className:"contacts-list-info",children:[Object(a.jsxs)("p",{className:"contacts-list-name",children:[e.name,Object(a.jsx)("span",{className:"contacts-list-number",children:e.number})]}),Object(a.jsx)("button",{className:"contacts-list-button",id:e.id,onClick:n,children:"Delete"})]})},e.id)}),S=n(56),E=n(54),w=(n(24),Object(d.b)((function(t){return{contacts:t.contact.contacts.filter((function(e){return e.name.toLowerCase().includes(t.contact.filter)}))}}),{contactsDelete:v})((function(t){var e=t.contacts,n=t.contactsDelete,c=function(t){n(t.target.id)};return Object(a.jsx)(S.a,{component:"ul",className:"contacts-list",children:e.map((function(t){return Object(a.jsx)(E.a,{timeout:250,classNames:"contacts-list-transition",unmountOnExit:!0,children:Object(a.jsx)(M,{contact:t,hendleClick:c},t.id)},t.id)}))})}))),A=(n(43),Object(d.b)((function(t){return{filter:t.contact.filter}}),(function(t){return{searchFilterValue:function(e){t(N(e))}}}))((function(t){var e=t.filter,n=t.searchFilterValue;return Object(a.jsx)("div",{className:"conteiner-filter",children:Object(a.jsx)("label",{className:"label-filter",children:Object(a.jsx)("input",{className:"input-filter",type:"text",onChange:function(t){n(t.target.value)},value:e})})})}))),H=(n(44),function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("p",{className:"Notification",children:"Contact already exists!"})})}),D=(n(45),n(46),n(47),n(48),n(49),function(t){Object(O.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={isOpenModal:!1},t.hendleIsOpenModal=function(){t.setState({isOpenModal:!0}),setTimeout((function(){t.setState({isOpenModal:!1})}),3e3)},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(E.a,{in:!0,appear:!0,timeout:500,classNames:"title-transition",unmountOnExit:!0,children:Object(a.jsx)("h1",{className:"contacts-title",children:"Phonebook"})}),Object(a.jsx)(E.a,{in:this.state.isOpenModal,timeout:500,classNames:"notification-transition",unmountOnExit:!0,children:Object(a.jsx)(H,{})}),Object(a.jsx)(E.a,{in:!0,appear:!0,timeout:500,classNames:"contacts-form",unmountOnExit:!0,children:Object(a.jsx)(k,{openModal:this.hendleIsOpenModal})}),Object(a.jsx)(E.a,{in:this.props.contacts.length>1,timeout:250,classNames:"transition-filter",unmountOnExit:!0,children:Object(a.jsx)(A,{})}),Object(a.jsx)(E.a,{in:this.props.contacts.length>0,timeout:250,classNames:"contacts-list-transition",unmountOnExit:!0,children:Object(a.jsx)(w,{})})]})}}]),n}(s.Component)),F=Object(d.b)((function(t){return{contacts:t.contact.contacts}}))(D),I=function(){return Object(a.jsx)(u,{children:Object(a.jsx)(F,{})})},_=n(27),J=n(22),L=Object(p.c)(Object(f.a)({},{contacts:[],filter:""}),(c={},Object(h.a)(c,x,(function(t,e){return Object(f.a)(Object(f.a)({},t),{},{contacts:[].concat(Object(J.a)(t.contacts),[e.payload])})})),Object(h.a)(c,v,(function(t,e){return Object(f.a)(Object(f.a)({},t),{},{contacts:Object(J.a)(t.contacts.filter((function(t){return t.id!==e.payload})))})})),Object(h.a)(c,N,(function(t,e){return Object(f.a)(Object(f.a)({},t),{},{filter:e.payload})})),c)),T=n(21),V=n(28),B=n.n(V),G=n(29),P=n.n(G),R={key:"contacts",storage:B.a,version:1,stateReconciler:P.a},q=Object(T.a)(R,L),z=Object(p.a)({reducer:{contact:q}}),K=Object(T.b)(z);i.a.render(Object(a.jsx)(d.a,{store:z,children:Object(a.jsx)(_.a,{loading:null,persistor:K,children:Object(a.jsx)(I,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.07ed2bd6.chunk.js.map