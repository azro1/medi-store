(this["webpackJsonpmedi-store"]=this["webpackJsonpmedi-store"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(31),r=c.n(s),i=(c(38),c(8)),j=c(15),l=c(3),u=c(13),o=c(1),b=Object(n.createContext)(),d=function(e,t){switch(t.type){case"CHANGE_COLOR":return Object(u.a)(Object(u.a)({},e),{},{color:t.payload});case"CHANGE_MODE":return Object(u.a)(Object(u.a)({},e),{},{mode:t.payload});default:return e}},O=function(e){var t=e.children,c=Object(n.useReducer)(d,{color:"#232524",mode:"light"}),a=Object(l.a)(c,2),s=a[0],r=a[1];return Object(o.jsx)(b.Provider,{value:Object(u.a)(Object(u.a)({},s),{},{changeColor:function(e){r({type:"CHANGE_COLOR",payload:e})},changeMode:function(e){r({type:"CHANGE_MODE",payload:e})}}),children:t})},h=function(){var e=Object(n.useContext)(b);if(void 0===e)throw new Error("useTheme must be used inside the ThemeProvider component");return e},x=c.p+"static/media/logo.5bc32b6b.svg",p=(c(40),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(j.g)();return Object(o.jsx)("div",{className:"searchbar",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.push("/search?q=".concat(c))},children:[Object(o.jsx)("label",{htmlFor:"search",children:"Search"}),Object(o.jsx)("input",{type:"text",id:"search",onChange:function(e){return a(e.target.value)},autoComplete:"off"})]})})}),m=(c(45),function(){var e=h().color;return Object(o.jsx)("div",{className:"navbar",style:{background:e},children:Object(o.jsxs)("nav",{children:[Object(o.jsxs)(i.b,{to:"/",className:"storename",children:[Object(o.jsx)("h1",{children:"MediStore"}),Object(o.jsx)("img",{src:x,alt:"medication"})]}),Object(o.jsxs)("div",{className:"search-add",children:[Object(o.jsx)(p,{}),Object(o.jsx)(i.b,{to:"/create",children:"Add Medication"})]})]})})}),f=c.p+"static/media/switch.9bbcff9c.svg",g=(c(46),["#848D74","#3E464E","#2E8B57"]),v=function(){var e=h(),t=e.changeColor,c=e.mode,n=e.changeMode;return Object(o.jsxs)("div",{className:"theme-selector",children:[Object(o.jsx)("div",{className:"theme-buttons",children:g.map((function(e){return Object(o.jsx)("div",{onClick:function(){return t(e)},style:{background:e}},e)}))}),Object(o.jsx)("div",{className:"mode-toggle",children:Object(o.jsx)("img",{src:f,alt:"dark/light icon",onClick:function(){n("light"===c?"dark":"light")},style:{filter:"dark"===c?"invert(100%)":"invert(40%)"}})})]})},y=c(28);c(57);y.a.initializeApp({apiKey:"AIzaSyDAtiJiCzzCRvl7-DbJqDoeNLv2o3aK8t0",authDomain:"medi-store-eef3b.firebaseapp.com",projectId:"medi-store-eef3b",storageBucket:"medi-store-eef3b.appspot.com",messagingSenderId:"102430235092",appId:"1:102430235092:web:1b6991d34b84a154011e41"});var S=y.a.firestore(),N=(c(48),c(49),function(e){var t=e.medications,c=h().mode;return 0===t.length?Object(o.jsx)("p",{className:"error ".concat(c),children:'Click "Add Medication" to start adding your medications'}):Object(o.jsx)("div",{className:"medication-list",children:t.map((function(e){return Object(o.jsxs)(i.b,{to:"/medications/".concat(e.id),className:"card ".concat(c),style:{textDecoration:"none"},children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("p",{children:["Dosage: ",Object(o.jsx)("span",{children:e.dosage})]}),Object(o.jsxs)("p",{children:["Type: ",Object(o.jsx)("span",{children:e.dosageForm})]}),Object(o.jsxs)("p",{children:["Instructions: ",Object(o.jsxs)("span",{children:[e.instructions.substring(0,50),"..."]})]})]},e.id)}))})}),C=function(){var e=h().mode,t=Object(n.useState)(null),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),i=Object(l.a)(r,2),j=i[0],b=i[1],d=Object(n.useState)(!1),O=Object(l.a)(d,2),x=O[0],p=O[1];return Object(n.useEffect)((function(){b(!0),S.collection("medications").get().then((function(e){if(e.empty)p("No medications to load..."),b(!1);else{var t=[];e.docs.forEach((function(e){t.push(Object(u.a)({id:e.id},e.data()))})),s(t),b(!1)}})).catch((function(e){p(e.message),b(!1)}))}),[]),Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)("h1",{className:"page-title ".concat(e),children:"Your Medications"}),x&&Object(o.jsx)("p",{className:"error ".concat(e),children:x}),j&&Object(o.jsx)("p",{className:"loading ".concat(e),children:"please wait..."}),a&&Object(o.jsx)(N,{medications:a})]})},E=(c(50),function(){var e=Object(j.h)().search,t=new URLSearchParams(e).get("q"),c=h().mode,a=Object(n.useState)(null),s=Object(l.a)(a,2),r=s[0],i=s[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),O=d[0],x=d[1],p=Object(n.useState)(!1),m=Object(l.a)(p,2),f=m[0],g=m[1];return Object(n.useEffect)((function(){x(!0),S.collection("medications").where("name","==",t).get().then((function(e){if(e.empty)g("No medications to load..."),x(!1);else{var t=[];e.docs.forEach((function(e){t.push(Object(u.a)({id:e.id},e.data()))})),i(t),g(!1),x(!1)}}))}),[t]),Object(o.jsxs)("div",{className:"search",children:[Object(o.jsxs)("h2",{className:"page-title ".concat(c),children:['Medications including "',t,'"']}),f&&Object(o.jsx)("p",{className:"error ".concat(c),children:f}),O&&Object(o.jsx)("p",{className:"loading ".concat(c),children:"please wait..."}),r&&Object(o.jsx)(N,{medications:r})]})}),q=c(23),D=c(14),w=c.n(D),k=c(19),A=(c(52),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],u=r[1],b=Object(n.useState)(""),d=Object(l.a)(b,2),O=d[0],x=d[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),f=m[0],g=m[1],v=Object(n.useState)(""),y=Object(l.a)(v,2),N=y[0],C=y[1],E=Object(n.useState)(""),D=Object(l.a)(E,2),A=D[0],R=D[1],M=Object(n.useState)(""),I=Object(l.a)(M,2),T=I[0],F=I[1],P=Object(n.useState)(""),z=Object(l.a)(P,2),B=z[0],G=z[1],H=Object(n.useState)(""),J=Object(l.a)(H,2),L=J[0],_=J[1],K=Object(n.useState)(""),U=Object(l.a)(K,2),W=U[0],Y=U[1],Q=Object(n.useState)(""),V=Object(l.a)(Q,2),X=V[0],Z=V[1],$=Object(n.useState)(""),ee=Object(l.a)($,2),te=ee[0],ce=ee[1],ne=Object(n.useState)(""),ae=Object(l.a)(ne,2),se=ae[0],re=ae[1],ie=Object(n.useState)(""),je=Object(l.a)(ie,2),le=je[0],ue=je[1],oe=Object(n.useState)(""),be=Object(l.a)(oe,2),de=be[0],Oe=be[1],he=Object(n.useState)(""),xe=Object(l.a)(he,2),pe=xe[0],me=xe[1],fe=Object(n.useState)([]),ge=Object(l.a)(fe,2),ve=ge[0],ye=ge[1],Se=Object(n.useRef)(null),Ne=Object(j.g)(),Ce=h().mode,Ee=Object(n.useState)(!1),qe=Object(l.a)(Ee,2),De=qe[0],we=qe[1],ke=Object(n.useState)(!1),Ae=Object(l.a)(ke,2),Re=Ae[0],Me=Ae[1],Ie=function(){var e=Object(k.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:c,dosage:i,dosageForm:O,frequency:f,adminRoute:N,startDate:A,endDate:T,doctorName:B,doctorEmail:L,pharmacyName:W,pharmacyEmail:X,contains:ve,instructions:te,storage:se,sideEffects:le,warning:de},e.prev=2,we(!0),e.next=6,S.collection("medications").add(n);case 6:Ne.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),we(!1),Me("Sorry \ud83d\ude1e We can't add your medication right now...");case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:"medication-form ".concat(Ce),onSubmit:Ie,children:[Object(o.jsx)("h1",{className:"page-title ".concat(Ce),children:"Add a new Medication"}),De&&Object(o.jsx)("p",{className:"loading ".concat(Ce),children:"please wait..."}),Re&&Object(o.jsx)("p",{className:"error ".concat(Ce),children:Re}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Name:"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Dosage:"}),Object(o.jsx)("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Type:"}),Object(o.jsx)("input",{type:"text",value:O,onChange:function(e){return x(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Frequency:"}),Object(o.jsx)("input",{type:"text",value:f,onChange:function(e){return g(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Admin Route:"}),Object(o.jsx)("input",{type:"text",value:N,onChange:function(e){return C(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Start:"}),Object(o.jsx)("input",{type:"date",value:A,onChange:function(e){return R(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"End:"}),Object(o.jsx)("input",{type:"date",value:T,onChange:function(e){return F(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Doctor Name:"}),Object(o.jsx)("input",{type:"text",value:B,onChange:function(e){return G(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Email:"}),Object(o.jsx)("input",{type:"email",value:L,onChange:function(e){return _(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Pharmacy Name:"}),Object(o.jsx)("input",{type:"text",value:W,onChange:function(e){return Y(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Email:"}),Object(o.jsx)("input",{type:"email",value:X,onChange:function(e){return Z(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Ingredients:"}),Object(o.jsxs)("div",{className:"ingredients",children:[Object(o.jsx)("input",{type:"text",value:pe,ref:Se,onChange:function(e){return me(e.target.value)}}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault();var t=pe.trim();t&&!ve.includes(t)&&ye((function(e){return[].concat(Object(q.a)(e),[t])})),me(""),Se.current.focus()},className:"form-btn",children:"Add"})]})]}),Object(o.jsxs)("p",{children:["Current ingredients:"," ",ve.map((function(e){return Object(o.jsxs)("em",{children:[e,", "]},e)}))]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Instructions:"}),Object(o.jsx)("input",{type:"text",value:te,onChange:function(e){return ce(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Storage:"}),Object(o.jsx)("input",{type:"text",value:se,onChange:function(e){return re(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Side Effects:"}),Object(o.jsx)("input",{type:"text",value:le,onChange:function(e){return ue(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Advice:"}),Object(o.jsx)("input",{type:"text",value:de,onChange:function(e){return Oe(e.target.value)},required:!0})]}),Object(o.jsx)("button",{className:"form-btn",children:"Add"})]})]})}),R=(c(53),function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(l.a)(s,2),u=r[0],b=r[1],d=Object(n.useState)(!1),O=Object(l.a)(d,2),x=O[0],p=O[1],m=Object(j.i)().id,f=Object(j.g)(),g=h().mode,v=function(){var e=Object(k.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.collection("medications").doc(t).delete();case 3:f.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b(!0),S.collection("medications").doc(m).get().then((function(e){e.exists?(b(!1),a(e.data())):(b(!1),p("Sorry! That medication doesn't exist..."))}))}),[m]),Object(n.useEffect)((function(){x&&setTimeout((function(){f.push("/")}),2e3)}),[x,f]),Object(o.jsxs)("div",{className:"medication ".concat(g),children:[u&&Object(o.jsx)("p",{className:"loading ".concat(g),children:"please wait..."}),x&&Object(o.jsx)("p",{style:{position:"relative",top:"1rem"},className:"error ".concat(g),children:x}),c&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"page-title ".concat(g),children:c.name}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"dates",children:[Object(o.jsxs)("p",{children:["Start Date: ",Object(o.jsx)("span",{children:c.startDate})]}),Object(o.jsxs)("p",{children:["End Date: ",Object(o.jsx)("span",{children:c.endDate})]})]}),Object(o.jsxs)("section",{children:[Object(o.jsxs)("p",{children:["Dosage: ",Object(o.jsx)("span",{children:c.dosage})]}),Object(o.jsxs)("p",{children:["Type: ",Object(o.jsx)("span",{children:c.dosageForm})]}),Object(o.jsxs)("p",{children:["To be taken: ",Object(o.jsx)("span",{children:c.frequency})]}),Object(o.jsxs)("p",{children:["Administration: ",Object(o.jsx)("span",{children:c.adminRoute})]})]}),Object(o.jsx)("div",{className:"instructions",children:Object(o.jsxs)("p",{children:["Instructions: ",Object(o.jsx)("span",{children:c.instructions})]})}),Object(o.jsxs)("section",{children:[Object(o.jsxs)("p",{children:["Prescribing Dr: ",Object(o.jsx)("span",{children:c.doctorName})]}),Object(o.jsxs)("p",{children:["Email: ",Object(o.jsx)("span",{children:c.doctorEmail})]}),Object(o.jsxs)("p",{children:["Pharmacy: ",Object(o.jsx)("span",{children:c.pharmacyName})]}),Object(o.jsxs)("p",{children:["Email: ",Object(o.jsx)("span",{children:c.pharmacyEmail})]})]}),Object(o.jsxs)("section",{children:[Object(o.jsxs)("p",{children:["Contains: ",c.contains.map((function(e){return Object(o.jsx)("span",{children:e},e)}))]}),Object(o.jsxs)("p",{children:["Side Effects: ",Object(o.jsx)("span",{children:c.sideEffects})]}),Object(o.jsxs)("p",{children:["Advice: ",Object(o.jsx)("span",{children:c.warning})]})]})]}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)(i.b,{className:"editBtn",to:"/edit/".concat(m),children:"Edit"}),Object(o.jsx)("button",{className:"delete",onClick:function(){return v(m)},children:"Delete"})]})]})]})}),M=(c(54),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],u=r[1],b=Object(n.useState)(""),d=Object(l.a)(b,2),O=d[0],x=d[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),f=m[0],g=m[1],v=Object(n.useState)(""),y=Object(l.a)(v,2),N=y[0],C=y[1],E=Object(n.useState)(""),D=Object(l.a)(E,2),A=D[0],R=D[1],M=Object(n.useState)(""),I=Object(l.a)(M,2),T=I[0],F=I[1],P=Object(n.useState)(""),z=Object(l.a)(P,2),B=z[0],G=z[1],H=Object(n.useState)(""),J=Object(l.a)(H,2),L=J[0],_=J[1],K=Object(n.useState)(""),U=Object(l.a)(K,2),W=U[0],Y=U[1],Q=Object(n.useState)(""),V=Object(l.a)(Q,2),X=V[0],Z=V[1],$=Object(n.useState)(""),ee=Object(l.a)($,2),te=ee[0],ce=ee[1],ne=Object(n.useState)(""),ae=Object(l.a)(ne,2),se=ae[0],re=ae[1],ie=Object(n.useState)(""),je=Object(l.a)(ie,2),le=je[0],ue=je[1],oe=Object(n.useState)(""),be=Object(l.a)(oe,2),de=be[0],Oe=be[1],he=Object(n.useState)(""),xe=Object(l.a)(he,2),pe=xe[0],me=xe[1],fe=Object(n.useState)([]),ge=Object(l.a)(fe,2),ve=ge[0],ye=ge[1],Se=Object(n.useRef)(null),Ne=Object(j.i)().id,Ce=Object(j.g)(),Ee=h().mode,qe=Object(n.useState)(null),De=Object(l.a)(qe,2),we=De[0],ke=De[1],Ae=Object(n.useState)(!1),Re=Object(l.a)(Ae,2),Me=Re[0],Ie=Re[1],Te=Object(n.useState)(!1),Fe=Object(l.a)(Te,2),Pe=Fe[0],ze=Fe[1];Object(n.useEffect)((function(){Ie(!0),S.collection("medications").doc(Ne).get().then((function(e){e.exists?(ke(e.data()),Ie(!1)):ze("Sorry! That medication doesn't exist...")}))}),[Ne]),Object(n.useEffect)((function(){we&&(a(we.name),u(we.dosage),x(we.dosageForm),g(we.frequency),C(we.adminRoute),R(we.startDate),F(we.endDate),G(we.doctorName),_(we.doctorEmail),Y(we.pharmacyName),Z(we.pharmacyEmail),me(we.contains),ye(we.contains),ce(we.instructions),re(we.storage),ue(we.sideEffects),Oe(we.warning))}),[we]);var Be=function(){var e=Object(k.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,S.collection("medications").doc(Ne).update({name:c,dosage:i,dosageForm:O,frequency:f,adminRoute:N,startDate:A,endDate:T,doctorName:B,doctorEmail:L,pharmacyName:W,pharmacyEmail:X,contains:ve,instructions:te,storage:se,sideEffects:le,warning:de});case 4:Ce.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),ze("we can't update your medication right now...");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:"edit-form ".concat(Ee),onSubmit:Be,children:[Object(o.jsx)("h1",{className:"page-title ".concat(Ee),children:"Edit Medication"}),Pe&&Object(o.jsx)("p",{className:"error ".concat(Ee),children:Pe}),Me&&Object(o.jsx)("p",{className:"loading ".concat(Ee),children:"please wait..."}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Name:"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Dosage:"}),Object(o.jsx)("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Type:"}),Object(o.jsx)("input",{type:"text",value:O,onChange:function(e){return x(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Frequency:"}),Object(o.jsx)("input",{type:"text",value:f,onChange:function(e){return g(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Admin Route:"}),Object(o.jsx)("input",{type:"text",value:N,onChange:function(e){return C(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Start:"}),Object(o.jsx)("input",{type:"date",value:A,onChange:function(e){return R(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"End:"}),Object(o.jsx)("input",{type:"date",value:T,onChange:function(e){return F(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Doctor Name:"}),Object(o.jsx)("input",{type:"text",value:B,onChange:function(e){return G(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Email:"}),Object(o.jsx)("input",{type:"email",value:L,onChange:function(e){return _(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Pharmacy Name:"}),Object(o.jsx)("input",{type:"text",value:W,onChange:function(e){return Y(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Email:"}),Object(o.jsx)("input",{type:"email",value:X,onChange:function(e){return Z(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Contains:"}),Object(o.jsxs)("div",{className:"ingredients",children:[Object(o.jsx)("input",{type:"text",value:pe,ref:Se,onChange:function(e){return me(e.target.value)}}),Object(o.jsx)("button",{onClick:function(e){if(e.preventDefault(),"string"!==typeof pe)return-1;var t=pe.trim();t&&!ve.includes(t)&&ye((function(e){return[].concat(Object(q.a)(e),[t])})),me(""),Se.current.focus()},className:"add-btn",children:"Add"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),ye(ve.filter((function(e,t){return t!==ve.length-1})))},className:"delete-btn",children:"Delete"})]})]}),Object(o.jsxs)("p",{children:["Contains:"," ",ve.map((function(e){return Object(o.jsxs)("em",{children:[e,", "]},e)}))]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Instructions:"}),Object(o.jsx)("input",{type:"text",value:te,onChange:function(e){return ce(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Storage:"}),Object(o.jsx)("input",{type:"text",value:se,onChange:function(e){return re(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Side Effects:"}),Object(o.jsx)("input",{type:"text",value:le,onChange:function(e){return ue(e.target.value)},required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Advice:"}),Object(o.jsx)("input",{type:"text",value:de,onChange:function(e){return Oe(e.target.value)},required:!0})]}),Object(o.jsx)("button",{className:"add-btn",children:"Add"})]})]})});c(55);var I=function(){var e=h().mode;return Object(o.jsx)("div",{className:"App ".concat(e),children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(m,{}),Object(o.jsx)(v,{}),Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{exact:!0,path:"/",children:Object(o.jsx)(C,{})}),Object(o.jsx)(j.b,{path:"/search",children:Object(o.jsx)(E,{})}),Object(o.jsx)(j.b,{path:"/create",children:Object(o.jsx)(A,{})}),Object(o.jsx)(j.b,{path:"/medications/:id",children:Object(o.jsx)(R,{})}),Object(o.jsx)(j.b,{path:"/edit/:id",children:Object(o.jsx)(M,{})}),Object(o.jsx)(j.b,{path:"*",children:Object(o.jsx)(j.a,{to:"/"})})]})]})})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{children:Object(o.jsx)(I,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.8e525b7f.chunk.js.map