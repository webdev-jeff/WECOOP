(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(62)},43:function(e,t,a){},44:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),s=(a(43),a(8)),m=a(9),i=a(11),o=a(10),u=a(12),d=(a(44),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid pl-0 pr-0"},l.a.createElement("div",{className:"row align-items-center banner banner-1 ml-0 mr-0 pl-0 pr-0"},l.a.createElement("div",{className:"col-12 text-center title-bottom masked-copy texture-5"},l.a.createElement("p",{className:"font-weight-bold title-large text-center mb-0  wecoop"},l.a.createElement("span",{style:{fontSize:"130px"}},"WE"),"COOP"),l.a.createElement("p",{className:"text-white mt-0"},"WECOOP connects ideaers with developers."))))}}]),t}(n.Component)),h=a(18),p=a(14),E=a(64),f=a(65),g=a(66),v=a(67),b=a(68),N=a(69),y=a(70),w=a(84),O=a(71),k=a(72),j=a(73),x=a(74),C=a(75),S=a(76),L=a(13),B=(a(63),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={isNavOpen:!1,isModalOpen:!1,users:e.users,transparent:e.transparent},a.user="",a.login=!1,a.toggleNav=a.toggleNav.bind(Object(p.a)(a)),a.toggleModal=a.toggleModal.bind(Object(p.a)(a)),a.handleLogin=a.handleLogin.bind(Object(p.a)(a)),a.handleLogout=a.handleLogout.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),"developer"==this.username.value&&this.password.value==this.state.users.filter(function(e){return"developer"==e.username})[0].password?(this.login=!0,this.user="developer"):"ideaer"==this.username.value&&this.password.value==this.state.users.filter(function(e){return"ideaer"==e.username})[0].password?(this.login=!0,this.user="ideaer"):alert("User: "+this.username.value+" does not exist!"),e.preventDefault()}},{key:"handleLogout",value:function(e){this.login=!1,e.preventDefault(),window.location.reload()}},{key:"renderLoginLogout",value:function(){return this.login?l.a.createElement(E.a,{outline:!0,onClick:this.handleLogout},l.a.createElement("span",{className:"fa fa-sign-in fa-lg"}," Log out")):l.a.createElement(E.a,{outline:!0,onClick:this.toggleModal},l.a.createElement("span",{className:"fa fa-sign-in fa-lg"}," Login"))}},{key:"renderProject",value:function(){if(this.login)return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null,l.a.createElement(L.b,{className:"nav-link",to:"/project"},l.a.createElement("span",{style:{fontSize:"22px"},className:"ml-3 mr-3"}," Project"))),l.a.createElement(f.a,null,l.a.createElement(L.b,{className:"nav-link",to:"/repository"},l.a.createElement("span",{style:{fontSize:"22px"},className:"ml-3 mr-3"}," Repository"))))}},{key:"render",value:function(){var e=this,t=this.renderLoginLogout(),a=this.renderProject(),n=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(g.a,{onClick:this.toggleNav}),l.a.createElement(v.a,{className:"mr-auto",href:"/"},l.a.createElement("img",{src:"/WECOOP/assets/images/wecoop-logo.png",height:"30",width:"30",alt:"WECOOP"})),l.a.createElement(b.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(N.a,{navbar:!0},l.a.createElement(f.a,null,l.a.createElement(L.b,{className:"nav-link",to:"/home"},l.a.createElement("span",{style:{fontSize:"22px"},className:"ml-3 mr-3"}," Home"))),l.a.createElement(f.a,null,l.a.createElement(L.b,{className:"nav-link",to:"/features"},l.a.createElement("span",{style:{fontSize:"22px"},className:"ml-3 mr-3"}," Features"))),l.a.createElement(f.a,null,l.a.createElement(L.b,{className:"nav-link",to:"/pricing"},l.a.createElement("span",{style:{fontSize:"22px"},className:"ml-3 mr-3"}," Pricing"))),l.a.createElement(f.a,null,l.a.createElement(L.b,{className:"nav-link",to:"/contactus"},l.a.createElement("span",{style:{fontSize:"22px"},className:"ml-3 mr-3"}," Contact Us"))),a),l.a.createElement(N.a,{className:"ml-auto",navbar:!0},l.a.createElement(f.a,null,t)))));return l.a.createElement(l.a.Fragment,null,this.state.transparent?l.a.createElement(y.a,{dark:!0,expand:"md",fixed:"top"},n):l.a.createElement(y.a,{dark:!0,expand:"md",fixed:"top",style:{backgroundColor:"#000"}},n),l.a.createElement(w.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(O.a,{toggle:this.toggleModal},"Login"),l.a.createElement(k.a,null,l.a.createElement(j.a,{onSubmit:this.handleLogin},l.a.createElement(x.a,null,l.a.createElement(C.a,{htmlFor:"username"},"Username"),l.a.createElement(S.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),l.a.createElement(x.a,null,l.a.createElement(C.a,{htmlFor:"password"},"Password"),l.a.createElement(S.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),l.a.createElement(x.a,{check:!0},l.a.createElement(C.a,{check:!0},l.a.createElement(S.a,{type:"checkbox",name:"rememeber",innerRef:function(t){return e.remember=t}}),"Remember me")),l.a.createElement(E.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component));function F(e){var t=e.feature,a="col-6 text-center title-center masked-copy "+t.texture;return l.a.createElement("div",{className:"row align-items-center banner banner-2 ml-0 mr-0 pl-0 pr-0"},l.a.createElement("div",{className:a},t.id%2==0?l.a.createElement("p",{className:"font-weight-bold title-large text-center mb-0"},t.name):l.a.createElement("p",{className:"text-white mt-0 mr-5"},t.description)),l.a.createElement("div",{className:a},t.id%2!=0?l.a.createElement("p",{className:"font-weight-bold title-large text-center mb-0"},t.name):l.a.createElement("p",{className:"text-white mt-0 mr-5"},t.description)))}var M=function(e){var t=e.features.map(function(e){return l.a.createElement(F,{key:e.id,feature:e})});return l.a.createElement("div",{className:"container-fluid pl-0 pr-0"},t)},T=(n.Component,a(77)),z=a(78),I=a(79),P=a(80);function W(e){var t=e.price,a=t.features.map(function(e){return l.a.createElement(T.a,null,e)});return l.a.createElement("div",{className:"col-4 text-center"},l.a.createElement(z.a,{className:"text-white bg-dark pricing-card"},l.a.createElement(I.a,null,l.a.createElement(P.a,{className:"pricing-title"},t.name),a,l.a.createElement(T.a,null,"$ ",l.a.createElement("span",{style:{fontSize:"50px"}},t.price)," / month"))),l.a.createElement(E.a,{className:"mt-5"},"Choose"))}var D=function(e){var t=e.prices.map(function(e){return l.a.createElement(W,{key:e.id,price:e})});return l.a.createElement("div",{className:"container-fluid pl-0 pr-0 mr-0 ml-0"},l.a.createElement("div",{className:"row align-items-top banner banner-1 mr-0 ml-0",style:{paddingTop:"90px",paddingLeft:"30px",paddingRight:"30px"}},t))},R=a(81);function A(e){e.project;return l.a.createElement("div",{className:"row align-items-center ml-0 mr-0 pl-0 pr-0"},l.a.createElement("div",{className:"col-12 mt-5"},l.a.createElement(z.a,null,l.a.createElement(R.a,{className:"bg-dark text-white"},"project.title",l.a.createElement("button",{className:"btn btn-light btn-sm",src:"",style:{position:"absolute",right:5}},"Get more information")),l.a.createElement(I.a,null,l.a.createElement("div",{className:"container pl-0 pr-0 ml-0 mr-0"},l.a.createElement("div",{className:"row pl-0 pr-0 ml-0 mr-0"},l.a.createElement("div",{className:"col-12 col-md-4"},l.a.createElement("dl",{className:"row p-1"},l.a.createElement("dt",{className:"col-6"},"Level required"),l.a.createElement("dd",{className:"col-6"},"project.level"),l.a.createElement("dt",{className:"col-6"},"Language"),l.a.createElement("dd",{className:"col-6"},"project.language"),l.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),l.a.createElement("dd",{className:"col-6"},"$1,250,375"),l.a.createElement("dt",{className:"col-6"},"Employees"),l.a.createElement("dd",{className:"col-6"},"40"))),l.a.createElement("div",{className:"col-12 col-md-7 offset-1"},l.a.createElement("p",null,"project.description"))))))))}var J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).user="developer",a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"row align-items-center vh",style:{paddingTop:100}},l.a.createElement("div",{className:"col-12 text-center masked-copy texture-4"},l.a.createElement("p",{className:"font-weight-bold title-middle"},"Scroll down to choose a favourite project you would like to work on."))),l.a.createElement(S.a,{placeholder:"Or search here"}),A(""),A(""),A(""))))}}]),t}(n.Component);function $(e){e.repo;return l.a.createElement("div",{className:"col-6 mt-5"},l.a.createElement(z.a,null,l.a.createElement(R.a,{className:"bg-dark text-white"},"repo.title",l.a.createElement("button",{className:"btn btn-light btn-sm",src:"",style:{position:"absolute",right:5}},"Work on")),l.a.createElement(I.a,null,l.a.createElement("div",{className:"container pl-0 pr-0 ml-0 mr-0"},l.a.createElement("div",{className:"row pl-0 pr-0 ml-0 mr-0"},l.a.createElement("div",{className:"col-12 col-md-7 offset-1"},l.a.createElement("p",null,"repo.description")))))))}var H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).user="developer",a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row align-items-center",style:{paddingTop:100}}),l.a.createElement("div",{className:"row align-items-center ml-0 mr-0 pl-0 pr-0"},$(""),$(""),$("")))}}]),t}(n.Component),U=[{id:0,name:"Basic",price:"2.99",features:["cheap","good","free"]},{id:1,name:"Advanced",price:"9.99",features:["cheap2","good2","free2","cheap23","good23","free23"]},{id:2,name:"Professional",price:"19.99",features:["cheap24","good24","free24","cheap234","good234","free234"]}],Y=[{id:0,username:"developer",password:"developer"},{id:1,username:"ideaer",password:"ideaer"}],q=[{id:0,name:"Software Development Life Cycle",texture:"texture-1",description:"We enforce the rule of SDLC to keep everything tracked. Even if a developer quits in the middle, or the businessman wants to make a second version, new-joiners can always be clear what has been done before."},{id:1,name:"Big Data Analysis",texture:"texture-2",description:"balablalalllll"},{id:2,name:"Automatic Code Checking",texture:"texture-3",description:"We integrate automatic code checking tools to alleviate the trust issue between ideaers and developers."}],G=a(23),K=a(37),Q=a(82),V=a(83),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleBlur=function(e){return function(t){a.setState({touched:Object(K.a)({},a.state.touched,Object(G.a)({},e,!0))})}},a.state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},a.handleInputChange=a.handleInputChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.handleBlur=a.handleBlur.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(G.a)({},n,a))}},{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(this.state)),alert("Current State is: "+JSON.stringify(this.state)),e.preventDefault()}},{key:"validate",value:function(e,t,a,n){var l={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.length<3?l.firstname="First Name should be >= 3 characters":this.state.touched.firstname&&e.length>10&&(l.firstname="First Name should be <= 10 characters"),this.state.touched.lastname&&t.length<3?l.lastname="Last Name should be >= 3 characters":this.state.touched.lastname&&t.length>10&&(l.lastname="Last Name should be <= 10 characters");return this.state.touched.telnum&&!/^\d+$/.test(a)&&(l.telnum="Tel. Number should contain only numbers"),this.state.touched.email&&1!==n.split("").filter(function(e){return"@"===e}).length&&(l.email="Email should contain a @"),l}},{key:"render",value:function(){var e=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-content pt-xl-5 mt-xl-5 text-white"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Send us Your Feedback")),l.a.createElement("div",{className:"col-12 col-md-9"},l.a.createElement(j.a,{onSubmit:this.handleSubmit},l.a.createElement(x.a,{row:!0},l.a.createElement(C.a,{htmlfor:"firstname",md:2},"First Name"),l.a.createElement(Q.a,{md:10},l.a.createElement(S.a,{type:"text",id:"firstname",name:"firstname",placeholder:"First Name",value:this.state.firstname,valid:""===e.firstname,invalid:""!==e.firstname,onBlur:this.handleBlur("firstname"),onChange:this.handleInputChange}),l.a.createElement(V.a,null,e.firstname))),l.a.createElement(x.a,{row:!0},l.a.createElement(C.a,{htmlfor:"lastname",md:2},"Last Name"),l.a.createElement(Q.a,{md:10},l.a.createElement(S.a,{type:"text",id:"lastname",name:"lastname",placeholder:"Last Name",value:this.state.lastname,valid:""===e.lastname,invalid:""!==e.lastname,onBlur:this.handleBlur("lastname"),onChange:this.handleInputChange}),l.a.createElement(V.a,null,e.lastname))),l.a.createElement(x.a,{row:!0},l.a.createElement(C.a,{htmlfor:"telnum",md:2},"Contact Tel."),l.a.createElement(Q.a,{md:10},l.a.createElement(S.a,{type:"tel",id:"telnum",name:"telnum",placeholder:"Tel. Number",value:this.state.telnum,valid:""===e.telnum,invalid:""!==e.telnum,onBlur:this.handleBlur("telnum"),onChange:this.handleInputChange}),l.a.createElement(V.a,null,e.telnum))),l.a.createElement(x.a,{row:!0},l.a.createElement(C.a,{htmlfor:"email",md:2},"Email"),l.a.createElement(Q.a,{md:10},l.a.createElement(S.a,{type:"email",id:"email",name:"email",placeholder:"Email",value:this.state.email,valid:""===e.email,invalid:""!==e.email,onBlur:this.handleBlur("email"),onChange:this.handleInputChange}),l.a.createElement(V.a,null,e.email))),l.a.createElement(x.a,{row:!0},l.a.createElement(Q.a,{md:{size:6,offset:2}},l.a.createElement(x.a,{check:!0},l.a.createElement(C.a,{check:!0},l.a.createElement(S.a,{type:"checkbox",name:"agree",checked:this.state.agree,onChange:this.handleInputChange})," "," ",l.a.createElement("strong",null,"May we contact you?")))),l.a.createElement(Q.a,{md:{size:3,offset:1}},l.a.createElement(S.a,{type:"select",name:"contactType",value:this.state.contactType,onChange:this.handleInputChange},l.a.createElement("option",null,"Tel."),l.a.createElement("option",null,"Email")))),l.a.createElement(x.a,{row:!0},l.a.createElement(C.a,{htmlfor:"message",md:2},"Your Feedback"),l.a.createElement(Q.a,{md:10},l.a.createElement(S.a,{type:"textarea",id:"message",name:"message",rows:"12",value:this.state.message,onChange:this.handleInputChange}))),l.a.createElement(x.a,{row:!0},l.a.createElement(Q.a,{md:{size:10,offset:2}},l.a.createElement(E.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),Z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={prices:U,users:Y,location:e.location,transparentHeader:["/home","/pricing"],features:q},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.transparentHeader.indexOf(this.state.location)<0?l.a.createElement(B,{users:this.state.users,transparent:!1}):l.a.createElement(B,{users:this.state.users,transparent:!0}),l.a.createElement(h.d,null,l.a.createElement(h.b,{path:"/home",component:d}),l.a.createElement(h.b,{path:"/features",component:function(){return l.a.createElement(M,{features:e.state.features})}}),l.a.createElement(h.b,{exact:!0,path:"/",render:function(){return l.a.createElement(h.a,{to:"/home"})}}),l.a.createElement(h.b,{path:"/pricing",component:function(){return l.a.createElement(D,{prices:e.state.prices})}}),l.a.createElement(h.b,{path:"/project",component:J}),l.a.createElement(h.b,{exact:!0,path:"/repository",component:H}),l.a.createElement(h.b,{path:"/contactus",component:X}),l.a.createElement(h.b,{component:d})))}}]),t}(n.Component),_=Object(h.f)(Z),ee=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(L.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(_,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(60),a(61);c.a.render(l.a.createElement(ee,null),document.getElementById("root")),document.body.style="background: black;",document.title="WECOOP","serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.7e5ba07b.chunk.js.map