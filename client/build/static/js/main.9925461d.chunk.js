(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{123:function(e,a,t){},124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),i=t.n(o),l=(t(92),t(14)),s=t(15),c=t(18),m=t(17),p=t(36),u=t(64),d=t(162),h=t(34),g=t(164),E=t(73),b=t(65),v=t.n(b),f=t(167),y=t(71),w=t.n(y),C=t(3),x=t(67),k=t(166),S=t(161),j=t(156),N=t(74),O=t(155),P=t(72),B=t.n(P),D=t(37),A=t.n(D),I=t(41),T=t.n(I),W=t(165),L=t(158),U=t(157),F=t(28),H=t.n(F);function q(){return r.a.createElement(h.a,{variant:"body2",color:"textPrimary",align:"center"},"Copyright \xa9 ",r.a.createElement(O.a,{color:"inherit",href:"https://www.linkedin.com/in/mohaimenkhan/"},"Mohaimen Khan")," ",(new Date).getFullYear())}var M=Object(E.a)({typography:{fontFamily:'"Apple Color Emoji"'}}),R=Object(x.a)({root:{height:"100vh"},paper:{margin:M.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:M.spacing(1),backgroundColor:M.palette.secondary.main},form:{width:"100%",marginTop:M.spacing(1)},submit:{margin:M.spacing(3,0,2)},image:{backgroundImage:"url(https://picsum.photos/id/1016/3844/2563)",backgroundRepeat:"no-repeat",backgroundColor:"light"===M.palette.type?M.palette.grey[50]:M.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"}});var z,G=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleClick=function(e){console.log(n.state),!1!==n.checkVals()?H.a.post("/users/create",{username:n.state.username,password:n.state.password,name:n.state.name}).then((function(e){200===e.status&&n.props.appContext.setState({currentScreen:r.a.createElement(de,{appContext:n.props.appContext})})})).catch((function(e){window.alert("Bad Request. Please Try Again")})):window.alert("Not all values passed in properly. Please check again")},n.handleNameChange=function(e){n.setState({name:e.target.value})},n.handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.changeToLogin=function(e){n.props.appContext.setState({currentScreen:r.a.createElement(se,{appContext:n.props.appContext})})},n.state={username:"",password:"",name:""},n}return Object(s.a)(t,[{key:"checkVals",value:function(){return""!==this.state.username&&""!==this.state.password&&""!==this.state.name&&!(void 0===this.state.username||void 0===this.state.password||void 0===this.state.name)}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(j.a,{container:!0,component:"main",className:a.root},r.a.createElement(U.a,null),r.a.createElement(j.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(j.a,{item:!0,xs:12,sm:8,md:5,component:N.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(L.a,{className:a.avatar},r.a.createElement(T.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("br",null),r.a.createElement(j.a,{container:!0,spacing:2},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Full Name",name:"name",autoFocus:!0,value:this.state.name,onChange:this.handleNameChange})),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:this.state.username,onChange:this.handleUsernameChange})),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:this.state.password,onChange:this.handlePasswordChange}))),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(a){return e.handleClick(a)}},"Sign Up"),r.a.createElement(j.a,{container:!0,justify:"flex-end"},r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,{href:"#",variant:"body2",onClick:function(a){return e.changeToLogin(a)}},"Already have an account? Sign in"))),r.a.createElement(k.a,{mt:5},r.a.createElement(q,null)))))}}]),t}(n.Component);z=G;var Y=G=function(e){var a=R();return r.a.createElement(z,Object.assign({},e,{classes:a}))},V=t(47),K=t.n(V),_=t(70),J=t(160),$=t(159),X=t(163),Z=t(42),Q=t(168),ee=Object(E.a)({typography:{fontFamily:'"Apple Color Emoji"'}}),ae=Object(x.a)({root:{display:"flex",textAlign:"center"},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:ee.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:ee.spacing(4),paddingBottom:ee.spacing(4)},appBar:{backgroundColor:"rgba(0,0,0,0.8)",zIndex:ee.zIndex.drawer+1,transition:ee.transitions.create(["width","margin"],{easing:ee.transitions.easing.sharp,duration:ee.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:ee.transitions.create(["width","margin"],{easing:ee.transitions.easing.sharp,duration:ee.transitions.duration.enteringScreen})},paper:{borderStyle:"solid",borderColor:"black",borderWidth:2,backgroundColor:"rgba(255, 255, 255, 0.8)",padding:ee.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:600},storeHeight:{height:215},leftbarHeight:{height:215},button:{width:200,margin:ee.spacing(1)},avatar:{backgroundColor:Z.a[500]},listSection:{paddingTop:10,backgroundColor:"inherit"},list:{flexDirection:"column"},ul:{backgroundColor:"inherit",padding:0}});var te=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).componentDidMount=Object(_.a)(K.a.mark((function e(){var a=this;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setInterval((function(){return a.setState({today:new Date})}),1e3),e.next=3,H.a.get("stores/get_all").then((function(e){for(var t=e.data,n=[],o=a.props.classes,i=Object(C.a)(o.paper,o.storeHeight),l=0,s=0,c=0;c<t.stores.length;++c)l+=t.stores[c].leaseAmount-t.stores[c].leasePaid,s++;n.push(r.a.createElement(Q.a,{className:o.list,subheader:r.a.createElement("li",null)},t.stores.map((function(e){return r.a.createElement("li",{key:"section-".concat(e),className:o.listSection},r.a.createElement("ul",{className:o.ul},r.a.createElement(N.a,{className:i,style:{alignItems:"center"}},r.a.createElement(h.a,{variant:"h5",color:"textSecondary",component:"p"},e.name)," ",r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(h.a,{variant:"h7",color:"textPrimary",component:"p"},r.a.createElement("b",{style:{color:"red"}},"Store Created By: ")," ",e.createdBy),r.a.createElement(h.a,{variant:"h7",color:"textPrimary",component:"p"},r.a.createElement("b",null,"Lease: ")," ",e.leaseAmount," |  ",r.a.createElement("b",null,"Lease Paid: ")," ",e.leasePaid),r.a.createElement(h.a,{variant:"h7",color:"textPrimary",component:"p"},r.a.createElement("b",null,"Monthly Rent: ")," ",e.rent),r.a.createElement(h.a,{variant:"h7",color:"textSecondary",component:"p"},r.a.createElement("b",null,"Lease Start: ")," ",new Date(e.leaseStart).toString()),r.a.createElement(h.a,{variant:"h7",color:"textSecondary",component:"p"},r.a.createElement("b",null,"Lease End: ")," ",new Date(e.leaseEnd).toString())),r.a.createElement("div",{style:{display:"inline"}},r.a.createElement(f.a,{variant:"contained",color:"primary",className:o.button},r.a.createElement("b",null,"Edit Lease")),r.a.createElement(f.a,{variant:"outlined",color:"secondary",className:o.button},r.a.createElement("b",null,"View Rent"))))))})))),a.setState({storeCount:s,stores:n,leaseCount:l})})).catch((function(e){window.alert(e)}));case 3:case"end":return e.stop()}}),e)}))),n.state={name:n.props.user,today:new Date,email:n.props.email,stores:[],storeCount:0,leaseCount:0},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,a=Object(C.a)(e.paper,e.fixedHeight),t=Object(C.a)(e.paper,e.leftbarHeight);return r.a.createElement("div",{className:e.root},r.a.createElement($.a,{position:"absolute",className:Object(C.a)(e.appBar,this.state.open&&e.appBarShift)},r.a.createElement(J.a,{className:e.toolbar},r.a.createElement(h.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard"))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(S.a,{maxWidth:"lg",className:e.container},r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{item:!0,xs:12,md:12,lg:3},r.a.createElement(N.a,{className:t},r.a.createElement(d.a,null,r.a.createElement(X.a,{avatar:r.a.createElement(L.a,{"aria-label":"name",className:e.avatar},this.state.name.charAt(0)),title:r.a.createElement("b",null,this.state.name),subheader:r.a.createElement("b",null,this.state.today.getDay()+"/"+this.state.today.getMonth()+"/"+this.state.today.getFullYear())}),r.a.createElement(g.a,null,r.a.createElement(h.a,{variant:"h7",color:"textPrimary",component:"p"},r.a.createElement("b",null,"Number of Stores: ")," ",this.state.storeCount),r.a.createElement(h.a,{variant:"h7",color:"textPrimary",component:"p"},r.a.createElement("b",{style:{color:"red"}},"Lease Not Collected: ")," $",this.state.leaseCount)," ",r.a.createElement("br",null),r.a.createElement(f.a,{variant:"contained",color:"secondary",className:e.button},r.a.createElement("b",null,"Add New Store")))))),r.a.createElement(j.a,{item:!0,xs:12,md:12,lg:6},r.a.createElement(N.a,{className:a},this.state.stores)),r.a.createElement(j.a,{item:!0,xs:12,md:12,lg:3},r.a.createElement(N.a,{className:t},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(A.a,{value:this.state.today,size:210}))))))))}}]),t}(n.Component),ne=te=function(e){return function(a){var t=ae();return r.a.createElement(e,Object.assign({},a,{classes:t}))}}(te);function re(){return r.a.createElement(h.a,{variant:"body2",color:"textPrimary",align:"center"},"Copyright \xa9 ",r.a.createElement(O.a,{color:"inherit",href:"https://www.linkedin.com/in/mohaimenkhan/"},"Mohaimen Khan")," ",(new Date).getFullYear())}var oe=Object(E.a)({typography:{fontFamily:'"Apple Color Emoji"'}}),ie=Object(x.a)({root:{height:"100vh"},image:{backgroundImage:"url(https://picsum.photos/id/1003/1181/1772)",backgroundRepeat:"no-repeat",backgroundColor:"light"===oe.palette.type?oe.palette.grey[50]:oe.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:oe.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:oe.spacing(1),backgroundColor:oe.palette.secondary.main},form:{width:"100%",marginTop:oe.spacing(1)},submit:{margin:oe.spacing(3,0,2)}});var le=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).changeToSignUp=function(e){n.appContext.setState({currentScreen:r.a.createElement(Y,{appContext:n.props.appContext})})},n.handleClick=function(e){!1!==n.checkVals()?H.a.post("/users/verify",{username:n.state.username,password:n.state.password}).then((function(e){200===e.status&&n.props.appContext.setState({currentScreen:r.a.createElement(ne,{appContext:n.props.appContext,user:n.state.username})})})).catch((function(e){window.alert("Bad Username or Password")})):window.alert("Not all values passed in properly. Please check again")},n.handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.state={username:"",password:""},n}return Object(s.a)(t,[{key:"checkVals",value:function(){return""!==this.state.username&&""!==this.state.password&&!(void 0===this.state.username||void 0===this.state.password)}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(j.a,{container:!0,component:"main",className:a.root},r.a.createElement(U.a,null),r.a.createElement(j.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(j.a,{item:!0,xs:12,sm:8,md:5,component:N.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(L.a,{className:a.avatar},r.a.createElement(T.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:this.state.username,onChange:this.handleUsernameChange}),r.a.createElement(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:this.state.password,onChange:this.handlePasswordChange}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(a){return e.handleClick(a)}},"Sign In"),r.a.createElement(j.a,{container:!0},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(O.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,{href:"#",variant:"body2",onClick:function(a){return e.changeToSignUp(a)}},"Don't have an account? Sign Up"))),r.a.createElement(k.a,{mt:5},r.a.createElement(re,null)))))}}]),t}(n.Component),se=le=function(e){return function(a){var t=ie();return r.a.createElement(e,Object.assign({},a,{classes:t}))}}(le);function ce(){return r.a.createElement(h.a,{variant:"body2",color:"textPrimary",align:"center",style:{color:"white"}},"Copyright \xa9 ",r.a.createElement(O.a,{color:"inherit",href:"https://www.linkedin.com/in/mohaimenkhan/"},"Mohaimen Khan")," ",(new Date).getFullYear())}var me=Object(E.a)({typography:{fontFamily:'"Apple Color Emoji"'}}),pe=Object(x.a)({iframe:{marginLeft:"5%",borderStyle:"solid",borderWidth:"thick"},root:{display:"flex",textAlign:"center"},toolbar:{paddingRight:24},toolbarIcon:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},me.mixins.toolbar),menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:me.transitions.create("width",{easing:me.transitions.easing.sharp,duration:me.transitions.duration.enteringScreen})},drawerPaperClose:Object(p.a)({overflowX:"hidden",transition:me.transitions.create("width",{easing:me.transitions.easing.sharp,duration:me.transitions.duration.leavingScreen}),width:me.spacing(7)},me.breakpoints.up("sm"),{width:me.spacing(9)}),appBarSpacer:me.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:me.spacing(4),paddingBottom:me.spacing(4)},paper:{backgroundColor:"rgba(0, 0, 0, 0.5)",padding:me.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:500},button:{margin:me.spacing(1)},clock:{height:300,width:300}});var ue=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={date:new Date},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.setState({date:new Date})}),1e3)}},{key:"changeToLogin",value:function(e){this.props.appContext.setState({currentScreen:r.a.createElement(se,{appContext:this.props.appContext})})}},{key:"changeToSignUp",value:function(e){this.props.appContext.setState({currentScreen:r.a.createElement(Y,{appContext:this.props.appContext})})}},{key:"render",value:function(){var e=this,a=this.props.classes,t=Object(C.a)(a.paper,a.fixedHeight);return r.a.createElement("div",{className:a.root},r.a.createElement("main",{className:a.content},r.a.createElement(S.a,{maxWidth:"lg",className:a.container},r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(A.a,{value:this.state.date,size:180}))),r.a.createElement(j.a,{item:!0,xs:12,md:12,lg:6},r.a.createElement(d.a,{className:a.root,style:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},r.a.createElement(g.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h4",color:"textPrimary",component:"p"},r.a.createElement("b",{style:{color:"white"}},"Dr. Ahasan Plaza")),r.a.createElement("img",{style:{marginTop:"5%",height:140},alt:"home page icon",src:v.a}),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h6",component:"p",style:{color:"white"}},r.a.createElement("b",null,"Location:")," Kamdia Rd, Gobindogonj (\u0997\u09cb\u09ac\u09bf\u09a8\u09cd\u09a6\u0997\u099e\u09cd\u099c), Gaibandha, Bangladesh ",r.a.createElement("br",null),r.a.createElement("b",null,"Contact Number: ")," +8801718023191")," ",r.a.createElement("br",null),r.a.createElement(f.a,{variant:"contained",color:"primary",className:a.button,startIcon:r.a.createElement(w.a,null),onClick:function(a){return e.changeToLogin(a)}},"Login")," ",r.a.createElement("br",null),r.a.createElement(f.a,{variant:"contained",color:"secondary",className:a.button,startIcon:r.a.createElement(B.a,null),onClick:function(a){return e.changeToSignUp(a)}},"Sign Up"),r.a.createElement(k.a,{pt:2},r.a.createElement(ce,null))))),r.a.createElement(j.a,{item:!0,xs:12,md:12,lg:6},r.a.createElement(N.a,{className:t},r.a.createElement("iframe",{className:a.iframe,width:"90%",height:"480",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0",title:"Map of shopping mall",src:"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpTIYWI_i_DkRCAAGlNBaD5U&key=AIzaSyClGuqvS5S9nLZiy6oxMgEa8n1UfYCtOBw"})))))))}}]),t}(n.Component),de=ue=function(e){return function(a){var t=pe();return r.a.createElement(e,Object.assign({},a,{classes:t}))}}(ue),he=(t(123),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={currentScreen:[]},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({currentScreen:r.a.createElement(de,{appContext:this})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.currentScreen)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,a,t){e.exports=t.p+"static/media/home.7bc7446a.png"},87:function(e,a,t){e.exports=t(124)},92:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.9925461d.chunk.js.map