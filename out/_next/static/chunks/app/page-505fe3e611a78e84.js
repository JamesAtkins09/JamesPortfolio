(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3030:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,4114,23)),Promise.resolve().then(n.t.bind(n,390,23)),Promise.resolve().then(n.t.bind(n,2106,23)),Promise.resolve().then(n.bind(n,8877))},8877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(7437),r=n(2265);n(5751);var o=function(){return(o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,o=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)s.push(i.value)}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return s}function d(e,t,n){if(n||2==arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var c=(0,r.memo)(function(e){var t,n,i=e.responsiveProps,c=s(e,["responsiveProps"]),a=l((0,r.useState)(0),2),u=a[0],v=a[1],f=l((0,r.useState)(c.activeSlideIndex),2),m=f[0],h=f[1],p=(0,r.useRef)(null),b=(0,r.useRef)(null),w=(0,r.useRef)(null),x=(0,r.useRef)(!1),y=(0,r.useRef)(0),S=(0,r.useRef)(!1),g=(0,r.useRef)(""),E=(0,r.useRef)(null),k=(0,r.useRef)(null),T=(0,r.useRef)(0),C=(0,r.useRef)(m),L=(void 0===i?[]:i).reduce(function(e,t){void 0===t&&(t={});var n=t.minWidth,i=t.maxWidth,r=void 0===i?null:i,l=s(t,["minWidth","maxWidth"]);return u>(void 0===n?0:n)&&(!r||u<=r)?o(o({},e),l):e},c),I=r.Children.toArray(L.children),P=u?o(o({},L),{activeSlideIndex:Math.max(0,Math.min(L.activeSlideIndex,I.length-1)),itemsToShow:Math.min(I.length,L.itemsToShow||0),itemsToScroll:Math.min(I.length,L.itemsToScroll||1)}):c,j=P.containerProps,N=void 0===j?{}:j,O=N.style,W=s(N,["style"]),R=P.innerProps,M=void 0===R?{}:R,_=M.style,A=s(M,["style"]),X=P.itemsListProps,F=void 0===X?{}:X,V=F.style,B=F.onTransitionEnd,z=void 0===B?void 0:B,D=s(F,["style","onTransitionEnd"]),q=P.backwardBtnProps,H=void 0===q?{}:q,U=H.children,$=H.show,J=s(H,["children","show"]),Q=P.forwardBtnProps,Y=void 0===Q?{}:Q,G=Y.children,K=Y.show,Z=s(Y,["children","show"]),ee=P.activeSlideProps,et=void 0===ee?{}:ee,en=et.className,ei=void 0===en?"":en,er=et.style,eo=void 0===er?{}:er,es=s(et,["className","style"]),el=P.visibleSlideProps,ed=void 0===el?{}:el,ec=ed.className,ea=void 0===ec?"":ec,eu=ed.style,ev=void 0===eu?{}:eu,ef=s(ed,["className","style"]),em=P.updateOnItemClick,eh=void 0!==em&&em,ep=P.activeSlideIndex,eb=P.onRequestChange,ew=P.speed,ex=void 0===ew?0:ew,ey=P.delay,eS=void 0===ey?0:ey,eg=P.easing,eE=void 0===eg?"linear":eg,ek=P.itemsToShow,eT=void 0===ek?0:ek,eC=P.itemsToScroll,eL=void 0===eC?1:eC,eI=P.children,eP=P.onAfterChange,ej=P.autoplay,eN=void 0!==ej&&ej,eO=P.autoplayDirection,eW=void 0===eO?"forward":eO,eR=P.disableNavIfAllVisible,eM=P.hideNavIfAllVisible,e_=P.centerMode,eA=void 0!==e_&&e_,eX=P.infinite,eF=void 0===eX||eX,eV=P.disableNavIfEdgeVisible,eB=void 0===eV||eV,ez=P.disableNavIfEdgeActive,eD=void 0===ez||ez,eq=P.dotsNav,eH=P.persistentChangeCallbacks,eU=void 0!==eH&&eH,e$=P.autoplayDelay,eJ=void 0===e$?0:e$,eQ=P.preventScrollOnSwipe,eY=P.disableSwipeByMouse,eG=void 0!==eY&&eY,eK=P.disableSwipeByTouch,eZ=void 0!==eK&&eK,e0=P.touchSwipeTreshold,e1=P.mouseSwipeTreshold,e3=P.swipeTreshold,e2=P.touchSwipeRatio,e7=P.mouseSwipeRatio,e4=P.swipeRatio,e5=void 0===e4?1:e4,e9=P.dirRTL,e6=void 0!==e9&&e9,e8=(void 0===eq?{}:eq)||{},te=e8.show,tt=e8.containerProps,tn=e8.itemBtnProps,ti=void 0===tn?{}:tn,tr=e8.activeItemBtnProps,to=void 0===tr?{}:tr,ts=r.Children.count(eI)-1,tl=!!u&&(null===(t=b.current)||void 0===t?void 0:t.offsetWidth)>=(null===(n=w.current)||void 0===n?void 0:n.offsetWidth),td=(void 0===eM||eM)&&tl,tc=(void 0===eR||eR)&&tl,ta=ep-m!=0&&(ex||eS)?"transform ".concat(ex,"ms ").concat(eE," ").concat(eS,"ms"):"none",tu=(0,r.useCallback)(function(e){var t,n=e.correctionSlideIndex,i=e.prevCorrectionSlideIndex,r=e.curActiveSlideIndex,o=w.current.offsetWidth,s=w.current.children,c=s.length,a=eF?d([],l(s),!1).slice(c/3-i,c/3-i+c/3):d([],l(s),!1),u=null===(t=a[r])||void 0===t?void 0:t.offsetWidth,v=eT?a.reduce(function(e,t,n){return n>=r&&n<r+eT||n<r&&n<r+eT-a.length?e+t.offsetWidth:e},0):b.current.offsetWidth,f=Math.min(v,b.current.offsetWidth),m=o-f,h=eA&&eF?-(f-u)/2:0,p=eF?o/3:0,x=n-r==0?0:"forward"===g.current&&r<n?p:"backward"===g.current&&r>n?-p:0,y=r-n!=0,S=function(e){var t=a.reduce(function(t,n,i){return i>=e?t:t+(n.offsetWidth||0)},0);return eF?t:Math.min(m,t)},E=y&&eF?S(n):0,k=y||!eF?S(r):0,T=tc?0:k-E+h+x+p,C="translateX(".concat(e6?"":"-").concat(T,"px)"),L=eF?p+h:Math.min(m,a.reduce(function(e,t,n){return n<r?e+t.offsetWidth:e},0)),I=L+f,P=a.map(function(e,t){return{slideIndex:t,htmlElement:e}}),j=(eF?d(d(d(d([],l(a.slice(r).map(function(e,t){return{slideIndex:t+r,htmlElement:e}})),!1),l(P),!1),l(P),!1),l(a.slice(0,r).map(function(e,t){return{slideIndex:t,htmlElement:e}})),!1):P).reduce(function(e,t){var n=t.slideIndex,i=t.htmlElement.offsetWidth;return(e.summ>=L&&e.summ<I||e.summ+i>L&&e.summ+i<=I)&&e.items.push({slideIndex:n,isFullyVisible:e.summ+i<=I&&e.summ>=L}),e.summ+=i,e},{summ:0,items:[]}),N=!!j.items.find(function(e){return 0===e.slideIndex}),O=!!j.items.find(function(e){return e.slideIndex===a.length-1});return{slidesHTMLElements:a,innerMaxWidth:v,itemsListMaxTranslateX:m,activeSlideWidth:u,offsetCorrectionForCenterMode:h,offsetCorrectionForInfiniteMode:p,itemsListTranslateX:T,itemsListTransform:C,visibleSlides:j.items,isFirstSlideVisible:N,isLastSlideVisible:O}},[eA,tc,eF,eT,e6]),tv=u?tu({prevCorrectionSlideIndex:C.current,curActiveSlideIndex:ep,correctionSlideIndex:m}):{},tf=tv.innerMaxWidth,tm=void 0===tf?0:tf,th=tv.itemsListMaxTranslateX,tp=void 0===th?0:th,tb=tv.activeSlideWidth,tw=void 0===tb?0:tb,tx=tv.offsetCorrectionForCenterMode,ty=void 0===tx?0:tx,tS=tv.offsetCorrectionForInfiniteMode,tg=void 0===tS?0:tS,tE=tv.itemsListTranslateX,tk=void 0===tE?0:tE,tT=tv.itemsListTransform,tC=void 0===tT?"none":tT,tL=tv.visibleSlides,tI=void 0===tL?[]:tL,tP=(0,r.useCallback)(function(e){var t;return"forward"===e?(t=ep+eL)>ts?eF?t-ts-1:ts:t:"backward"===e?(t=ep-eL)<0?eF?ts+1+t:0:t:ep},[ep,eL,ts,eF]),tj=(0,r.useCallback)(function(e,t){var n;if(g.current=t,w.current.style.transition=ex||eS?"transform ".concat(ex,"ms ").concat(eE," ").concat(eS,"ms"):"none",e!==ep||eU){clearTimeout(E.current);var i=tu({correctionSlideIndex:m,prevCorrectionSlideIndex:m,curActiveSlideIndex:e}),r=i.visibleSlides,o=i.isFirstSlideVisible,s=i.isLastSlideVisible,l=i.itemsListTransform;e!==ep&&(null===(n=w.current)||void 0===n?void 0:n.style.transform)===l&&(x.current=!0),w.current.style.transform=l,eb(e,{visibleSlides:r,isFirstSlideVisible:o,isLastSlideVisible:s})}else w.current.style.transform="translateX(".concat(e6?"":"-").concat(ty+tg+(eF?0:tk),"px)")},[eU,ep,ty,eS,eE,ex,eb,tg,eF,tk,m,tu,e6]),tN=(0,r.useCallback)(function(){eN&&(clearTimeout(E.current),E.current=setTimeout(function(){tj(tP(eW),eW)},eJ||eS))},[eN,eW,eJ,tj,tP,eS]),tO=(0,r.useCallback)(function(){tj(tP("backward"),"backward")},[tj,tP]),tW=(0,r.useCallback)(function(e){h(ep),z&&z(e)},[ep,z]),tR=(0,r.useCallback)(function(){tj(tP("forward"),"forward")},[tj,tP]),tM=function(e,t,n){return e.map(function(e,i){var r,l,d,c,a=e.props,u=void 0===a?{}:a,v=u.className,f=u.onClick,m=void 0===f?null:f,h=u.style,p=s(u,["className","onClick","style"]),b=s(e,["props"]),w=eF?T.current>=I.length?"forward":"backward":i>=ep?"forward":"backward",x=i+t===ep,y=tI.find(function(e){return e.slideIndex===i+t}),S="".concat(void 0===v?"":v," ").concat(x?ei:""," ").concat(y?ea:"").trim()||void 0,g=o(o(o(o({},void 0===h?{}:h),y?ev:{}),x?eo:{}),{boxSizing:"border-box",margin:0}),E=!n&&eh?(l=(r={direction:w,index:i+t,onClick:m}).direction,d=r.index,c=r.onClick,function(e){tj(d,l||(ep<d?"forward":"")||(ep>d?"backward":"")),c&&c(e)}):m,k=o(o(o({role:"tabpanel",className:S,style:g,onClick:E},p),y?ef:{}),x?es:{});return T.current+=1,o({props:k},b)})};return(0,r.useEffect)(function(){var e=w.current;function t(e){e.preventDefault(),e.stopPropagation()}function n(e){S.current=!0;var t,n,i=!!(null===(t=e.touches)||void 0===t?void 0:t[0]),r=i?null===(n=e.touches)||void 0===n?void 0:n[0].clientX:e.clientX,o=(y.current-r)*((i?e2:e7)||e5)+ty+tg+(eF?0:tk),s=w.current.offsetWidth;w.current.style.transition="none",w.current.style.transform="translateX(".concat((e6?-1:1)*Math.max(-o,-s),"px)")}function i(e){var r,o,s;if(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",i),S.current){null===(r=e.target)||void 0===r||r.addEventListener("click",t);var l=!!(null===(o=e.changedTouches)||void 0===o?void 0:o[0]),d=l?e.changedTouches[e.changedTouches.length-1].clientX:e.clientX,c=(y.current-d)*((l?e2:e7)||e5),a=(l?e0:e1)||e3||tw/2,u=c>a?{index:tP("forward"),direction:"forward"}:c<-a?{index:tP("backward"),direction:"backward"}:{index:ep,direction:"forward"};tj(u.index,u.direction)}else null===(s=e.target)||void 0===s||s.removeEventListener("click",t);y.current=0,S.current=!1}function r(e){clearTimeout(E.current);var t,r,o=!!(null===(t=e.touches)||void 0===t?void 0:t[0]);y.current=o?null===(r=e.touches)||void 0===r?void 0:r[0].clientX:e.clientX,o?(document.addEventListener("touchmove",n),document.addEventListener("touchend",i)):(document.addEventListener("mousemove",n),document.addEventListener("mouseup",i))}return tc||(eG||null==e||e.addEventListener("mousedown",r),eZ||null==e||e.addEventListener("touchstart",r,{passive:!0}),eG&&eZ||null==e||e.addEventListener("dragstart",i)),function(){S.current=!1,y.current=0,null==e||e.removeEventListener("mousedown",r),null==e||e.removeEventListener("touchstart",r),null==e||e.removeEventListener("dragstart",i),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",i)}},[eF,tk,tC,ty,tg,ep,tw,tP,tj,tc,eG,eZ,e0,e1,e3,e2,e7,e5,e6]),(0,r.useEffect)(function(){return ep!==m?(ex||eS)&&!x.current||(x.current=!1,h(ep)):(eP&&eP(ep,m),(eF||"forward"===eW&&ep!==ts||"backward"===eW&&0!==ep)&&tN()),function(){clearTimeout(E.current)}},[m,ep,eP,ex,eS,tN,eF,ts,eW]),(0,r.useEffect)(function(){return u&&tN(),function(){clearTimeout(E.current)}},[u]),(0,r.useEffect)(function(){function e(){clearTimeout(k.current),clearTimeout(E.current),k.current=setTimeout(function(){u!==window.innerWidth&&v(0)},400)}return u!==window.innerWidth&&v(window.innerWidth),window.addEventListener("resize",e),function(){clearTimeout(k.current),window.removeEventListener("resize",e)}},[u]),T.current=0,C.current=m,r.createElement("div",o({style:o({display:"flex",flexFlow:"row wrap",boxSizing:"border-box",justifyContent:"center",width:"100%"},void 0===O?{}:O)},W,{ref:p}),(void 0===$||$)&&!td&&r.createElement("button",o({},J,{type:"button",onClick:(0===tk&&eB||0===ep&&eD)&&!eF?void 0:tO,disabled:"boolean"==typeof J.disabled?J.disabled:!(!(0===tk&&eB||0===ep&&eD)||eF)}),void 0===U?null:U),r.createElement("div",o({},A,{style:o(o({width:"100%"},void 0===_?{}:_),{display:"flex",boxSizing:"border-box",flexFlow:"row wrap",padding:"0",overflow:"hidden",maxWidth:tm?"".concat(tm,"px"):void 0,flex:tm?void 0:"1 0 auto"}),ref:b}),r.createElement("div",o({},D,{style:o(o({},void 0===V?{}:V),{display:"flex",boxSizing:"border-box",outline:"none",transition:ta,transform:tC,touchAction:void 0!==eQ&&eQ?"none":"auto"}),onTransitionEnd:ex||eS?tW:z,tabIndex:-1,role:"presentation",ref:w}),eF&&tM(I.slice(m),m,tc),tM(I,0,tc),eF&&tM(I,0,tc),eF&&tM(I.slice(0,m),0,tc))),(void 0===K||K)&&!td&&r.createElement("button",o({},Z,{type:"button",onClick:(tk===tp&&eB||ep===ts&&eD)&&!eF?void 0:tR,disabled:"boolean"==typeof Z.disabled?Z.disabled:!(!(tk===tp&&eB||ep===ts&&eD)||eF)}),void 0===G?null:G),!!(void 0!==te&&te)&&r.createElement("div",o({style:{width:"100%",display:"flex",justifyContent:"center"}},void 0===tt?{}:tt),Array.from({length:Math.ceil(I.length/eL)}).map(function(e,t){return r.createElement("button",o({type:"button",key:t,title:"".concat(t)},ti,ep>=t*eL&&ep<Math.min(eL*(t+1),ts+1)?to:{},{onClick:function(){tj(Math.min(t*eL,I.length-1),Math.min(t*eL,I.length-1)>ep?"forward":"backward")}}))})))}),a=()=>{let[e,t]=r.useState(0);return(0,i.jsx)("div",{className:"testimonial-container",id:"#testimonails",children:(0,i.jsxs)("div",{className:"inner-testimonial-container",children:[(0,i.jsxs)("div",{className:"testimonial-heading-container",children:[(0,i.jsx)("h3",{className:"testimonial-heading page-title",children:"Testimonials"}),(0,i.jsx)("p",{className:"testimonial-subheading",children:"People I've worked with have said some nice things..."})]}),(0,i.jsx)(c,{activeSlideIndex:e,onRequestChange:t,itemsToShow:1,itemsToScroll:1,forwardBtnProps:{style:{alignSelf:"center",background:"white",border:"none",borderRadius:"50%",border:"1px solid #c1c1c1",color:"black",cursor:"pointer",fontSize:"20px",margin:"0 10px",height:30,lineHeight:1,textAlign:"center",width:30},children:(0,i.jsx)("span",{children:">"})},backwardBtnProps:{style:{alignSelf:"center",background:"white",border:"none",borderRadius:"50%",border:"1px solid #c1c1c1",color:"black",cursor:"pointer",fontSize:"20px",margin:"0 10px",height:30,lineHeight:1,textAlign:"center",width:30},children:(0,i.jsx)("span",{children:"<"})},responsiveProps:[{itemsToShow:1,itemsToScroll:1,maxWidth:1e3,mouseSwipeTreshold:20,touchSwipeTreshold:50}],preventScrollOnSwipe:!0,speed:400,easing:"linear",children:(0,i.jsx)("div",{className:"testimonial-card-container",children:(0,i.jsxs)("div",{className:"testimonial-card",children:[(0,i.jsx)("div",{className:"user-picture",children:(0,i.jsx)("img",{src:"/avatar.svg",alt:""})}),(0,i.jsxs)("div",{className:"user-details",children:[(0,i.jsx)("h4",{children:"John Doe"}),(0,i.jsx)("p",{children:"CEO of Company"})]}),(0,i.jsx)("div",{className:"user-quote",children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})})]})})})]})})}},4114:function(){},390:function(){},2106:function(){},5751:function(){},622:function(e,t,n){"use strict";var i=n(2265),r=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,d={},c=null,a=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,i)&&!l.hasOwnProperty(i)&&(d[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===d[i]&&(d[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:a,props:d,_owner:s.current}}t.jsx=d,t.jsxs=d},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[749,971,938,744],function(){return e(e.s=3030)}),_N_E=e.O()}]);