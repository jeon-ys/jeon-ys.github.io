(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),l=n(a("VbXa")),o=n(a("8OQS")),s=n(a("pVnL")),d=n(a("q1tI")),c=n(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=p(t);return h[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},n&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),d.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function R(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+d+l+o+a+n+t+i+r+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=d.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,l=e.ariaHidden,o=d.default.createElement(L,(0,s.default)({ref:t,src:a},i,{ariaHidden:l}));return n.length>1?d.default.createElement("picture",null,r(n),o):o})),L=d.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:n,src:r},m,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&v&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,x=e.loading,R=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:O?1:0,transition:z?"opacity "+b+"ms":"none"},o),A="boolean"==typeof E?"lightgray":E,N={transitionDelay:b+"ms"},j=(0,s.default)({opacity:this.state.imgLoaded?0:1},z&&N,o,f),V={title:t,alt:this.state.isVisible?"":a,style:j,className:p,itemProp:w};if(h){var _=h,H=m(h);return d.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),A&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&N)}),H.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:_,generateSources:I}),H.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:_,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(_),d.default.createElement(L,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,s.default)({alt:a,title:t,loading:x},H,{imageVariants:_}))}}))}if(g){var P=g,M=m(g),D=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete D.display,d.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},A&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:A,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},z&&N)}),M.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:V,imageVariants:P,generateSources:I}),M.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:V,imageVariants:P,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(P),d.default.createElement(L,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,s.default)({alt:a,title:t,loading:x},M,{imageVariants:P}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),A=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});z.propTypes={resolutions:T,sizes:A,fixed:c.default.oneOfType([T,c.default.arrayOf(T)]),fluid:c.default.oneOfType([A,c.default.arrayOf(A)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=z;t.default=N},RMg3:function(e,t,a){"use strict";var n=a("dI71"),r=a("MUpH"),i=a("q1tI"),l=a.n(i),o=a("vOnD"),s=a("k06Q"),d=a("SKMy"),c=a.n(d),u=a("Uizk"),f=a("p/d+");function p(){var e=Object(r.a)(["\n    & ul {\n      display: none;\n    }\n  "]);return p=function(){return e},e}var m=o.default.div.withConfig({displayName:"navbar__Base",componentId:"sc-1lkjaee-0"})(["padding:0;margin:0;max-height:62px;line-height:62px;width:100vw;& ul{width:100%;height:62px;padding:0;margin:0;list-style:none;font-size:13px;}& ul > li a,& ul > li{height:62px;font-size:11px;float:right;position:relative;color:#fff;text-decoration:none;cursor:pointer;transition:opacity .3s ease;}& ul > li a{font-family:'Raleway';text-transform:uppercase;font-weight:600;letter-spacing:1px;margin-right:32px;}"," "," ",""],(function(e){return e.dark&&Object(o.css)(["background:#fff;& ul > li a,& ul > li{color:#242424;opacity:0.6;}& ul > li a:hover{opacity:1;}a{color:#000;}"])}),(function(e){return e.main&&Object(o.css)(["background:transparent;position:absolute;top:0;left:0;z-index:100;"])}),f.a.xs(p())),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.children.map((function(e){if(e.props.id)return{name:e.props.children,href:"#"+e.props.id}})).filter((function(e){return null!=e})).reverse().map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{onClick:function(){c()(e.href)}},e.name))}));return l.a.createElement(m,this.props,l.a.createElement(s.Flex,null,l.a.createElement(s.Box,{px:2,width:[1,1/3,2/6]},l.a.createElement(u.a,null)),l.a.createElement(s.Box,{px:2,width:[0,2/3,4/6]},l.a.createElement("ul",null,e))))},t}(l.a.Component);t.a=h},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return j}));var n=a("MUpH"),r=a("q1tI"),i=a.n(r),l=a("k06Q"),o=a("vOnD"),s=a("9eSz"),d=a.n(s),c=a("acoO"),u=a("p/d+"),f=a("Bl7J"),p=a("RMg3"),m=a("lgVb"),h=a("AlkZ"),g=a("dI71"),E=a("ZXdF");function b(){var e=Object(n.a)(["\n    p {\n      display: none;\n    }\n    h1 {\n      top: 33vw !important;\n      color: #000;\n    }\n  "]);return b=function(){return e},e}function v(){var e=Object(n.a)(["\n    max-width: 90%;\n  "]);return v=function(){return e},e}function w(){var e=Object(n.a)(["\n    & > a > div, & > a > div::after {\n      transform: skewY(-5.2deg);\n\n    }\n  "]);return w=function(){return e},e}var y=o.default.div.withConfig({displayName:"portfolio__Tile",componentId:"sc-1bteqw2-0"})(["box-shadow:0 19px 38px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.22);position:relative;margin-bottom:32px;overflow:hidden;& > a > div,& > a > div::after{z-index:-1;transition:all 0.5s ease-in-out;transform:skewY(-2.2deg);}& a > div{top:-8px;}&:hover > a > div{transform:scale(1.1);}&:hover > a > div::after{opacity:0.5;}img{height:55% !important;}",""],u.a.ws(w())),x=o.default.a.withConfig({displayName:"portfolio__TileContent",componentId:"sc-1bteqw2-1"})(["color:#fff;text-decoration:none !important;cursor:pointer;h1{position:absolute;top:6vw;left:5%;right:5%;font-family:'Raleway';border:none;}p{font-size:1.2em;position:absolute;bottom:2vw;left:5%;right:5%;color:#111;font-family:'Lato';font-weight:500;}"," "," @media (max-width:1594px){p{bottom:0;font-size:1em;}h1{top:1vw;}}@media (max-width:1258px){p{line-height:1em;}h1{margin-top:1vw;}@media (max-width:828px){p{line-height:inherit;}h1{margin-top:12vw;}@media (max-width:640px){p{line-height:1.5em;font-size:1.5em;}@media (max-width:440px){p{line-height:inherit;font-size:1.1em;}@media (max-width:342px){p{line-height:1.2em;font-size:0.95em;}}"],u.a.md(v()),u.a.ws(b())),S=function(e){var t=e.excerpt,a=e.image,n=(e.tags,e.slug),r=e.title;e.timeToRead;return i.a.createElement(y,null,i.a.createElement("a",{href:n},a?i.a.createElement(d.a,{sizes:a.childImageSharp.sizes}):i.a.createElement("div",null)),i.a.createElement(x,{href:n},i.a.createElement("h1",null,r),i.a.createElement("p",null,t)))},I=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={items:[],viewAll:!1},a}Object(g.a)(t,e);var a=t.prototype;return a.componentWillRecievedProps=function(e,t){e.items&&JSON.stringify(e.items)!==JSON.stringify(t.items)&&this.setState({items:e.items})},a.toggleShow=function(){this.setState({viewAll:!this.state.viewAll})},a.render=function(){var e=this,t=this.props.items.map((function(e){return i.a.createElement(l.Box,{key:e.node.fields.slug,px:2,width:[1,.5,1/3,1/4]},i.a.createElement(S,Object.assign({key:e.node.fields.slug,excerpt:e.node.excerpt,slug:e.node.fields.slug,timeToRead:e.node.timeToRead},e.node.frontmatter)))}));return this.state.viewAll||t.splice(4),i.a.createElement(l.Flex,{justifyContent:"center",px:1,flexWrap:"wrap"},t,i.a.createElement(l.Box,{m:"auto"},i.a.createElement(E.a,{center:!0,onClick:function(){return e.toggleShow()}},this.state.viewAll?"View Less":"View More")))},t}(i.a.Component);function R(){var e=Object(n.a)(["\n    width: 95%;\n    margin-left: 0;\n  "]);return R=function(){return e},e}var O=o.default.div.withConfig({displayName:"showcase__Base",componentId:"sc-15umyfg-0"})(["width:40%;margin:0 auto !important;padding:0;overflow:hidden;padding-top:40px;",""],u.a.xs(R())),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props.images.reverse().map((function(e){return i.a.createElement(l.Box,{key:e.node.id,px:2,width:[.5,1/3]},i.a.createElement(d.a,{sizes:e.node.childImageSharp.sizes}))}));return i.a.createElement(O,null,i.a.createElement(l.Flex,{flexWrap:"wrap"},e))},t}(i.a.Component);function C(){var e=Object(n.a)(["\n    width: 90%;\n\n  "]);return C=function(){return e},e}function L(){var e=Object(n.a)(["\n        & > div {\n          margin-left: 3vw !important;\n        }\n    "]);return L=function(){return e},e}var z=o.default.div.withConfig({displayName:"pages__Content",componentId:"sc-6kvjaa-0"})(["& > a{visibility:hidden;display:block;height:0;}& > h1{text-align:center;}"]),T=o.default.h1.withConfig({displayName:"pages__Title",componentId:"sc-6kvjaa-1"})(["font-family:'Raleway';text-transform:uppercase;letter-spacing:6px;margin-bottom:40px;font-weight:400;font-size:32px;line-height:40px;border:none;color:#292929;",""],(function(e){return e.small&&Object(o.css)(["font-size:12px;letter-spacing:2px;font-weight:700;line-height:24px;"])})),A=o.default.div.withConfig({displayName:"pages__Section",componentId:"sc-6kvjaa-2"})(["text-align:center;padding-top:45px;padding-bottom:40px;a{font-family:'Lato';}p{margin-bottom:64px;font-size:large;color:#666;}h1,h2,h3,h4,h5,h6{font-family:'Raleway';text-transform:uppercase;color:#292929;}h4{letter-spacing:3px;font-weight:400;font-size:24px;line-height:32px;color:#292929;}span{color:#666;opacity:0.5;display:block;}& > div:last-child{border-bottom:none !important;}"," ",""],(function(e){return e.center&&Object(o.css)(["text-align:left;& > *{margin-left:30vw;}h4{margin-left:20vw;}",""],u.a.xs(L()))}),(function(e){return e.dark&&Object(o.css)(["background:#292929;*{color:#eee;}span{text-align:left;font-size:16px;line-height:28px;font-weight:400;opacity:0.5;}span,p{color:#fefefe !important;}h6{color:#fff;font-weight:700;}h4{color:#fff;}div{border-bottom:1px solid #333 !important;}"])})),N=o.default.div.withConfig({displayName:"pages__Item",componentId:"sc-6kvjaa-3"})(["width:40%;margin:0 auto;border:none;border-bottom:1px solid #eee;h6{letter-spacing:2px;font-weight:700;padding-top:6px;}span,p{font-size:13px;line-height:24px;color:#666;}span{opacity:0.75;float:right;text-transform:uppercase;}p{margin-bottom:24px;opacity:0.5;}",""],u.a.xs(C())),j=(t.default=function(e){var t=i.a.createElement(z,null,i.a.createElement(c.a,{api_key:"1b4e5b0203fab0d5731afe68f0a543e1",user_id:"132343752@N06",album_id:"72157694825254121",fillPage:!0}),i.a.createElement(m.a,null),i.a.createElement(h.a,{style:{position:"absolute",margin:"0 auto",left:0,right:0,bottom:16},icons:[{name:"twitter",href:"https://twitter.com/darren_britton"},{name:"github-alt",href:"https://github.com/darrenbritton"},{name:"linkedin",href:"https://ie.linkedin.com/in/darrenbritton"}]}),i.a.createElement("a",{id:"about-me"},"About Me"),i.a.createElement(A,null,i.a.createElement(T,null,"About Me"),i.a.createElement(l.Flex,{alignItems:"center",flexDirection:"column"},i.a.createElement(l.Box,{px:2,width:[1,.5]},i.a.createElement("p",null,"Currently working as a software engineer at"," ",i.a.createElement("a",{href:"https://shutterstock.com"},"Shutterstock")," focusing on the editorial content platform. As far as my work goes I've probably worn every hat on the rack, most notable being Web Developer, Software Engineer and Photographer. Don’t let my clean lines and weakness for Swiss type fool you; My work has been pretty diverse and enjoyable. For more information about me follow one of my social media links above or at the bottom of the page.")),i.a.createElement(l.Box,{px:2,width:180},i.a.createElement(d.a,{sizes:e.data.allFile?e.data.allFile.edges[0].node.childImageSharp.sizes:{}})))),i.a.createElement(T,{small:!0},"Portfolio"),i.a.createElement("a",{id:"portfolio"},"Portfolio"),i.a.createElement(I,{items:e.data.allMarkdownRemark.edges}),i.a.createElement("a",{id:"experience"},"Experience"),i.a.createElement(A,{center:!0,dark:!0},i.a.createElement("h4",null,"Experience"),i.a.createElement("span",null,"Where I've worked."),i.a.createElement(N,null,i.a.createElement("span",null,"MAY 2018 - CURRENT"),i.a.createElement("h6",null,"SHUTTERSTOCK"),i.a.createElement("p",null,"Software Engineer")),i.a.createElement(N,null,i.a.createElement("span",null,"JUNE 2016 - APRIL 2018"),i.a.createElement("h6",null,"SAP IRELAND"),i.a.createElement("p",null,"Full Stack Developer")),i.a.createElement(N,null,i.a.createElement("span",null,"FEB 2015 - AUG 2015"),i.a.createElement("h6",null,"SAP IRELAND"),i.a.createElement("p",null,"Support Engineer")),i.a.createElement(N,null,i.a.createElement("span",null,"JAN 2014 - JULY 2014"),i.a.createElement("h6",null,"ST DECLAN'S COLLEGE"),i.a.createElement("p",null,"Full Stack Developer"))),i.a.createElement("a",{id:"tech"},"Tech"),i.a.createElement(A,{center:!0},i.a.createElement("h4",null,"Tech"),i.a.createElement("span",null,"Technologies I enjoy working with."),i.a.createElement(k,{images:e.data.allImageSharp?e.data.allImageSharp.edges:[]})),i.a.createElement("a",{id:"education"},"Education"),i.a.createElement(A,{dark:!0,center:!0},i.a.createElement("h4",null,"EDUCATION"),i.a.createElement("span",null,"Education I've recieved."),i.a.createElement(N,null,i.a.createElement("span",null,"2012 - 2016"),i.a.createElement("h6",null,"BSC COMPUTER SCIENCE (1st Class Honours)"),i.a.createElement("p",null,"Dublin Institute of Technology")),i.a.createElement(N,null,i.a.createElement("span",null,"2006 - 2012"),i.a.createElement("h6",null,"SECONDARY EDUCATION"),i.a.createElement("p",null,"Saint Declan's College"))),i.a.createElement("a",{id:"honoursAndAwards"},"Honours & Awards"),i.a.createElement(A,{center:!0},i.a.createElement("h4",null,"HONORS & AWARDS"),i.a.createElement("span",null,"A list of honors and awards I have recieved for my work."),i.a.createElement(N,null,i.a.createElement("span",null,"2016"),i.a.createElement("h6",null,"BEST PROJECT (IN THE DIT PROJECT FAIR)"),i.a.createElement("p",null,"SAP")),i.a.createElement(N,null,i.a.createElement("span",null,"2014"),i.a.createElement("h6",null,"GAMES STUDIO IRELAND CHALLENGE: BEST IN ORIGINAL STORY"),i.a.createElement("p",null,"Games Fleadh")),i.a.createElement(N,null,i.a.createElement("span",null,"2010"),i.a.createElement("h6",null,"ACCESS ACCENTURE ACHIEVEMENT AWARD"),i.a.createElement("p",null,"Accenture"))));return i.a.createElement(f.a,{location:e.location},i.a.createElement(p.a,{main:!0,children:t.props.children}),t)},"246810358")}}]);
//# sourceMappingURL=component---src-pages-index-js-7585498ea9d5b7c0a004.js.map