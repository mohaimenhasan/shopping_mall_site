(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),o=t.n(i),l=(t(85),t(16)),c=t(17),s=t(22),m=t(21),u=t(34),p=t(58),d=t(152),h=t(110),g=t(153),f=t(67),E=t(59),v=t.n(E),b=t(147),w=t(65),y=t.n(w),C=t(3),x=t(61),j=t(155),k=t(148),S=t(149),N=t(150),O=t(151),B=t(144),P=t(68),W=t(143),I=t(64),U=t.n(I),A=t(66),D=t.n(A),q=t(39),F=t.n(q),T=t(154),L=t(146),G=t(145),M=t(35),H=t.n(M);function R(){return r.a.createElement(h.a,{variant:"body2",color:"textPrimary",align:"center"},"Copyright \xa9 ",r.a.createElement(W.a,{color:"inherit",href:"https://www.linkedin.com/in/mohaimenkhan/"},"Mohaimen Khan")," ",(new Date).getFullYear())}var Y=Object(f.a)({typography:{fontFamily:'"Apple Color Emoji"'}}),K=Object(x.a)({root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===Y.palette.type?Y.palette.grey[50]:Y.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:Y.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:Y.spacing(1),backgroundColor:Y.palette.secondary.main},form:{width:"100%",marginTop:Y.spacing(1)},submit:{margin:Y.spacing(3,0,2)}});var z,J=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleClick=function(e){H.a.post("/users/verify",{username:n.state.username,password:n.state.password}).then((function(e){200===e.status&&window.alert("Verified user")})).catch((function(e){window.alert("Bad Username or Password")}))},n.handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.state={username:"",password:""},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(B.a,{container:!0,component:"main",className:a.root},r.a.createElement(G.a,null),r.a.createElement(B.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(B.a,{item:!0,xs:12,sm:8,md:5,component:P.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(L.a,{className:a.avatar},r.a.createElement(F.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(T.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:this.state.username,onChange:this.handleUsernameChange}),r.a.createElement(T.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:this.state.password,onChange:this.handlePasswordChange}),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(a){return e.handleClick(a)}},"Sign In"),r.a.createElement(B.a,{container:!0},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(W.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(B.a,{item:!0},r.a.createElement(W.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(j.a,{mt:5},r.a.createElement(R,null)))))}}]),t}(n.Component);z=J;var _=J=function(e){var a=K();return r.a.createElement(z,Object.assign({},e,{classes:a}))};function V(){return r.a.createElement(h.a,{variant:"body2",color:"textPrimary",align:"center"},"Copyright \xa9 ",r.a.createElement(W.a,{color:"inherit",href:"https://www.linkedin.com/in/mohaimenkhan/"},"Mohaimen Khan")," ",(new Date).getFullYear())}var X=Object(f.a)({typography:{fontFamily:'"Apple Color Emoji"'}}),Z=Object(x.a)({root:{height:"100vh"},paper:{margin:X.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:X.spacing(1),backgroundColor:X.palette.secondary.main},form:{width:"100%",marginTop:X.spacing(1)},submit:{margin:X.spacing(3,0,2)}});var $=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleClick=function(e){H.a.post("/users/verify",{username:n.state.username,password:n.state.password}).then((function(e){200===e.status&&window.alert("Verified user")})).catch((function(e){window.alert("Bad Username or Password")}))},n.handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.state={username:"",password:""},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(B.a,{container:!0,component:"main",className:e.root},r.a.createElement(G.a,null),r.a.createElement(B.a,{item:!0,xs:12,sm:8,md:5,component:P.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(L.a,{className:e.avatar},r.a.createElement(F.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("br",null),r.a.createElement(B.a,{container:!0,spacing:2},r.a.createElement(B.a,{item:!0,xs:12,sm:6},r.a.createElement(T.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(B.a,{item:!0,xs:12,sm:6},r.a.createElement(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(T.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}))),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(B.a,{container:!0,justify:"flex-end"},r.a.createElement(B.a,{item:!0},r.a.createElement(W.a,{href:"#",variant:"body2"},"Already have an account? Sign in"))),r.a.createElement(j.a,{mt:5},r.a.createElement(V,null)))))}}]),t}(n.Component),Q=$=function(e){return function(a){var t=Z();return r.a.createElement(e,Object.assign({},a,{classes:t}))}}($);function ee(){return r.a.createElement(h.a,{variant:"body2",color:"textPrimary",align:"center"},"Copyright \xa9 ",r.a.createElement(W.a,{color:"inherit",href:"https://www.linkedin.com/in/mohaimenkhan/"},"Mohaimen Khan")," ",(new Date).getFullYear())}var ae=Object(f.a)({typography:{fontFamily:'"Apple Color Emoji"'}}),te=Object(x.a)({iframe:{marginLeft:"5%",borderStyle:"solid",borderWidth:"thick"},root:{display:"flex",textAlign:"center"},toolbar:{paddingRight:24},toolbarIcon:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},ae.mixins.toolbar),menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:ae.transitions.create("width",{easing:ae.transitions.easing.sharp,duration:ae.transitions.duration.enteringScreen})},drawerPaperClose:Object(u.a)({overflowX:"hidden",transition:ae.transitions.create("width",{easing:ae.transitions.easing.sharp,duration:ae.transitions.duration.leavingScreen}),width:ae.spacing(7)},ae.breakpoints.up("sm"),{width:ae.spacing(9)}),appBarSpacer:ae.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:ae.spacing(4),paddingBottom:ae.spacing(4)},paper:{padding:ae.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:500},button:{margin:ae.spacing(1)}});var ne=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={},n}return Object(c.a)(t,[{key:"changeToLogin",value:function(e){this.props.appContext.setState({currentScreen:r.a.createElement(_,{appContext:this.props.appContext})})}},{key:"changeToSignUp",value:function(e){this.props.appContext.setState({currentScreen:r.a.createElement(Q,{appContext:this.props.appContext})})}},{key:"render",value:function(){var e=this,a=this.props.classes,t=Object(C.a)(a.paper,a.fixedHeight);return r.a.createElement("div",{className:a.root},r.a.createElement(k.a,{position:"absolute",className:Object(C.a)(a.appBar,this.state.open&&a.appBarShift)},r.a.createElement(S.a,{className:a.toolbar},r.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"open drawer",className:Object(C.a)(a.menuButton,this.state.open&&a.menuButtonHidden)},r.a.createElement(U.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title},"Dashboard"))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement(O.a,{maxWidth:"lg",className:a.container},r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{item:!0,xs:12,md:12,lg:6},r.a.createElement(d.a,{className:a.root},r.a.createElement(g.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h4",color:"textPrimary",component:"p"},r.a.createElement("b",null,"Dr. Ahason Plaza")),r.a.createElement("img",{style:{marginTop:"5%",height:140},alt:"home page icon",src:v.a}),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h6",component:"p"},r.a.createElement("b",null,"Location:")," Kamdia Rd, Gobindogonj (\u0997\u09cb\u09ac\u09bf\u09a8\u09cd\u09a6\u0997\u099e\u09cd\u099c), Gaibandha, Bangladesh ",r.a.createElement("br",null),r.a.createElement("b",null,"Contact Number: ")," +8801718023191")," ",r.a.createElement("br",null),r.a.createElement(b.a,{variant:"contained",color:"primary",className:a.button,startIcon:r.a.createElement(y.a,null),onClick:function(a){return e.changeToLogin(a)}},"Login")," ",r.a.createElement("br",null),r.a.createElement(b.a,{variant:"contained",color:"secondary",className:a.button,startIcon:r.a.createElement(D.a,null),onClick:function(a){return e.changeToSignUp(a)}},"Sign Up"),r.a.createElement(j.a,{pt:2},r.a.createElement(ee,null))))),r.a.createElement(B.a,{item:!0,xs:12,md:12,lg:6},r.a.createElement(P.a,{className:t},r.a.createElement("iframe",{className:a.iframe,width:"90%",height:"480",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0",title:"Map of shopping mall",src:"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpTIYWI_i_DkRCAAGlNBaD5U&key=AIzaSyClGuqvS5S9nLZiy6oxMgEa8n1UfYCtOBw"})))))))}}]),t}(n.Component),re=ne=function(e){return function(a){var t=te();return r.a.createElement(e,Object.assign({},a,{classes:t}))}}(ne),ie=(t(108),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={currentScreen:[]},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({currentScreen:r.a.createElement(re,{appContext:this})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.currentScreen)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,a,t){e.exports=t.p+"static/media/home.7bc7446a.png"},80:function(e,a,t){e.exports=t(109)},85:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.9cabe98a.chunk.js.map