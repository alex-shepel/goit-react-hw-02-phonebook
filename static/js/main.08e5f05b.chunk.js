(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={filter:"Filter_filter__1E5tH"}},2:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",entry:"ContactList_entry__12DSb",number:"ContactList_number__14V4G"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=n(13),o=n(4),l=n(5),d=n(7),u=n(6),m=n(2),b=n.n(m),h=n(0),p=function(t){var e=t.filter,n=t.contacts,a=t.onDeleteContact;return Object(h.jsx)("ul",{className:b.a.list,children:n.filter((function(t){return t.name.toLowerCase().includes(e)})).map((function(t){var e=t.id,n=t.name,c=t.number;return Object(h.jsxs)("li",{className:b.a.item,id:e,children:[Object(h.jsxs)("p",{className:b.a.entry,children:[Object(h.jsx)("span",{children:n}),Object(h.jsx)("span",{className:b.a.number,children:c})]}),Object(h.jsx)("button",{type:"button",onClick:a,children:"Delete"})]},e)}))})},j=n(11),f=n(3),O=n.n(f),C=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputContact=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleAddContact=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:O.a.form,onSubmit:this.handleAddContact,children:[Object(h.jsxs)("label",{className:O.a.field,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleInputContact,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(h.jsxs)("label",{className:O.a.field,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputContact,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(h.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=C,_=n(12),v=n.n(_),y=function(t){var e=t.onFilter,n=t.filter;return Object(h.jsxs)("div",{className:v.a.filter,children:[Object(h.jsx)("p",{children:"Find contacts by name"}),Object(h.jsx)("input",{type:"text",name:"filter",onChange:e,value:n})]})},A=n(8),N=n.n(A),g=n(14),F=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.normalize=function(t){return t.split(" ").map((function(t){var e=t.charAt(0).toUpperCase(),n=t.substring(1);return"".concat(e).concat(n)})).join(" ")},t.handleAddContact=function(e,n){var a=t.normalize(e);if(t.state.contacts.find((function(t){return t.name===a})))alert("".concat(a," is already in contacts."));else{var c={name:a,number:n,id:Object(g.a)()};t.setState({contacts:[].concat(Object(i.a)(t.state.contacts),[c])})}},t.handleFilter=function(e){t.setState({filter:e.target.value})},t.handleDeleteContact=function(e){var n=e.target.parentNode.id;t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==n}))})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:N.a.app,children:[Object(h.jsx)("h1",{className:N.a.title,children:"Phonebook"}),Object(h.jsx)(x,{onAddContact:this.handleAddContact}),Object(h.jsx)("h2",{className:N.a.title,children:"Contacts"}),Object(h.jsx)(y,{filter:this.state.filter,onFilter:this.handleFilter}),Object(h.jsx)(p,{filter:this.state.filter,contacts:this.state.contacts,onDeleteContact:this.handleDeleteContact})]})}}]),n}(a.Component),k=F;n(20);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK",field:"ContactForm_field__2c9Zi"}},8:function(t,e,n){t.exports={app:"App_app__1IksY",title:"App_title__1YcTA"}}},[[21,1,2]]]);
//# sourceMappingURL=main.08e5f05b.chunk.js.map