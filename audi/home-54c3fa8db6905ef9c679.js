!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,o){for(var a,s,c=0,l=[];c<r.length;c++)s=r[c],i[s]&&l.push.apply(l,i[s]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);for(n&&n(r,o);l.length;)l.shift().call(null,e)};var r={},i={7:0};return e.e=function(t,n){if(0===i[t])return n.call(null,e);if(void 0!==i[t])i[t].push(n);else{i[t]=[n];var r=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=e.p+""+({}[t]||t)+"-"+{6:"6e4d5d3dcec9a57f5418"}[t]+".js",r.appendChild(o)}},e.m=t,e.c=r,e.p="",e(0)}({0:function(t,e,n){t.exports=n(409)},346:function(t,e,n){var r;/*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(i,o,a){"use strict";function s(t){if(c=o.documentElement,l=o.body,X(),ut=this,t=t||{},mt=t.constants||{},t.easing)for(var e in t.easing)G[e]=t.easing[e];xt=t.edgeStrategy||"set",pt={beforerender:t.beforerender,render:t.render,keyframe:t.keyframe},dt=t.forceHeight!==!1,dt&&(Bt=t.scale||1),gt=t.mobileDeceleration||O,yt=t.smoothScrolling!==!1,bt=t.smoothScrollingDuration||M,wt={targetTop:ut.getScrollTop()},Ut=(t.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||i.opera)})(),Ut?(ht=o.getElementById("skrollr-body"),ht&&lt(),J(),_t(c,[x,P],[E])):_t(c,[x,S],[E]),ut.refresh(),Pt(i,"resize orientationchange",function(){var t=c.clientWidth,e=c.clientHeight;(e!==Zt||t!==jt)&&(Zt=e,jt=t,qt=!0)});var n=W();return function t(){et(),St=n(t)}(),ut}var c,l,u={get:function(){return ut},init:function(t){return ut||new s(t)},VERSION:"0.6.26"},f=Object.prototype.hasOwnProperty,h=i.Math,p=i.getComputedStyle,d="touchstart",m="touchmove",g="touchcancel",v="touchend",y="skrollable",b=y+"-before",w=y+"-between",T=y+"-after",x="skrollr",E="no-"+x,S=x+"-desktop",P=x+"-mobile",k="linear",C=1e3,O=.004,M=200,N="start",A="end",$="center",_="bottom",L="___skrollable_id",D=/^(?:input|textarea|button|select)$/i,F=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,z=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,B=/^(@?[a-z\-]+)\[(\w+)\]$/,V=/-([a-z0-9_])/g,H=function(t,e){return e.toUpperCase()},R=/[\-+]?[\d]*\.?[\d]+/g,j=/\{\?\}/g,Z=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,q=/[a-z\-]+-gradient/g,Y="",U="",X=function(){var t=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(p){var e=p(l,null);for(var n in e)if(Y=n.match(t)||+n==n&&e[n].match(t))break;if(!Y)return Y=U="",a;Y=Y[0],"-"===Y.slice(0,1)?(U=Y,Y={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[Y]):U="-"+Y.toLowerCase()+"-"}},W=function(){var t=i.requestAnimationFrame||i[Y.toLowerCase()+"RequestAnimationFrame"],e=Ft();return(Ut||!t)&&(t=function(t){var n=Ft()-e,r=h.max(0,1e3/60-n);return i.setTimeout(function(){e=Ft(),t()},r)}),t},K=function(){var t=i.cancelAnimationFrame||i[Y.toLowerCase()+"CancelAnimationFrame"];return(Ut||!t)&&(t=function(t){return i.clearTimeout(t)}),t},G={begin:function(){return 0},end:function(){return 1},linear:function(t){return t},quadratic:function(t){return t*t},cubic:function(t){return t*t*t},swing:function(t){return-h.cos(t*h.PI)/2+.5},sqrt:function(t){return h.sqrt(t)},outCubic:function(t){return h.pow(t-1,3)+1},bounce:function(t){var e;if(.5083>=t)e=3;else if(.8489>=t)e=9;else if(.96208>=t)e=27;else{if(!(.99981>=t))return 1;e=91}return 1-h.abs(3*h.cos(1.028*t*e)/e)}};s.prototype.refresh=function(t){var e,n,r=!1;for(t===a?(r=!0,ft=[],Yt=0,t=o.getElementsByTagName("*")):t.length===a&&(t=[t]),e=0,n=t.length;n>e;e++){var i=t[e],s=i,c=[],l=yt,u=xt,f=!1;if(r&&L in i&&delete i[L],i.attributes){for(var h=0,p=i.attributes.length;p>h;h++){var d=i.attributes[h];if("data-anchor-target"!==d.name)if("data-smooth-scrolling"!==d.name)if("data-edge-strategy"!==d.name)if("data-emit-events"!==d.name){var m=d.name.match(I);if(null!==m){var g={props:d.value,element:i,eventType:d.name.replace(V,H)};c.push(g);var v=m[1];v&&(g.constant=v.substr(1));var b=m[2];/p$/.test(b)?(g.isPercentage=!0,g.offset=(0|b.slice(0,-1))/100):g.offset=0|b;var w=m[3],T=m[4]||w;w&&w!==N&&w!==A?(g.mode="relative",g.anchors=[w,T]):(g.mode="absolute",w===A?g.isEnd=!0:g.isPercentage||(g.offset=g.offset*Bt))}}else f=!0;else u=d.value;else l="off"!==d.value;else if(s=o.querySelector(d.value),null===s)throw'Unable to find anchor target "'+d.value+'"'}if(c.length){var x,E,S;!r&&L in i?(S=i[L],x=ft[S].styleAttr,E=ft[S].classAttr):(S=i[L]=Yt++,x=i.style.cssText,E=$t(i)),ft[S]={element:i,styleAttr:x,classAttr:E,anchorTarget:s,keyFrames:c,smoothScrolling:l,edgeStrategy:u,emitEvents:f,lastFrameIndex:-1},_t(i,[y],[])}}}for(Mt(),e=0,n=t.length;n>e;e++){var P=ft[t[e][L]];P!==a&&(nt(P),it(P))}return ut},s.prototype.relativeToAbsolute=function(t,e,n){var r=c.clientHeight,i=t.getBoundingClientRect(),o=i.top,a=i.bottom-i.top;return e===_?o-=r:e===$&&(o-=r/2),n===_?o+=a:n===$&&(o+=a/2),o+=ut.getScrollTop(),0|o+.5},s.prototype.animateTo=function(t,e){e=e||{};var n=Ft(),r=ut.getScrollTop();return vt={startTop:r,topDiff:t-r,targetTop:t,duration:e.duration||C,startTime:n,endTime:n+(e.duration||C),easing:G[e.easing||k],done:e.done},vt.topDiff||(vt.done&&vt.done.call(ut,!1),vt=a),ut},s.prototype.stopAnimateTo=function(){vt&&vt.done&&vt.done.call(ut,!0),vt=a},s.prototype.isAnimatingTo=function(){return!!vt},s.prototype.isMobile=function(){return Ut},s.prototype.setScrollTop=function(t,e){return Tt=e===!0,Ut?Xt=h.min(h.max(t,0),zt):i.scrollTo(0,t),ut},s.prototype.getScrollTop=function(){return Ut?Xt:i.pageYOffset||c.scrollTop||l.scrollTop||0},s.prototype.getMaxScrollTop=function(){return zt},s.prototype.on=function(t,e){return pt[t]=e,ut},s.prototype.off=function(t){return delete pt[t],ut},s.prototype.destroy=function(){var t=K();t(St),Ct(),_t(c,[E],[x,S,P]);for(var e=0,n=ft.length;n>e;e++)ct(ft[e].element);c.style.overflow=l.style.overflow="",c.style.height=l.style.height="",ht&&u.setStyle(ht,"transform","none"),ut=a,ht=a,pt=a,dt=a,zt=0,Bt=1,mt=a,gt=a,Vt="down",Ht=-1,jt=0,Zt=0,qt=!1,vt=a,yt=a,bt=a,wt=a,Tt=a,Yt=0,xt=a,Ut=!1,Xt=0,Et=a};var J=function(){var t,e,n,r,s,u,f,p,y,b,w,T;Pt(c,[d,m,g,v].join(" "),function(i){var c=i.changedTouches[0];for(r=i.target;3===r.nodeType;)r=r.parentNode;switch(s=c.clientY,u=c.clientX,b=i.timeStamp,D.test(r.tagName)||i.preventDefault(),i.type){case d:t&&t.blur(),ut.stopAnimateTo(),t=r,e=f=s,n=u,y=b;break;case m:D.test(r.tagName)&&o.activeElement!==r&&i.preventDefault(),p=s-f,T=b-w,ut.setScrollTop(Xt-p,!0),f=s,w=b;break;default:case g:case v:var l=e-s,x=n-u,E=x*x+l*l;if(49>E){if(!D.test(t.tagName)){t.focus();var S=o.createEvent("MouseEvents");S.initMouseEvent("click",!0,!0,i.view,1,c.screenX,c.screenY,c.clientX,c.clientY,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,0,null),t.dispatchEvent(S)}return}t=a;var P=p/T;P=h.max(h.min(P,3),-3);var k=h.abs(P/gt),C=P*k+.5*gt*k*k,O=ut.getScrollTop()-C,M=0;O>zt?(M=(zt-O)/C,O=zt):0>O&&(M=-O/C,O=0),k*=1-M,ut.animateTo(0|O+.5,{easing:"outCubic",duration:k})}}),i.scrollTo(0,0),c.style.overflow=l.style.overflow="hidden"},Q=function(){var t,e,n,r,i,o,a,s,l,u,f,p=c.clientHeight,d=Nt();for(s=0,l=ft.length;l>s;s++)for(t=ft[s],e=t.element,n=t.anchorTarget,r=t.keyFrames,i=0,o=r.length;o>i;i++)a=r[i],u=a.offset,f=d[a.constant]||0,a.frame=u,a.isPercentage&&(u*=p,a.frame=u),"relative"===a.mode&&(ct(e),a.frame=ut.relativeToAbsolute(n,a.anchors[0],a.anchors[1])-u,ct(e,!0)),a.frame+=f,dt&&!a.isEnd&&a.frame>zt&&(zt=a.frame);for(zt=h.max(zt,At()),s=0,l=ft.length;l>s;s++){for(t=ft[s],r=t.keyFrames,i=0,o=r.length;o>i;i++)a=r[i],f=d[a.constant]||0,a.isEnd&&(a.frame=zt-a.offset+f);t.keyFrames.sort(It)}},tt=function(t,e){for(var n=0,r=ft.length;r>n;n++){var i,o,a=ft[n],s=a.element,c=a.smoothScrolling?t:e,l=a.keyFrames,h=l.length,p=l[0],d=l[l.length-1],m=p.frame>c,g=c>d.frame,v=m?p:d,x=a.emitEvents,E=a.lastFrameIndex;if(m||g){if(m&&-1===a.edge||g&&1===a.edge)continue;switch(m?(_t(s,[b],[T,w]),x&&E>-1&&(Ot(s,p.eventType,Vt),a.lastFrameIndex=-1)):(_t(s,[T],[b,w]),x&&h>E&&(Ot(s,d.eventType,Vt),a.lastFrameIndex=h)),a.edge=m?-1:1,a.edgeStrategy){case"reset":ct(s);continue;case"ease":c=v.frame;break;default:case"set":var S=v.props;for(i in S)f.call(S,i)&&(o=st(S[i].value),0===i.indexOf("@")?s.setAttribute(i.substr(1),o):u.setStyle(s,i,o));continue}}else 0!==a.edge&&(_t(s,[y,w],[b,T]),a.edge=0);for(var P=0;h-1>P;P++)if(c>=l[P].frame&&l[P+1].frame>=c){var k=l[P],C=l[P+1];for(i in k.props)if(f.call(k.props,i)){var O=(c-k.frame)/(C.frame-k.frame);O=k.props[i].easing(O),o=at(k.props[i].value,C.props[i].value,O),o=st(o),0===i.indexOf("@")?s.setAttribute(i.substr(1),o):u.setStyle(s,i,o)}x&&E!==P&&("down"===Vt?Ot(s,k.eventType,Vt):Ot(s,C.eventType,Vt),a.lastFrameIndex=P);break}}},et=function(){qt&&(qt=!1,Mt());var t,e,n=ut.getScrollTop(),r=Ft();if(vt)r>=vt.endTime?(n=vt.targetTop,t=vt.done,vt=a):(e=vt.easing((r-vt.startTime)/vt.duration),n=0|vt.startTop+e*vt.topDiff),ut.setScrollTop(n,!0);else if(!Tt){var i=wt.targetTop-n;i&&(wt={startTop:Ht,topDiff:n-Ht,targetTop:n,startTime:Rt,endTime:Rt+bt}),wt.endTime>=r&&(e=G.sqrt((r-wt.startTime)/bt),n=0|wt.startTop+e*wt.topDiff)}if(Ut&&ht&&u.setStyle(ht,"transform","translate(0, "+-Xt+"px) "+Et),Tt||Ht!==n){Vt=n>Ht?"down":Ht>n?"up":Vt,Tt=!1;var o={curTop:n,lastTop:Ht,maxTop:zt,direction:Vt},s=pt.beforerender&&pt.beforerender.call(ut,o);s!==!1&&(tt(n,ut.getScrollTop()),Ht=n,pt.render&&pt.render.call(ut,o)),t&&t.call(ut,!1)}Rt=r},nt=function(t){for(var e=0,n=t.keyFrames.length;n>e;e++){for(var r,i,o,a,s=t.keyFrames[e],c={};null!==(a=z.exec(s.props));)o=a[1],i=a[2],r=o.match(B),null!==r?(o=r[1],r=r[2]):r=k,i=i.indexOf("!")?rt(i):[i.slice(1)],c[o]={value:i,easing:G[r]};s.props=c}},rt=function(t){var e=[];return Z.lastIndex=0,t=t.replace(Z,function(t){return t.replace(R,function(t){return 100*(t/255)+"%"})}),U&&(q.lastIndex=0,t=t.replace(q,function(t){return U+t})),t=t.replace(R,function(t){return e.push(+t),"{?}"}),e.unshift(t),e},it=function(t){var e,n,r={};for(e=0,n=t.keyFrames.length;n>e;e++)ot(t.keyFrames[e],r);for(r={},e=t.keyFrames.length-1;e>=0;e--)ot(t.keyFrames[e],r)},ot=function(t,e){var n;for(n in e)f.call(t.props,n)||(t.props[n]=e[n]);for(n in t.props)e[n]=t.props[n]},at=function(t,e,n){var r,i=t.length;if(i!==e.length)throw"Can't interpolate between \""+t[0]+'" and "'+e[0]+'"';var o=[t[0]];for(r=1;i>r;r++)o[r]=t[r]+(e[r]-t[r])*n;return o},st=function(t){var e=1;return j.lastIndex=0,t[0].replace(j,function(){return t[e++]})},ct=function(t,e){t=[].concat(t);for(var n,r,i=0,o=t.length;o>i;i++)r=t[i],n=ft[r[L]],n&&(e?(r.style.cssText=n.dirtyStyleAttr,_t(r,n.dirtyClassAttr)):(n.dirtyStyleAttr=r.style.cssText,n.dirtyClassAttr=$t(r),r.style.cssText=n.styleAttr,_t(r,n.classAttr)))},lt=function(){Et="translateZ(0)",u.setStyle(ht,"transform",Et);var t=p(ht),e=t.getPropertyValue("transform"),n=t.getPropertyValue(U+"transform"),r=e&&"none"!==e||n&&"none"!==n;r||(Et="")};u.setStyle=function(t,e,n){var r=t.style;if(e=e.replace(V,H).replace("-",""),"zIndex"===e)r[e]=isNaN(n)?n:""+(0|n);else if("float"===e)r.styleFloat=r.cssFloat=n;else try{Y&&(r[Y+e.slice(0,1).toUpperCase()+e.slice(1)]=n),r[e]=n}catch(t){}};var ut,ft,ht,pt,dt,mt,gt,vt,yt,bt,wt,Tt,xt,Et,St,Pt=u.addEvent=function(t,e,n){var r=function(t){return t=t||i.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};e=e.split(" ");for(var o,a=0,s=e.length;s>a;a++)o=e[a],t.addEventListener?t.addEventListener(o,n,!1):t.attachEvent("on"+o,r),Wt.push({element:t,name:o,listener:n})},kt=u.removeEvent=function(t,e,n){e=e.split(" ");for(var r=0,i=e.length;i>r;r++)t.removeEventListener?t.removeEventListener(e[r],n,!1):t.detachEvent("on"+e[r],n)},Ct=function(){for(var t,e=0,n=Wt.length;n>e;e++)t=Wt[e],kt(t.element,t.name,t.listener);Wt=[]},Ot=function(t,e,n){pt.keyframe&&pt.keyframe.call(ut,t,e,n)},Mt=function(){var t=ut.getScrollTop();zt=0,dt&&!Ut&&(l.style.height=""),Q(),dt&&!Ut&&(l.style.height=zt+c.clientHeight+"px"),Ut?ut.setScrollTop(h.min(ut.getScrollTop(),zt)):ut.setScrollTop(t,!0),Tt=!0},Nt=function(){var t,e,n=c.clientHeight,r={};for(t in mt)e=mt[t],"function"==typeof e?e=e.call(ut):/p$/.test(e)&&(e=e.slice(0,-1)/100*n),r[t]=e;return r},At=function(){var t=ht&&ht.offsetHeight||0,e=h.max(t,l.scrollHeight,l.offsetHeight,c.scrollHeight,c.offsetHeight,c.clientHeight);return e-c.clientHeight},$t=function(t){var e="className";return i.SVGElement&&t instanceof i.SVGElement&&(t=t[e],e="baseVal"),t[e]},_t=function(t,e,n){var r="className";if(i.SVGElement&&t instanceof i.SVGElement&&(t=t[r],r="baseVal"),n===a)return t[r]=e,a;for(var o=t[r],s=0,c=n.length;c>s;s++)o=Dt(o).replace(Dt(n[s])," ");o=Lt(o);for(var l=0,u=e.length;u>l;l++)-1===Dt(o).indexOf(Dt(e[l]))&&(o+=" "+e[l]);t[r]=Lt(o)},Lt=function(t){return t.replace(F,"")},Dt=function(t){return" "+t+" "},Ft=Date.now||function(){return+new Date},It=function(t,e){return t.frame-e.frame},zt=0,Bt=1,Vt="down",Ht=-1,Rt=Ft(),jt=0,Zt=0,qt=!1,Yt=0,Ut=!1,Xt=0,Wt=[];r=function(){return u}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(window,document)},347:function(t,e,n){"use strict";function r(){return c?(c.animateTo(0,{duration:.2}),void l.restart()):(l.set(".page-cars",{display:"block"}),l.set(".main",{top:"0"}),l.set(".footer",{visibility:"visible"}),l.to(".main",1,{top:"-100%"}),void(c=o.init({skrollrBody:".page-cars"})))}function i(){u.set(".footer",{visibility:"hidden"}),u.to(".main",1,{top:"0"}),c&&c.animateTo(0)}var o=n(346),a="home",s=o.init(),o=n(346);e.goto=function(t){a!==t&&(a=t,"home"===t&&i(),"heart"===t&&(s&&(s.destroy(),s=null),r(),_czc.push(["_trackPageview","/detail/"+pageId,location.href])))};var c,l=new TimelineLite,u=new TimelineLite},409:function(t,e,n){n(420)},417:function(t,e){t.exports=function(){var t,e,n,r=new TimelineLite({paused:!0,onStart:function(){}}),i=new TimelineLite,o=25,a=1.5,s="x",c="y",l=["#cc0033","#aa1420"],u={css:{}},f={css:{z:.1,visibility:"visible"},immediateRender:!0};for(u.css[s]=f.css[s]=336,u.css[c]=f.css[c]=174,e=0;e<o;e++){var h=$("#featureBackground");t=$("<div class='gift'/>").appendTo(h)[0],f.css.width=15*Math.random()+10|0,f.css.height=Math.ceil(.75*f.css.width),f.css.backgroundColor=l[Math.random()*l.length|0],TweenLite.set(t,f),n=Math.random()*a,r.to(t,a,{opacity:1,physics2D:{velocity:300*Math.random()+150,angle:60*Math.random()+250,gravity:600,xProp:s,yProp:c}},n),r.fromTo(t,a,u,{physics2D:{velocity:300*Math.random()+150,angle:60*Math.random()+240,gravity:800,xProp:s,yProp:c},immediateRender:!1,overwrite:"none"},n+a),r.fromTo(t,a,u,{physics2D:{velocity:300*Math.random()+150,angle:60*Math.random()+240,gravity:800,xProp:s,yProp:c},immediateRender:!1,display:"none",overwrite:"none"},n+2*a)}return i.to(r,4,{time:r.duration(),ease:Linear.easeNone}),i.set(".swipe-down",{visibility:"visible"}),i.set(r,{opacity:0}),i}},418:function(t,e){t.exports=function(t){var e=($(".start"),new TimelineLite({onStart:function(){}})),n=$("#logo");return e.set(".three_million_box .text",{opacity:0,scale:5}).to($(".car_box img"),.8,{width:509,height:232,top:317,right:6,ease:Power2.easeInOut}).to(n,1,{ease:Bounce.easeOut,top:0}).to(".three_million_box .text",1,{scale:1,ease:Power2.easeOut,opacity:1}).set(".ohters-img",{opacity:1}).to(".three-img",1,{top:379,ease:Power2.easeOut}).to(".message",1,{left:38,ease:Power2.easeOut}),e.set(".swipe-down",{visibility:"visible"}),e},Bounce.easeOut.getRatio=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.0625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},419:function(t,e,n){var r=n(347);t.exports=function(){$(".icon-home").click(function(){return r.goto("home"),!1}),$(".link-detail").click(function(){return r.goto("heart"),!1})}},420:function(t,e,n){function r(){console.log("load start"),n.e(6,function(t){var e=[t(350)];(function(t){t(a)}).apply(null,e)})}n(422),n(432);var i=$("#bg-music").get(0),o=!0;$(".music-icon").on("click",function(){o?(i.pause(),$(this).removeClass("run"),_czc.push(["_trackEvent","背景音乐","关闭"]),o=!1):(i.play(),$(this).addClass("run"),_czc.push(["_trackEvent","背景音乐","播放"]),o=!0)});var a,s=n(419),c=n(418);n(417);$(function(){a=new TimelineMax({repeat:0,yoyo:!1,onComplete:r}),a.add(c(a))}),s()},422:function(t,e){var n=function(){function t(t){return null==t?String(t):X[W.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return N.call(t,function(t){return null!=t})}function c(t){return t.length>0?S.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in L?L[t]:L[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||D[l(t)]?e:e+"px"}function h(t){var e,n;return _[t]||(e=$.createElement(t),$.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),_[t]=n),_[t]}function p(t){return"children"in t?A.call(t.children):S.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function d(t,e){var n,r=t?t.length:0;for(n=0;n<r;n++)this[n]=t[n];this.length=r,this.selector=e||""}function m(t,e,n){for(E in e)n&&(o(e[E])||Q(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Q(e[E])&&!Q(t[E])&&(t[E]=[]),m(t[E],e[E],n)):e[E]!==x&&(t[E]=e[E])}function g(t,e){return null==e?S(t):S(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className||"",r=n&&n.baseVal!==x;return e===x?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}catch(e){return t}}function T(t,e){e(t);for(var n=0,r=t.childNodes.length;n<r;n++)T(t.childNodes[n],e)}var x,E,S,P,k,C,O=[],M=O.concat,N=O.filter,A=O.slice,$=window.document,_={},L={},D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},F=/^\s*<(\w+|!)[^>]*>/,I=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,B=/^(?:body|html)$/i,V=/([A-Z])/g,H=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],j=$.createElement("table"),Z=$.createElement("tr"),q={tr:$.createElement("tbody"),tbody:j,thead:j,tfoot:j,td:Z,th:Z,"*":$.createElement("div")},Y=/complete|loaded|interactive/,U=/^[\w-]*$/,X={},W=X.toString,K={},G=$.createElement("div"),J={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return K.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=G).appendChild(t),r=~K.qsa(i,e).indexOf(t),o&&G.removeChild(t),r},k=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},K.fragment=function(t,e,n){var r,i,a;return I.test(t)&&(r=S($.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(z,"<$1></$2>")),e===x&&(e=F.test(t)&&RegExp.$1),e in q||(e="*"),a=q[e],a.innerHTML=""+t,r=S.each(A.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=S(r),S.each(n,function(t,e){H.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},K.Z=function(t,e){return new d(t,e)},K.isZ=function(t){return t instanceof K.Z},K.init=function(t,n){var r;if(!t)return K.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&F.test(t))r=K.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return S(n).find(t);r=K.qsa($,t)}else{if(e(t))return S($).ready(t);if(K.isZ(t))return t;if(Q(t))r=s(t);else if(i(t))r=[t],t=null;else if(F.test(t))r=K.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return S(n).find(t);r=K.qsa($,t)}}return K.Z(r,t)},S=function(t,e){return K.init(t,e)},S.extend=function(t){var e,n=A.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},K.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=U.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:A.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},S.contains=$.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},S.type=t,S.isFunction=e,S.isWindow=n,S.isArray=Q,S.isPlainObject=o,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},S.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},S.camelCase=k,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)},S.uuid=0,S.support={},S.expr={},S.noop=function(){},S.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return c(o)},S.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},S.grep=function(t,e){return N.call(t,e)},window.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){X["[object "+e+"]"]=e.toLowerCase()}),S.fn={constructor:K.Z,length:0,forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,splice:O.splice,indexOf:O.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=K.isZ(e)?e.toArray():e;return M.apply(K.isZ(this)?this.toArray():this,n)},map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return S(A.apply(this,arguments))},ready:function(t){return Y.test($.readyState)&&$.body?t(S):$.addEventListener("DOMContentLoaded",function(){t(S)},!1),this},get:function(t){return t===x?A.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):S(N.call(this,function(e){return K.matches(e,t)}))},add:function(t,e){return S(C(this.concat(S(t,e))))},is:function(t){return this.length>0&&K.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?A.call(t):S(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return S(n)},has:function(t){return this.filter(function(){return i(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:S(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?S(t).filter(function(){var t=this;return O.some.call(n,function(e){return S.contains(e,t)})}):1==this.length?S(K.qsa(this[0],t)):this.map(function(){return K.qsa(this,t)}):S()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=S(t));n&&!(i?i.indexOf(n)>=0:K.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return S(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){if((t=t.parentNode)&&!r(t)&&e.indexOf(t)<0)return e.push(t),t});return g(e,t)},parent:function(t){return g(C(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||A.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return N.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=S(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){S(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=S(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=S(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;S(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(E in t)y(this,E,t[E]);else y(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=J[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(V,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?w(r):x},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=S(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(!S.contains($.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[k(e)]||r.getPropertyValue(e);if(Q(e)){var o={};return S.each(e,function(t,e){o[e]=i.style[k(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=l(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(l(e))});else for(E in e)e[E]||0===e[E]?a+=l(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(l(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&O.some.call(this,function(t){return this.test(b(t))},u(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){P=[];var n=b(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){S(this).hasClass(t)||P.push(t)},this),P.length&&b(this,n+(n?" ":"")+P.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===x)return b(this,"");P=b(this),v(this,t,e,P).split(/\s+/g).forEach(function(t){P=P.replace(u(t)," ")}),b(this,P.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=S(this),i=v(this,t,n,b(this));i.split(/\s+/g).forEach(function(t){(e===x?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=B.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,r.top+=parseFloat(S(e[0]).css("border-top-width"))||0,r.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||$.body;t&&!B.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});S.fn[t]=function(i){var o,a=this[0];return i===x?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=S(this),a.css(t,v(this,i,e,a[t]()))})}}),R.forEach(function(e,n){var r=n%2;S.fn[e]=function(){var e,i,o=S.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:K.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=S.contains($.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return S(t).remove();i.insertBefore(t,e),s&&T(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},S.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return S(t)[e](this),this}}),K.Z.prototype=d.prototype=S.fn,K.uniq=C,K.deserializeValue=w,S.zepto=K,S}();window.Zepto=n,void 0===window.$&&(window.$=n),function(t){function e(t,e){var n=this.os={},r=this.browser={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),o=t.match(/(Android);?[\s\/]+([\d.]+)?/),a=!!t.match(/\(Macintosh\; Intel /),s=t.match(/(iPad).*OS\s([\d_]+)/),c=t.match(/(iPod)(.*OS\s([\d_]+))?/),l=!s&&t.match(/(iPhone\sOS)\s([\d_]+)/),u=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),f=/Win\d{2}|Windows/.test(e),h=t.match(/Windows Phone ([\d.]+)/),p=u&&t.match(/TouchPad/),d=t.match(/Kindle\/([\d.]+)/),m=t.match(/Silk\/([\d._]+)/),g=t.match(/(BlackBerry).*Version\/([\d.]+)/),v=t.match(/(BB10).*Version\/([\d.]+)/),y=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),b=t.match(/PlayBook/),w=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),T=t.match(/Firefox\/([\d.]+)/),x=t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),E=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),S=!w&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),P=S||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(r.webkit=!!i)&&(r.version=i[1]),o&&(n.android=!0,n.version=o[2]),l&&!c&&(n.ios=n.iphone=!0,n.version=l[2].replace(/_/g,".")),s&&(n.ios=n.ipad=!0,n.version=s[2].replace(/_/g,".")),c&&(n.ios=n.ipod=!0,n.version=c[3]?c[3].replace(/_/g,"."):null),h&&(n.wp=!0,n.version=h[1]),u&&(n.webos=!0,n.version=u[2]),p&&(n.touchpad=!0),g&&(n.blackberry=!0,n.version=g[2]),v&&(n.bb10=!0,n.version=v[2]),y&&(n.rimtabletos=!0,n.version=y[2]),b&&(r.playbook=!0),d&&(n.kindle=!0,n.version=d[1]),m&&(r.silk=!0,r.version=m[1]),!m&&n.android&&t.match(/Kindle Fire/)&&(r.silk=!0),w&&(r.chrome=!0,r.version=w[1]),T&&(r.firefox=!0,r.version=T[1]),x&&(n.firefoxos=!0,n.version=x[1]),E&&(r.ie=!0,r.version=E[1]),P&&(a||n.ios||f)&&(r.safari=!0,n.ios||(r.version=P[1])),S&&(r.webview=!0),n.tablet=!!(s||b||o&&!t.match(/Mobile/)||T&&t.match(/Tablet/)||E&&!t.match(/Phone/)&&t.match(/Touch/)),n.phone=!(n.tablet||n.ipod||!(o||l||u||g||v||w&&t.match(/Android/)||w&&t.match(/CriOS\/([\d.]+)/)||T&&t.match(/Mobile/)||E&&t.match(/Touch/)));
}e.call(t,navigator.userAgent,navigator.platform),t.__detect=e}(n),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(g[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return w[t]||y&&b[t]||t}function s(n,i,s,c,u,h,p){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=u,i.e in w&&(s=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return i.fn.apply(this,arguments)}),i.del=h;var d=h||s;i.proxy=function(t){if(t=l(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function c(t,r,i,s,c){var l=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete g[l][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function l(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(S,function(t,r){var i=n[t];e[t]=function(){return this[r]=T,i&&i.apply(n,arguments)},e[r]=x}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=T)),e}function u(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return l(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var T=function(){return!0},x=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,l,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),i!==f&&r!==!1||(i=r,r=f),i===!1&&(i=x),h.each(function(f,h){o&&(a=function(t){return c(h,t.type,i),i.apply(this,arguments)}),n&&(l=function(e){var r,o=t(e.target).closest(n,h).get(0);if(o&&o!==h)return r=t.extend(u(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))}),s(h,e,i,r,n,l||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=x),i.each(function(){c(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):l(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=u(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){if(o=e.proxy(i),i.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),l(n)}}(n),function(){try{getComputedStyle(void 0)}catch(e){var t=getComputedStyle;window.getComputedStyle=function(e){try{return t(e)}catch(t){return null}}}}(),function(t){function e(t,e,n,r){return Math.abs(t-e)>=Math.abs(n-r)?t-e>0?"Left":"Right":n-r>0?"Up":"Down"}function n(){u=null,h.last&&(h.el.trigger("longTap"),h={})}function r(){u&&clearTimeout(u),u=null}function i(){s&&clearTimeout(s),c&&clearTimeout(c),l&&clearTimeout(l),u&&clearTimeout(u),s=c=l=u=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,c,l,u,f,h={},p=750;t(document).ready(function(){var d,m,g,v,y=0,b=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(v=a(e,"down"))&&!o(e)||(g=v?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),m=d-(h.last||d),h.el=t("tagName"in g.target?g.target:g.target.parentNode),s&&clearTimeout(s),h.x1=g.pageX,h.y1=g.pageY,m>0&&m<=250&&(h.isDoubleTap=!0),h.last=d,u=setTimeout(n,p),f&&v&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(v=a(t,"move"))&&!o(t)||(g=v?t:t.touches[0],r(),h.x2=g.pageX,h.y2=g.pageY,y+=Math.abs(h.x1-h.x2),b+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(v=a(n,"up"))&&!o(n)||(r(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?l=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(y<30&&b<30?c=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=i,h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=b=0)}).on("touchcancel MSPointerCancel pointercancel",i),t(window).on("scroll",i)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(n)},432:function(t,e){}});
//# sourceMappingURL=home-54c3fa8db6905ef9c679.js.map