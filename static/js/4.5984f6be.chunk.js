(this["webpackJsonpmy-sketches"]=this["webpackJsonpmy-sketches"]||[]).push([[4],{46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t),a.d(t,"Layout",(function(){return J}));var c=a(34),s=a(35),n=a(37),i=a(36),o=a(0),r=a(2),l=a(20),m=a(13),j=a(73),d=a(18),b=(a(46),a(7)),u=["btn--primary","btn--outline"],h=["btn--medium","btn--large"];var x=function(e){var t=e.children,a=e.type,c=e.onClick,s=e.buttonStyle,n=e.buttonSize,i=u.includes(s)?s:u[0],o=h.includes(n)?n:h[0];return Object(b.jsx)(d.b,{to:"/my-sketches/about-me",className:"btn-mobile",children:Object(b.jsx)("button",{className:"btn ".concat(i," ").concat(o),onClick:c,type:a,children:t})})};a(47);var O=function(){var e=Object(o.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(o.useState)(!0),n=Object(j.a)(s,2),i=n[0],r=n[1],l=function(){c(!1),window.scrollTo(0,0)},m=function(){window.innerWidth<=960?r(!1):r(!0)};return Object(o.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-container",children:[Object(b.jsxs)(d.b,{to:"/my-sketches",className:"navbar-logo",onClick:l,children:[Object(b.jsx)("i",{className:"fab fa-firstdraft"}),"DRAWING DREAMS"]}),Object(b.jsx)("div",{className:"menu-icon",onClick:function(){c(!a)},children:Object(b.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(b.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{to:"/my-sketches",className:"nav-links",onClick:l,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"/my-sketches/about-me",className:"nav-links-mobile",onClick:l,children:"About Artist"})})]}),i&&Object(b.jsx)(x,{buttonStyle:"btn--outline",children:"About Artist"})]})})})},f=(a(48),a.p+"static/media/akku.761c2644.jpg"),p=a.p+"static/media/bhawna.3229e192.jpg",v=a.p+"static/media/fox.09397a1f.jpg";a(49);var g=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("li",{className:"cards__item",children:[Object(b.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(b.jsx)("img",{className:"cards__item__img",alt:"DRAWING DREAMS",src:e.src})}),Object(b.jsx)("div",{className:e.small?"cards__item__info__small":"cards__item__info",children:Object(b.jsxs)("div",{className:e.small?"cards__item__text__small":"cards__item__text",children:['"',e.text,'"',Object(b.jsxs)("span",{children:[" - ",e.secondText]})]})})]})})};var k=function(){return Object(b.jsxs)("div",{className:"exhibition",children:[Object(b.jsx)("div",{className:"exhibition__header__text",children:"Check out my MAGICAL Sketches !!!"}),Object(b.jsx)("div",{className:"exhibition__container",children:Object(b.jsxs)("div",{className:"exhibition__wrapper",children:[Object(b.jsxs)("ul",{className:"exhibition__items",children:[Object(b.jsx)(g,{src:f,text:"Seeing this, is a kind of meditation. More you see, more you get addicted.",label:"Moksha",secondText:"Mohit Sharma"}),Object(b.jsx)(g,{src:p,text:"How you draw is a reflection of how you feel about the world. You're not capturing it, you're interpreting it.",label:"Luxury",secondText:"Mohit Sharma"})]}),Object(b.jsxs)("ul",{className:"exhibition__items",children:[Object(b.jsx)(g,{src:f,text:"How you draw is a reflection of how you feel about the world. You're not capturing it, you're interpreting it.",label:"Mystery",secondText:"Mohit Sharma",small:!0}),Object(b.jsx)(g,{src:p,text:"Seeing this, is a kind of meditation. More you see, more you get addicted.",label:"Adventure",secondText:"Mohit Sharma",small:!0}),Object(b.jsx)(g,{src:v,text:"Seeing this, is a kind of meditation. More you see, more you get addicted.",label:"Adrenaline",secondText:"Mohit Sharma",small:!0})]})]})})]})},N=(a(50),a.p+"static/media/comDraw7.1b351cc8.jpg"),y=a.p+"static/media/comDraw6.47fa524f.jpg",_=a.p+"static/media/comDraw3.8d8ff35a.jpg",w=a.p+"static/media/comDraw1.9944972e.jpg",S=0,A=0,M=[N,y,_,w],D=null,C=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).showSlides=function(){var e,t=document.querySelector("#home-container"),a=document.getElementsByClassName("dot");for(A++,t.style.backgroundImage="url("+M[S]+")",(S+=1)===M.length&&(S=0),A>4&&(A=1),e=0;e<4;e++)a[e].className=a[e].className.replace("dot-active","");a[A-1].className+=" dot-active",D=setTimeout(s.showSlides,2300)},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.showSlides()}},{key:"componentWillUnmount",value:function(){clearTimeout(D)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"home-container",className:"home-container",children:[Object(b.jsx)("h1",{children:"CANVAS OF LIFE AWAITS"}),Object(b.jsx)("p",{children:"What are you waiting for?"}),Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"})]}),Object(b.jsx)("div",{className:"home-slider",children:Object(b.jsx)("i",{className:"fas fa-angle-double-down"})})]}),Object(b.jsx)(k,{})]})}}]),a}(o.Component),F=(a(51),a.p+"static/media/Me.021dcb5e.jpg"),I=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"about-container",children:[Object(b.jsxs)("div",{className:"about-text",children:[Object(b.jsx)("div",{className:"about-me-text",children:"About Me"}),Object(b.jsx)("div",{className:"about-me-para about-me-para-first",children:"Hi, Myself Mohit, A Enthusiastic Frontend Web Developer from Bangalore, India. A Die-hard fan of Cricket, a sketch artist, an adventure junkie and having million dreams inside my heart."}),Object(b.jsx)("div",{className:"about-me-para about-me-para2",children:"When I am not coding, you will find me watching movie or on the cricket pitch."}),Object(b.jsxs)("div",{className:"about-me-para3",children:["Thank you for visiting me virtually. ",Object(b.jsx)("span",{className:"about-me-life",children:"Life is good !!!"})]})]}),Object(b.jsx)("div",{className:"about-image",children:Object(b.jsx)("img",{src:F,alt:"Mohit Sharma",className:"me-img"})})]})}}]),a}(o.Component),T=(o.Component,a(52),function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"footer-container",children:Object(b.jsx)("section",{className:"social-media",children:Object(b.jsxs)("div",{className:"social-media-wrap",children:[Object(b.jsx)("small",{className:"website-rights",children:"DRAWING DREAMS \xa9 2021"}),Object(b.jsxs)("div",{className:"social-icons",children:[Object(b.jsx)("a",{className:"social-icon-link",href:"https://www.facebook.com/mohit2407",target:"_blank","aria-label":"Facebook",children:Object(b.jsx)("i",{className:"fab fa-facebook-f"})}),Object(b.jsx)("a",{className:"social-icon-link",href:"https://www.instagram.com/mohit_m_sharma2407/",target:"_blank","aria-label":"Instagram",children:Object(b.jsx)("i",{className:"fab fa-instagram"})}),Object(b.jsx)("a",{className:"social-icon-link",href:"https://www.linkedin.com/in/mohitusharma2407/",target:"_blank","aria-label":"LinkedIn",children:Object(b.jsx)("i",{className:"fab fa-linkedin"})})]})]})})})}}]),a}(o.Component)),W=(a(53),a(54)),E=a.n(W),L=a(19);var R=function(){return function(e){return console.log("getSketchDataFromJson..."),console.log("getSketchDataFromJson...dispatch.."),E.a.get("/api-data/sketches-data.json").then((function(t){var a=t.data,c=(void 0===a?{}:a).sketches,s=void 0===c?[]:c;console.log("sketches..",s),e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return console.log("data in data..",e),{type:L.a,payload:e}}(s))})).catch((function(e){return console.log(e)}))}},J=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("getSketchDataFromJson...componentDidMount.."),R()}},{key:"render",value:function(){return Object(b.jsxs)(o.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)(o.Fragment,{children:Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{exact:!0,path:"/",children:Object(b.jsx)(r.a,{to:"/my-sketches"})}),Object(b.jsx)(r.b,{exact:!0,path:"/my-sketches",component:C}),Object(b.jsx)(r.b,{exact:!0,path:"/my-sketches/about-me",component:I}),Object(b.jsx)(r.b,{component:function(e){return Object(b.jsx)(o.Fragment,{children:"Not Found !!!"})}})]})}),Object(b.jsx)(T,{})]})}}]),a}(o.Component);t.default=Object(l.b)((function(e){return{sketchesData:e.sketchReducer}}),(function(e){return Object(m.a)({getSketchDataFromJson:R},e)}))(Object(r.g)(J))}}]);
//# sourceMappingURL=4.5984f6be.chunk.js.map