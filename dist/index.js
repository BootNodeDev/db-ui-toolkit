import*as e from"react";var t={945:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!i(c))return!1;var u=e[c],d=t[c];if(!1===(o=r?r.call(n,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o={};(()=>{n.d(o,{YM:()=>Wt,$n:()=>Qt,Ql:()=>qt,hE:()=>Vr,Zp:()=>or,Ve:()=>Br,i8:()=>lr,_8:()=>Yt,ms:()=>nr,Gr:()=>pr,wi:()=>Cr,Y9:()=>mr,wO:()=>vr,q7:()=>Jt,gu:()=>yr,pq:()=>xr,gZ:()=>Sr,IG:()=>Mr,EY:()=>Rr,cc:()=>Hr,A1:()=>_r,mO:()=>Lr,g:()=>Dr,fi:()=>zr});var t=function(){return t=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t.apply(this,arguments)};function r(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const a=(s={cloneElement:()=>e.cloneElement,createElement:()=>e.createElement,createRef:()=>e.createRef,default:()=>e.default,useCallback:()=>e.useCallback,useContext:()=>e.useContext,useEffect:()=>e.useEffect,useMemo:()=>e.useMemo,useState:()=>e.useState},i={},n.d(i,s),i);var s,i,l=n(945),c=n.n(l),u="-ms-",d="-moz-",p="-webkit-",f="comm",C="rule",h="decl",m="@import",g="@keyframes",v="@layer",b=Math.abs,y=String.fromCharCode,w=Object.assign;function x(e){return e.trim()}function O(e,t){return(e=t.exec(e))?e[0]:e}function S(e,t,r){return e.replace(t,r)}function E(e,t,r){return e.indexOf(t,r)}function k(e,t){return 0|e.charCodeAt(t)}function P(e,t,r){return e.slice(t,r)}function $(e){return e.length}function j(e){return e.length}function N(e,t){return t.push(e),e}function I(e,t){return e.filter((function(e){return!O(e,t)}))}var M=1,R=1,V=0,A=0,H=0,_="";function Z(e,t,r,n,o,a,s,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:M,column:R,length:s,return:"",siblings:i}}function L(e,t){return w(Z("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function z(e){for(;e.root;)e=L(e.root,{children:[e]});N(e,e.siblings)}function D(){return H=A>0?k(_,--A):0,R--,10===H&&(R=1,M--),H}function B(){return H=A<V?k(_,A++):0,R++,10===H&&(R=1,M++),H}function T(){return k(_,A)}function F(){return A}function G(e,t){return P(_,e,t)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(e){return x(G(A-1,Q(91===e?e+2:40===e?e+1:e)))}function q(e){for(;(H=T())&&H<33;)B();return Y(e)>2||Y(H)>3?"":" "}function U(e,t){for(;--t&&B()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return G(e,F()+(t<6&&32==T()&&32==B()))}function Q(e){for(;B();)switch(H){case e:return A;case 34:case 39:34!==e&&39!==e&&Q(H);break;case 40:41===e&&Q(e);break;case 92:B()}return A}function X(e,t){for(;B()&&e+H!==57&&(e+H!==84||47!==T()););return"/*"+G(t,A-1)+"*"+y(47===e?e:B())}function J(e){for(;!Y(T());)B();return G(e,A)}function K(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function ee(e,t,r,n){switch(e.type){case v:if(e.children.length)break;case m:case h:return e.return=e.return||e.value;case f:return"";case g:return e.return=e.value+"{"+K(e.children,n)+"}";case C:if(!$(e.value=e.props.join(",")))return""}return $(r=K(e.children,n))?e.return=e.value+"{"+r+"}":""}function te(e,t,r){switch(function(e,t){return 45^k(e,0)?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}(e,t)){case 5103:return p+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p+e+e;case 4789:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return p+e+d+e+u+e+e;case 5936:switch(k(e,t+11)){case 114:return p+e+u+S(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return p+e+u+S(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return p+e+u+S(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return p+e+u+e+e;case 6165:return p+e+u+"flex-"+e+e;case 5187:return p+e+S(e,/(\w+).+(:[^]+)/,p+"box-$1$2"+u+"flex-$1$2")+e;case 5443:return p+e+u+"flex-item-"+S(e,/flex-|-self/g,"")+(O(e,/flex-|baseline/)?"":u+"grid-row-"+S(e,/flex-|-self/g,""))+e;case 4675:return p+e+u+"flex-line-pack"+S(e,/align-content|flex-|-self/g,"")+e;case 5548:return p+e+u+S(e,"shrink","negative")+e;case 5292:return p+e+u+S(e,"basis","preferred-size")+e;case 6060:return p+"box-"+S(e,"-grow","")+p+e+u+S(e,"grow","positive")+e;case 4554:return p+S(e,/([^-])(transform)/g,"$1"+p+"$2")+e;case 6187:return S(S(S(e,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),e,"")+e;case 5495:case 3959:return S(e,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return S(S(e,/(.+:)(flex-)?(.*)/,p+"box-pack:$3"+u+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+p+e+e;case 4200:if(!O(e,/flex-|baseline/))return u+"grid-column-align"+P(e,t)+e;break;case 2592:case 3360:return u+S(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,O(e.props,/grid-\w+-end/)}))?~E(e+(r=r[t].value),"span",0)?e:u+S(e,"-start","")+e+u+"grid-row-span:"+(~E(r,"span",0)?O(r,/\d+/):+O(r,/\d+/)-+O(e,/\d+/))+";":u+S(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return O(e.props,/grid-\w+-start/)}))?e:u+S(S(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return S(e,/(.+)-inline(.+)/,p+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($(e)-1-t>6)switch(k(e,t+1)){case 109:if(45!==k(e,t+4))break;case 102:return S(e,/(.+:)(.+)-([^]+)/,"$1"+p+"$2-$3$1"+d+(108==k(e,t+3)?"$3":"$2-$3"))+e;case 115:return~E(e,"stretch",0)?te(S(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return S(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,a,s,i){return u+r+":"+n+i+(o?u+r+"-span:"+(a?s:+s-+n)+i:"")+e}));case 4949:if(121===k(e,t+6))return S(e,":",":"+p)+e;break;case 6444:switch(k(e,45===k(e,14)?18:11)){case 120:return S(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+p+(45===k(e,14)?"inline-":"")+"box$3$1"+p+"$2$3$1"+u+"$2box$3")+e;case 100:return S(e,":",":"+u)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return S(e,"scroll-","scroll-snap-")+e}return e}function re(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=te(e.value,e.length,r));case g:return K([L(e,{value:S(e.value,"@","@"+p)})],n);case C:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(O(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":z(L(e,{props:[S(t,/:(read-\w+)/,":"+d+"$1")]})),z(L(e,{props:[t]})),w(e,{props:I(r,n)});break;case"::placeholder":z(L(e,{props:[S(t,/:(plac\w+)/,":"+p+"input-$1")]})),z(L(e,{props:[S(t,/:(plac\w+)/,":"+d+"$1")]})),z(L(e,{props:[S(t,/:(plac\w+)/,u+"input-$1")]})),z(L(e,{props:[t]})),w(e,{props:I(r,n)})}return""}))}}function ne(e){return function(e){return _="",e}(oe("",null,null,null,[""],e=function(e){return M=R=1,V=$(_=e),A=0,[]}(e),0,[0],e))}function oe(e,t,r,n,o,a,s,i,l){for(var c=0,u=0,d=s,p=0,f=0,C=0,h=1,m=1,g=1,v=0,w="",x=o,O=a,P=n,j=w;m;)switch(C=v,v=B()){case 40:if(108!=C&&58==k(j,d-1)){-1!=E(j+=S(W(v),"&","&\f"),"&\f",b(c?i[c-1]:0))&&(g=-1);break}case 34:case 39:case 91:j+=W(v);break;case 9:case 10:case 13:case 32:j+=q(C);break;case 92:j+=U(F()-1,7);continue;case 47:switch(T()){case 42:case 47:N(se(X(B(),F()),t,r,l),l);break;default:j+="/"}break;case 123*h:i[c++]=$(j)*g;case 125*h:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+u:-1==g&&(j=S(j,/\f/g,"")),f>0&&$(j)-d&&N(f>32?ie(j+";",n,r,d-1,l):ie(S(j," ","")+";",n,r,d-2,l),l);break;case 59:j+=";";default:if(N(P=ae(j,t,r,c,u,o,i,w,x=[],O=[],d,a),a),123===v)if(0===u)oe(j,t,P,P,x,a,d,i,O);else switch(99===p&&110===k(j,3)?100:p){case 100:case 108:case 109:case 115:oe(e,P,P,n&&N(ae(e,P,P,0,0,o,i,w,o,x=[],d,O),O),o,O,d,i,n?x:O);break;default:oe(j,P,P,P,[""],O,0,i,O)}}c=u=f=0,h=g=1,w=j="",d=s;break;case 58:d=1+$(j),f=C;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==D())continue;switch(j+=y(v),v*h){case 38:g=u>0?1:(j+="\f",-1);break;case 44:i[c++]=($(j)-1)*g,g=1;break;case 64:45===T()&&(j+=W(B())),p=T(),u=d=$(w=j+=J(F())),v++;break;case 45:45===C&&2==$(j)&&(h=0)}}return a}function ae(e,t,r,n,o,a,s,i,l,c,u,d){for(var p=o-1,f=0===o?a:[""],h=j(f),m=0,g=0,v=0;m<n;++m)for(var y=0,w=P(e,p+1,p=b(g=s[m])),O=e;y<h;++y)(O=x(g>0?f[y]+" "+w:S(w,/&\f/g,f[y])))&&(l[v++]=O);return Z(e,t,r,0===o?C:i,l,c,u,d)}function se(e,t,r,n){return Z(e,t,r,f,y(H),P(e,2,-2),0,n)}function ie(e,t,r,n,o){return Z(e,t,r,h,P(e,0,n),P(e,n+1,-1),n,o)}var le={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ce="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ue="active",de="data-styled-version",pe="6.1.11",fe="/*!sc*/\n",Ce="undefined"!=typeof window&&"HTMLElement"in window,he=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),me=(new Set,Object.freeze([])),ge=Object.freeze({});var ve=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function we(e){return e.replace(be,"-").replace(ye,"")}var xe=/(a)(d)/gi,Oe=52,Se=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ee(e){var t,r="";for(t=Math.abs(e);t>Oe;t=t/Oe|0)r=Se(t%Oe)+r;return(Se(t%Oe)+r).replace(xe,"$1-$2")}var ke,Pe=5381,$e=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},je=function(e){return $e(Pe,e)};function Ne(e){return"string"==typeof e&&!0}var Ie="function"==typeof Symbol&&Symbol.for,Me=Ie?Symbol.for("react.memo"):60115,Re=Ie?Symbol.for("react.forward_ref"):60112,Ve={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ae={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},He={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_e=((ke={})[Re]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ke[Me]=He,ke);function Ze(e){return("type"in(t=e)&&t.type.$$typeof)===Me?He:"$$typeof"in e?_e[e.$$typeof]:Ve;var t}var Le=Object.defineProperty,ze=Object.getOwnPropertyNames,De=Object.getOwnPropertySymbols,Be=Object.getOwnPropertyDescriptor,Te=Object.getPrototypeOf,Fe=Object.prototype;function Ge(e,t,r){if("string"!=typeof t){if(Fe){var n=Te(t);n&&n!==Fe&&Ge(e,n,r)}var o=ze(t);De&&(o=o.concat(De(t)));for(var a=Ze(e),s=Ze(t),i=0;i<o.length;++i){var l=o[i];if(!(l in Ae||r&&r[l]||s&&l in s||a&&l in a)){var c=Be(t,l);try{Le(e,l,c)}catch(e){}}}}return e}function Ye(e){return"function"==typeof e}function We(e){return"object"==typeof e&&"styledComponentId"in e}function qe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ue(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,r){if(void 0===r&&(r=!1),!r&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Xe(e[n],t[n]);else if(Qe(t))for(var n in t)e[n]=Xe(e[n],t[n]);return e}function Je(e,t){Object.defineProperty(e,"toString",{value:t})}function Ke(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var et=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Ke(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),i=(a=0,t.length);a<i;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,a=n;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(fe);return t},e}(),tt=new Map,rt=new Map,nt=1,ot=function(e){if(tt.has(e))return tt.get(e);for(;rt.has(nt);)nt++;var t=nt++;return tt.set(e,t),rt.set(t,e),t},at=function(e,t){nt=t+1,tt.set(e,t),rt.set(t,e)},st="style[".concat(ce,"][").concat(de,'="').concat(pe,'"]'),it=new RegExp("^".concat(ce,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,r){for(var n,o=r.split(","),a=0,s=o.length;a<s;a++)(n=o[a])&&e.registerName(t,n)},ct=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(fe),o=[],a=0,s=n.length;a<s;a++){var i=n[a].trim();if(i){var l=i.match(it);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(at(u,c),lt(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(i)}}};function ut(){return n.nc}var dt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ce,"]")));return t[t.length-1]}(r),a=void 0!==o?o.nextSibling:null;n.setAttribute(ce,ue),n.setAttribute(de,pe);var s=ut();return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},pt=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Ke(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ct=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ht=Ce,mt={isServer:!Ce,useCSSOMInjection:!he},gt=function(){function e(e,r,n){void 0===e&&(e=ge),void 0===r&&(r={});var o=this;this.options=t(t({},mt),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ce&&ht&&(ht=!1,function(e){for(var t=document.querySelectorAll(st),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(ce)!==ue&&(ct(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),Je(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return rt.get(e)}(r);if(void 0===o)return"continue";var a=e.names.get(o),s=t.getGroup(r);if(void 0===a||0===s.length)return"continue";var i="".concat(ce,".g").concat(r,'[id="').concat(o,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),n+="".concat(s).concat(i,'{content:"').concat(l,'"}').concat(fe)},a=0;a<r;a++)o(a);return n}(o)}))}return e.registerId=function(e){return ot(e)},e.prototype.reconstructWithOptions=function(r,n){return void 0===n&&(n=!0),new e(t(t({},this.options),r),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new Ct(r):t?new pt(r):new ft(r)}(this.options),new et(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ot(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(ot(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ot(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vt=/&/g,bt=/^\s*\/\/.*$/gm;function yt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=yt(e.children,t)),e}))}function wt(e){var t,r,n,o=void 0===e?ge:e,a=o.options,s=void 0===a?ge:a,i=o.plugins,l=void 0===i?me:i,c=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===C&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(vt,r).replace(n,c))})),s.prefix&&u.push(re),u.push(ee);var d=function(e,o,a,i){void 0===o&&(o=""),void 0===a&&(a=""),void 0===i&&(i="&"),t=i,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(bt,""),c=ne(a||o?"".concat(a," ").concat(o," { ").concat(l," }"):l);s.namespace&&(c=yt(c,s.namespace));var d,p,f,C=[];return K(c,(d=u.concat((f=function(e){return C.push(e)},function(e){e.root||(e=e.return)&&f(e)})),p=j(d),function(e,t,r,n){for(var o="",a=0;a<p;a++)o+=d[a](e,t,r,n)||"";return o})),C};return d.hash=l.length?l.reduce((function(e,t){return t.name||Ke(15),$e(e,t.name)}),Pe).toString():"",d}var xt=new gt,Ot=wt(),St=a.default.createContext({shouldForwardProp:void 0,styleSheet:xt,stylis:Ot}),Et=(St.Consumer,a.default.createContext(void 0));function kt(){return(0,a.useContext)(St)}function Pt(e){var t=(0,a.useState)(e.stylisPlugins),r=t[0],n=t[1],o=kt().styleSheet,s=(0,a.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),i=(0,a.useMemo)((function(){return wt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,a.useEffect)((function(){c()(r,e.stylisPlugins)||n(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,a.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:s,stylis:i}}),[e.shouldForwardProp,s,i]);return a.default.createElement(St.Provider,{value:l},a.default.createElement(Et.Provider,{value:i},e.children))}var $t=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Ot);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Je(this,(function(){throw Ke(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Ot),this.name+e.hash},e}(),jt=function(e){return e>="A"&&e<="Z"};function Nt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;jt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var It=function(e){return null==e||!1===e||""===e},Mt=function(e){var t,n,o=[];for(var a in e){var s=e[a];e.hasOwnProperty(a)&&!It(s)&&(Array.isArray(s)&&s.isCss||Ye(s)?o.push("".concat(Nt(a),":"),s,";"):Qe(s)?o.push.apply(o,r(r(["".concat(a," {")],Mt(s),!1),["}"],!1)):o.push("".concat(Nt(a),": ").concat((t=a,null==(n=s)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in le||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return o};function Rt(e,t,r,n){return It(e)?[]:We(e)?[".".concat(e.styledComponentId)]:Ye(e)?!Ye(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Rt(e(t),t,r,n):e instanceof $t?r?(e.inject(r,n),[e.getName(n)]):[e]:Qe(e)?Mt(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map((function(e){return Rt(e,t,r,n)}))):[e.toString()];var o}function Vt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ye(r)&&!We(r))return!1}return!0}var At=je(pe),Ht=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Vt(e),this.componentId=t,this.baseHash=$e(At,t),this.baseStyle=r,gt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=qe(n,this.staticRulesId);else{var o=Ue(Rt(this.rules,e,t,r)),a=Ee($e(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}n=qe(n,a),this.staticRulesId=a}else{for(var i=$e(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Ue(Rt(u,e,t,r));i=$e(i,d+c),l+=d}}if(l){var p=Ee(i>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=qe(n,p)}}return n},e}(),_t=a.default.createContext(void 0);_t.Consumer;var Zt={};function Lt(e,r,n){var o=We(e),s=e,i=!Ne(e),l=r.attrs,c=void 0===l?me:l,u=r.componentId,d=void 0===u?function(e,t){var r="string"!=typeof e?"sc":we(e);Zt[r]=(Zt[r]||0)+1;var n="".concat(r,"-").concat(function(e){return Ee(je(e)>>>0)}(pe+r+Zt[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):u,p=r.displayName,f=void 0===p?function(e){return Ne(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e):p,C=r.displayName&&r.componentId?"".concat(we(r.displayName),"-").concat(r.componentId):r.componentId||d,h=o&&s.attrs?s.attrs.concat(c).filter(Boolean):c,m=r.shouldForwardProp;if(o&&s.shouldForwardProp){var g=s.shouldForwardProp;if(r.shouldForwardProp){var v=r.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var b=new Ht(n,C,o?s.componentStyle:void 0);function y(e,r){return function(e,r,n){var o=e.attrs,s=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,c=e.styledComponentId,u=e.target,d=a.default.useContext(_t),p=kt(),f=e.shouldForwardProp||p.shouldForwardProp,C=function(e,t,r){return void 0===r&&(r=ge),e.theme!==r.theme&&e.theme||t||r.theme}(r,d,i)||ge,h=function(e,r,n){for(var o,a=t(t({},r),{className:void 0,theme:n}),s=0;s<e.length;s+=1){var i=Ye(o=e[s])?o(a):o;for(var l in i)a[l]="className"===l?qe(a[l],i[l]):"style"===l?t(t({},a[l]),i[l]):i[l]}return r.className&&(a.className=qe(a.className,r.className)),a}(o,r,C),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===C||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var b=function(e,t){var r=kt();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(s,h),y=qe(l,c);return b&&(y+=" "+b),h.className&&(y+=" "+h.className),g[Ne(m)&&!ve.has(m)?"class":"className"]=y,g.ref=n,(0,a.createElement)(m,g)}(w,e,r)}y.displayName=f;var w=a.default.forwardRef(y);return w.attrs=h,w.componentStyle=b,w.displayName=f,w.shouldForwardProp=m,w.foldedComponentIds=o?qe(s.foldedComponentIds,s.styledComponentId):"",w.styledComponentId=C,w.target=o?s.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Xe(e,o[n],!0);return e}({},s.defaultProps,e):e}}),Je(w,(function(){return".".concat(w.styledComponentId)})),i&&Ge(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function zt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}new Set;var Dt=function(e){return Object.assign(e,{isCss:!0})};function Bt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ye(e)||Qe(e))return Dt(Rt(zt(me,r([e],t,!0))));var o=e;return 0===t.length&&1===o.length&&"string"==typeof o[0]?Rt(o):Dt(Rt(zt(o,t)))}function Tt(e,n,o){if(void 0===o&&(o=ge),!n)throw Ke(1,n);var a=function(t){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(n,o,Bt.apply(void 0,r([t],a,!1)))};return a.attrs=function(r){return Tt(e,n,t(t({},o),{attrs:Array.prototype.concat(o.attrs,r).filter(Boolean)}))},a.withConfig=function(r){return Tt(e,n,t(t({},o),r))},a}var Ft=function(e){return Tt(Lt,e)},Gt=Ft;ve.forEach((function(e){Gt[e]=Ft(e)})),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Vt(e),gt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var o=n(Ue(Rt(this.rules,t,r,n)),""),a=this.componentId+e;r.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&gt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=ut(),n=Ue([r&&'nonce="'.concat(r,'"'),"".concat(ce,'="true"'),"".concat(de,'="').concat(pe,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Ke(2);return e._emitSheetCSS()},this.getStyleElement=function(){var r;if(e.sealed)throw Ke(2);var n=((r={})[ce]="",r[de]=pe,r.dangerouslySetInnerHTML={__html:e.instance.toString()},r),o=ut();return o&&(n.nonce=o),[a.default.createElement("style",t({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new gt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Ke(2);return a.default.createElement(Pt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ke(3)}}(),"__sc-".concat(ce,"__");const Yt=Bt`
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Wt=Bt`
  &:active {
    opacity: 0.8;
  }
`,qt=Bt`
  align-items: center;
  border-radius: var(--base-button-border-radius, 4px);
  border-style: solid;
  border-width: 1px;
  column-gap: var(--base-button-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-font-size, 15px);
  font-weight: 400;
  height: var(--base-button-height, 38px);
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 0 var(--base-button-padding, 16px);
  text-decoration: none;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
  user-select: none;
  white-space: nowrap;
`,Ut=Gt.button`
  ${qt}
  ${Wt}
  ${Yt}
`;Ut.defaultProps={type:"button"};const Qt=Ut,Xt=Gt.div`
  align-items: center;
  background-color: var(--theme-dropdown-item-background-color, transparent);
  border-bottom: 1px solid var(--theme-dropdown-item-border-color, #f0f0f0);
  color: var(--theme-dropdown-item-color, #2e3048);
  column-gap: var(--base-gap, 8px);
  cursor: pointer;
  display: flex;
  font-size: var(--base-text-font-size, 14px);
  font-weight: 400;
  justify-content: flex-start;
  line-height: 1.4;
  min-height: 32px;
  overflow: hidden;
  padding: 0 calc(var(--base-gap, 8px) * 2);
  text-decoration: none;
  transition: background-color 0.1s linear;
  user-select: none;
  white-space: nowrap;

  &:first-child {
    border-top-left-radius: var(--base-border-radius, 8px);
    border-top-right-radius: var(--base-border-radius, 8px);
  }

  &:last-child {
    border-bottom-left-radius: var(--base-border-radius, 8px);
    border-bottom-right-radius: var(--base-border-radius, 8px);
    border-bottom: none;
  }

  &:hover {
    background-color: var(--theme-dropdown-item-background-color-hover, rgba(0, 0, 0, 0.05));
    border-color: var(--theme-dropdown-item-border-color-hover, #f0f0f0);
    color: var(--theme-dropdown-item-color-hover, #2e3048);
  }

  &.dropdownItemActive,
  &.dropdownItemActive:hover {
    background-color: var(--theme-dropdown-item-background-color-active, rgba(0, 0, 0, 0.1));
    border-color: var(--theme-dropdown-item-border-color-active, #f0f0f0);
    color: var(--theme-dropdown-item-color-active, #000);
  }

  &:disabled,
  &[disabled] {
    &,
    &:hover {
      background-color: var(--theme-dropdown-item-background-color, transparent);
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }

  &:active {
    opacity: 0.8;
  }
`;Xt.defaultProps={className:"dropdownItem",$closeOnClick:!0,disabled:!1};const Jt=Gt(Xt)`
  &,
  &:hover {
    ${({$state:e})=>"danger"===e?Bt`
            color: var(--theme-color-danger, #800);
          `:"ok"===e?Bt`
              color: var(--theme-color-ok, #080);
            `:"warning"===e&&Bt`
              color: var(--theme-color-warning, #cc0);
            `};
  }
`,Kt=Gt.div`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  flex-direction: column;
  min-width: 90px;
  position: absolute;
  white-space: nowrap;

  ${({$position:e})=>"left"===e&&Bt`
      left: 0;
    `}

  ${({$position:e})=>"right"===e&&Bt`
      right: 0;
    `}

  ${({$position:e})=>"center"===e&&Bt`
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({$direction:e})=>"downwards"===e&&Bt`
      top: calc(100% + 10px);
    `}

  ${({$direction:e})=>"upwards"===e&&Bt`
      bottom: calc(100%);
    `}
`;Kt.defaultProps={$direction:"downwards",$isOpen:!1,$position:"left",className:"dropdownItems"};const er=Gt(Kt)`
  background-color: var(--theme-dropdown-background-color, #fff);
  border-color: var(--theme-dropdown-border-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border-style: solid;
  border-width: 1px;
  box-shadow: var(--theme-dropdown-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
`;const tr=Gt.div`
  outline: none;
  position: relative;
  z-index: 0;

  &.fullWidth {
    width: 100%;
  }

  &.isOpen {
    z-index: 50;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
`;tr.defaultProps={className:"dropdown",disabled:!1};const rr=Gt.div`
  background-color: transparent;
  border: none;
  display: flex;
  outline: none;
  padding: 0;
  user-select: none;
  width: 100%;
`;rr.defaultProps={className:"dropdownButton"};const nr=e=>{var{button:t,className:r,clearDropdownStyle:n=!1,direction:o="downwards",disabled:s=!1,highlightItem:i,items:l,position:c="left"}=e,u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["button","className","clearDropdownStyle","direction","disabled","highlightItem","items","position"]);const d=a.default.useMemo((()=>{const e="number"==typeof i,t=e&&i<0,r=Array.isArray(l)&&e&&i>l.length-1;if(!t&&!r)return i}),[i,l]),[p,f]=(0,a.useState)(!1),[C,h]=(0,a.useState)(d),m=(0,a.createRef)(),g=(0,a.useCallback)((e=>{e.stopPropagation(),s||f(!p)}),[s,p]);(0,a.useEffect)((()=>{const e=e=>{m&&m.current&&m.current.contains(e.target)||f(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[m]);const v=(e,t)=>{const{$closeOnClick:r,onClick:n,className:o}=e.props;return(0,a.cloneElement)(e,{className:`${o||""} ${void 0!==d&&t===C?"dropdownItemActive":""}`.trim(),onClick:e=>{e.stopPropagation(),r&&f(!1),h(t),n&&n()}})};return a.default.createElement(tr,Object.assign({className:`${p?"isOpen":""} ${r||""}`.trim(),disabled:s,ref:m},u),a.default.createElement(rr,{onClick:g},t),a.default.createElement(Kt,{as:n?void 0:er,$direction:o,$position:c,$isOpen:p},Array.isArray(l)?l.map(((e,t)=>v(e,t))):v(l)))},or=Gt.div`
  background-color: var(--theme-card-background-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border: 1px solid var(--theme-card-border-color, #fff);
  box-shadow: var(--theme-card-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
  display: flex;
  flex-direction: column;
  padding: var(--base-common-padding, 8px);
  white-space: normal;
`;var ar=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const sr=e=>{var t=ar(e,[]);return a.default.createElement("svg",Object.assign({fill:"currentColor",height:"15",viewBox:"0 0 24 24",width:"15",xmlns:"http://www.w3.org/2000/svg"},t),a.default.createElement("path",{className:"fill",clipRule:"evenodd",d:"M10 9C9.44771 9 9 9.44771 9 10V21C9 21.5523 9.44771 22 10 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44771 21.5523 9 21 9H10ZM15 7V3C15 2.44772 14.5523 2 14 2H3C2.44772 2 2 2.44772 2 3V14C2 14.5523 2.44772 15 3 15H7V10C7 8.34315 8.34315 7 10 7H15ZM17 7H21C22.6569 7 24 8.34315 24 10V21C24 22.6569 22.6569 24 21 24H10C8.34315 24 7 22.6569 7 21V17H3C1.34315 17 0 15.6569 0 14V3C0 1.34315 1.34315 0 3 0H14C15.6569 0 17 1.34315 17 3V7Z",fillRule:"evenodd"}))},ir=Gt.button`
  align-items: center;
  background: transparent;
  border: none;
  color: var(--copy-button-color, #000);
  column-gap: var(--base-button-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-font-size, 15px);
  font-weight: 400;
  height: fit-content;
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 0;
  text-decoration: none;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
  user-select: none;
  white-space: nowrap;
  width: fit-content;

  &:hover {
    color: var(--copy-button-color-hover, #8b46a4);
  }

  &:active {
    opacity: 0.8;
  }
`,lr=e=>{var{children:t,onClick:r,value:n}=e,o=ar(e,["children","onClick","value"]);return a.default.createElement(ir,Object.assign({onClick:e=>{navigator.clipboard.writeText(n),r&&r(e)}},o),t||a.default.createElement(sr,null))};var cr=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const ur=e=>{var t=cr(e,[]);return a.default.createElement("svg",Object.assign({fill:"currentColor",height:"12.5",viewBox:"0 0 10 10",width:"12.5",xmlns:"http://www.w3.org/2000/svg"},t),a.default.createElement("path",{className:"fill",clipRule:"evenodd",d:"M1.11111 1.11111V8.88892H8.88892V5H10V8.88892C10 9.5 9.5 10 8.88892 10H1.11111C0.494442 10 0 9.5 0 8.88892V1.11111C0 0.5 0.494442 0 1.11111 0H5V1.11111H1.11111ZM6.11111 1.11111V0H10V3.88889H8.88892V1.89444L3.42777 7.35558L2.64444 6.57223L8.10558 1.11111H6.11111Z",fillRule:"evenodd"}))},dr=Gt.a`
  align-items: center;
  color: var(--external-link-button-color, #000);
  column-gap: var(--base-button-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-font-size, 15px);
  font-weight: 400;
  height: fit-content;
  justify-content: center;
  outline: none;
  padding: 0;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
  white-space: nowrap;
  width: fit-content;

  &:hover {
    color: var(--external-link-button-color-hover, #8b46a4);
    text-decoration: none;
  }

  &:active {
    opacity: 0.8;
  }
`,pr=e=>{var{children:t,target:r="_blank"}=e,n=cr(e,["children","target"]);return a.default.createElement(dr,Object.assign({target:r},n),t||a.default.createElement(ur,null))};const fr=Gt.footer`
  align-items: center;
  background-color: var(--theme-footer-background-color, transparent);
  color: var(--theme-footer-text-color, #000);
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
`,Cr=e=>{var{children:t,style:r,className:n}=e,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children","style","className"]);return a.default.createElement(fr,Object.assign({style:r,className:`dbuitkFooter ${n||""}`.trim()},o),t)};const hr=Gt.header`
  background-color: var(--theme-header-background-color, transparent);
  color: var(--theme-header-text-color, #000);
  flex-grow: 0;
  flex-shrink: 0;
`,mr=e=>{var{children:t,style:r,className:n}=e,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children","style","className"]);return a.default.createElement(hr,Object.assign({style:r,className:`dbuitkHeader ${n||""}`.trim()},o),t)};const gr=Gt.div`
  display: flex;
  flex-shrink: 0;
  margin: 0 auto;
  max-width: 100%;
  width: var(--base-container-max-width, 1360px);
`,vr=e=>{var{children:t,style:r,className:n}=e,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children","style","className"]);return a.default.createElement(gr,Object.assign({style:r,className:`dbuitkInnerContainer  ${n||""}`.trim()},o),t)};const br=Gt.svg`
  display: block;
  flex-shrink: 0;

  .themedColor {
    [data-theme='light'] & {
      fill: #2e3048;
    }

    [data-theme='dark'] & {
      fill: #fff;
    }
  }
`,yr=e=>{var{style:t,className:r}=e,n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["style","className"]);return a.default.createElement(br,Object.assign({className:`dbuitkLogo ${r||""}`.trim(),fill:"none",height:"44",style:t,viewBox:"0 0 172 44",width:"172",xmlns:"http://www.w3.org/2000/svg"},n),a.default.createElement("path",{d:"M52.3553 18.6802C51.1288 16.5699 49.3132 14.8585 47.1286 13.7535C44.8642 12.6286 42.3619 12.0593 39.831 12.0931C37.5 12.0686 35.2002 12.6268 33.1428 13.7165C31.1946 14.7474 29.5288 16.2357 28.2901 18.052C27.0651 16.4875 25.5435 15.1769 23.8115 14.1944C21.3495 12.8125 18.563 12.1044 15.7361 12.1424C13.1865 12.1084 10.6689 12.7105 8.41377 13.8939C7.53117 14.3632 6.70087 14.9238 5.93666 15.5665V3.45907C5.95501 3.06604 5.89068 2.67352 5.74779 2.30662C5.6049 1.93971 5.38658 1.6065 5.10681 1.32828C4.82704 1.05007 4.49197 0.832966 4.12302 0.690867C3.75407 0.548768 3.35935 0.484797 2.96412 0.503042C2.1959 0.491043 1.45284 0.775316 0.890783 1.29624C0.597927 1.57428 0.36735 1.91062 0.214113 2.28331C0.0608763 2.656 -0.0115723 3.05664 0.00150094 3.45907V28.1321C0.0386426 30.8837 0.786742 33.5795 2.17393 35.9606C3.52861 38.2594 5.47017 40.1613 7.80192 41.4736C10.2268 42.8334 12.9699 43.5319 15.7535 43.4985C18.5804 43.5368 21.3669 42.8288 23.8288 41.4465C26.1871 40.1093 28.1404 38.166 29.4841 35.8202C30.8748 33.3722 31.5877 30.6011 31.55 27.7897C31.55 27.5433 31.55 27.2847 31.5277 27.0088V24.6267C31.5073 23.4417 31.8636 22.2804 32.5458 21.3086C33.2892 20.2611 34.2999 19.4295 35.4737 18.8994C36.8399 18.2776 38.3287 17.9679 39.831 17.9929C41.3548 17.9671 42.864 18.2926 44.2402 18.9438C45.4746 19.5436 46.4997 20.4978 47.1831 21.683C47.9262 22.9147 48.2903 24.5405 48.2903 26.5137V40.237C48.2903 41.021 48.6035 41.7729 49.161 42.3273C49.7184 42.8816 50.4745 43.1931 51.2629 43.1931C52.0512 43.1931 52.8073 42.8816 53.3648 42.3273C53.9222 41.7729 54.2354 41.021 54.2354 40.237V26.5137C54.2428 23.4492 53.6062 20.8159 52.3553 18.6802ZM10.7398 19.1482C12.2755 18.2922 14.0066 17.8427 15.7671 17.8427C17.5276 17.8427 19.2586 18.2922 20.7944 19.1482C22.2587 20.0052 23.4721 21.228 24.3144 22.6955C25.0838 24.0443 25.5202 25.5555 25.5876 27.1049V27.9128C25.5833 27.9949 25.5833 28.0771 25.5876 28.1592C25.5656 29.8314 25.1237 31.4716 24.302 32.9307C23.4613 34.4037 22.2489 35.6331 20.7845 36.4977C19.2487 37.3536 17.5177 37.8031 15.7572 37.8031C13.9967 37.8031 12.2656 37.3536 10.7299 36.4977C9.26059 35.6498 8.04942 34.4224 7.22476 32.9455C6.3572 31.3713 5.91749 29.5993 5.94905 27.8045C5.91625 26.02 6.35531 24.2582 7.22228 22.6955C8.04973 21.2219 9.26036 19.9967 10.7274 19.1482H10.7398Z",fill:"#2e3048"}),a.default.createElement("path",{d:"M52.3553 18.6802C51.1288 16.5699 49.3132 14.8585 47.1286 13.7535C44.8642 12.6286 42.3619 12.0593 39.831 12.0931C37.5 12.0686 35.2002 12.6268 33.1428 13.7165C31.1946 14.7474 29.5288 16.2357 28.2901 18.052C27.0651 16.4875 25.5435 15.1769 23.8115 14.1944C21.3495 12.8125 18.563 12.1044 15.7361 12.1424C13.1865 12.1084 10.6689 12.7105 8.41377 13.8939C7.53117 14.3632 6.70087 14.9238 5.93666 15.5665V3.45907C5.95501 3.06604 5.89068 2.67352 5.74779 2.30662C5.6049 1.93971 5.38658 1.6065 5.10681 1.32828C4.82704 1.05007 4.49197 0.832966 4.12302 0.690867C3.75407 0.548768 3.35935 0.484797 2.96412 0.503042C2.1959 0.491043 1.45284 0.775316 0.890783 1.29624C0.597927 1.57428 0.36735 1.91062 0.214113 2.28331C0.0608763 2.656 -0.0115723 3.05664 0.00150094 3.45907V28.1321C0.0386426 30.8837 0.786742 33.5795 2.17393 35.9606C3.52861 38.2594 5.47017 40.1613 7.80192 41.4736C10.2268 42.8334 12.9699 43.5319 15.7535 43.4985C18.5804 43.5368 21.3669 42.8288 23.8288 41.4465C26.1871 40.1093 28.1404 38.166 29.4841 35.8202C30.8748 33.3722 31.5877 30.6011 31.55 27.7897C31.55 27.5433 31.55 27.2847 31.5277 27.0088V24.6267C31.5073 23.4417 31.8636 22.2804 32.5458 21.3086C33.2892 20.2611 34.2999 19.4295 35.4737 18.8994C36.8399 18.2776 38.3287 17.9679 39.831 17.9929C41.3548 17.9671 42.864 18.2926 44.2402 18.9438C45.4746 19.5436 46.4997 20.4978 47.1831 21.683C47.9262 22.9147 48.2903 24.5405 48.2903 26.5137V40.237C48.2903 41.021 48.6035 41.7729 49.161 42.3273C49.7184 42.8816 50.4745 43.1931 51.2629 43.1931C52.0512 43.1931 52.8073 42.8816 53.3648 42.3273C53.9222 41.7729 54.2354 41.021 54.2354 40.237V26.5137C54.2428 23.4492 53.6062 20.8159 52.3553 18.6802ZM10.7398 19.1482C12.2755 18.2922 14.0066 17.8427 15.7671 17.8427C17.5276 17.8427 19.2586 18.2922 20.7944 19.1482C22.2587 20.0052 23.4721 21.228 24.3144 22.6955C25.0838 24.0443 25.5202 25.5555 25.5876 27.1049V27.9128C25.5833 27.9949 25.5833 28.0771 25.5876 28.1592C25.5656 29.8314 25.1237 31.4716 24.302 32.9307C23.4613 34.4037 22.2489 35.6331 20.7845 36.4977C19.2487 37.3536 17.5177 37.8031 15.7572 37.8031C13.9967 37.8031 12.2656 37.3536 10.7299 36.4977C9.26059 35.6498 8.04942 34.4224 7.22476 32.9455C6.3572 31.3713 5.91749 29.5993 5.94905 27.8045C5.91625 26.02 6.35531 24.2582 7.22228 22.6955C8.04973 21.2219 9.26036 19.9967 10.7274 19.1482H10.7398Z",fill:"url(#paint0_linear_486_278)"}),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M81.5701 32.668C81.4464 32.67 81.3235 32.6471 81.2088 32.6008C81.0941 32.5544 80.9899 32.4856 80.9024 32.3983C80.8149 32.3109 80.7459 32.207 80.6995 32.0926C80.653 31.9781 80.6301 31.8555 80.6321 31.7321V19.54C80.6274 19.4149 80.649 19.2903 80.6956 19.1741C80.7421 19.058 80.8126 18.9528 80.9025 18.8655C80.9906 18.7797 81.0951 18.7124 81.2098 18.6675C81.3245 18.6226 81.447 18.601 81.5701 18.6041H85.8838C86.6307 18.5886 87.3703 18.7523 88.0406 19.0814C88.638 19.3818 89.1415 19.8397 89.4965 20.4054C89.8574 20.9891 90.0422 21.6642 90.029 22.3499C90.0356 22.9173 89.8687 23.4733 89.5506 23.9437C89.2213 24.4269 88.7701 24.8149 88.2424 25.0685C88.9861 25.2314 89.6572 25.6295 90.1559 26.2036C90.637 26.7681 90.8776 27.5062 90.8776 28.4179C90.8976 29.1812 90.6996 29.9344 90.3067 30.5896C89.9137 31.2448 89.342 31.775 88.6584 32.1181C87.9158 32.4955 87.0914 32.6844 86.2582 32.668H81.5701ZM82.5081 24.3836H85.8838C86.4857 24.4104 87.0794 24.2359 87.5706 23.8876C88.0087 23.5542 88.2285 23.0444 88.2299 22.3582C88.2313 21.672 88.0115 21.1649 87.5706 20.837C87.0786 20.4905 86.4855 20.3161 85.8838 20.341H82.5081V24.3836ZM82.5081 30.9393H86.2519C86.7524 30.9489 87.249 30.8505 87.7078 30.6509C88.1144 30.4715 88.4593 30.1771 88.6999 29.8042C88.9541 29.3874 89.0799 28.9054 89.0618 28.4179C89.0802 27.9643 88.9535 27.5166 88.6999 27.1396C88.4527 26.7996 88.1147 26.5357 87.7245 26.3779C87.261 26.1964 86.7664 26.1076 86.2686 26.1165H82.5248L82.5081 30.9393Z"}),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M97.3679 32.6224C96.4667 32.6404 95.5768 32.4198 94.7888 31.9832C94.0516 31.5659 93.4431 30.9551 93.0292 30.2172C92.6068 29.4174 92.386 28.5271 92.386 27.6231C92.386 26.7191 92.6068 25.8287 93.0292 25.029C93.4431 24.2916 94.0517 23.6815 94.7888 23.2651C95.5808 22.8454 96.4638 22.6259 97.3606 22.6259C98.2573 22.6259 99.1404 22.8454 99.9324 23.2651C100.669 23.6827 101.277 24.2925 101.692 25.029C102.109 25.8304 102.327 26.7201 102.327 27.6231C102.327 28.5261 102.109 29.4158 101.692 30.2172C101.282 30.9556 100.676 31.5667 99.9407 31.9832C99.1544 32.4184 98.2669 32.6389 97.3679 32.6224ZM97.3679 31.0016C97.952 31.0128 98.5278 30.8627 99.0318 30.5679C99.5102 30.2837 99.9004 29.8728 100.159 29.3808C100.438 28.8411 100.577 28.2405 100.565 27.6335C100.576 27.0238 100.437 26.4207 100.159 25.8778C99.9019 25.3821 99.5116 24.9675 99.0318 24.6804C98.5234 24.3963 97.9505 24.2471 97.3679 24.2471C96.7852 24.2471 96.2123 24.3963 95.704 24.6804C95.2226 24.9688 94.8292 25.3828 94.5663 25.8778C94.2818 26.4188 94.1387 27.0227 94.1503 27.6335C94.138 28.2417 94.2811 28.8431 94.5663 29.3808C94.8307 29.872 95.224 30.2823 95.704 30.5679C96.2077 30.8633 96.7837 31.0134 97.3679 31.0016Z"}),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M109.47 32.6225C108.569 32.6405 107.679 32.4199 106.891 31.9833C106.153 31.5656 105.544 30.9549 105.129 30.2173C104.71 29.4166 104.491 28.5266 104.491 27.6232C104.491 26.7199 104.71 25.8299 105.129 25.0292C105.544 24.2921 106.153 23.6822 106.891 23.2652C107.682 22.8455 108.565 22.626 109.461 22.626C110.358 22.626 111.241 22.8455 112.032 23.2652C112.769 23.6817 113.378 24.2918 113.792 25.0292C114.212 25.829 114.433 26.7186 114.435 27.6219C114.437 28.5253 114.22 29.4157 113.802 30.2173C113.393 30.9557 112.787 31.5669 112.051 31.9833C111.262 32.4202 110.372 32.6408 109.47 32.6225ZM109.47 31.0017C110.054 31.0129 110.63 30.8628 111.134 30.568C111.612 30.2838 112.002 29.8729 112.261 29.381C112.543 28.8422 112.686 28.2415 112.677 27.6336C112.686 27.0231 112.543 26.4199 112.261 25.8779C112.004 25.3822 111.613 24.9676 111.134 24.6805C110.625 24.3964 110.052 24.2472 109.47 24.2472C108.887 24.2472 108.314 24.3964 107.806 24.6805C107.324 24.9689 106.931 25.3829 106.668 25.8779C106.384 26.4189 106.241 27.0228 106.252 27.6336C106.24 28.2418 106.383 28.8432 106.668 29.381C106.933 29.8722 107.326 30.2825 107.806 30.568C108.31 30.8632 108.886 31.0133 109.47 31.0017Z"}),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M116.155 24.6412C115.932 24.6544 115.712 24.5799 115.542 24.4337C115.466 24.366 115.406 24.2827 115.365 24.1896C115.325 24.0965 115.305 23.9957 115.307 23.8941C115.302 23.7868 115.321 23.6797 115.362 23.5802C115.402 23.4807 115.464 23.391 115.542 23.3172C115.712 23.1717 115.932 23.0974 116.155 23.1097H120.315C120.542 23.0947 120.766 23.1692 120.939 23.3172C121.017 23.391 121.079 23.4807 121.119 23.5802C121.16 23.6797 121.179 23.7868 121.174 23.8941C121.176 23.9957 121.157 24.0965 121.116 24.1896C121.075 24.2827 121.015 24.366 120.939 24.4337C120.767 24.5825 120.543 24.6571 120.315 24.6412H116.155ZM120.161 32.5832C119.587 32.5903 119.023 32.431 118.537 32.1246C118.055 31.8166 117.663 31.3871 117.401 30.8794C117.118 30.3283 116.975 29.7161 116.985 29.0968V20.5094C116.985 20.2705 117.08 20.0414 117.25 19.8725C117.419 19.7036 117.649 19.6087 117.888 19.6087C118.127 19.6087 118.357 19.7036 118.526 19.8725C118.696 20.0414 118.791 20.2705 118.791 20.5094V29.0989C118.775 29.5351 118.916 29.9624 119.188 30.3046C119.301 30.4557 119.448 30.5783 119.617 30.6627C119.786 30.747 119.972 30.7907 120.161 30.7902H120.785C120.89 30.7894 120.994 30.8116 121.089 30.8554C121.184 30.8991 121.269 30.9633 121.336 31.0434C121.49 31.2232 121.571 31.4545 121.561 31.6908C121.564 31.8143 121.539 31.9368 121.488 32.0491C121.436 32.1613 121.36 32.2603 121.264 32.3383C121.048 32.5129 120.776 32.603 120.498 32.5915L120.161 32.5832Z"}),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M124.828 32.6678C124.705 32.6714 124.583 32.6492 124.47 32.6028C124.357 32.5563 124.255 32.4865 124.17 32.398C124.084 32.31 124.017 32.2057 123.972 32.0913C123.927 31.9769 123.905 31.8547 123.908 31.7318V19.5397C123.903 19.4154 123.924 19.2914 123.969 19.1754C124.014 19.0594 124.083 18.9539 124.17 18.8653C124.256 18.7791 124.359 18.7114 124.472 18.6664C124.585 18.6214 124.706 18.6001 124.828 18.6038C124.966 18.6018 125.103 18.6316 125.228 18.691C125.354 18.7504 125.463 18.8377 125.549 18.9462L133.42 29.3909V19.5397C133.415 19.4147 133.436 19.2901 133.483 19.1739C133.53 19.0577 133.6 18.9526 133.69 18.8653C133.778 18.7794 133.883 18.712 133.997 18.6671C134.112 18.6222 134.234 18.6006 134.358 18.6038C134.481 18.5985 134.604 18.6191 134.719 18.6641C134.834 18.7092 134.938 18.7777 135.025 18.8653C135.11 18.9554 135.176 19.0614 135.219 19.1772C135.262 19.293 135.282 19.4163 135.277 19.5397V31.7318C135.284 31.9782 135.193 32.2174 135.025 32.398C134.94 32.4879 134.836 32.5586 134.721 32.6051C134.606 32.6516 134.482 32.673 134.358 32.6678C134.224 32.6651 134.092 32.6376 133.969 32.5868C133.837 32.5379 133.722 32.4539 133.636 32.344L125.766 21.8993V31.7318C125.768 31.8545 125.747 31.9765 125.702 32.0908C125.658 32.2052 125.591 32.3096 125.506 32.398C125.418 32.4877 125.312 32.558 125.195 32.6045C125.078 32.651 124.953 32.6725 124.828 32.6678Z"}),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M142.576 32.6224C141.674 32.6403 140.784 32.4198 139.995 31.9832C139.258 31.5659 138.649 30.9551 138.235 30.2172C137.814 29.4171 137.594 28.5268 137.594 27.6231C137.594 26.7193 137.814 25.8291 138.235 25.029C138.649 24.2916 139.258 23.6815 139.995 23.2651C140.787 22.8454 141.67 22.6259 142.567 22.6259C143.464 22.6259 144.347 22.8454 145.139 23.2651C145.876 23.6815 146.484 24.2916 146.898 25.029C147.317 25.8298 147.536 26.7197 147.536 27.6231C147.536 28.5265 147.317 29.4164 146.898 30.2172C146.49 30.9558 145.884 31.567 145.149 31.9832C144.363 32.4184 143.475 32.6389 142.576 32.6224ZM142.576 31.0016C143.16 31.0134 143.736 30.8633 144.24 30.5679C144.719 30.2831 145.109 29.8725 145.369 29.3808C145.648 28.8411 145.788 28.2405 145.775 27.6335C145.787 27.0238 145.648 26.4207 145.369 25.8778C145.111 25.3824 144.72 24.9679 144.24 24.6804C143.732 24.3959 143.159 24.2465 142.576 24.2465C141.993 24.2465 141.421 24.3959 140.912 24.6804C140.43 24.9682 140.037 25.3824 139.775 25.8778C139.49 26.4188 139.347 27.0227 139.359 27.6335C139.346 28.2417 139.489 28.8431 139.775 29.3808C140.038 29.8725 140.432 30.2829 140.912 30.5679C141.416 30.8633 141.992 31.0134 142.576 31.0016Z"}),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M154.415 32.7675C153.526 32.7801 152.65 32.5528 151.879 32.1096C151.135 31.6802 150.519 31.0615 150.093 30.3166C149.648 29.5386 149.42 28.6556 149.434 27.7599C149.416 26.8747 149.621 25.9992 150.03 25.2136C150.414 24.4839 150.984 23.8683 151.682 23.4288C152.391 22.9879 153.212 22.7602 154.047 22.7731C154.713 22.7674 155.372 22.9117 155.975 23.1952C156.578 23.4786 157.109 23.894 157.528 24.4104V19.5564C157.523 19.433 157.544 19.3099 157.589 19.1948C157.634 19.0798 157.703 18.9753 157.791 18.8882C157.919 18.7531 158.085 18.6603 158.268 18.6223C158.451 18.5843 158.641 18.6029 158.812 18.6756C158.984 18.7483 159.129 18.8716 159.229 19.029C159.328 19.1865 159.377 19.3705 159.369 19.5564V27.7661C159.383 28.6619 159.155 29.5448 158.71 30.3228C158.28 31.0796 157.653 31.7066 156.896 32.1379C156.138 32.5692 155.278 32.7889 154.407 32.7737L154.415 32.7675ZM154.415 31.1467C154.993 31.1561 155.563 31.0029 156.058 30.7047C156.54 30.4091 156.932 29.9888 157.194 29.4886C157.475 28.9561 157.618 28.3618 157.61 27.7599C157.62 27.1578 157.477 26.5628 157.194 26.0312C156.928 25.5388 156.536 25.1256 156.058 24.8338C155.56 24.5457 154.995 24.394 154.42 24.394C153.845 24.394 153.28 24.5457 152.782 24.8338C152.298 25.1247 151.899 25.5377 151.626 26.0312C151.339 26.5618 151.196 27.1574 151.21 27.7599C151.198 28.3621 151.341 28.9572 151.626 29.4886C151.895 29.99 152.294 30.41 152.782 30.7047C153.275 31.0009 153.84 31.154 154.415 31.1467Z"}),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M166.921 32.6219C165.994 32.6389 165.077 32.4188 164.259 31.9827C163.5 31.5725 162.87 30.9614 162.437 30.2167C161.988 29.4304 161.76 28.5377 161.778 27.633C161.759 26.7265 161.974 25.8305 162.402 25.0306C162.801 24.2953 163.398 23.6847 164.124 23.2667C164.894 22.8317 165.766 22.6109 166.651 22.6275C167.5 22.6049 168.338 22.8206 169.07 23.2501C169.738 23.66 170.274 24.2537 170.613 24.9601C170.98 25.7464 171.162 26.606 171.145 27.4732C171.148 27.5788 171.129 27.6838 171.088 27.7814C171.048 27.879 170.987 27.967 170.91 28.0397C170.831 28.1148 170.737 28.1734 170.635 28.2123C170.532 28.2511 170.423 28.2693 170.314 28.2659H163.034V26.8257H170.251L169.513 27.33C169.51 26.7727 169.387 26.2226 169.151 25.7175C168.934 25.2431 168.58 24.8438 168.135 24.5706C167.69 24.2975 167.173 24.1629 166.651 24.1839C166.034 24.1655 165.424 24.3216 164.891 24.6343C164.41 24.9296 164.024 25.3577 163.781 25.867C163.522 26.4222 163.392 27.0289 163.402 27.6413C163.391 28.2591 163.547 28.8685 163.853 29.4053C164.151 29.9185 164.582 30.3417 165.101 30.6297C165.658 30.9372 166.287 31.0926 166.923 31.08C167.314 31.0761 167.702 31.0059 168.069 30.8725C168.407 30.7603 168.727 30.5995 169.018 30.3951C169.187 30.2663 169.392 30.1937 169.604 30.1876C169.805 30.1777 170.002 30.2453 170.153 30.3765C170.246 30.4479 170.322 30.5374 170.378 30.6395C170.434 30.7416 170.469 30.8541 170.48 30.97C170.484 31.0799 170.459 31.189 170.408 31.2867C170.358 31.3845 170.283 31.4676 170.191 31.5282C169.732 31.8785 169.217 32.1467 168.666 32.321C168.105 32.5147 167.515 32.6163 166.921 32.6219Z"}),a.default.createElement("defs",null,a.default.createElement("linearGradient",{gradientUnits:"userSpaceOnUse",id:"paint0_linear_486_278",x1:"0.000703224",x2:"54.2295",y1:"22.0005",y2:"22.0005"},a.default.createElement("stop",{stopColor:"#662681"}),a.default.createElement("stop",{offset:"0.15",stopColor:"#692581"}),a.default.createElement("stop",{offset:"0.26",stopColor:"#722381"}),a.default.createElement("stop",{offset:"0.36",stopColor:"#822080"}),a.default.createElement("stop",{offset:"0.43",stopColor:"#931C80"}),a.default.createElement("stop",{offset:"0.62",stopColor:"#B51C7B"}),a.default.createElement("stop",{offset:"0.87",stopColor:"#D91D75"}),a.default.createElement("stop",{offset:"1",stopColor:"#E71D73"}))))};const wr=Gt.svg`
  display: block;
  flex-shrink: 0;

  .themedColor {
    [data-theme='light'] & {
      fill: #2e3048;
    }

    [data-theme='dark'] & {
      fill: #fff;
    }
  }
`,xr=e=>{var{style:t,className:r}=e,n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["style","className"]);return a.default.createElement(wr,Object.assign({className:`dbuitkLogoMini ${r||""}`.trim(),fill:"none",height:"16",style:t,viewBox:"0 0 76 16",width:"76",xmlns:"http://www.w3.org/2000/svg"},n),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M0.232955 13V2.81818H3.79261C4.50189 2.81818 5.08688 2.94081 5.54759 3.18608C6.00829 3.42803 6.35133 3.7545 6.5767 4.16548C6.80208 4.57315 6.91477 5.02557 6.91477 5.52273C6.91477 5.96023 6.83688 6.3215 6.68111 6.60653C6.52865 6.89157 6.32647 7.11695 6.07457 7.28267C5.82599 7.44839 5.55587 7.57102 5.2642 7.65057V7.75C5.57576 7.76989 5.88897 7.87926 6.20384 8.07812C6.5187 8.27699 6.7822 8.56203 6.99432 8.93324C7.20644 9.30445 7.3125 9.75852 7.3125 10.2955C7.3125 10.8059 7.1965 11.2649 6.96449 11.6726C6.73248 12.0803 6.36624 12.4034 5.86577 12.642C5.36529 12.8807 4.71402 13 3.91193 13H0.232955ZM1.46591 11.9062H3.91193C4.71733 11.9062 5.28906 11.7505 5.62713 11.4389C5.96851 11.1241 6.1392 10.7429 6.1392 10.2955C6.1392 9.95076 6.05137 9.63258 5.87571 9.34091C5.70005 9.04593 5.44981 8.81061 5.125 8.63494C4.80019 8.45597 4.41572 8.36648 3.97159 8.36648H1.46591V11.9062ZM1.46591 7.29261H3.75284C4.12405 7.29261 4.45881 7.2197 4.7571 7.07386C5.05871 6.92803 5.29735 6.72254 5.47301 6.45739C5.65199 6.19223 5.74148 5.88068 5.74148 5.52273C5.74148 5.07528 5.5857 4.69579 5.27415 4.38423C4.9626 4.06937 4.46875 3.91193 3.79261 3.91193H1.46591V7.29261ZM13.9918 9.87784V5.36364H15.1651V13H13.9918V11.7074H13.9123C13.7333 12.0952 13.4549 12.425 13.0771 12.6967C12.6992 12.9652 12.2219 13.0994 11.6452 13.0994C11.168 13.0994 10.7437 12.995 10.3725 12.7862C10.0013 12.5741 9.70964 12.2559 9.49751 11.8317C9.28539 11.4041 9.17933 10.8655 9.17933 10.2159V5.36364H10.3526V10.1364C10.3526 10.6932 10.5084 11.1373 10.82 11.4688C11.1348 11.8002 11.5359 11.9659 12.0231 11.9659C12.3147 11.9659 12.6114 11.8913 12.913 11.7422C13.2179 11.593 13.4731 11.3643 13.6786 11.0561C13.8874 10.7479 13.9918 10.3551 13.9918 9.87784ZM17.3141 13V5.36364H18.4874V13H17.3141ZM17.9107 4.09091C17.682 4.09091 17.4848 4.01302 17.3191 3.85724C17.1567 3.70147 17.0755 3.5142 17.0755 3.29545C17.0755 3.0767 17.1567 2.88944 17.3191 2.73366C17.4848 2.57789 17.682 2.5 17.9107 2.5C18.1394 2.5 18.3349 2.57789 18.4973 2.73366C18.6631 2.88944 18.7459 3.0767 18.7459 3.29545C18.7459 3.5142 18.6631 3.70147 18.4973 3.85724C18.3349 4.01302 18.1394 4.09091 17.9107 4.09091ZM21.8097 2.81818V13H20.6364V2.81818H21.8097ZM27.2797 5.36364V6.35795H23.3223V5.36364H27.2797ZM24.4757 3.53409H25.649V10.8125C25.649 11.1439 25.697 11.3925 25.7931 11.5582C25.8926 11.7206 26.0185 11.83 26.171 11.8864C26.3268 11.9394 26.4908 11.9659 26.6632 11.9659C26.7924 11.9659 26.8985 11.9593 26.9814 11.946C27.0642 11.9295 27.1305 11.9162 27.1802 11.9062L27.4189 12.9602C27.3393 12.9901 27.2283 13.0199 27.0858 13.0497C26.9432 13.0829 26.7626 13.0994 26.5439 13.0994C26.2124 13.0994 25.8876 13.0282 25.5694 12.8857C25.2546 12.7431 24.9927 12.526 24.7839 12.2344C24.5784 11.9427 24.4757 11.5748 24.4757 11.1307V3.53409ZM33.1412 13V2.81818H34.3145V6.5767H34.4139C34.5001 6.44413 34.6194 6.27509 34.7718 6.0696C34.9276 5.8608 35.1497 5.67519 35.438 5.51278C35.7297 5.34706 36.1241 5.2642 36.6213 5.2642C37.2643 5.2642 37.831 5.42495 38.3216 5.74645C38.8121 6.06794 39.1949 6.52367 39.47 7.11364C39.7451 7.7036 39.8826 8.39962 39.8826 9.2017C39.8826 10.0104 39.7451 10.7114 39.47 11.3047C39.1949 11.8946 38.8137 12.352 38.3265 12.6768C37.8393 12.9983 37.2775 13.1591 36.6412 13.1591C36.1506 13.1591 35.7579 13.0779 35.4629 12.9155C35.1679 12.7498 34.9409 12.5625 34.7818 12.3537C34.6227 12.1416 34.5001 11.9659 34.4139 11.8267H34.2747V13H33.1412ZM34.2946 9.18182C34.2946 9.75852 34.3791 10.2673 34.5481 10.7081C34.7172 11.1456 34.9641 11.4886 35.2889 11.7372C35.6137 11.9825 36.0114 12.1051 36.4821 12.1051C36.9726 12.1051 37.3819 11.9759 37.71 11.7173C38.0415 11.4555 38.2901 11.1042 38.4558 10.6634C38.6248 10.2192 38.7093 9.72538 38.7093 9.18182C38.7093 8.64489 38.6265 8.16098 38.4608 7.73011C38.2984 7.29593 38.0514 6.95289 37.72 6.70099C37.3919 6.44579 36.9792 6.31818 36.4821 6.31818C36.0048 6.31818 35.6038 6.43916 35.2789 6.68111C34.9541 6.91974 34.7089 7.2545 34.5431 7.68537C34.3774 8.11293 34.2946 8.61174 34.2946 9.18182ZM42.1596 15.8636C41.9608 15.8636 41.7834 15.8471 41.6277 15.8139C41.4719 15.7841 41.3642 15.7543 41.3045 15.7244L41.6028 14.6903C41.8878 14.7633 42.1397 14.7898 42.3585 14.7699C42.5772 14.75 42.7711 14.6522 42.9402 14.4766C43.1125 14.3042 43.2699 14.0241 43.4125 13.6364L43.6312 13.0398L40.8074 5.36364H42.0801L44.188 11.4489H44.2676L46.3755 5.36364H47.6483L44.4068 14.1136C44.2609 14.508 44.0803 14.8345 43.8649 15.093C43.6494 15.3549 43.3992 15.5488 43.1142 15.6747C42.8324 15.8007 42.5143 15.8636 42.1596 15.8636Z"}),a.default.createElement("g",{clipPath:"url(#clip0_0_1)"},a.default.createElement("path",{d:"M75.332 6.38824C74.9045 5.65294 74.2692 5.05882 73.5032 4.67647C72.7106 4.28529 71.8348 4.08823 70.9501 4.1C70.1367 4.09118 69.3321 4.28529 68.6137 4.66176C67.9309 5.02059 67.349 5.53529 66.9156 6.16765C66.4881 5.62647 65.9537 5.17059 65.3481 4.82941C64.4871 4.35 63.5104 4.10588 62.5218 4.11765C61.6282 4.10882 60.7465 4.32059 59.9598 4.73529C59.651 4.89706 59.3601 5.09118 59.0929 5.31471V1.02941C59.0989 0.891176 59.0781 0.755882 59.0276 0.62647C58.9771 0.497059 58.8999 0.382353 58.802 0.285294C58.704 0.188235 58.5853 0.111765 58.4546 0.0647057C58.321 0.0147057 58.1815 -0.00588252 58.042 -1.67987e-07C57.7718 -0.00294134 57.5106 0.0941175 57.3146 0.27647C57.2107 0.373529 57.1306 0.488235 57.0771 0.617647C57.0207 0.747059 56.997 0.888235 56.9999 1.02647V9.67353C57.0118 10.6294 57.2731 11.5647 57.7599 12.3882C58.232 13.1853 58.9118 13.8441 59.7282 14.2971C60.5773 14.7676 61.5362 15.0088 62.5099 15C63.4985 15.0147 64.4753 14.7676 65.3362 14.2912C66.1615 13.8265 66.8443 13.1529 67.3134 12.3412C67.8003 11.4912 68.0496 10.5324 68.0378 9.55588V8.46176C68.0318 8.05 68.1565 7.64706 68.394 7.31176C68.6553 6.95 69.0085 6.65882 69.4212 6.47647C69.8992 6.26176 70.4217 6.15588 70.9471 6.16471C71.4815 6.15588 72.0099 6.26765 72.4939 6.49412C72.9243 6.70294 73.2835 7.03235 73.524 7.44412C73.8031 7.95882 73.9367 8.53824 73.91 9.12059V13.9676C73.91 14.2412 74.0198 14.5029 74.2157 14.6941C74.4117 14.8882 74.6759 14.9971 74.955 14.9971C75.234 14.9971 75.4982 14.8882 75.6942 14.6941C75.8901 14.5 76 14.2382 76 13.9676V9.10294C76.0267 8.15588 75.7981 7.21765 75.335 6.38824H75.332ZM60.7643 6.55C61.1562 6.32059 61.5926 6.17059 62.0468 6.10882C62.4981 6.04706 62.9612 6.07353 63.4006 6.18824C63.8429 6.30294 64.2556 6.50294 64.6178 6.77647C64.9799 7.05 65.2828 7.39412 65.5114 7.78235C65.7815 8.25 65.9359 8.77353 65.9596 9.31176V9.59118C65.9596 9.62059 65.9596 9.64706 65.9596 9.67647C65.9507 10.2529 65.7964 10.8206 65.5084 11.3235C65.2145 11.8324 64.7899 12.2588 64.2764 12.5588C63.739 12.8559 63.1334 13.0118 62.5159 13.0118C61.8984 13.0118 61.2928 12.8559 60.7554 12.5588C60.2389 12.2647 59.8143 11.8382 59.5264 11.3235C59.2235 10.7765 59.0692 10.1647 59.0781 9.54117C59.0662 8.92059 59.2206 8.31176 59.5264 7.76765C59.8203 7.25882 60.2448 6.83824 60.7584 6.54706L60.7643 6.55Z",fill:"url(#paint0_linear_0_1)"})),a.default.createElement("defs",null,a.default.createElement("linearGradient",{gradientUnits:"userSpaceOnUse",id:"paint0_linear_0_1",x1:"56.9999",x2:"76",y1:"7.5",y2:"7.5"},a.default.createElement("stop",{stopColor:"#662681"}),a.default.createElement("stop",{offset:"0.15",stopColor:"#692581"}),a.default.createElement("stop",{offset:"0.26",stopColor:"#722381"}),a.default.createElement("stop",{offset:"0.36",stopColor:"#822080"}),a.default.createElement("stop",{offset:"0.43",stopColor:"#931C80"}),a.default.createElement("stop",{offset:"0.62",stopColor:"#B51C7B"}),a.default.createElement("stop",{offset:"0.87",stopColor:"#D91D75"}),a.default.createElement("stop",{offset:"1",stopColor:"#E71D73"})),a.default.createElement("clipPath",{id:"clip0_0_1"},a.default.createElement("rect",{className:"rect",fill:"white",height:"15",transform:"translate(57)",width:"19"}))))};const Or=Gt.main`
  display: flex;
  flex-grow: 1;
`,Sr=e=>{var{children:t,style:r,className:n}=e,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children","style","className"]);return a.default.createElement(Or,Object.assign({style:r,className:`dbuitkMain ${n||""}`.trim()},o),t)};const Er=Gt.svg`
  display: block;
  flex-shrink: 0;

  .themedColor {
    [data-theme='light'] & {
      fill: #2e3048;
    }

    [data-theme='dark'] & {
      fill: #fff;
    }
  }
`;Er.defaultProps={className:"dark"};const kr=Gt.svg`
  display: block;
  flex-shrink: 0;

  .themedColor {
    [data-theme='light'] & {
      fill: #fff;
    }

    [data-theme='dark'] & {
      fill: #2e3048;
    }
  }
`;kr.defaultProps={className:"light"};const Pr=Gt.button`
  --animation-delay: 0.25s;

  align-items: center;
  background: #fff;
  border-radius: 40px;
  border: none;
  box-shadow:
    0 2.1px 4.625px 0 rgb(0 0 0 / 5%),
    0 9.6px 13px 0 rgb(0 0 0 / 8%),
    0 24.3px 34.875px 0 rgb(0 0 0 / 10%),
    0 48px 80px 0 rgb(0 0 0 / 15%);
  cursor: pointer;
  display: flex;
  gap: 4px;
  height: 44px;
  justify-content: space-between;
  padding: 4px 12px;
  position: relative;
  width: 84px;

  &:active {
    opacity: 0.8;
  }
`,$r=Gt.div`
  --size: 36px;

  background-color: #692581;
  border-radius: 50%;
  display: flex;
  height: var(--size);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({theme:e})=>"light"===e?"44px":"4px"};
  transition: left var(--animation-delay) ease-in-out;
  width: var(--size);
  z-index: 1;
`,jr=Bt`
  position: relative;
  z-index: 5;

  * {
    transition: fill var(--animation-delay) ease-in-out;
  }
`,Nr=Gt((e=>{var t=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,[]);return a.default.createElement(kr,Object.assign({fill:"none",height:"20",viewBox:"0 0 21 20",width:"21",xmlns:"http://www.w3.org/2000/svg"},t),a.default.createElement("path",{className:"themedColor",fill:"#fff",clipRule:"evenodd",d:"M10.1462 6.66667C8.30529 6.66667 6.81291 8.15905 6.81291 10C6.81291 11.8409 8.30529 13.3333 10.1462 13.3333C11.9872 13.3333 13.4796 11.8409 13.4796 10C13.4796 8.15905 11.9872 6.66667 10.1462 6.66667ZM5.14624 10C5.14624 7.23858 7.38482 5 10.1462 5C12.9077 5 15.1462 7.23858 15.1462 10C15.1462 12.7614 12.9077 15 10.1462 15C7.38482 15 5.14624 12.7614 5.14624 10Z",fillRule:"evenodd"}),a.default.createElement("path",{className:"themedColor",fill:"#fff",clipRule:"evenodd",d:"M10.1464 0C10.6067 0 10.9798 0.373096 10.9798 0.833333V2.5C10.9798 2.96024 10.6067 3.33333 10.1464 3.33333C9.68621 3.33333 9.31311 2.96024 9.31311 2.5V0.833333C9.31311 0.373096 9.68621 0 10.1464 0Z",fillRule:"evenodd"}),a.default.createElement("path",{className:"themedColor",fill:"#fff",clipRule:"evenodd",d:"M10.1464 16.6667C10.6067 16.6667 10.9798 17.0398 10.9798 17.5V19.1667C10.9798 19.6269 10.6067 20 10.1464 20C9.68621 20 9.31311 19.6269 9.31311 19.1667V17.5C9.31311 17.0398 9.68621 16.6667 10.1464 16.6667Z",fillRule:"evenodd"}),a.default.createElement("path",{className:"themedColor",fill:"#fff",clipRule:"evenodd",d:"M3.07391 2.9274C3.39935 2.60196 3.92699 2.60196 4.25242 2.9274L5.43576 4.11073C5.76119 4.43617 5.76119 4.9638 5.43576 5.28924C5.11032 5.61468 4.58268 5.61468 4.25724 5.28924L3.07391 4.10591C2.74847 3.78047 2.74847 3.25283 3.07391 2.9274Z",fillRule:"evenodd"}),a.default.createElement("path",{className:"themedColor",fill:"#fff",clipRule:"evenodd",d:"M14.8569 14.7108C15.1824 14.3853 15.71 14.3853 16.0354 14.7108L17.2188 15.8941C17.5442 16.2195 17.5442 16.7472 17.2188 17.0726C16.8933 17.398 16.3657 17.398 16.0403 17.0726L14.8569 15.8893C14.5315 15.5638 14.5315 15.0362 14.8569 14.7108Z",fillRule:"evenodd"}),a.default.createElement("path",{className:"themedColor",fill:"#fff",clipRule:"evenodd",d:"M0.146484 10C0.146484 9.53978 0.51958 9.16669 0.979818 9.16669H2.64648C3.10672 9.16669 3.47982 9.53978 3.47982 10C3.47982 10.4603 3.10672 10.8334 2.64648 10.8334H0.979818C0.51958 10.8334 0.146484 10.4603 0.146484 10Z",fillRule:"evenodd"}),a.default.createElement("path",{className:"themedColor",fill:"#fff",clipRule:"evenodd",d:"M16.8132 10C16.8132 9.53978 17.1863 9.16669 17.6465 9.16669H19.3132C19.7734 9.16669 20.1465 9.53978 20.1465 10C20.1465 10.4603 19.7734 10.8334 19.3132 10.8334H17.6465C17.1863 10.8334 16.8132 10.4603 16.8132 10Z",fillRule:"evenodd"}),a.default.createElement("path",{className:"themedColor",fill:"#fff",clipRule:"evenodd",d:"M5.43576 14.7108C5.76119 15.0362 5.76119 15.5638 5.43576 15.8893L4.25242 17.0726C3.92699 17.398 3.39935 17.398 3.07391 17.0726C2.74847 16.7472 2.74847 16.2195 3.07391 15.8941L4.25724 14.7108C4.58268 14.3853 5.11032 14.3853 5.43576 14.7108Z",fillRule:"evenodd"}),a.default.createElement("path",{className:"themedColor",fill:"#fff",clipRule:"evenodd",d:"M17.2188 2.9274C17.5442 3.25283 17.5442 3.78047 17.2188 4.10591L16.0354 5.28924C15.71 5.61468 15.1824 5.61468 14.8569 5.28924C14.5315 4.9638 14.5315 4.43617 14.8569 4.11073L16.0403 2.9274C16.3657 2.60196 16.8933 2.60196 17.2188 2.9274Z",fillRule:"evenodd"}))}))`
  ${jr}
`,Ir=Gt((e=>{var t=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,[]);return a.default.createElement(Er,Object.assign({fill:"none",height:"18",viewBox:"0 0 19 18",width:"19",xmlns:"http://www.w3.org/2000/svg"},t),a.default.createElement("path",{className:"themedColor",fill:"#2e3048",clipRule:"evenodd",d:"M9.04723 0.376814C9.19049 0.631 9.17106 0.945625 8.99763 1.18026C8.18646 2.27769 7.79611 3.62981 7.8976 4.99071C7.99909 6.35161 8.58566 7.63088 9.55063 8.59585C10.5156 9.56083 11.7949 10.1474 13.1558 10.2489C14.5167 10.3504 15.8688 9.96003 16.9662 9.14885C17.2009 8.97542 17.5155 8.956 17.7697 9.09925C18.0239 9.24251 18.1702 9.52171 18.1433 9.81225C17.9857 11.5178 17.3456 13.1431 16.298 14.4982C15.2503 15.8532 13.8384 16.8818 12.2275 17.4637C10.6166 18.0456 8.87327 18.1566 7.20153 17.7839C5.5298 17.4111 3.99879 16.5699 2.78767 15.3588C1.57654 14.1477 0.735386 12.6167 0.362628 10.945C-0.0101295 9.27321 0.100927 7.52989 0.682804 5.91897C1.26468 4.30804 2.29331 2.89615 3.64833 1.8485C5.00335 0.800846 6.62871 0.160765 8.33424 0.00315322C8.62477 -0.0236961 8.90398 0.122627 9.04723 0.376814ZM6.96762 1.77251C6.09814 2.03739 5.27962 2.45862 4.55389 3.01974C3.42133 3.89539 2.56158 5.07548 2.07524 6.42192C1.58889 7.76837 1.49607 9.22548 1.80763 10.6228C2.11919 12.02 2.82224 13.2997 3.83453 14.312C4.84681 15.3242 6.12646 16.0273 7.52373 16.3389C8.92101 16.6504 10.3781 16.5576 11.7246 16.0712C13.071 15.5849 14.2511 14.7252 15.1267 13.5926C15.6879 12.8669 16.1091 12.0483 16.374 11.1789C15.331 11.6196 14.1908 11.8107 13.0457 11.7253C11.3312 11.5974 9.71948 10.8584 8.50377 9.64271C7.28806 8.427 6.54907 6.81532 6.42122 5.10081C6.33582 3.95567 6.52684 2.81547 6.96762 1.77251Z",fillRule:"evenodd"}))}))`
  ${jr}
`,Mr=e=>{var{theme:t,onClick:r}=e,n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["theme","onClick"]);return a.default.createElement(Pr,Object.assign({onClick:r},n),a.default.createElement(Ir,null),a.default.createElement(Nr,null),a.default.createElement($r,{theme:t}))},Rr=Gt.p`
  color: var(--theme-color-text, #000);
  font-size: var(--base-text-font-size, 16px);
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 calc(var(--base-gap, 8px) * 2);
  max-width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`,Vr=Bt`
  ${({$cssVarRoot:e})=>Bt`
    background-color: var(${e}-background-color, #ccc);
    border-color: var(${e}-border-color, #ccc);
    color: var(${e}-color, #000);

    &:hover {
      background-color: var(${e}-background-color-hover, #aaa);
      border-color: var(${e}-border-color-hover, #aaa);
      color: var(${e}-color-hover, #000);
    }

    &[disabled],
    &[disabled]:hover {
      background-color: var(
        ${e}-background-color-disabled,
        ${e}-background-color,
        #ccc
      );
      border-color: var(${e}-border-color-disabled, ${e}-border-color, #ccc);
      color: var(${e}-color-disabled, ${e}-color, #000);
    }
  `}
`,Ar=Gt.button`
  /**
   * You can use a combination of these to make any component look like a button
   */
  ${qt}
  ${Wt}
  ${Yt}
  ${Vr}
`;Ar.defaultProps={type:"button"};const Hr=Ar,_r=Gt.h1`
  color: var(--theme-color-text, #000);
  font-size: var(--base-title-font-size, 24px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 calc(var(--base-gap, 8px) * 3);
`;const Zr=Gt.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`,Lr=e=>{var{children:t,style:r,className:n}=e,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children","style","className"]);return a.default.createElement(Zr,Object.assign({style:r,className:`dbuitkWrapper ${n||""}`.trim()},o),t)},zr={desktopStart:"1025px",desktopWideStart:"1281px",tabletLandscapeStart:"769px",tabletPortraitStart:"481px"},Dr=(e,t)=>`@media (min-width: ${zr[e]}) {\n    ${t}\n  }`,Br=Bt`
  padding-left: var(--base-padding-mobile, 4px);
  padding-right: var(--base-padding-mobile, 4px);

  ${Dr("tabletPortraitStart",Bt`
      padding-left: var(--base-padding-tablet-portrait, 8px);
      padding-right: var(--base-padding-tablet-portrait, 8px);
    `)}

  ${Dr("tabletLandscapeStart",Bt`
      padding-left: var(--base-padding-tablet-landscape, 8px);
      padding-right: var(--base-padding-tablet-landscape, 8px);
    `)}

  ${Dr("desktopStart",Bt`
      padding-left: var(--base-padding-desktop, 16px);
      padding-right: var(--base-padding-desktop, 16px);
    `)}

  ${Dr("desktopWideStart",Bt`
      padding-left: var(--base-padding-desktop-xl, 16px);
      padding-right: var(--base-padding-desktop-xl, 16px);
    `)}
`})();var a=o.YM,s=o.$n,i=o.Ql,l=o.hE,c=o.Zp,u=o.Ve,d=o.i8,p=o._8,f=o.ms,C=o.Gr,h=o.wi,m=o.Y9,g=o.wO,v=o.q7,b=o.gu,y=o.pq,w=o.gZ,x=o.IG,O=o.EY,S=o.cc,E=o.A1,k=o.mO,P=o.g,$=o.fi;export{a as ActiveButtonCSS,s as Button,i as ButtonCSS,l as ButtonVariantCSS,c as Card,u as ContainerPadding,d as CopyButton,p as DisabledButtonCSS,f as Dropdown,C as ExternalLink,h as Footer,m as Header,g as InnerContainer,v as Item,b as Logo,y as LogoMini,w as Main,x as SwitchThemeButton,O as Text,S as ThemedButton,E as Title,k as Wrapper,P as breakpointMediaQuery,$ as breakpoints};