(this["webpackJsonpfancy-css-playground"]=this["webpackJsonpfancy-css-playground"]||[]).push([[0],{11:function(e,t,i){e.exports={page:"DialogElement_page__2Pm7V",primaryBtn:"DialogElement_primaryBtn__3BbZM",formField:"DialogElement_formField__30DoO",buttonContainer:"DialogElement_buttonContainer__1WuYA"}},13:function(e,t,i){e.exports={page:"FileUpload_page__4lNfG",filePickerRow:"FileUpload_filePickerRow__-kSyD",filePicker:"FileUpload_filePicker__2XO3n"}},14:function(e,t,i){e.exports={container:"PaintApi_container__2OQdH",supportsPaintApi:"PaintApi_supportsPaintApi__2GpNV",noPaintApiSupport:"PaintApi_noPaintApiSupport__2rFBD"}},17:function(e,t,i){e.exports={article:"DummyArticle_article__7HLb4",top:"DummyArticle_top__3X_mm",imageTop:"DummyArticle_imageTop__UYfLf"}},27:function(e,t,i){},28:function(e,t,i){},30:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),o=i(21),r=i.n(o),s=(i(27),i(28),i(2)),c=i(3),l=i(9),d=i(8),u=i.n(d),j=i(0),b=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),i=t[0],a=t[1],o=Object(n.useState)(!1),r=Object(l.a)(o,2),s=r[0],c=r[1];return Object(j.jsxs)("div",{className:"default-container "+u.a.page,children:[Object(j.jsx)("h2",{children:"Accessibility Features"}),Object(j.jsx)("h3",{children:"Visible focus for keyboard users only"}),Object(j.jsxs)("p",{children:["Most blind users and many users with motor disabilities navigate websites with a keyboard. They depend on strong visual indicators (e.g. an outline) that highlight the element that currently has keyboard focus. The CSS pseudo-class ",Object(j.jsx)("span",{className:"code",children:":focus"})," is usually used to set focus styles for an element. These styles are also applied when a user clicks an element with a mouse or taps it on their smartphone screen, which can irritate or confuse some users. Talk about: aesthetics vs. accessibility."]}),Object(j.jsxs)("p",{children:["Luckily, CSS Selector Level 4 has introduced the ",Object(j.jsx)("span",{className:"code",children:":focus-visible"})," pseudo-class. Its styles are applied when an element receives focus and the user agent determines via heuristics that the focus should be made evident on the element. In other words: Only when they are needed, e.g. for users navigating via keyboard."]}),Object(j.jsx)("h4",{children:"Example with :focus pseudo-class"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"fav-color-1",children:"Favorite Color"}),Object(j.jsx)("input",{id:"fav-color-1",type:"text",placeholder:"red, green etc."})]}),Object(j.jsxs)("button",{className:u.a.expansionPanelHeader,"aria-expanded":i,"aria-controls":"panel1",onClick:function(){return a(!i)},children:[Object(j.jsx)("span",{"aria-hidden":"true",children:">"})," More Facts (always displays focus indicator)"]}),Object(j.jsx)("p",{id:"panel1",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Object(j.jsx)("h4",{children:"Example with :focus-visible pseudo-class"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"fav-color-2",children:"Favorite Color"}),Object(j.jsx)("input",{id:"fav-color-2",type:"text",placeholder:"red, green etc.",className:u.a.keyboardOnly})]}),Object(j.jsxs)("button",{className:u.a.expansionPanelHeader+" "+u.a.keyboardOnly,"aria-expanded":s,"aria-controls":"panel2",onClick:function(){return c(!s)},children:[Object(j.jsx)("span",{"aria-hidden":"true",children:">"})," More Facts (only with keyboard navigation)"]}),Object(j.jsx)("p",{id:"panel1",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Object(j.jsx)("h3",{children:"No more motion sickness"}),Object(j.jsxs)("p",{className:"feature-hint "+u.a.prefersReducedMotion,children:["According to your system settings, you prefer ",Object(j.jsx)("strong",{children:"reduced motion"}),"."]}),Object(j.jsxs)("p",{className:"feature-hint "+u.a.noMotionPreference,children:["According to your system settings, you have ",Object(j.jsx)("strong",{children:"no motion preference"}),"."]}),Object(j.jsxs)("p",{children:["The ",Object(j.jsx)("span",{className:"code",children:"prefers-reduced-motion"})," CSS media feature is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses."]}),Object(j.jsx)("p",{className:u.a.linkContainer,children:Object(j.jsx)("a",{className:u.a.prominentLink,href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",target:"_blank",rel:"noreferrer noopener",children:"Find out more"})})]})},m=(i(30),i(17)),h=i.n(m),p=function(e){return Object(j.jsxs)("article",{className:h.a.article,children:[Object(j.jsx)("h2",{children:e.heading}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Object(j.jsx)("img",{src:"/fancy-css-playground/assets/img/"+e.imageName,alt:e.altText,title:"\xa9 Alexander Lehner",className:e.imagePositionTop?h.a.imageTop:""}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Object(j.jsx)("iframe",{width:"560",height:"315",src:e.videoUrl,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})},x=function(e){var t="blog-standard";e.contentVisibilityAuto&&e.containIntrinsicSize?t="blog-content-visibility-and-size":e.contentVisibilityAuto&&(t="blog-content-visibility");var i=Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(p,{heading:"Beautiful Gran Canaria",imageName:"gran_canaria_mountains.jpg",imagePositionTop:!1,altText:"Mountainside view on Gran Canaria with the sea in the background",videoUrl:"https://www.youtube.com/embed/JMe1OanTjN8?controls=0"}),Object(j.jsx)(p,{heading:"Is it Mars? Nope, Monument Valley!",imageName:"monument_valley.jpg",imagePositionTop:!0,altText:"Mountainside view on Gran Canaria with the sea in the background",videoUrl:"https://www.youtube.com/embed/yg0As_HOvJk?controls=0"}),Object(j.jsx)(p,{heading:"Eger River near Karlsbad, Czech Republic",imageName:"eger_karlsbad.jpg",imagePositionTop:!1,altText:"Several Kayaks moored on the Eger river bank",videoUrl:"https://www.youtube.com/embed/6nDBIFnbNSc?controls=0"}),Object(j.jsx)(p,{heading:"Yosemite National Park",imageName:"yosemite_national_park.jpg",imagePositionTop:!1,altText:"Mountainside view in Yosemite National Park, California, USA",videoUrl:"https://www.youtube.com/embed/9fJEFi3ccwI?controls=0"}),Object(j.jsx)(p,{heading:"Gran Canaria, still beautiful",imageName:"gran_canaria_mountains.jpg",imagePositionTop:!1,altText:"Mountainside view on Gran Canaria with the sea in the background",videoUrl:"https://www.youtube.com/embed/JMe1OanTjN8?controls=0"}),Object(j.jsx)(p,{heading:"Monument Valley, again",imageName:"monument_valley.jpg",imagePositionTop:!0,altText:"Mountainside view on Gran Canaria with the sea in the background",videoUrl:"https://www.youtube.com/embed/yg0As_HOvJk?controls=0"}),Object(j.jsx)(p,{heading:"Row, row, row the boat",imageName:"eger_karlsbad.jpg",imagePositionTop:!1,altText:"Several Kayaks moored on the Eger river bank",videoUrl:"https://www.youtube.com/embed/6nDBIFnbNSc?controls=0"}),Object(j.jsx)(p,{heading:"Yosemite National Park, Take Two",imageName:"yosemite_national_park.jpg",imagePositionTop:!1,altText:"Mountainside view in Yosemite National Park, California, USA",videoUrl:"https://www.youtube.com/embed/9fJEFi3ccwI?controls=0"})]});return Object(j.jsxs)("div",{className:t,children:[i,i,i,i,i]})},g=function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsxs)("div",{className:"info-box",children:[Object(j.jsxs)("p",{children:["#1 Blog example without ",Object(j.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility",target:"_blank",rel:"noreferrer noopener",children:"content-visibility"}),"."]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility1",title:"Standard rendering",children:"#1"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility2",title:"Using content-visibility: auto",children:"#2"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility3",title:"Adding contain-intrinsic-size",children:"#3"})})]})})]}),Object(j.jsx)(x,{contentVisibilityAuto:!1,containIntrinsicSize:!1})]})},O=function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsxs)("div",{className:"info-box",children:[Object(j.jsxs)("p",{children:["#2 Blog example with ",Object(j.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility",target:"_blank",rel:"noreferrer noopener",children:"content-visibility"}),"."]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility1",title:"Standard rendering",children:"#1"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility2",title:"Using content-visibility: auto",children:"#2"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility3",title:"Adding contain-intrinsic-size",children:"#3"})})]})})]}),Object(j.jsx)(x,{contentVisibilityAuto:!0,containIntrinsicSize:!1})]})},v=function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsxs)("div",{className:"info-box",children:[Object(j.jsxs)("p",{children:["#3 Blog example with ",Object(j.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility",target:"_blank",rel:"noreferrer noopener",children:"content-visibility"})," and with ",Object(j.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size",target:"_blank",rel:"noreferrer noopener",children:"contain-intrinsic-size"}),"."]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility1",title:"Standard rendering",children:"#1"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility2",title:"Using content-visibility: auto",children:"#2"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility3",title:"Adding contain-intrinsic-size",children:"#3"})})]})})]}),Object(j.jsx)(x,{contentVisibilityAuto:!0,containIntrinsicSize:!0})]})},y="confirm",f=i(11),w=i.n(f),S=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),i=Object(n.useRef)(null),a=Object(n.useState)(""),o=Object(l.a)(a,2),r=o[0],s=o[1];return Object(n.useEffect)((function(){var n=function(){var n;if((null===(n=e.current)||void 0===n?void 0:n.returnValue)===y){var a,o,r,c,l=null!==(a=null===(o=t.current)||void 0===o?void 0:o.value)&&void 0!==a?a:"",d=null!==(r=null===(c=i.current)||void 0===c?void 0:c.value)&&void 0!==r?r:"";s('You selected the color "'.concat(l,'" and entered the movie "').concat(d,'".'))}},a=e.current;return null===a||void 0===a||a.addEventListener("close",n),function(){return null===a||void 0===a?void 0:a.removeEventListener("close",n)}})),Object(j.jsxs)("div",{className:w.a.page,children:[Object(j.jsx)("h2",{children:"Testing the Native Dialog Element"}),Object(j.jsx)("button",{type:"button",onClick:function(){var t;null===(t=e.current)||void 0===t||t.showModal()},children:"Open Modal Dialog"}),Object(j.jsx)("p",{className:"dialogFormData",children:r}),Object(j.jsxs)("dialog",{ref:e,onClick:function(t){var i,n,a=null===(i=e.current)||void 0===i?void 0:i.getBoundingClientRect();a&&(t.clientY<a.top||t.clientY>a.bottom||t.clientX<a.left||t.clientX>a.right)&&(null===(n=e.current)||void 0===n||n.close())},children:[Object(j.jsx)("h3",{children:"Personal Information"}),Object(j.jsx)("p",{children:"Please tell me more about you. I want to get to know you better."}),Object(j.jsxs)("form",{method:"dialog",onClick:function(e){return e.stopPropagation()},children:[Object(j.jsxs)("div",{className:w.a.formField,children:[Object(j.jsx)("label",{htmlFor:"favColor",children:"Favorite color:"}),Object(j.jsxs)("select",{id:"favColor",ref:t,children:[Object(j.jsx)("option",{value:"",children:"Choose..."}),Object(j.jsx)("option",{children:"Red"}),Object(j.jsx)("option",{children:"Blue"}),Object(j.jsx)("option",{children:"Green"})]})]}),Object(j.jsxs)("div",{className:w.a.formField,children:[Object(j.jsx)("label",{htmlFor:"favMovie",children:"Favorite movie:"}),Object(j.jsx)("input",{id:"favMovie",type:"text",ref:i})]}),Object(j.jsxs)("div",{className:w.a.buttonContainer,children:[Object(j.jsx)("button",{type:"button",onClick:function(){var t=e.current;t&&(t.returnValue="cancel",t.close())},children:"Cancel"}),Object(j.jsx)("button",{className:w.a.primaryBtn,value:y,children:"Confirm"})]})]})]})]})},k=i(13),_=i.n(k),P=function(){var e=Object(n.useState)("No file selected"),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(j.jsxs)("div",{className:_.a.page,children:[Object(j.jsx)("h2",{children:"Form with Styled File Input"}),Object(j.jsx)("form",{action:"#",children:Object(j.jsxs)("div",{className:_.a.filePickerRow,children:[Object(j.jsxs)("label",{htmlFor:"filepicker",className:_.a.filePicker,children:[Object(j.jsx)("span",{children:"Upload PDF"}),Object(j.jsx)("input",{id:"filepicker",type:"file",accept:".pdf","aria-describedby":"selected-file",onChange:function(e){return function(e){var t,i=Array.from(null!==(t=e.target.files)&&void 0!==t?t:[]);i.length>0&&a(i[0].name)}(e)}})]}),Object(j.jsx)("p",{id:"selected-file","aria-hidden":"true",children:i})]})}),Object(j.jsx)("h2",{children:"Form with Standard File Input"}),Object(j.jsx)("form",{action:"#",children:Object(j.jsxs)("label",{htmlFor:"filepicker-standard",children:[Object(j.jsx)("span",{children:"Upload PDF:\xa0"}),Object(j.jsx)("input",{id:"filepicker-standard",type:"file",accept:".pdf"})]})})]})},N=function(){return Object(j.jsxs)("div",{className:"default-container no-center",children:[Object(j.jsx)("h2",{children:"Table of Contents"}),"Welcome to my Fancy CSS Playground!",Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/a11yfeatures",children:"Accessibility Features"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/paintapi",children:"CSS Painting API and Properties & Values API"})}),Object(j.jsxs)("li",{children:["Render optimization with content-visibility",Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility1",children:"Standard rendering"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility2",children:"Using content-visibility: auto"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contentvisibility3",children:"Adding contain-intrinsic-size"})})]})]}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/fileupload",children:"Styled File Upload"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/dialog",children:"Testing the Native Dialog Element"})}),Object(j.jsx)("li",{children:"To be continued..."})]})]})},A=i(14),C=i.n(A),F=function(){return Object(j.jsxs)("div",{className:"default-container "+C.a.container,children:[Object(j.jsx)("p",{className:"feature-hint "+C.a.supportsPaintApi,children:Object(j.jsx)("strong",{children:"Your browser supports the Painting API."})}),Object(j.jsx)("p",{className:"feature-hint "+C.a.noPaintApiSupport,children:Object(j.jsx)("strong",{children:"Your browser doesn't support the Painting API."})}),Object(j.jsx)("h2",{children:"Magical Styling with Houdini"}),Object(j.jsx)("p",{children:"Houdini is a set of low-level APIs that exposes parts of the CSS engine, giving developers the power to extend CSS by hooking into the styling and layout process of a browser\u2019s rendering engine. Houdini is a group of APIs that give developers direct access to the CSS Object Model (CSSOM), enabling developers to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to be implemented natively in browsers."}),Object(j.jsx)("h2",{children:"Paint whatever you like"}),Object(j.jsxs)("p",{children:["The ",Object(j.jsx)("span",{className:"code",children:"CSS Painting API"})," \u2014 part of the CSS Houdini umbrella of APIs \u2014 allows developers to write JavaScript functions that can draw directly into an element's background, border, or content."]}),Object(j.jsx)("textarea",{name:"example-textarea",id:"checkerboard-textarea",rows:5,autoComplete:"off",spellCheck:"false",placeholder:"checkmate"}),Object(j.jsx)("h2",{children:"Smarter custom properties with Houdini"}),Object(j.jsxs)("p",{children:["The ",Object(j.jsx)("span",{className:"code",children:"Properties & Values API"})," allows you to define the syntax of a custom property, its initial value and whether it inherits its parent's value. Registering a custom property enables you to animate it as the browser now knows how to interpolate its value. Important: Once defined, you can't update an existing registered property, and trying to re-register a property will throw an error."]}),Object(j.jsxs)("p",{children:["There are two ways to register a custom property: Via the JavaScript method ",Object(j.jsx)("span",{className:"code",children:"CSS.registerProperty()"})," or using the ",Object(j.jsx)("span",{className:"code",children:"@property"})," CSS at-rule. Both are still experimental features and only partially supported by modern browsers (e.g. no support in Firefox and Safari)."]})]})};var T=function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)(s.b,{to:"/",title:"Homepage",children:Object(j.jsx)("img",{src:"/fancy-css-playground/assets/icon/emoji_nature.svg",alt:"Homepage"})}),Object(j.jsx)("h1",{children:"Fancy CSS Playground"})]}),Object(j.jsx)("main",{children:Object(j.jsxs)(c.c,{children:[Object(j.jsx)(c.a,{path:"/a11yfeatures",children:Object(j.jsx)(b,{})}),Object(j.jsx)(c.a,{path:"/contentvisibility1",children:Object(j.jsx)(g,{})}),Object(j.jsx)(c.a,{path:"/contentvisibility2",children:Object(j.jsx)(O,{})}),Object(j.jsx)(c.a,{path:"/contentvisibility3",children:Object(j.jsx)(v,{})}),Object(j.jsx)(c.a,{path:"/paintapi",children:Object(j.jsx)(F,{})}),Object(j.jsx)(c.a,{path:"/fileupload",children:Object(j.jsx)(P,{})}),Object(j.jsx)(c.a,{path:"/dialog",children:Object(j.jsx)(S,{})}),Object(j.jsx)(c.a,{path:"/",children:Object(j.jsx)(N,{})})]})})]})},L=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(T,{})})}),document.getElementById("root")),L()},8:function(e,t,i){e.exports={page:"A11yFeatures_page__2xHL1",expansionPanelHeader:"A11yFeatures_expansionPanelHeader__p6eEx",keyboardOnly:"A11yFeatures_keyboardOnly__2jl6U",prefersReducedMotion:"A11yFeatures_prefersReducedMotion__2ZU4m",linkContainer:"A11yFeatures_linkContainer__2Skdb",prominentLink:"A11yFeatures_prominentLink__14g3G",pulse:"A11yFeatures_pulse__2hR7c",noMotionPreference:"A11yFeatures_noMotionPreference__16ona"}}},[[36,1,2]]]);
//# sourceMappingURL=main.929668bb.chunk.js.map