(this["webpackJsonpmy-sketches"]=this["webpackJsonpmy-sketches"]||[]).push([[4],{48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t),a.d(t,"Layout",(function(){return J}));var c=a(35),s=a(36),n=a(38),i=a(37),r=a(0),o=a(2),l=a(19),m=a(9),j=a(47),b=a(18),d=(a(48),a(7)),u=["btn--primary","btn--outline"],h=["btn--medium","btn--large"];var O=function(e){var t=e.children,a=e.type,c=e.onClick,s=e.buttonStyle,n=e.buttonSize,i=u.includes(s)?s:u[0],r=h.includes(n)?n:h[0];return Object(d.jsx)(b.b,{to:"/my-sketches/about-me",className:"btn-mobile",children:Object(d.jsx)("button",{className:"btn ".concat(i," ").concat(r),onClick:c,type:a,children:t})})};a(49);var x=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(!0),n=Object(j.a)(s,2),i=n[0],o=n[1],l=function(){c(!1),window.scrollTo(0,0)},m=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(r.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsxs)(b.b,{to:"/my-sketches",className:"navbar-logo",onClick:l,children:[Object(d.jsx)("i",{className:"fab fa-firstdraft"}),"DRAWING DREAMS"]}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){c(!a)},children:Object(d.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(d.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{to:"/my-sketches",className:"nav-links",onClick:l,children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/my-sketches/about-me",className:"nav-links-mobile",onClick:l,children:"About Artist"})})]}),i&&Object(d.jsx)(O,{buttonStyle:"btn--outline",children:"About Artist"})]})})})};a(50),a(51);var f=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:"cards__item",children:[Object(d.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(d.jsx)("img",{className:"cards__item__img",alt:"DRAWING DREAMS",src:e.src})}),Object(d.jsx)("div",{className:e.small?"cards__item__info__small":"cards__item__info",children:Object(d.jsxs)("div",{className:e.small?"cards__item__text__small":"cards__item__text",children:['"',e.text,'"',Object(d.jsxs)("span",{children:[" - ",e.secondText]})]})})]})})};var p=function(e){var t=e.sketchData,a=Object(r.useState)([]),c=Object(j.a)(a,2),s=c[0],n=c[1],i=Object(r.useState)([]),o=Object(j.a)(i,2),l=o[0],m=o[1];Object(r.useEffect)((function(){if(t.length>0){var e=b(t);n(e[0]),m(e[1])}}),[t]);var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],a=[];t.push(e.slice(0,2));for(var c=(e.length-2)/3,s=2,n=0;n<c;n++){var i=e.slice(s,s+3);a.push(i),s+=3}return[t,a]};return Object(d.jsxs)("div",{className:"exhibition",children:[Object(d.jsx)("div",{className:"exhibition__header__text",children:"Check out my MAGICAL Sketches !!!"}),Object(d.jsx)("div",{className:"exhibition__container",children:Object(d.jsxs)("div",{className:"exhibition__wrapper",children:[s&&s.length>0&&s.map((function(e,t){return Object(d.jsxs)("ul",{className:"exhibition__items",children:[Object(d.jsx)(f,{src:"/my-sketches"+e[0].image,text:e[0].quote,label:e[0].name,secondText:e[0].quote_writer},e[0].name),Object(d.jsx)(f,{src:"/my-sketches"+e[1].image,text:e[1].quote,label:e[1].name,secondText:e[1].quote_writer},e[1].name)]},t)})),l&&l.length>0&&l.map((function(e,t){return Object(d.jsxs)("ul",{className:"exhibition__items",children:[e[0]&&Object(d.jsx)(f,{src:"/my-sketches"+e[0].image,text:e[0].quote,label:e[0].name,secondText:e[0].quote_writer},e[0].name),e[1]&&Object(d.jsx)(f,{src:"/my-sketches"+e[1].image,text:e[1].quote,label:e[1].name,secondText:e[1].quote_writer},e[1].name),e[2]&&Object(d.jsx)(f,{src:"/my-sketches"+e[2].image,text:e[2].quote,label:e[2].name,secondText:e[2].quote_writer},e[2].name)]},t)}))]})})]})},v=(a(52),a.p+"static/media/comDraw7.1b351cc8.jpg"),k=a.p+"static/media/comDraw6.47fa524f.jpg",g=a.p+"static/media/comDraw3.8d8ff35a.jpg",N=a.p+"static/media/comDraw1.9944972e.jpg",_=a.p+"static/media/comDraw77.5516201b.jpg",w=a.p+"static/media/comDraw66.6447aeec.jpg",y=a.p+"static/media/comDraw33.2084e4a6.jpg",D=a.p+"static/media/comDraw11.55c9126a.jpg",S=0,A=0,C=window.innerWidth<=550?[_,w,y,D]:[v,k,g,N],F=null,q=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).showSlides=function(){var e,t=document.querySelector("#home-container"),a=document.getElementsByClassName("dot");for(A++,t.style.backgroundImage="url("+C[S]+")",(S+=1)===C.length&&(S=0),A>4&&(A=1),e=0;e<4;e++)a[e].className=a[e].className.replace("dot-active","");a[A-1].className+=" dot-active",F=setTimeout(s.showSlides,2300)},s.state={drawData:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({drawData:this.props.sketches}),this.showSlides()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props.sketches;e.sketches.length!==a.length&&this.setState({drawData:a})}},{key:"componentWillUnmount",value:function(){clearTimeout(F)}},{key:"render",value:function(){var e=this.state.drawData,t=void 0===e?[]:e;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{id:"home-container",className:"home-container",children:[Object(d.jsx)("h1",{children:"CANVAS OF LIFE AWAITS"}),Object(d.jsx)("p",{children:"What are you waiting for?"}),Object(d.jsxs)("div",{style:{textAlign:"center"},children:[Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"})]}),Object(d.jsx)("div",{className:"home-slider",children:Object(d.jsx)("i",{className:"fas fa-angle-double-down"})})]}),Object(d.jsx)(p,{sketchData:t})]})}}]),a}(r.Component),I=Object(l.b)((function(e){var t=e.sketchReducer,a=(void 0===t?{}:t).sketches;return{sketches:void 0===a?[]:a}}),null)(q),M=(a(53),a.p+"static/media/Me.021dcb5e.jpg"),T=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"about-container",children:[Object(d.jsxs)("div",{className:"about-text",children:[Object(d.jsx)("div",{className:"about-me-text",children:"About Me"}),Object(d.jsx)("div",{className:"about-me-para about-me-para-first",children:"Hi, Myself Mohit, A Enthusiastic Frontend Web Developer from Bangalore, India. A Die-hard fan of Cricket, a sketch artist, an adventure junkie and having million dreams inside my heart."}),Object(d.jsx)("div",{className:"about-me-para about-me-para2",children:"When I am not coding, you will find me watching movie or on the cricket pitch."}),Object(d.jsxs)("div",{className:"about-me-para3",children:["Thank you for visiting me virtually. ",Object(d.jsx)("span",{className:"about-me-life",children:"Life is good !!!"})]})]}),Object(d.jsx)("div",{className:"about-image",children:Object(d.jsx)("img",{src:M,alt:"Mohit Sharma",className:"me-img"})})]})}}]),a}(r.Component),W=(r.Component,a(54),function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"footer-container",children:Object(d.jsx)("section",{className:"social-media",children:Object(d.jsxs)("div",{className:"social-media-wrap",children:[Object(d.jsx)("small",{className:"website-rights",children:"DRAWING DREAMS \xa9 2021"}),Object(d.jsxs)("div",{className:"social-icons",children:[Object(d.jsx)("a",{className:"social-icon-link",href:"https://www.facebook.com/mohit2407",target:"_blank","aria-label":"Facebook",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})}),Object(d.jsx)("a",{className:"social-icon-link",href:"https://www.instagram.com/mohit_m_sharma2407/",target:"_blank","aria-label":"Instagram",children:Object(d.jsx)("i",{className:"fab fa-instagram"})}),Object(d.jsx)("a",{className:"social-icon-link",href:"https://www.linkedin.com/in/mohitusharma2407/",target:"_blank","aria-label":"LinkedIn",children:Object(d.jsx)("i",{className:"fab fa-linkedin"})})]})]})})})}}]),a}(r.Component)),E=(a(55),a(56)),R=a.n(E),L=a(20);var G=function(){return function(e){return R.a.get("/api-data/sketches-data.json").then((function(t){var a=t.data,c=(void 0===a?{}:a).sketches;e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:L.a,payload:e}}(void 0===c?[]:c))})).catch((function(e){return console.log(e)}))}},J=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getSketchDataFromJson()}},{key:"render",value:function(){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(r.Fragment,{children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{exact:!0,path:"/",children:Object(d.jsx)(o.a,{to:"/my-sketches"})}),Object(d.jsx)(o.b,{exact:!0,path:"/my-sketches",component:I}),Object(d.jsx)(o.b,{exact:!0,path:"/my-sketches/about-me",component:T}),Object(d.jsx)(o.b,{component:function(e){return Object(d.jsx)(r.Fragment,{children:"Not Found !!!"})}})]})}),Object(d.jsx)(W,{})]})}}]),a}(r.Component);t.default=Object(l.b)(null,(function(e){return Object(m.b)({getSketchDataFromJson:G},e)}))(Object(o.g)(J))}}]);
//# sourceMappingURL=4.c518c3ab.chunk.js.map