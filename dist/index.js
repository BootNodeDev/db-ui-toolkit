import*as t from"react";var e={945:t=>{t.exports=function(t,e,M,u){var r=M?M.call(u,t,e):void 0;if(void 0!==r)return!!r;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(e),a=0;a<i.length;a++){var c=i[a];if(!o(c))return!1;var L=t[c],j=e[c];if(!1===(r=M?M.call(u,L,j,c):void 0)||void 0===r&&L!==j)return!1}return!0}}},M={};function u(t){var r=M[t];if(void 0!==r)return r.exports;var i=M[t]={exports:{}};return e[t](i,i.exports,u),i.exports}u.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return u.d(e,{a:e}),e},u.d=(t,e)=>{for(var M in e)u.o(e,M)&&!u.o(t,M)&&Object.defineProperty(t,M,{enumerable:!0,get:e[M]})},u.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),u.nc=void 0;var r={};(()=>{u.d(r,{YM:()=>He,$n:()=>_e,Ql:()=>Xe,hE:()=>RM,Zp:()=>nM,Ve:()=>_M,i8:()=>LM,_8:()=>Fe,ms:()=>rM,Gr:()=>lM,wi:()=>yM,Y9:()=>dM,wO:()=>DM,q7:()=>Ke,gu:()=>xM,pq:()=>fM,gZ:()=>CM,IG:()=>PM,EY:()=>GM,cc:()=>VM,A1:()=>$M,mO:()=>HM,g:()=>JM,fi:()=>XM});var e=function(){return e=Object.assign||function(t){for(var e,M=1,u=arguments.length;M<u;M++)for(var r in e=arguments[M])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},e.apply(this,arguments)};function M(t,e,M){if(M||2===arguments.length)for(var u,r=0,i=e.length;r<i;r++)!u&&r in e||(u||(u=Array.prototype.slice.call(e,0,r)),u[r]=e[r]);return t.concat(u||Array.prototype.slice.call(e))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const i=(n={cloneElement:()=>t.cloneElement,createElement:()=>t.createElement,createRef:()=>t.createRef,default:()=>t.default,useCallback:()=>t.useCallback,useContext:()=>t.useContext,useEffect:()=>t.useEffect,useMemo:()=>t.useMemo,useState:()=>t.useState},o={},u.d(o,n),o);var n,o,a=u(945),c=u.n(a),L="-ms-",j="-moz-",s="-webkit-",N="comm",l="rule",g="decl",y="@import",I="@keyframes",d="@layer",S=Math.abs,D=String.fromCharCode,T=Object.assign;function p(t){return t.trim()}function x(t,e){return(t=e.exec(t))?t[0]:t}function z(t,e,M){return t.replace(e,M)}function f(t,e,M){return t.indexOf(e,M)}function A(t,e){return 0|t.charCodeAt(e)}function C(t,e,M){return t.slice(e,M)}function E(t){return t.length}function O(t){return t.length}function h(t,e){return e.push(t),t}function m(t,e){return t.filter((function(t){return!x(t,e)}))}var w=1,b=1,v=0,k=0,Y=0,Q="";function U(t,e,M,u,r,i,n,o){return{value:t,root:e,parent:M,type:u,props:r,children:i,line:w,column:b,length:n,return:"",siblings:o}}function P(t,e){return T(U("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Z(t){for(;t.root;)t=P(t.root,{children:[t]});h(t,t.siblings)}function G(){return Y=k>0?A(Q,--k):0,b--,10===Y&&(b=1,w--),Y}function R(){return Y=k<v?A(Q,k++):0,b++,10===Y&&(b=1,w++),Y}function W(){return A(Q,k)}function V(){return k}function B(t,e){return C(Q,t,e)}function $(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F(t){return p(B(k-1,J(91===t?t+2:40===t?t+1:t)))}function H(t){for(;(Y=W())&&Y<33;)R();return $(t)>2||$(Y)>3?"":" "}function X(t,e){for(;--e&&R()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return B(t,V()+(e<6&&32==W()&&32==R()))}function J(t){for(;R();)switch(Y){case t:return k;case 34:case 39:34!==t&&39!==t&&J(Y);break;case 40:41===t&&J(t);break;case 92:R()}return k}function _(t,e){for(;R()&&t+Y!==57&&(t+Y!==84||47!==W()););return"/*"+B(e,k-1)+"*"+D(47===t?t:R())}function q(t){for(;!$(W());)R();return B(t,k)}function K(t,e){for(var M="",u=0;u<t.length;u++)M+=e(t[u],u,t,e)||"";return M}function tt(t,e,M,u){switch(t.type){case d:if(t.children.length)break;case y:case g:return t.return=t.return||t.value;case N:return"";case I:return t.return=t.value+"{"+K(t.children,u)+"}";case l:if(!E(t.value=t.props.join(",")))return""}return E(M=K(t.children,u))?t.return=t.value+"{"+M+"}":""}function et(t,e,M){switch(function(t,e){return 45^A(t,0)?(((e<<2^A(t,0))<<2^A(t,1))<<2^A(t,2))<<2^A(t,3):0}(t,e)){case 5103:return s+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return s+t+t;case 4789:return j+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return s+t+j+t+L+t+t;case 5936:switch(A(t,e+11)){case 114:return s+t+L+z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return s+t+L+z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return s+t+L+z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return s+t+L+t+t;case 6165:return s+t+L+"flex-"+t+t;case 5187:return s+t+z(t,/(\w+).+(:[^]+)/,s+"box-$1$2"+L+"flex-$1$2")+t;case 5443:return s+t+L+"flex-item-"+z(t,/flex-|-self/g,"")+(x(t,/flex-|baseline/)?"":L+"grid-row-"+z(t,/flex-|-self/g,""))+t;case 4675:return s+t+L+"flex-line-pack"+z(t,/align-content|flex-|-self/g,"")+t;case 5548:return s+t+L+z(t,"shrink","negative")+t;case 5292:return s+t+L+z(t,"basis","preferred-size")+t;case 6060:return s+"box-"+z(t,"-grow","")+s+t+L+z(t,"grow","positive")+t;case 4554:return s+z(t,/([^-])(transform)/g,"$1"+s+"$2")+t;case 6187:return z(z(z(t,/(zoom-|grab)/,s+"$1"),/(image-set)/,s+"$1"),t,"")+t;case 5495:case 3959:return z(t,/(image-set\([^]*)/,s+"$1$`$1");case 4968:return z(z(t,/(.+:)(flex-)?(.*)/,s+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+s+t+t;case 4200:if(!x(t,/flex-|baseline/))return L+"grid-column-align"+C(t,e)+t;break;case 2592:case 3360:return L+z(t,"template-","")+t;case 4384:case 3616:return M&&M.some((function(t,M){return e=M,x(t.props,/grid-\w+-end/)}))?~f(t+(M=M[e].value),"span",0)?t:L+z(t,"-start","")+t+L+"grid-row-span:"+(~f(M,"span",0)?x(M,/\d+/):+x(M,/\d+/)-+x(t,/\d+/))+";":L+z(t,"-start","")+t;case 4896:case 4128:return M&&M.some((function(t){return x(t.props,/grid-\w+-start/)}))?t:L+z(z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return z(t,/(.+)-inline(.+)/,s+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(t)-1-e>6)switch(A(t,e+1)){case 109:if(45!==A(t,e+4))break;case 102:return z(t,/(.+:)(.+)-([^]+)/,"$1"+s+"$2-$3$1"+j+(108==A(t,e+3)?"$3":"$2-$3"))+t;case 115:return~f(t,"stretch",0)?et(z(t,"stretch","fill-available"),e,M)+t:t}break;case 5152:case 5920:return z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(e,M,u,r,i,n,o){return L+M+":"+u+o+(r?L+M+"-span:"+(i?n:+n-+u)+o:"")+t}));case 4949:if(121===A(t,e+6))return z(t,":",":"+s)+t;break;case 6444:switch(A(t,45===A(t,14)?18:11)){case 120:return z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+s+(45===A(t,14)?"inline-":"")+"box$3$1"+s+"$2$3$1"+L+"$2box$3")+t;case 100:return z(t,":",":"+L)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(t,"scroll-","scroll-snap-")+t}return t}function Mt(t,e,M,u){if(t.length>-1&&!t.return)switch(t.type){case g:return void(t.return=et(t.value,t.length,M));case I:return K([P(t,{value:z(t.value,"@","@"+s)})],u);case l:if(t.length)return function(t,e){return t.map(e).join("")}(M=t.props,(function(e){switch(x(e,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Z(P(t,{props:[z(e,/:(read-\w+)/,":"+j+"$1")]})),Z(P(t,{props:[e]})),T(t,{props:m(M,u)});break;case"::placeholder":Z(P(t,{props:[z(e,/:(plac\w+)/,":"+s+"input-$1")]})),Z(P(t,{props:[z(e,/:(plac\w+)/,":"+j+"$1")]})),Z(P(t,{props:[z(e,/:(plac\w+)/,L+"input-$1")]})),Z(P(t,{props:[e]})),T(t,{props:m(M,u)})}return""}))}}function ut(t){return function(t){return Q="",t}(rt("",null,null,null,[""],t=function(t){return w=b=1,v=E(Q=t),k=0,[]}(t),0,[0],t))}function rt(t,e,M,u,r,i,n,o,a){for(var c=0,L=0,j=n,s=0,N=0,l=0,g=1,y=1,I=1,d=0,T="",p=r,x=i,C=u,O=T;y;)switch(l=d,d=R()){case 40:if(108!=l&&58==A(O,j-1)){-1!=f(O+=z(F(d),"&","&\f"),"&\f",S(c?o[c-1]:0))&&(I=-1);break}case 34:case 39:case 91:O+=F(d);break;case 9:case 10:case 13:case 32:O+=H(l);break;case 92:O+=X(V()-1,7);continue;case 47:switch(W()){case 42:case 47:h(nt(_(R(),V()),e,M,a),a);break;default:O+="/"}break;case 123*g:o[c++]=E(O)*I;case 125*g:case 59:case 0:switch(d){case 0:case 125:y=0;case 59+L:-1==I&&(O=z(O,/\f/g,"")),N>0&&E(O)-j&&h(N>32?ot(O+";",u,M,j-1,a):ot(z(O," ","")+";",u,M,j-2,a),a);break;case 59:O+=";";default:if(h(C=it(O,e,M,c,L,r,o,T,p=[],x=[],j,i),i),123===d)if(0===L)rt(O,e,C,C,p,i,j,o,x);else switch(99===s&&110===A(O,3)?100:s){case 100:case 108:case 109:case 115:rt(t,C,C,u&&h(it(t,C,C,0,0,r,o,T,r,p=[],j,x),x),r,x,j,o,u?p:x);break;default:rt(O,C,C,C,[""],x,0,o,x)}}c=L=N=0,g=I=1,T=O="",j=n;break;case 58:j=1+E(O),N=l;default:if(g<1)if(123==d)--g;else if(125==d&&0==g++&&125==G())continue;switch(O+=D(d),d*g){case 38:I=L>0?1:(O+="\f",-1);break;case 44:o[c++]=(E(O)-1)*I,I=1;break;case 64:45===W()&&(O+=F(R())),s=W(),L=j=E(T=O+=q(V())),d++;break;case 45:45===l&&2==E(O)&&(g=0)}}return i}function it(t,e,M,u,r,i,n,o,a,c,L,j){for(var s=r-1,N=0===r?i:[""],g=O(N),y=0,I=0,d=0;y<u;++y)for(var D=0,T=C(t,s+1,s=S(I=n[y])),x=t;D<g;++D)(x=p(I>0?N[D]+" "+T:z(T,/&\f/g,N[D])))&&(a[d++]=x);return U(t,e,M,0===r?l:o,a,c,L,j)}function nt(t,e,M,u){return U(t,e,M,N,D(Y),C(t,2,-2),0,u)}function ot(t,e,M,u,r){return U(t,e,M,g,C(t,0,u),C(t,u+1,-1),u,r)}var at={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ct="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Lt="active",jt="data-styled-version",st="6.1.11",Nt="/*!sc*/\n",lt="undefined"!=typeof window&&"HTMLElement"in window,gt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),yt=(new Set,Object.freeze([])),It=Object.freeze({});var dt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),St=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Dt=/(^-|-$)/g;function Tt(t){return t.replace(St,"-").replace(Dt,"")}var pt=/(a)(d)/gi,xt=52,zt=function(t){return String.fromCharCode(t+(t>25?39:97))};function ft(t){var e,M="";for(e=Math.abs(t);e>xt;e=e/xt|0)M=zt(e%xt)+M;return(zt(e%xt)+M).replace(pt,"$1-$2")}var At,Ct=5381,Et=function(t,e){for(var M=e.length;M;)t=33*t^e.charCodeAt(--M);return t},Ot=function(t){return Et(Ct,t)};function ht(t){return ft(Ot(t)>>>0)}function mt(t){return"string"==typeof t&&!0}var wt="function"==typeof Symbol&&Symbol.for,bt=wt?Symbol.for("react.memo"):60115,vt=wt?Symbol.for("react.forward_ref"):60112,kt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ut=((At={})[vt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},At[bt]=Qt,At);function Pt(t){return("type"in(e=t)&&e.type.$$typeof)===bt?Qt:"$$typeof"in t?Ut[t.$$typeof]:kt;var e}var Zt=Object.defineProperty,Gt=Object.getOwnPropertyNames,Rt=Object.getOwnPropertySymbols,Wt=Object.getOwnPropertyDescriptor,Vt=Object.getPrototypeOf,Bt=Object.prototype;function $t(t,e,M){if("string"!=typeof e){if(Bt){var u=Vt(e);u&&u!==Bt&&$t(t,u,M)}var r=Gt(e);Rt&&(r=r.concat(Rt(e)));for(var i=Pt(t),n=Pt(e),o=0;o<r.length;++o){var a=r[o];if(!(a in Yt||M&&M[a]||n&&a in n||i&&a in i)){var c=Wt(e,a);try{Zt(t,a,c)}catch(t){}}}}return t}function Ft(t){return"function"==typeof t}function Ht(t){return"object"==typeof t&&"styledComponentId"in t}function Xt(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Jt(t,e){if(0===t.length)return"";for(var M=t[0],u=1;u<t.length;u++)M+=e?e+t[u]:t[u];return M}function _t(t){return null!==t&&"object"==typeof t&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function qt(t,e,M){if(void 0===M&&(M=!1),!M&&!_t(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var u=0;u<e.length;u++)t[u]=qt(t[u],e[u]);else if(_t(e))for(var u in e)t[u]=qt(t[u],e[u]);return t}function Kt(t,e){Object.defineProperty(t,"toString",{value:e})}function te(t){for(var e=[],M=1;M<arguments.length;M++)e[M-1]=arguments[M];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ee=function(){function t(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return t.prototype.indexOfGroup=function(t){for(var e=0,M=0;M<t;M++)e+=this.groupSizes[M];return e},t.prototype.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var M=this.groupSizes,u=M.length,r=u;t>=r;)if((r<<=1)<0)throw te(16,"".concat(t));this.groupSizes=new Uint32Array(r),this.groupSizes.set(M),this.length=r;for(var i=u;i<r;i++)this.groupSizes[i]=0}for(var n=this.indexOfGroup(t+1),o=(i=0,e.length);i<o;i++)this.tag.insertRule(n,e[i])&&(this.groupSizes[t]++,n++)},t.prototype.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],M=this.indexOfGroup(t),u=M+e;this.groupSizes[t]=0;for(var r=M;r<u;r++)this.tag.deleteRule(M)}},t.prototype.getGroup=function(t){var e="";if(t>=this.length||0===this.groupSizes[t])return e;for(var M=this.groupSizes[t],u=this.indexOfGroup(t),r=u+M,i=u;i<r;i++)e+="".concat(this.tag.getRule(i)).concat(Nt);return e},t}(),Me=new Map,ue=new Map,re=1,ie=function(t){if(Me.has(t))return Me.get(t);for(;ue.has(re);)re++;var e=re++;return Me.set(t,e),ue.set(e,t),e},ne=function(t,e){re=e+1,Me.set(t,e),ue.set(e,t)},oe="style[".concat(ct,"][").concat(jt,'="').concat(st,'"]'),ae=new RegExp("^".concat(ct,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ce=function(t,e,M){for(var u,r=M.split(","),i=0,n=r.length;i<n;i++)(u=r[i])&&t.registerName(e,u)},Le=function(t,e){for(var M,u=(null!==(M=e.textContent)&&void 0!==M?M:"").split(Nt),r=[],i=0,n=u.length;i<n;i++){var o=u[i].trim();if(o){var a=o.match(ae);if(a){var c=0|parseInt(a[1],10),L=a[2];0!==c&&(ne(L,c),ce(t,L,a[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}};function je(){return u.nc}var se=function(t){var e=document.head,M=t||e,u=document.createElement("style"),r=function(t){var e=Array.from(t.querySelectorAll("style[".concat(ct,"]")));return e[e.length-1]}(M),i=void 0!==r?r.nextSibling:null;u.setAttribute(ct,Lt),u.setAttribute(jt,st);var n=je();return n&&u.setAttribute("nonce",n),M.insertBefore(u,i),u},Ne=function(){function t(t){this.element=se(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var e=document.styleSheets,M=0,u=e.length;M<u;M++){var r=e[M];if(r.ownerNode===t)return r}throw te(17)}(this.element),this.length=0}return t.prototype.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch(t){return!1}},t.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},t.prototype.getRule=function(t){var e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""},t}(),le=function(){function t(t){this.element=se(t),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(t,e){if(t<=this.length&&t>=0){var M=document.createTextNode(e);return this.element.insertBefore(M,this.nodes[t]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},t.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},t}(),ge=function(){function t(t){this.rules=[],this.length=0}return t.prototype.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,!0)},t.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},t.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},t}(),ye=lt,Ie={isServer:!lt,useCSSOMInjection:!gt},de=function(){function t(t,M,u){void 0===t&&(t=It),void 0===M&&(M={});var r=this;this.options=e(e({},Ie),t),this.gs=M,this.names=new Map(u),this.server=!!t.isServer,!this.server&&lt&&ye&&(ye=!1,function(t){for(var e=document.querySelectorAll(oe),M=0,u=e.length;M<u;M++){var r=e[M];r&&r.getAttribute(ct)!==Lt&&(Le(t,r),r.parentNode&&r.parentNode.removeChild(r))}}(this)),Kt(this,(function(){return function(t){for(var e=t.getTag(),M=e.length,u="",r=function(M){var r=function(t){return ue.get(t)}(M);if(void 0===r)return"continue";var i=t.names.get(r),n=e.getGroup(M);if(void 0===i||0===n.length)return"continue";var o="".concat(ct,".g").concat(M,'[id="').concat(r,'"]'),a="";void 0!==i&&i.forEach((function(t){t.length>0&&(a+="".concat(t,","))})),u+="".concat(n).concat(o,'{content:"').concat(a,'"}').concat(Nt)},i=0;i<M;i++)r(i);return u}(r)}))}return t.registerId=function(t){return ie(t)},t.prototype.reconstructWithOptions=function(M,u){return void 0===u&&(u=!0),new t(e(e({},this.options),M),this.gs,u&&this.names||void 0)},t.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(t=function(t){var e=t.useCSSOMInjection,M=t.target;return t.isServer?new ge(M):e?new Ne(M):new le(M)}(this.options),new ee(t)));var t},t.prototype.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},t.prototype.registerName=function(t,e){if(ie(t),this.names.has(t))this.names.get(t).add(e);else{var M=new Set;M.add(e),this.names.set(t,M)}},t.prototype.insertRules=function(t,e,M){this.registerName(t,e),this.getTag().insertRules(ie(t),M)},t.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},t.prototype.clearRules=function(t){this.getTag().clearGroup(ie(t)),this.clearNames(t)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Se=/&/g,De=/^\s*\/\/.*$/gm;function Te(t,e){return t.map((function(t){return"rule"===t.type&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map((function(t){return"".concat(e," ").concat(t)}))),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=Te(t.children,e)),t}))}function pe(t){var e,M,u,r=void 0===t?It:t,i=r.options,n=void 0===i?It:i,o=r.plugins,a=void 0===o?yt:o,c=function(t,u,r){return r.startsWith(M)&&r.endsWith(M)&&r.replaceAll(M,"").length>0?".".concat(e):t},L=a.slice();L.push((function(t){t.type===l&&t.value.includes("&")&&(t.props[0]=t.props[0].replace(Se,M).replace(u,c))})),n.prefix&&L.push(Mt),L.push(tt);var j=function(t,r,i,o){void 0===r&&(r=""),void 0===i&&(i=""),void 0===o&&(o="&"),e=o,M=r,u=new RegExp("\\".concat(M,"\\b"),"g");var a=t.replace(De,""),c=ut(i||r?"".concat(i," ").concat(r," { ").concat(a," }"):a);n.namespace&&(c=Te(c,n.namespace));var j,s,N,l=[];return K(c,(j=L.concat((N=function(t){return l.push(t)},function(t){t.root||(t=t.return)&&N(t)})),s=O(j),function(t,e,M,u){for(var r="",i=0;i<s;i++)r+=j[i](t,e,M,u)||"";return r})),l};return j.hash=a.length?a.reduce((function(t,e){return e.name||te(15),Et(t,e.name)}),Ct).toString():"",j}var xe=new de,ze=pe(),fe=i.default.createContext({shouldForwardProp:void 0,styleSheet:xe,stylis:ze}),Ae=(fe.Consumer,i.default.createContext(void 0));function Ce(){return(0,i.useContext)(fe)}function Ee(t){var e=(0,i.useState)(t.stylisPlugins),M=e[0],u=e[1],r=Ce().styleSheet,n=(0,i.useMemo)((function(){var e=r;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,r]),o=(0,i.useMemo)((function(){return pe({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:M})}),[t.enableVendorPrefixes,t.namespace,M]);(0,i.useEffect)((function(){c()(M,t.stylisPlugins)||u(t.stylisPlugins)}),[t.stylisPlugins]);var a=(0,i.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:n,stylis:o}}),[t.shouldForwardProp,n,o]);return i.default.createElement(fe.Provider,{value:a},i.default.createElement(Ae.Provider,{value:o},t.children))}var Oe=function(){function t(t,e){var M=this;this.inject=function(t,e){void 0===e&&(e=ze);var u=M.name+e.hash;t.hasNameForId(M.id,u)||t.insertRules(M.id,u,e(M.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=e,Kt(this,(function(){throw te(12,String(M.name))}))}return t.prototype.getName=function(t){return void 0===t&&(t=ze),this.name+t.hash},t}(),he=function(t){return t>="A"&&t<="Z"};function me(t){for(var e="",M=0;M<t.length;M++){var u=t[M];if(1===M&&"-"===u&&"-"===t[0])return t;he(u)?e+="-"+u.toLowerCase():e+=u}return e.startsWith("ms-")?"-"+e:e}var we=function(t){return null==t||!1===t||""===t},be=function(t){var e,u,r=[];for(var i in t){var n=t[i];t.hasOwnProperty(i)&&!we(n)&&(Array.isArray(n)&&n.isCss||Ft(n)?r.push("".concat(me(i),":"),n,";"):_t(n)?r.push.apply(r,M(M(["".concat(i," {")],be(n),!1),["}"],!1)):r.push("".concat(me(i),": ").concat((e=i,null==(u=n)||"boolean"==typeof u||""===u?"":"number"!=typeof u||0===u||e in at||e.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return r};function ve(t,e,M,u){return we(t)?[]:Ht(t)?[".".concat(t.styledComponentId)]:Ft(t)?!Ft(r=t)||r.prototype&&r.prototype.isReactComponent||!e?[t]:ve(t(e),e,M,u):t instanceof Oe?M?(t.inject(M,u),[t.getName(u)]):[t]:_t(t)?be(t):Array.isArray(t)?Array.prototype.concat.apply(yt,t.map((function(t){return ve(t,e,M,u)}))):[t.toString()];var r}function ke(t){for(var e=0;e<t.length;e+=1){var M=t[e];if(Ft(M)&&!Ht(M))return!1}return!0}var Ye=Ot(st),Qe=function(){function t(t,e,M){this.rules=t,this.staticRulesId="",this.isStatic=(void 0===M||M.isStatic)&&ke(t),this.componentId=e,this.baseHash=Et(Ye,e),this.baseStyle=M,de.registerId(e)}return t.prototype.generateAndInjectStyles=function(t,e,M){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,e,M):"";if(this.isStatic&&!M.hash)if(this.staticRulesId&&e.hasNameForId(this.componentId,this.staticRulesId))u=Xt(u,this.staticRulesId);else{var r=Jt(ve(this.rules,t,e,M)),i=ft(Et(this.baseHash,r)>>>0);if(!e.hasNameForId(this.componentId,i)){var n=M(r,".".concat(i),void 0,this.componentId);e.insertRules(this.componentId,i,n)}u=Xt(u,i),this.staticRulesId=i}else{for(var o=Et(this.baseHash,M.hash),a="",c=0;c<this.rules.length;c++){var L=this.rules[c];if("string"==typeof L)a+=L;else if(L){var j=Jt(ve(L,t,e,M));o=Et(o,j+c),a+=j}}if(a){var s=ft(o>>>0);e.hasNameForId(this.componentId,s)||e.insertRules(this.componentId,s,M(a,".".concat(s),void 0,this.componentId)),u=Xt(u,s)}}return u},t}(),Ue=i.default.createContext(void 0);Ue.Consumer;var Pe={};function Ze(t,M,u){var r=Ht(t),n=t,o=!mt(t),a=M.attrs,c=void 0===a?yt:a,L=M.componentId,j=void 0===L?function(t,e){var M="string"!=typeof t?"sc":Tt(t);Pe[M]=(Pe[M]||0)+1;var u="".concat(M,"-").concat(ht(st+M+Pe[M]));return e?"".concat(e,"-").concat(u):u}(M.displayName,M.parentComponentId):L,s=M.displayName,N=void 0===s?function(t){return mt(t)?"styled.".concat(t):"Styled(".concat(function(t){return t.displayName||t.name||"Component"}(t),")")}(t):s,l=M.displayName&&M.componentId?"".concat(Tt(M.displayName),"-").concat(M.componentId):M.componentId||j,g=r&&n.attrs?n.attrs.concat(c).filter(Boolean):c,y=M.shouldForwardProp;if(r&&n.shouldForwardProp){var I=n.shouldForwardProp;if(M.shouldForwardProp){var d=M.shouldForwardProp;y=function(t,e){return I(t,e)&&d(t,e)}}else y=I}var S=new Qe(u,l,r?n.componentStyle:void 0);function D(t,M){return function(t,M,u){var r=t.attrs,n=t.componentStyle,o=t.defaultProps,a=t.foldedComponentIds,c=t.styledComponentId,L=t.target,j=i.default.useContext(Ue),s=Ce(),N=t.shouldForwardProp||s.shouldForwardProp,l=function(t,e,M){return void 0===M&&(M=It),t.theme!==M.theme&&t.theme||e||M.theme}(M,j,o)||It,g=function(t,M,u){for(var r,i=e(e({},M),{className:void 0,theme:u}),n=0;n<t.length;n+=1){var o=Ft(r=t[n])?r(i):r;for(var a in o)i[a]="className"===a?Xt(i[a],o[a]):"style"===a?e(e({},i[a]),o[a]):o[a]}return M.className&&(i.className=Xt(i.className,M.className)),i}(r,M,l),y=g.as||L,I={};for(var d in g)void 0===g[d]||"$"===d[0]||"as"===d||"theme"===d&&g.theme===l||("forwardedAs"===d?I.as=g.forwardedAs:N&&!N(d,y)||(I[d]=g[d]));var S=function(t,e){var M=Ce();return t.generateAndInjectStyles(e,M.styleSheet,M.stylis)}(n,g),D=Xt(a,c);return S&&(D+=" "+S),g.className&&(D+=" "+g.className),I[mt(y)&&!dt.has(y)?"class":"className"]=D,I.ref=u,(0,i.createElement)(y,I)}(T,t,M)}D.displayName=N;var T=i.default.forwardRef(D);return T.attrs=g,T.componentStyle=S,T.displayName=N,T.shouldForwardProp=y,T.foldedComponentIds=r?Xt(n.foldedComponentIds,n.styledComponentId):"",T.styledComponentId=l,T.target=r?n.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?function(t){for(var e=[],M=1;M<arguments.length;M++)e[M-1]=arguments[M];for(var u=0,r=e;u<r.length;u++)qt(t,r[u],!0);return t}({},n.defaultProps,t):t}}),Kt(T,(function(){return".".concat(T.styledComponentId)})),o&&$t(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function Ge(t,e){for(var M=[t[0]],u=0,r=e.length;u<r;u+=1)M.push(e[u],t[u+1]);return M}new Set;var Re=function(t){return Object.assign(t,{isCss:!0})};function We(t){for(var e=[],u=1;u<arguments.length;u++)e[u-1]=arguments[u];if(Ft(t)||_t(t))return Re(ve(Ge(yt,M([t],e,!0))));var r=t;return 0===e.length&&1===r.length&&"string"==typeof r[0]?ve(r):Re(ve(Ge(r,e)))}function Ve(t,u,r){if(void 0===r&&(r=It),!u)throw te(1,u);var i=function(e){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];return t(u,r,We.apply(void 0,M([e],i,!1)))};return i.attrs=function(M){return Ve(t,u,e(e({},r),{attrs:Array.prototype.concat(r.attrs,M).filter(Boolean)}))},i.withConfig=function(M){return Ve(t,u,e(e({},r),M))},i}var Be=function(t){return Ve(Ze,t)},$e=Be;dt.forEach((function(t){$e[t]=Be(t)})),function(){function t(t,e){this.rules=t,this.componentId=e,this.isStatic=ke(t),de.registerId(this.componentId+1)}t.prototype.createStyles=function(t,e,M,u){var r=u(Jt(ve(this.rules,e,M,u)),""),i=this.componentId+t;M.insertRules(i,i,r)},t.prototype.removeStyles=function(t,e){e.clearRules(this.componentId+t)},t.prototype.renderStyles=function(t,e,M,u){t>2&&de.registerId(this.componentId+t),this.removeStyles(t,M),this.createStyles(t,e,M,u)}}(),function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString(),M=je(),u=Jt([M&&'nonce="'.concat(M,'"'),"".concat(ct,'="true"'),"".concat(jt,'="').concat(st,'"')].filter(Boolean)," ");return"<style ".concat(u,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw te(2);return t._emitSheetCSS()},this.getStyleElement=function(){var M;if(t.sealed)throw te(2);var u=((M={})[ct]="",M[jt]=st,M.dangerouslySetInnerHTML={__html:t.instance.toString()},M),r=je();return r&&(u.nonce=r),[i.default.createElement("style",e({},u,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new de({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw te(2);return i.default.createElement(Ee,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(t){throw te(3)}}(),"__sc-".concat(ct,"__");const Fe=We`
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,He=We`
  &:active {
    opacity: 0.8;
  }
`,Xe=We`
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
    background-color var(--base-animation-time-xs, 0.2s),
    border-color var(--base-animation-time-xs, 0.2s),
    color var(--base-animation-time-xs, 0.2s);
  user-select: none;
  white-space: nowrap;
`,Je=$e.button`
  ${Xe}
  ${He}
  ${Fe}
`;Je.defaultProps={type:"button"};const _e=Je,qe=$e.div`
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
`;qe.defaultProps={className:"dbuitkDropdownItem",$closeOnClick:!0,disabled:!1};const Ke=$e(qe)`
  &,
  &:hover {
    ${({$state:t})=>"danger"===t?We`
            color: var(--theme-color-danger, #800);
          `:"ok"===t?We`
              color: var(--theme-color-ok, #080);
            `:"warning"===t&&We`
              color: var(--theme-color-warning, #cc0);
            `};
  }
`,tM=$e.div`
  display: ${({$isOpen:t})=>t?"flex":"none"};
  flex-direction: column;
  min-width: 90px;
  position: absolute;
  white-space: nowrap;

  ${({$position:t})=>"left"===t&&We`
      left: 0;
    `}

  ${({$position:t})=>"right"===t&&We`
      right: 0;
    `}

  ${({$position:t})=>"center"===t&&We`
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({$direction:t})=>"downwards"===t&&We`
      top: calc(100% + 10px);
    `}

  ${({$direction:t})=>"upwards"===t&&We`
      bottom: calc(100%);
    `}
`;tM.defaultProps={$direction:"downwards",$isOpen:!1,$position:"left",className:"dbuitkDropdownItems"};const eM=$e(tM)`
  background-color: var(--theme-dropdown-background-color, #fff);
  border-color: var(--theme-dropdown-border-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border-style: solid;
  border-width: 1px;
  box-shadow: var(--theme-dropdown-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
`;const MM=$e.div`
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
`;MM.defaultProps={className:"dbuitkDropdown",disabled:!1};const uM=$e.div`
  background-color: transparent;
  border: none;
  display: flex;
  outline: none;
  padding: 0;
  user-select: none;
  width: 100%;
`;uM.defaultProps={className:"dbuitkDropdownButton"};const rM=t=>{var{button:e,className:M,clearDropdownStyle:u=!1,direction:r="downwards",disabled:n=!1,highlightItem:o,items:a,position:c="left"}=t,L=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,["button","className","clearDropdownStyle","direction","disabled","highlightItem","items","position"]);const j=i.default.useMemo((()=>{const t="number"==typeof o,e=t&&o<0,M=Array.isArray(a)&&t&&o>a.length-1;if(!e&&!M)return o}),[o,a]),[s,N]=(0,i.useState)(!1),[l,g]=(0,i.useState)(j),y=(0,i.createRef)(),I=(0,i.useCallback)((t=>{t.stopPropagation(),n||N(!s)}),[n,s]);(0,i.useEffect)((()=>{const t=t=>{y&&y.current&&y.current.contains(t.target)||N(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[y]);const d=(t,e)=>{const{$closeOnClick:M,onClick:u,className:r}=t.props;return(0,i.cloneElement)(t,{className:`${r||""} ${void 0!==j&&e===l?"dropdownItemActive":""}`.trim(),onClick:t=>{t.stopPropagation(),M&&N(!1),g(e),u&&u()}})};return i.default.createElement(MM,Object.assign({className:`${s?"isOpen":""} ${M||""}`.trim(),disabled:n,ref:y},L),i.default.createElement(uM,{onClick:I},e),i.default.createElement(tM,{as:u?void 0:eM,$direction:r,$position:c,$isOpen:s},Array.isArray(a)?a.map(((t,e)=>d(t,e))):d(a)))},iM=$e.div`
  background-color: var(--theme-card-background-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border: 1px solid var(--theme-card-border-color, #fff);
  box-shadow: var(--theme-card-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
  display: flex;
  flex-direction: column;
  padding: var(--base-common-padding, 8px);
  white-space: normal;
`;iM.defaultProps={className:"dbuitkCard"};const nM=iM;var oM=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M};const aM=t=>{var e=oM(t,[]);return i.default.createElement("svg",Object.assign({fill:"currentColor",height:"15",viewBox:"0 0 24 24",width:"15",xmlns:"http://www.w3.org/2000/svg"},e),i.default.createElement("path",{className:"fill",clipRule:"evenodd",d:"M10 9C9.44771 9 9 9.44771 9 10V21C9 21.5523 9.44771 22 10 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44771 21.5523 9 21 9H10ZM15 7V3C15 2.44772 14.5523 2 14 2H3C2.44772 2 2 2.44772 2 3V14C2 14.5523 2.44772 15 3 15H7V10C7 8.34315 8.34315 7 10 7H15ZM17 7H21C22.6569 7 24 8.34315 24 10V21C24 22.6569 22.6569 24 21 24H10C8.34315 24 7 22.6569 7 21V17H3C1.34315 17 0 15.6569 0 14V3C0 1.34315 1.34315 0 3 0H14C15.6569 0 17 1.34315 17 3V7Z",fillRule:"evenodd"}))},cM=$e.button`
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
    background-color var(--base-animation-time-xs, 0.2s),
    border-color var(--base-animation-time-xs, 0.2s),
    color var(--base-animation-time-xs, 0.2s);
  user-select: none;
  white-space: nowrap;
  width: fit-content;

  &:hover {
    color: var(--copy-button-color-hover, #8b46a4);
  }

  &:active {
    opacity: 0.8;
  }
`;cM.defaultProps={className:"dbuitkCopyButton",type:"button"};const LM=t=>{var{children:e=i.default.createElement(aM,null),onClick:M,value:u}=t,r=oM(t,["children","onClick","value"]);return i.default.createElement(cM,Object.assign({onClick:t=>{navigator.clipboard.writeText(u),M&&M(t)}},r),e)};var jM=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M};const sM=t=>{var e=jM(t,[]);return i.default.createElement("svg",Object.assign({fill:"currentColor",height:"12.5",viewBox:"0 0 10 10",width:"12.5",xmlns:"http://www.w3.org/2000/svg"},e),i.default.createElement("path",{className:"fill",clipRule:"evenodd",d:"M1.11111 1.11111V8.88892H8.88892V5H10V8.88892C10 9.5 9.5 10 8.88892 10H1.11111C0.494442 10 0 9.5 0 8.88892V1.11111C0 0.5 0.494442 0 1.11111 0H5V1.11111H1.11111ZM6.11111 1.11111V0H10V3.88889H8.88892V1.89444L3.42777 7.35558L2.64444 6.57223L8.10558 1.11111H6.11111Z",fillRule:"evenodd"}))},NM=$e.a`
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
    background-color var(--base-animation-time-xs, 0.2s),
    border-color var(--base-animation-time-xs, 0.2s),
    color var(--base-animation-time-xs, 0.2s);
  white-space: nowrap;
  width: fit-content;

  &:hover {
    color: var(--external-link-button-color-hover, #8b46a4);
    text-decoration: none;
  }

  &:active {
    opacity: 0.8;
  }
`;NM.defaultProps={className:"dbuitkExternalLink",type:"button"};const lM=t=>{var{children:e=i.default.createElement(sM,null),target:M="_blank"}=t,u=jM(t,["children","target"]);return i.default.createElement(NM,Object.assign({target:M},u),e)},gM=$e.footer`
  align-items: center;
  background-color: var(--theme-footer-background-color, transparent);
  color: var(--theme-footer-text-color, #000);
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
`;gM.defaultProps={className:"dbuitkFooter"};const yM=gM,IM=$e.header`
  background-color: var(--theme-header-background-color, transparent);
  color: var(--theme-header-text-color, #000);
  flex-grow: 0;
  flex-shrink: 0;
`;IM.defaultProps={className:"dbuitkHeader"};const dM=IM,SM=$e.div`
  display: flex;
  flex-shrink: 0;
  margin: 0 auto;
  max-width: 100%;
  width: var(--base-container-max-width, 1360px);
`;SM.defaultProps={className:"dbuitkInnerContainer"};const DM=SM,TM="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9Ijc3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNS41NzQgNDIuNDE2Yy0uMTMtLjM0Ni0uMjYtLjY5MS0uMzctMS4wNDctMS4yODctNC4yMjctMi4wMTUtMTMuMzIyLTIuNDc0LTE4LjU4NkMzMS42NzIgMTAuODczIDI3LjU1MSAxLjEwNSAyMS4xODUuNzVWLjY3Yy02LjM2Ny4zNDYtMTAuNDg4IDEwLjEyMy0xMS41NDYgMjIuMDI0LS40NjkgNS4yNzQtMS4xODcgMTQuMzYtMi40NzQgMTguNTg2LS4xMi4zNTYtLjI0LjcxMS0uMzcgMS4wNDctMTkuODE3IDEwLjIyMiA5LjU4IDExLjU2NSAxNC4zOSAxMS42MzR2LjA3OWM0LjgxLS4wNyAzNC4yMTYtMS40MTIgMTQuMzg5LTExLjYzNHYuMDF6IiBmaWxsPSIjMkUzMDQ4Ii8+PHBhdGggZD0iTTMwLjI4NSA1OC4xMmMxLjczNy0zLjEyIDIuOTk0LTcuNTEgMi45OTQtOS45NyAwLS42Mi0uMDYtMS4yNi0uMTYtMS44Ny0uMzUtMi4xNC0xLjUxNy0zLjU5LTIuODE0LTMuNThoLS4wM2MtMS4zMDcgMC0yLjQ2NCAxLjQ0LTIuODE0IDMuNTgtLjEuNjItLjE2IDEuMjUtLjE2IDEuODcgMCAyLjQ2IDEuMjU4IDYuODQgMi45OTQgOS45N2gtLjAxeiIgZmlsbD0iI0MxMUM3OSIvPjxwYXRoIGQ9Ik0zMC4yODUgNTEuODNjLjkzOC0xLjY5IDEuNjE3LTQuMDcgMS42MTctNS40IDAtLjM0LS4wMy0uNjgtLjA4LTEuMDEtLjE5LTEuMTYtLjgxOC0xLjk0LTEuNTI3LTEuOTRoLS4wMmMtLjcwOCAwLTEuMzM3Ljc4LTEuNTI2IDEuOTQtLjA2LjMzLS4wOC42OC0uMDggMS4wMSAwIDEuMzMuNjc4IDMuNzEgMS42MTYgNS40eiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0xMi4wMTQgNTguNTljMS43MzctMy4xMiAyLjk5NC03LjUxIDIuOTk0LTkuOTcgMC0uNjItLjA2LTEuMjYtLjE2LTEuODctLjM0OS0yLjE0LTEuNTE3LTMuNTktMi44MTQtMy41OGgtLjAzYy0xLjMwNyAwLTIuNDY0IDEuNDQtMi44MTQgMy41OC0uMS42Mi0uMTYgMS4yNS0uMTYgMS44NyAwIDIuNDYgMS4yNTggNi44NCAyLjk5NCA5Ljk3aC0uMDF6IiBmaWxsPSIjQzExQzc5Ii8+PHBhdGggZD0iTTEyLjAxNCA1MS44M2MuOTM4LTEuNjkgMS42MTctNC4wNyAxLjYxNy01LjQgMC0uMzQtLjAzLS42OC0uMDktMS4wMS0uMTktMS4xNi0uODE4LTEuOTQtMS41MjctMS45NGgtLjAyYy0uNzA4IDAtMS4zMzcuNzgtMS41MjYgMS45NC0uMDYuMzMtLjA5LjY4LS4wOSAxLjAxIDAgMS4zMy42NzggMy43MSAxLjYxNiA1LjRoLjAyeiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0yMS4xNDUgNjcuMTRjMi43NzQtNC41OSA0Ljc4LTExLjAyIDQuNzgtMTQuNjMgMC0uOTItLjA5LTEuODUtLjI1LTIuNzUtLjU2OS0zLjE0LTIuNDI1LTUuMjctNC41MS01LjI2aC0uMDVjLTIuMDg2LS4wMS0zLjk0MiAyLjExLTQuNTEgNS4yNi0uMTYuOS0uMjUgMS44My0uMjUgMi43NSAwIDMuNjEgMi4wMDYgMTAuMDUgNC43OCAxNC42M2guMDF6IiBmaWxsPSIjQzExQzc5Ii8+PHBhdGggZD0iTTIxLjE0NSA1OC4wMWMxLjI1Ny0yLjAxIDIuMTY1LTQuODQgMi4xNjUtNi40MyAwLS40LS4wNC0uODEtLjExLTEuMjEtLjI2LTEuMzgtMS4wOTctMi4zMi0yLjAzNS0yLjMxaC0uMDJjLS45MzggMC0xLjc4Ni45My0yLjAzNiAyLjMxLS4wNy40LS4xMS44MS0uMTEgMS4yMSAwIDEuNTkuOTA4IDQuNDEgMi4xNjYgNi40M2gtLjAyeiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0yMS4yMDUgMi4wM2MtNS44NzggMC05LjI5IDEyLjM4LTEwLjA3OSAyMS40Ny0uMzQgMy45NS0uODI4IDExLjA2LTEuNDI3IDE0LjMyLS4zNDkgMS45NC0xLjU0NiA1LjEyLTEuNjM2IDUuMzctNS4zNTkgMy4zMi02LjYwNiA0Ljg1LTYuMjk3IDUuMjMuMTQuMTYgMi4xODYtLjI1IDQuNTctLjc1IDEuODU2LS4zOSAzLjk1Mi0uNzcgNS4zMS0xLjQ1IDUuMjk4LTIuNjQgNC41NC04LjE5IDUuNDQ3LTguMjIgMS4wMzgtLjAzLjQyIDEuNjcgMS4xODggMy41MyAxLjAyOCAyLjUgMy43MjIgNS4zIDEwLjExOCA0LjM0LTEuNzc2LTEuNTUtMi4xNTUtNy44MS0xLjAzOC03LjgxLjgzOSAwIC4xNCAzLjI3IDMuNjEzIDYuNjEgMy4xODMgMy4wNyA5LjcxOSAzLjk4IDkuNzY5IDMuNzQuMjItMS4yMS00LjQxLTMuNjYtNi40NDYtNS4xOS0xLjQwNy0zLjMzLTIuNDM1LTE3LjU3LTIuNjc1LTE5Ljc3LTEuMTE3LTEwLjI3LTQuMzMtMjEuNDMtMTAuNDA3LTIxLjQzbC0uMDEuMDF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTIxLjIwNSAyLjAzYzYuMDc3IDAgOS4zIDExLjE2IDEwLjQwOCAyMS40My4yNCAyLjE5IDEuMjY3IDE2LjQ0IDIuNjc0IDE5Ljc3IDIuMDM1IDEuNTMgNi42NTYgMy45NyA2LjQ0NiA1LjE5IDAgLjAyLS4wNy4wNC0uMi4wNC0xLjEyNyAwLTYuNjk1LTEuMDItOS41NTktMy43OC0zLjQ3My0zLjM1LTIuNzc0LTYuNjEtMy42MTItNi42MS0xLjExOCAwLS43MzkgNi4yNiAxLjAzOCA3LjgxLS44NzkuMTMtMS42ODcuMTktMi40MzUuMTktNC42NyAwLTYuNzk2LTIuMzgtNy42ODQtNC41NC0uNzU4LTEuODUtLjE3LTMuNTMtMS4xNjctMy41M2gtLjAzYy0uOTA4LjAzLS4xNSA1LjU4LTUuNDQ5IDguMjItMS4zNTcuNjgtMy40NDIgMS4wNS01LjMwOCAxLjQ1LTIuMDE2LjQzLTMuODAyLjc5LTQuMzguNzktLjEgMC0uMTctLjAxLS4xOS0uMDQtLjMxLS4zNy45MzctMS45MSA2LjI5Ni01LjIzLjEtLjI2IDEuMjg3LTMuNDMgMS42MzctNS4zNy41ODgtMy4yNiAxLjA3Ny0xMC4zNiAxLjQyNy0xNC4zMi44MDgtOS4xIDQuMjEtMjEuNDcgMTAuMDg4LTIxLjQ3em0wLTEuNjFDMTMuNTYuNDIgMTAuMjY4IDE0Ljg0IDkuNTMgMjMuMzZjLS4wNy44NC0uMTUgMS44MS0uMjQgMi44Ni0uMzE5IDMuOTItLjcxOCA4LjgxLTEuMTY3IDExLjMtLjI0IDEuMzItLjk2OCAzLjQ2LTEuMzc3IDQuNThDLjQ0OSA0Ni4wNi4yNSA0Ny4yOS4xNCA0Ny45NmMtLjA5LjU0LjA1IDEuMDcuMzkgMS40OC4zMzguNDEuODE3LjYyIDEuNDI2LjYyczEuNzY2LS4yIDQuNzEtLjgzbC42OTgtLjE1YzEuNzc3LS4zNyAzLjYyMy0uNzUgNC45OS0xLjQ0IDIuNTc0LTEuMjggMy45NDEtMy4xNyA0LjczLTQuODggMS4wMzggMi4wNyAzLjQ2MiA0LjkgOC44OCA0LjkuODM5IDAgMS43MzctLjA3IDIuNjY1LS4yMWwyLjc1NC0uNDFjMy4zNzMgMi4yMyA4LjAwMyAzLjAxIDkuMTUgMy4wMSAxLjQ5NyAwIDEuNzU3LTEuMjMgMS43ODctMS4zNy4zMzktMS45Mi0xLjg3Ni0zLjM1LTQuOTUtNS4zNC0uNjM4LS40MS0xLjI0Ny0uOC0xLjczNi0xLjE1LTEuMDA4LTMuMS0xLjg4Ni0xMy4wNC0yLjIyNS0xNi44OS0uMDgtLjk0LS4xNS0xLjY2LS4xOS0yLjAzQzMyLjQ3MSAxNi40MSAyOS44MDYuNDIgMjEuMjA1LjQyeiIgZmlsbD0iIzJFMzA0OCIvPjxwYXRoIGQ9Ik0xNy40NTMgMjEuODFjMS4xMyAwIDIuMDQ1LTEuNTk4IDIuMDQ1LTMuNTcgMC0xLjk3Mi0uOTE2LTMuNTctMi4wNDUtMy41Ny0xLjEzIDAtMi4wNDYgMS41OTgtMi4wNDYgMy41NyAwIDEuOTcyLjkxNiAzLjU3IDIuMDQ2IDMuNTd6TTI1LjAxNyAyMS44MWMxLjEzIDAgMi4wNDUtMS41OTggMi4wNDUtMy41NyAwLTEuOTcyLS45MTYtMy41Ny0yLjA0Ni0zLjU3cy0yLjA0NSAxLjU5OC0yLjA0NSAzLjU3YzAgMS45NzIuOTE2IDMuNTcgMi4wNDYgMy41N3oiIGZpbGw9IiMyRTMwNDgiLz48cGF0aCBkPSJNMTguMjkgMzcuNjZjLS4zNDggMS41OS0uNDY4IDIuODUuMzMgNC41Ni42ODkgMS4yOCAxLjg2NiAyLjU0IDMuNzgyIDMuMjUtMi45MDQtMi45LTMuMTkzLTQuNTItNC4xMDEtNy44MWgtLjAxek0xMi4xMTQgNDUuOTVjLjQ4LTEuNjMuOTk4LTQuODUuOTI4LTYuNTgtLjA5LjYyLTEuODQ2IDQuMjMtMS44NDYgNC4yM3MtMS45MDYgMi4xNy00LjQ2IDMuOTdjMS43NTYtLjM3IDMuNjQyLS43NCA0LjktMS4zNi4xNjktLjA4LjMyOC0uMTcuNDc4LS4yNnpNMjcuODkgMzYuOTljMCAxLjIyLjE0IDMuNTggMS4yNjggNS40Mi40MjkuNzIgMS4wMDggMS40OSAxLjgwNiAyLjI2IDIuMzY1IDIuMjggNi41ODYgMy4zNyA4LjYxMSAzLjY4LTcuMjM0LTMuNTktOS41Mi02LjYxLTExLjY4NS0xMS4zNnoiIGZpbGw9IiNFMkUwRTciLz48cGF0aCBkPSJNMjEuMzY0IDI1LjQ1Yy40NjkgMCAuODQ4LS40ODMuODQ4LTEuMDggMC0uNTk2LS4zOC0xLjA4LS44NDgtMS4wOC0uNDY4IDAtLjg0OC40ODQtLjg0OCAxLjA4IDAgLjU5Ni4zOCAxLjA4Ljg0OCAxLjA4eiIgZmlsbD0iIzJFMzA0OCIvPjxwYXRoIGQ9Ik0yNy4yMzkgNi42MzdjLTEuNTg0LTIuODE1LTMuNTcyLTQuNjAxLTYuMDI0LTQuNjAxLTIuMjggMC02LjUyNyAyLjQ5Mi05LjA1IDE0LjYgMy4wMjgtNS41NSA1LjU1LTEyLjEwOCA5LjIxMS0xMS42NzQgMi4wNzkgMCA0LjAzNi41OTUgNS44NTMgMS42NjVsLjAxLjAxeiIgZmlsbD0iI0UyRTBFNyIvPjxwYXRoIGQ9Ik0yMS4xODUgNzYuMzZjMTAuMjU2IDAgMTguNTctMS4zODMgMTguNTctMy4wOSAwLTEuNzA2LTguMzE0LTMuMDktMTguNTctMy4wOXMtMTguNTcgMS4zODMtMTguNTcgMy4wOWMwIDEuNzA3IDguMzE0IDMuMDkgMTguNTcgMy4wOXoiIGZpbGw9IiNDNUMyQ0IiLz48cGF0aCBkPSJNNjIuOTMgMTQuNzI1djEwLjE2YzAgLjUyLjAzIDEgLjA4IDEuNDJoLTEuNzhjLS4wNS0uMy0uMDgtLjYzLS4wOC0xLjAxLS4xOS4zNS0uNDkuNjQtLjkuODYtLjQxLjIyLS44Ny4zNC0xLjM5LjM0LTEuMTEgMC0yLjAxLS4zOS0yLjctMS4xNy0uNjktLjc4LTEuMDQtMS43Ni0xLjA0LTIuOTRzLjM1LTIuMTEgMS4wNS0yLjljLjctLjc5IDEuNTktMS4xOCAyLjY2LTEuMTguNjIgMCAxLjEyLjExIDEuNS4zNC4zOC4yMy42NC40OS43OS43OHYtNC43aDEuODF6bS01Ljk1IDcuNjZjMCAuNzUuMTkgMS4zNS41OCAxLjguMzguNDUuODkuNjggMS41Mi42OHMxLjEtLjIzIDEuNDktLjY5Yy4zOS0uNDYuNTgtMS4wNi41OC0xLjgxcy0uMTktMS4zMi0uNTYtMS43NmMtLjM3LS40NC0uODctLjY2LTEuNDktLjY2cy0xLjEyLjIyLTEuNTIuNjZjLS4zOS40NC0uNTkgMS4wMy0uNTkgMS43N2wtLjAxLjAxek03My4yOCAyNi4zMDVsLTEuMDctMi44NWgtNC44bC0xLjA2IDIuODVoLTIuMDNsNC40Mi0xMS4zNGgyLjIybDQuNDIgMTEuMzRoLTIuMXptLTMuNDctOS4yNmwtMS43MyA0LjY0aDMuNDZsLTEuNzMtNC42NHpNNzguNTMgMjkuMzQ1aC0xLjg0di0xMC44M2gxLjc5djEuMDZjLjItLjM1LjUyLS42NC45Ni0uODguNDQtLjIzLjk0LS4zNSAxLjUyLS4zNSAxLjEyIDAgMiAuMzggMi42NCAxLjE0LjY0Ljc2Ljk2IDEuNzQuOTYgMi45MnMtLjM0IDIuMTYtMS4wMSAyLjk0Yy0uNjcuNzctMS41NiAxLjE2LTIuNjYgMS4xNi0uNTMgMC0xLjAxLS4xLTEuNDItLjMtLjQyLS4yLS43My0uNDYtLjk0LS43N3YzLjkyLS4wMXptNC4xOC02Ljk0YzAtLjcyLS4xOS0xLjMxLS41OC0xLjc1LS4zOC0uNDQtLjg5LS42Ni0xLjUyLS42NnMtMS4xMi4yMi0xLjUxLjY2Yy0uMzkuNDQtLjU4IDEuMDMtLjU4IDEuNzVzLjE5IDEuMzMuNTggMS43OGMuMzkuNDUuODkuNjcgMS41MS42N3MxLjEyLS4yMiAxLjUxLS42N2MuMzktLjQ1LjU4LTEuMDQuNTgtMS43OGguMDF6TTg4LjE5IDI5LjM0NWgtMS44NHYtMTAuODNoMS43OXYxLjA2Yy4yLS4zNS41Mi0uNjQuOTYtLjg4LjQ0LS4yMy45NC0uMzUgMS41Mi0uMzUgMS4xMiAwIDIgLjM4IDIuNjQgMS4xNC42NC43Ni45NiAxLjc0Ljk2IDIuOTJzLS4zNCAyLjE2LTEuMDEgMi45NGMtLjY3Ljc3LTEuNTYgMS4xNi0yLjY2IDEuMTYtLjUzIDAtMS4wMS0uMS0xLjQyLS4zLS40Mi0uMi0uNzMtLjQ2LS45NC0uNzd2My45Mi0uMDF6bTQuMTgtNi45NGMwLS43Mi0uMTktMS4zMS0uNTgtMS43NS0uMzgtLjQ0LS44OS0uNjYtMS41Mi0uNjZzLTEuMTIuMjItMS41MS42NmMtLjM5LjQ0LS41OCAxLjAzLS41OCAxLjc1cy4xOSAxLjMzLjU4IDEuNzhjLjM5LjQ1Ljg5LjY3IDEuNTEuNjdzMS4xMi0uMjIgMS41MS0uNjdjLjM5LS40NS41OC0xLjA0LjU4LTEuNzhoLjAxeiIgZmlsbD0iIzJFMzA0OCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODMuNDAyIDMxLjM1NWMtMy4wMzQgMC01LjYyOSAxLjAzMS03Ljc5NCAzLjA5NC0yLjE2NiAyLjA2Mi0zLjI0OSA0Ljc3LTMuMjQ5IDguMTMgMCAzLjM2IDEuMDgzIDYuMDQgMy4yNDkgOC4xMDMgMi4xNjUgMi4wNjMgNC43NiAzLjA5NCA3Ljc5NCAzLjA5NHM1LjY2My0xLjAzMSA3LjgyOS0zLjA5NGMyLjE2Ni0yLjA2MiAzLjI0OC00Ljc2IDMuMjQ4LTguMTA0IDAtMy4zNDMtMS4wODItNi4wNjctMy4yNDgtOC4xMy0yLjE2Ni0yLjA2Mi00Ljc3LTMuMDkzLTcuODI5LTMuMDkzem00LjczNSAxNi40OTFjLTEuMzMyIDEuMjQ3LTIuOTEzIDEuODY1LTQuNzM1IDEuODY1LTEuODIyIDAtMy4zNjktLjYxOC00LjctMS44NjUtMS4zMzMtMS4yNDYtMi4wMDMtMy4wMDctMi4wMDMtNS4yOTNzLjY3LTQuMDQ4IDIuMDAyLTUuMjk0YzEuMzMyLTEuMjQ2IDIuOTA1LTEuODY1IDQuNzAxLTEuODY1IDEuNzk2IDAgMy4zOTUuNjE5IDQuNzM1IDEuODY1IDEuMzMyIDEuMjQ2IDIuMDAzIDMuMDA4IDIuMDAzIDUuMjk0IDAgMi4yODYtLjY3IDQuMDQ3LTIuMDAzIDUuMjkzem0tMjEuODQ1LTUuNjI4Yy45MS0uMzAxIDEuNjU5LS44NzcgMi4yNDMtMS43MS41ODQtLjgzNC44NzYtMS44MDUuODc2LTIuODk3IDAtMS43MTgtLjU4NC0zLjExLTEuNzQ0LTQuMTg1LTEuMTYtMS4wNzQtMi43NjctMS42MDctNC44MTMtMS42MDdINTUuMTJ2MjEuNTFoOC4zMWMyLjAwMyAwIDMuNjEtLjU1OCA0LjgyMS0xLjY4NCAxLjIxMi0xLjEyNiAxLjgyMi0yLjU2MSAxLjgyMi00LjMyMyAwLTEuMjk3LS4zNi0yLjM5Ny0xLjA3NC0zLjMyNi0uNzIyLS45Mi0xLjYyNC0xLjUxMi0yLjcxNi0xLjc3OGguMDA5em0tNy4wMy02Ljg4NGgyLjkzYy45ODkgMCAxLjc1NC4yNCAyLjI5NS43MTMuNTMzLjQ3My44MDggMS4xMjYuODA4IDEuOTYgMCAuODMzLS4yNzUgMS40ODYtLjgxNiAxLjk2OC0uNTUuNDktMS4yOTguNzMtMi4yNDMuNzNoLTIuOTc0di01LjM3MXptNS43NzUgMTMuNzU5Yy0uNTc2LjQ5OC0xLjM2Ni43NDctMi4zOC43NDdoLTMuMzk1di01LjY3MmgzLjQ1NWMxLjAxNCAwIDEuNzk2LjI2NyAyLjM1NS43OTEuNTU4LjUyNC44MzMgMS4yMi44MzMgMi4wOTcgMCAuODc2LS4yODMgMS41NTUtLjg2OCAyLjA0NXYtLjAwOHptMzUuMDU0LTE0LjY0NGMyLjE2Ni0yLjA2MyA0Ljc2MS0zLjA5NCA3Ljc5NS0zLjA5NCAzLjA1OSAwIDUuNjYzIDEuMDMxIDcuODI5IDMuMDk0IDIuMTY1IDIuMDYyIDMuMjQ4IDQuNzg3IDMuMjQ4IDguMTMgMCAzLjM0Mi0xLjA4MyA2LjA0LTMuMjQ4IDguMTAzLTIuMTY2IDIuMDYzLTQuNzk2IDMuMDk0LTcuODI5IDMuMDk0LTMuMDM0IDAtNS42MjktMS4wMzEtNy43OTUtMy4wOTQtMi4xNjUtMi4wNjItMy4yNDgtNC43NDMtMy4yNDgtOC4xMDQgMC0zLjM2IDEuMDgyLTYuMDY3IDMuMjQ4LTguMTN6bTcuNzk1IDE1LjI2MmMxLjgyMiAwIDMuNDAzLS42MTggNC43MzUtMS44NjUgMS4zMzItMS4yNDYgMi4wMDItMy4wMDcgMi4wMDItNS4yOTNzLS42Ny00LjA0OC0yLjAwMi01LjI5NGMtMS4zNDEtMS4yNDYtMi45MzktMS44NjUtNC43MzUtMS44NjUtMS43OTYgMC0zLjM2OS42MTktNC43MDEgMS44NjUtMS4zMzIgMS4yNDYtMi4wMDIgMy4wMDgtMi4wMDIgNS4yOTQgMCAyLjI4Ni42NyA0LjA0NyAyLjAwMiA1LjI5MyAxLjMzMiAxLjI0NyAyLjg3OSAxLjg2NSA0LjcwMSAxLjg2NXptMjMuNDI2LTguOTJsLTMuMDA3LS41NzZjLTEuNTU2LS4zLTIuMzM4LTEuMTA4LTIuMzM4LTIuNDIzIDAtLjc0OC4zMTgtMS4zOTIuOTM3LTEuOTI1LjYxOC0uNTMzIDEuNDM1LS44MDggMi40MjMtLjgwOCAxLjIxMiAwIDIuMTMxLjMxOCAyLjc1OS45MzcuNjI3LjYyNyAxLjAxNCAxLjMyMyAxLjE1MSAyLjA5NmwzLjc2NC0xLjE1MWE3LjQ2IDcuNDYgMCAwMC0uNjk2LTEuOTA4Yy0uMzI2LS42MS0uNzgyLTEuMTk0LTEuMzY2LTEuNzc5LS41ODQtLjU4NC0xLjM2Ny0xLjA0LTIuMzM4LTEuMzgzLS45NzEtLjM0NC0yLjA3MS0uNTE2LTMuMzA4LS41MTYtMi4wNjMgMC0zLjgyNC42NDUtNS4yOTQgMS45NDItMS40NjkgMS4yOTgtMi4yIDIuODk2LTIuMiA0Ljc5NiAwIDEuNTk4LjUwNyAyLjkzIDEuNTEzIDQuMDA0IDEuMDE0IDEuMDc0IDIuMzg5IDEuNzg4IDQuMTI1IDIuMTU3bDMuMDA3LjYxYy44MjUuMTY0IDEuNDcuNDczIDEuOTI1LjkyOC40NTYuNDU2LjY3OS45OTcuNjc5IDEuNjI1IDAgLjc5LS4zMDkgMS40MjYtLjkyOCAxLjkwNy0uNjE5LjQ4Mi0xLjQ2OS43MzEtMi41NjEuNzMxLTEuNDM1IDAtMi41NTItLjM4Ny0zLjM1MS0xLjE1Mi0uOC0uNzY0LTEuMjQ2LTEuNzI3LTEuMzUtMi44NzhsLTMuODg0IDEuMDNjLjA3Ny44MDkuMzA5IDEuNTkuNjc5IDIuMzU1YTguNDQzIDguNDQzIDAgMDAxLjU2NCAyLjE1OGMuNjcuNjc4IDEuNTQ3IDEuMjIgMi42MzggMS42MjQgMS4wOTIuNDA0IDIuMzEyLjYxIDMuNjcuNjEgMi4zNjMgMCA0LjI1NC0uNjYyIDUuNjU1LTEuOTg1IDEuNC0xLjMyNCAyLjEwNS0yLjg4IDIuMTA1LTQuNjU4IDAtMS41NTYtLjUyNC0yLjkxMy0xLjU4MS00LjA2NS0xLjA1Ny0xLjE1MS0yLjUyNy0xLjkwOC00LjQyNi0yLjI3N2wuMDM0LS4wMjZ6bTE0LjMxOC01LjAxaC02Ljc5OHYtMy45N2gxNy44MDZ2My45N2gtNi43ODl2MTcuNTRoLTQuMjE5VjM1Ljc4em0xMy45NTYgMTcuNTRoMTMuNDY2di0zLjk0NWgtOS4yODFWNDQuNGg4LjQwNXYtMy43M2gtOC40MDV2LTQuOTE1aDkuMjgxVjMxLjgxaC0xMy40NjZ2MjEuNTF6bTMxLjY4NS0xMS4wMjZjLS44MTYgMS4wNzQtMS45MzQgMS44MjItMy4zNTIgMi4yMjZsNC42MTUgOC44aC00LjY3NWwtNC4yMTktOC4yODVoLTIuMTgzdjguMjg1aC00LjIyVjMxLjgxaDguNDA1YzIuMDYzIDAgMy43MjEuNjI3IDQuOTc2IDEuODgyIDEuMjU1IDEuMjU0IDEuODgyIDIuODM1IDEuODgyIDQuNzM1IDAgMS40OTUtLjQxMyAyLjc4NC0xLjIyOSAzLjg2N3ptLTYuNDItLjg2OGMxLjA1OCAwIDEuODgzLS4yNjcgMi40NzUtLjgxN3YtLjAwOGMuNTkzLS41NS44OTQtMS4yNDYuODk0LTIuMTU3cy0uMzAxLTEuNjMzLS44OTQtMi4xODNjLS42MDEtLjU0MS0xLjQyNi0uODE2LTIuNDc1LS44MTZoLTMuMzk0djUuOThoMy4zOTR6IiBmaWxsPSJ1cmwoI3ByZWZpeF9fcGFpbnQwX2xpbmVhcl8xMDU3XzI1MTMpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJwcmVmaXhfX3BhaW50MF9saW5lYXJfMTA1N18yNTEzIiB4MT0iNDguNzc5IiB5MT0iNjguNjk3IiB4Mj0iMjU2Ljc2MSIgeTI9IjEwLjMyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM2NjI2ODEiLz48c3RvcCBvZmZzZXQ9Ii44MTciIHN0b3AtY29sb3I9IiNCOTFDN0IiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=";const pM=$e.img`
  --base-logo: url(${TM});

  [data-theme='light'] & {
    --base-logo: url(${TM});
  }

  [data-theme='dark'] & {
    --base-logo: url(${"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9Ijc3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNi40OCA0Mi41ODNjLS4xMy0uMzQzLS4yNi0uNjg3LS4zNy0xLjA0MS0xLjI5LTQuMjA0LTIuMDItMTMuMjUyLTIuNDgtMTguNDg4LTEuMDYtMTEuODQ3LTUuMTktMjEuNTYyLTExLjU3LTIxLjkxNnYtLjA3OWMtNi4zOC4zNDQtMTAuNTEgMTAuMDctMTEuNTcgMjEuOTA3LS40NyA1LjI0NS0xLjE5IDE0LjI4My0yLjQ4IDE4LjQ4OC0uMTIuMzUzLS4yNC43MDctLjM3IDEuMDQtMTkuODYgMTAuMTY4IDkuNiAxMS41MDQgMTQuNDIgMTEuNTczdi4wNzljNC44Mi0uMDcgMzQuMjktMS40MDUgMTQuNDItMTEuNTcydi4wMXoiIGZpbGw9IiMxMzE1MjEiLz48cGF0aCBkPSJNMzEuMTggNTguMjI1YzEuNzQtMy4xMiAzLTcuNTEgMy05Ljk3IDAtLjYyLS4wNi0xLjI2LS4xNi0xLjg3LS4zNS0yLjE0LTEuNTItMy41OS0yLjgyLTMuNThoLS4wM2MtMS4zMSAwLTIuNDcgMS40NC0yLjgyIDMuNTgtLjEuNjItLjE2IDEuMjUtLjE2IDEuODcgMCAyLjQ2IDEuMjYgNi44NCAzIDkuOTdoLS4wMXoiIGZpbGw9IiNDMTFDNzkiLz48cGF0aCBkPSJNMzEuMTggNTEuOTM1Yy45NC0xLjY5IDEuNjItNC4wNyAxLjYyLTUuNCAwLS4zNC0uMDMtLjY4LS4wOC0xLjAxLS4xOS0xLjE2LS44Mi0xLjk0LTEuNTMtMS45NGgtLjAyYy0uNzEgMC0xLjM0Ljc4LTEuNTMgMS45NC0uMDYuMzMtLjA4LjY4LS4wOCAxLjAxIDAgMS4zMy42OCAzLjcxIDEuNjIgNS40eiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0xMi44NyA1OC42OTZjMS43NC0zLjEyIDMtNy41MSAzLTkuOTcgMC0uNjItLjA2LTEuMjYtLjE2LTEuODctLjM1LTIuMTQtMS41Mi0zLjU5LTIuODItMy41OGgtLjAzYy0xLjMxIDAtMi40NyAxLjQ0LTIuODIgMy41OC0uMS42Mi0uMTYgMS4yNS0uMTYgMS44NyAwIDIuNDYgMS4yNiA2Ljg0IDMgOS45N2gtLjAxeiIgZmlsbD0iI0MxMUM3OSIvPjxwYXRoIGQ9Ik0xMi44NyA1MS45MzZjLjk0LTEuNjkgMS42Mi00LjA3IDEuNjItNS40IDAtLjM0LS4wMy0uNjgtLjA5LTEuMDEtLjE5LTEuMTYtLjgyLTEuOTQtMS41My0xLjk0aC0uMDJjLS43MSAwLTEuMzQuNzgtMS41MyAxLjk0LS4wNi4zMy0uMDkuNjgtLjA5IDEuMDEgMCAxLjMzLjY4IDMuNzEgMS42MiA1LjRoLjAyeiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0yMi4wMiA2Ny4yNDZjMi43OC00LjU5IDQuNzktMTEuMDIgNC43OS0xNC42MyAwLS45Mi0uMDktMS44NS0uMjUtMi43NS0uNTctMy4xNC0yLjQzLTUuMjctNC41Mi01LjI2aC0uMDVjLTIuMDktLjAxLTMuOTUgMi4xMS00LjUyIDUuMjYtLjE2LjktLjI1IDEuODMtLjI1IDIuNzUgMCAzLjYxIDIuMDEgMTAuMDUgNC43OSAxNC42M2guMDF6IiBmaWxsPSIjQzExQzc5Ii8+PHBhdGggZD0iTTIyLjAyIDU4LjExNWMxLjI2LTIuMDEgMi4xNy00Ljg0IDIuMTctNi40MyAwLS40LS4wNC0uODEtLjExLTEuMjEtLjI2LTEuMzgtMS4xLTIuMzItMi4wNC0yLjMxaC0uMDJjLS45NCAwLTEuNzkuOTMtMi4wNCAyLjMxLS4wNy40LS4xMS44MS0uMTEgMS4yMSAwIDEuNTkuOTEgNC40MSAyLjE3IDYuNDNoLS4wMnoiIGZpbGw9IiNGRjQzOEIiLz48cGF0aCBkPSJNMjIuMDggMi4xMzVjLTUuODkgMC05LjMxIDEyLjM4LTEwLjEgMjEuNDctLjM0IDMuOTUtLjgzIDExLjA2LTEuNDMgMTQuMzItLjM1IDEuOTQtMS41NSA1LjEyLTEuNjQgNS4zNy01LjM3IDMuMzItNi42MiA0Ljg1LTYuMzEgNS4yMy4xNC4xNiAyLjE5LS4yNSA0LjU4LS43NSAxLjg2LS4zOSAzLjk2LS43NyA1LjMyLTEuNDUgNS4zMS0yLjY0IDQuNTUtOC4xOSA1LjQ2LTguMjIgMS4wNC0uMDMuNDIgMS42NyAxLjE5IDMuNTMgMS4wMyAyLjUgMy43MyA1LjMgMTAuMTQgNC4zNC0xLjc4LTEuNTUtMi4xNi03LjgxLTEuMDQtNy44MS44NCAwIC4xNCAzLjI3IDMuNjIgNi42MSAzLjE5IDMuMDcgOS43NCAzLjk4IDkuNzkgMy43NC4yMi0xLjIxLTQuNDItMy42Ni02LjQ2LTUuMTktMS40MS0zLjMzLTIuNDQtMTcuNTctMi42OC0xOS43Ny0xLjEyLTEwLjI3LTQuMzQtMjEuNDMtMTAuNDMtMjEuNDNsLS4wMS4wMXoiIGZpbGw9IiNFOEU4RTgiLz48cGF0aCBkPSJNMjIuMDggMi4xMzZjNi4wOSAwIDkuMzIgMTEuMTYgMTAuNDMgMjEuNDMuMjQgMi4xOSAxLjI3IDE2LjQ0IDIuNjggMTkuNzcgMi4wNCAxLjUzIDYuNjcgMy45NyA2LjQ2IDUuMTkgMCAuMDItLjA3LjA0LS4yLjA0LTEuMTMgMC02LjcxLTEuMDItOS41OC0zLjc4LTMuNDgtMy4zNS0yLjc4LTYuNjEtMy42Mi02LjYxLTEuMTIgMC0uNzQgNi4yNiAxLjA0IDcuODEtLjg4LjEzLTEuNjkuMTktMi40NC4xOS00LjY4IDAtNi44MS0yLjM4LTcuNy00LjU0LS43Ni0xLjg1LS4xNy0zLjUzLTEuMTctMy41M2gtLjAzYy0uOTEuMDMtLjE1IDUuNTgtNS40NiA4LjIyLTEuMzYuNjgtMy40NSAxLjA1LTUuMzIgMS40NS0yLjAyLjQzLTMuODEuNzktNC4zOS43OS0uMSAwLS4xNy0uMDEtLjE5LS4wNC0uMzEtLjM3Ljk0LTEuOTEgNi4zMS01LjIzLjEtLjI2IDEuMjktMy40MyAxLjY0LTUuMzcuNTktMy4yNiAxLjA4LTEwLjM2IDEuNDMtMTQuMzIuODEtOS4xIDQuMjItMjEuNDcgMTAuMTEtMjEuNDd6bTAtMS42MWMtNy42NiAwLTEwLjk2IDE0LjQyLTExLjcgMjIuOTQtLjA3Ljg0LS4xNSAxLjgxLS4yNCAyLjg2LS4zMiAzLjkyLS43MiA4LjgxLTEuMTcgMTEuMy0uMjQgMS4zMi0uOTcgMy40Ni0xLjM4IDQuNTgtNi4zMSAzLjk2LTYuNTEgNS4xOS02LjYyIDUuODYtLjA5LjU0LjA1IDEuMDcuMzkgMS40OC4zNC40MS44Mi42MiAxLjQzLjYyczEuNzctLjIgNC43Mi0uODNsLjctLjE1YzEuNzgtLjM3IDMuNjMtLjc1IDUtMS40NCAyLjU4LTEuMjggMy45NS0zLjE3IDQuNzQtNC44OCAxLjA0IDIuMDcgMy40NyA0LjkgOC45IDQuOS44NCAwIDEuNzQtLjA3IDIuNjctLjIxbDIuNzYtLjQxYzMuMzggMi4yMyA4LjAyIDMuMDEgOS4xNyAzLjAxIDEuNSAwIDEuNzYtMS4yMyAxLjc5LTEuMzcuMzQtMS45Mi0xLjg4LTMuMzUtNC45Ni01LjM0LS42NC0uNDEtMS4yNS0uOC0xLjc0LTEuMTUtMS4wMS0zLjEtMS44OS0xMy4wNC0yLjIzLTE2Ljg5LS4wOC0uOTQtLjE1LTEuNjYtLjE5LTIuMDMtLjc1LTYuODYtMy40Mi0yMi44NS0xMi4wNC0yMi44NXoiIGZpbGw9IiMxMzE1MjEiLz48cGF0aCBkPSJNMTguMzIgMjEuOTE2YzEuMTMyIDAgMi4wNS0xLjU5OSAyLjA1LTMuNTcgMC0xLjk3Mi0uOTE4LTMuNTctMi4wNS0zLjU3LTEuMTMyIDAtMi4wNSAxLjU5OC0yLjA1IDMuNTcgMCAxLjk3MS45MTggMy41NyAyLjA1IDMuNTd6TTI1LjkgMjEuOTE2YzEuMTMyIDAgMi4wNS0xLjU5OSAyLjA1LTMuNTcgMC0xLjk3Mi0uOTE4LTMuNTctMi4wNS0zLjU3LTEuMTMyIDAtMi4wNSAxLjU5OC0yLjA1IDMuNTcgMCAxLjk3MS45MTggMy41NyAyLjA1IDMuNTd6IiBmaWxsPSIjMTMxNTIxIi8+PHBhdGggb3BhY2l0eT0iLjIiIGQ9Ik0xOS4xNiAzNy43NjZjLS4zNSAxLjU5LS40NyAyLjg1LjMzIDQuNTYuNjkgMS4yOCAxLjg3IDIuNTQgMy43OSAzLjI1LTIuOTEtMi45LTMuMi00LjUyLTQuMTEtNy44MWgtLjAxek0xMi45NyA0Ni4wNTZjLjQ4LTEuNjMgMS00Ljg1LjkzLTYuNTgtLjA5LjYyLTEuODUgNC4yMy0xLjg1IDQuMjNzLTEuOTEgMi4xNy00LjQ3IDMuOTdjMS43Ni0uMzcgMy42NS0uNzQgNC45MS0xLjM2LjE3LS4wOC4zMy0uMTcuNDgtLjI2ek0yOC43OCAzNy4wOTZjMCAxLjIyLjE0IDMuNTggMS4yNyA1LjQyLjQzLjcyIDEuMDEgMS40OSAxLjgxIDIuMjYgMi4zNyAyLjI4IDYuNiAzLjM3IDguNjMgMy42OC03LjI1LTMuNTktOS41NC02LjYxLTExLjcxLTExLjM2eiIgZmlsbD0iIzJFMzA0OCIvPjxwYXRoIGQ9Ik0yMi4yNCAyNS41NTVjLjQ3IDAgLjg1LS40ODMuODUtMS4wOCAwLS41OTYtLjM4LTEuMDgtLjg1LTEuMDhzLS44NS40ODQtLjg1IDEuMDhjMCAuNTk3LjM4IDEuMDguODUgMS4wOHoiIGZpbGw9IiMxMzE1MjEiLz48cGF0aCBkPSJNMjguMDY4IDYuNzI3Yy0xLjU4NC0yLjgxNS0zLjU3Mi00LjYwMi02LjAyNC00LjYwMi0yLjI4IDAtNi41MjYgMi40OTMtOS4wNDkgMTQuNjAxIDMuMDI3LTUuNTUgNS41NS0xMi4xMDggOS4yMS0xMS42NzQgMi4wOCAwIDQuMDM3LjU5NSA1Ljg1MyAxLjY2NWwuMDEuMDF6IiBmaWxsPSIjQzNDM0M4Ii8+PHBhdGggb3BhY2l0eT0iLjQiIGQ9Ik0yMi4wNiA3Ni40NjZjMTAuMjc4IDAgMTguNjEtMS4zODQgMTguNjEtMy4wOSAwLTEuNzA3LTguMzMyLTMuMDktMTguNjEtMy4wOS0xMC4yNzggMC0xOC42MSAxLjM4My0xOC42MSAzLjA5IDAgMS43MDYgOC4zMzIgMy4wOSAxOC42MSAzLjA5eiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik02NC4wODQgMTQuOTI4djEwLjE2YzAgLjUyLjAzIDEgLjA4IDEuNDJoLTEuNzhjLS4wNS0uMy0uMDgtLjYzLS4wOC0xLjAxLS4xOS4zNS0uNDkuNjQtLjkuODYtLjQxLjIyLS44Ny4zNC0xLjM5LjM0LTEuMTEgMC0yLjAxLS4zOS0yLjctMS4xNy0uNjktLjc4LTEuMDQtMS43Ni0xLjA0LTIuOTRzLjM1LTIuMTEgMS4wNS0yLjljLjctLjc5IDEuNTktMS4xOCAyLjY2LTEuMTguNjIgMCAxLjEyLjExIDEuNS4zNC4zOC4yMy42NC40OS43OS43OHYtNC43aDEuODF6bS01Ljk1IDcuNjZjMCAuNzUuMTkgMS4zNS41OCAxLjguMzguNDUuODkuNjggMS41Mi42OHMxLjEtLjIzIDEuNDktLjY5Yy4zOS0uNDYuNTgtMS4wNi41OC0xLjgxcy0uMTktMS4zMi0uNTYtMS43NmMtLjM3LS40NC0uODctLjY2LTEuNDktLjY2cy0xLjEyLjIyLTEuNTIuNjZjLS4zOS40NC0uNTkgMS4wMy0uNTkgMS43N2wtLjAxLjAxek03NC40MzQgMjYuNTA4bC0xLjA3LTIuODVoLTQuOGwtMS4wNiAyLjg1aC0yLjAzbDQuNDItMTEuMzRoMi4yMmw0LjQyIDExLjM0aC0yLjF6bS0zLjQ3LTkuMjZsLTEuNzMgNC42NGgzLjQ2bC0xLjczLTQuNjR6TTc5LjY4NCAyOS41NDhoLTEuODR2LTEwLjgzaDEuNzl2MS4wNmMuMi0uMzUuNTItLjY0Ljk2LS44OC40NC0uMjMuOTQtLjM1IDEuNTItLjM1IDEuMTIgMCAyIC4zOCAyLjY0IDEuMTQuNjQuNzYuOTYgMS43NC45NiAyLjkycy0uMzQgMi4xNi0xLjAxIDIuOTRjLS42Ny43Ny0xLjU2IDEuMTYtMi42NiAxLjE2LS41MyAwLTEuMDEtLjEtMS40Mi0uMy0uNDItLjItLjczLS40Ni0uOTQtLjc3djMuOTItLjAxem00LjE4LTYuOTRjMC0uNzItLjE5LTEuMzEtLjU4LTEuNzUtLjM4LS40NC0uODktLjY2LTEuNTItLjY2cy0xLjEyLjIyLTEuNTEuNjZjLS4zOS40NC0uNTggMS4wMy0uNTggMS43NXMuMTkgMS4zMy41OCAxLjc4Yy4zOS40NS44OS42NyAxLjUxLjY3czEuMTItLjIyIDEuNTEtLjY3Yy4zOS0uNDUuNTgtMS4wNC41OC0xLjc4aC4wMXpNODkuMzQ0IDI5LjU0OGgtMS44NHYtMTAuODNoMS43OXYxLjA2Yy4yLS4zNS41Mi0uNjQuOTYtLjg4LjQ0LS4yMy45NC0uMzUgMS41Mi0uMzUgMS4xMiAwIDIgLjM4IDIuNjQgMS4xNC42NC43Ni45NiAxLjc0Ljk2IDIuOTJzLS4zNCAyLjE2LTEuMDEgMi45NGMtLjY3Ljc3LTEuNTYgMS4xNi0yLjY2IDEuMTYtLjUzIDAtMS4wMS0uMS0xLjQyLS4zLS40Mi0uMi0uNzMtLjQ2LS45NC0uNzd2My45Mi0uMDF6bTQuMTgtNi45NGMwLS43Mi0uMTktMS4zMS0uNTgtMS43NS0uMzgtLjQ0LS44OS0uNjYtMS41Mi0uNjZzLTEuMTIuMjItMS41MS42NmMtLjM5LjQ0LS41OCAxLjAzLS41OCAxLjc1cy4xOSAxLjMzLjU4IDEuNzhjLjM5LjQ1Ljg5LjY3IDEuNTEuNjdzMS4xMi0uMjIgMS41MS0uNjdjLjM5LS40NS41OC0xLjA0LjU4LTEuNzhoLjAxeiIgZmlsbD0iI0JGQkZCRiIvPjxwYXRoIGQ9Ik02Ny4zODQgNDIuMzZjLjkwNi0uMjk5IDEuNjUtLjg3MSAyLjIzLTEuNy41ODItLjgzLjg3My0xLjc5NS44NzMtMi44OCAwLTEuNzEtLjU4MS0zLjA5NS0xLjczNS00LjE2M0M2Ny41OTggMzIuNTUgNjYgMzIuMDIgNjMuOTY2IDMyLjAyaC03LjY5MnYyMS4zOTJoOC4yNjRjMS45OTIgMCAzLjU5LS41NTYgNC43OTUtMS42NzUgMS4yMDUtMS4xMiAxLjgxMi0yLjU0NyAxLjgxMi00LjMgMC0xLjI5LS4zNi0yLjM4NC0xLjA2OS0zLjMwNy0uNzE3LS45MTQtMS42MTUtMS41MDQtMi43LTEuNzY5aC4wMDh6bS03LTYuODQ2aDIuOTI0Yy45ODIgMCAxLjc0My4yNCAyLjI4Mi43MS41My40Ny44MDMgMS4xMi44MDMgMS45NDkgMCAuODI4LS4yNzQgMS40NzgtLjgxMiAxLjk1Ny0uNTQ3LjQ4Ny0xLjI5LjcyNi0yLjIzLjcyNmgtMi45NTh2LTUuMzQyaC0uMDA4em01Ljc1MiAxMy42ODNjLS41NzIuNDk2LTEuMzU4Ljc0NC0yLjM2Ny43NDRoLTMuMzc2di01LjY0aDMuNDM2YzEuMDA5IDAgMS43ODYuMjY0IDIuMzQyLjc4Ni41NTUuNTIuODI5IDEuMjEzLjgyOSAyLjA4NSAwIC44NzItLjI4MiAxLjU0Ny0uODY0IDIuMDM0di0uMDA5eiIgZmlsbD0idXJsKCNwcmVmaXhfX3BhaW50MF9saW5lYXJfMTEwNl81NTI4KSIvPjxwYXRoIGQ9Ik04NC40IDMxLjU1OGMtMy4wMTcgMC01LjU5OCAxLjAyNS03Ljc1MSAzLjA3Ni0yLjE1NCAyLjA1MS0zLjIzIDQuNzQzLTMuMjMgOC4wODUgMCAzLjM0MiAxLjA3NiA2LjAwOCAzLjIzIDguMDYgMi4xNTMgMi4wNSA0LjczNCAzLjA3NiA3Ljc1MSAzLjA3NiAzLjAxNyAwIDUuNjMyLTEuMDI1IDcuNzg2LTMuMDc2IDIuMTU0LTIuMDUyIDMuMjMtNC43MzUgMy4yMy04LjA2IDAtMy4zMjQtMS4wNzYtNi4wMzQtMy4yMy04LjA4NS0yLjE1NC0yLjA1LTQuNzQzLTMuMDc2LTcuNzg2LTMuMDc2em00LjcxIDE2LjRjLTEuMzI1IDEuMjQtMi44OTggMS44NTUtNC43MSAxLjg1NS0xLjgxMSAwLTMuMzUtLjYxNi00LjY3NS0xLjg1NS0xLjMyNC0xLjI0LTEuOTktMi45OTEtMS45OS01LjI2NCAwLTIuMjc0LjY2Ni00LjAyNiAxLjk5LTUuMjY1IDEuMzI1LTEuMjQgMi44OS0xLjg1NSA0LjY3NS0xLjg1NSAxLjc4NyAwIDMuMzc2LjYxNiA0LjcxIDEuODU1IDEuMzI0IDEuMjQgMS45OSAyLjk5MSAxLjk5IDUuMjY0IDAgMi4yNzQtLjY2NiA0LjAyNi0xLjk5IDUuMjY1eiIgZmlsbD0idXJsKCNwcmVmaXhfX3BhaW50MV9saW5lYXJfMTEwNl81NTI4KSIvPjxwYXRoIGQ9Ik0xMDguNzQ5IDMxLjU1OGMtMy4wMTcgMC01LjU5OCAxLjAyNS03Ljc1MSAzLjA3Ni0yLjE1NCAyLjA1MS0zLjIzIDQuNzQzLTMuMjMgOC4wODUgMCAzLjM0MiAxLjA3NiA2LjAwOCAzLjIzIDguMDYgMi4xNTMgMi4wNSA0LjczNCAzLjA3NiA3Ljc1MSAzLjA3NiAzLjAxNyAwIDUuNjMyLTEuMDI1IDcuNzg2LTMuMDc2IDIuMTU0LTIuMDUyIDMuMjMxLTQuNzM1IDMuMjMxLTguMDYgMC0zLjMyNC0xLjA3Ny02LjAzNC0zLjIzMS04LjA4NS0yLjE1NC0yLjA1LTQuNzQzLTMuMDc2LTcuNzg2LTMuMDc2em00LjcwOSAxNi40Yy0xLjMyNCAxLjI0LTIuODk3IDEuODU1LTQuNzA5IDEuODU1LTEuODEyIDAtMy4zNS0uNjE2LTQuNjc1LTEuODU1LTEuMzI0LTEuMjQtMS45OTEtMi45OTEtMS45OTEtNS4yNjQgMC0yLjI3NC42NjctNC4wMjYgMS45OTEtNS4yNjUgMS4zMjUtMS4yNCAyLjg4OS0xLjg1NSA0LjY3NS0xLjg1NSAxLjc4NyAwIDMuMzc2LjYxNiA0LjcwOSAxLjg1NSAxLjMyNSAxLjI0IDEuOTkyIDIuOTkxIDEuOTkyIDUuMjY0IDAgMi4yNzQtLjY2NyA0LjAyNi0xLjk5MiA1LjI2NXoiIGZpbGw9InVybCgjcHJlZml4X19wYWludDJfbGluZWFyXzExMDZfNTUyOCkiLz48cGF0aCBkPSJNMTMyLjA0NyA0MC45NDFsLTIuOTkxLS41NzJjLTEuNTQ3LS4zLTIuMzI1LTEuMTAzLTIuMzI1LTIuNDEgMC0uNzQ0LjMxNi0xLjM4NS45MzItMS45MTUuNjE1LS41MyAxLjQyNy0uODAzIDIuNDEtLjgwMyAxLjIwNSAwIDIuMTE5LjMxNiAyLjc0My45MzIuNjI0LjYyMyAxLjAwOSAxLjMxNiAxLjE0NSAyLjA4NWwzLjc0NC0xLjE0NWE3LjQyMiA3LjQyMiAwIDAwLS42OTMtMS44OThjLS4zMjQtLjYwNi0uNzc3LTEuMTg4LTEuMzU4LTEuNzY5LS41ODItLjU4LTEuMzU5LTEuMDM0LTIuMzI1LTEuMzc2LS45NjYtLjM0Mi0yLjA2LS41MTItMy4yOTEtLjUxMi0yLjA1MSAwLTMuODAzLjY0LTUuMjY0IDEuOTMxLTEuNDYyIDEuMjktMi4xODggMi44OC0yLjE4OCA0Ljc2OSAwIDEuNTkuNTA0IDIuOTE0IDEuNTA0IDMuOTgzIDEuMDA5IDEuMDY4IDIuMzc2IDEuNzc3IDQuMTAyIDIuMTQ1bDIuOTkyLjYwNmMuODIuMTYzIDEuNDYxLjQ3IDEuOTE0LjkyNC40NTMuNDUzLjY3NS45OS42NzUgMS42MTUgMCAuNzg2LS4zMDcgMS40MTktLjkyMyAxLjg5Ny0uNjE1LjQ3OS0xLjQ2MS43MjctMi41NDcuNzI3LTEuNDI3IDAtMi41MzgtLjM4NS0zLjMzMy0xLjE0Ni0uNzk1LS43Ni0xLjIzOS0xLjcxOC0xLjM0MS0yLjg2M2wtMy44NjMgMS4wMjZjLjA3Ni44MDMuMzA3IDEuNTgxLjY3NSAyLjM0Mi4zNzYuNzUyLjg4OSAxLjQ3IDEuNTU1IDIuMTQ1LjY2Ny42NzUgMS41MzggMS4yMTMgMi42MjQgMS42MTUgMS4wODUuNDAyIDIuMjk5LjYwNyAzLjY0OS42MDcgMi4zNTEgMCA0LjIzMS0uNjU4IDUuNjI0LTEuOTc0IDEuMzkzLTEuMzE2IDIuMDk0LTIuODYzIDIuMDk0LTQuNjMzIDAtMS41NDctLjUyMi0yLjg5Ny0xLjU3My00LjA0MnMtMi41MTMtMS44OTctNC40MDEtMi4yNjVsLjAzNC0uMDI2eiIgZmlsbD0idXJsKCNwcmVmaXhfX3BhaW50M19saW5lYXJfMTEwNl81NTI4KSIvPjxwYXRoIGQ9Ik0xMzkuNTI1IDM1Ljk1OWg2Ljc2djE3LjQ0M2g0LjE5N1YzNS45Nmg2Ljc1MVYzMi4wMWgtMTcuNzA4djMuOTQ5eiIgZmlsbD0idXJsKCNwcmVmaXhfX3BhaW50NF9saW5lYXJfMTEwNl81NTI4KSIvPjxwYXRoIGQ9Ik0xNjAuMTY1IDUzLjQwMmgxMy4zOTJWNDkuNDhoLTkuMjNWNDQuNTNoOC4zNTh2LTMuNzFoLTguMzU4di00Ljg4OGg5LjIzdi0zLjkyMmgtMTMuMzkydjIxLjM5MXoiIGZpbGw9InVybCgjcHJlZml4X19wYWludDVfbGluZWFyXzExMDZfNTUyOCkiLz48cGF0aCBkPSJNMTg4LjM0MiA0NC42NWMxLjQxMS0uNDAxIDIuNTIyLTEuMTQ1IDMuMzMzLTIuMjEzLjgxMi0xLjA3NyAxLjIyMy0yLjM1OSAxLjIyMy0zLjg0NiAwLTEuODg5LS42MjQtMy40NjEtMS44NzItNC43MDktMS4yNDgtMS4yNDgtMi44OTctMS44NzEtNC45NDgtMS44NzFoLTguMzU5djIxLjM5MWg0LjE5NnYtOC4yMzloMi4xNzFsNC4xOTcgOC4yNGg0LjY0OWwtNC41OS04Ljc1MnptLS41ODktMy44ODhjLS41OS41NDctMS40MTEuODEyLTIuNDYyLjgxMmgtMy4zNzZ2LTUuOTQ4aDMuMzc2YzEuMDQzIDAgMS44NjMuMjczIDIuNDYyLjgxMi41ODkuNTQ2Ljg4OCAxLjI2NC44ODggMi4xNyAwIC45MDYtLjI5OSAxLjU5OS0uODg4IDIuMTQ2di4wMDh6IiBmaWxsPSJ1cmwoI3ByZWZpeF9fcGFpbnQ2X2xpbmVhcl8xMTA2XzU1MjgpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJwcmVmaXhfX3BhaW50MF9saW5lYXJfMTEwNl81NTI4IiB4MT0iNjMuNzE4IiB5MT0iODguMzQiIHgyPSI2My43MTgiIHkyPSIyNS45MzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNjYyNjgxIi8+PHN0b3Agb2Zmc2V0PSIuNzIiIHN0b3AtY29sb3I9IiNCOTFDN0IiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icHJlZml4X19wYWludDFfbGluZWFyXzExMDZfNTUyOCIgeDE9Ijg0LjQxOCIgeTE9Ijg4LjM0IiB4Mj0iODQuNDE4IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQyX2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxMDguNzY2IiB5MT0iMS41OTQiIHgyPSIxMDguNzY2IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQzX2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxMjkuOTAyIiB5MT0iODguMzQiIHgyPSIxMjkuOTAyIiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQ0X2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxNDguMzc5IiB5MT0iODguMzQiIHgyPSIxNDguMzc5IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQ1X2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxNjYuODY1IiB5MT0iODguMzQiIHgyPSIxNjYuODY1IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQ2X2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxODUuMzI1IiB5MT0iODguMzQiIHgyPSIxODUuMzI1IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+"});
  }

  content: var(--base-logo);
  display: block;
  flex-shrink: 0;
`;pM.defaultProps={alt:"Logo",className:"dbuitkLogo"};const xM=t=>{var e=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,[]);return i.default.createElement(pM,Object.assign({},e))};const zM=$e.svg`
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
`;zM.defaultProps={className:"dbuitkLogoMini"};const fM=t=>{var e=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,[]);return i.default.createElement(zM,Object.assign({fill:"none",height:"16",viewBox:"0 0 76 16",width:"76",xmlns:"http://www.w3.org/2000/svg"},e),i.default.createElement("path",{className:"themedColor",fill:"#2e3048",d:"M0.232955 13V2.81818H3.79261C4.50189 2.81818 5.08688 2.94081 5.54759 3.18608C6.00829 3.42803 6.35133 3.7545 6.5767 4.16548C6.80208 4.57315 6.91477 5.02557 6.91477 5.52273C6.91477 5.96023 6.83688 6.3215 6.68111 6.60653C6.52865 6.89157 6.32647 7.11695 6.07457 7.28267C5.82599 7.44839 5.55587 7.57102 5.2642 7.65057V7.75C5.57576 7.76989 5.88897 7.87926 6.20384 8.07812C6.5187 8.27699 6.7822 8.56203 6.99432 8.93324C7.20644 9.30445 7.3125 9.75852 7.3125 10.2955C7.3125 10.8059 7.1965 11.2649 6.96449 11.6726C6.73248 12.0803 6.36624 12.4034 5.86577 12.642C5.36529 12.8807 4.71402 13 3.91193 13H0.232955ZM1.46591 11.9062H3.91193C4.71733 11.9062 5.28906 11.7505 5.62713 11.4389C5.96851 11.1241 6.1392 10.7429 6.1392 10.2955C6.1392 9.95076 6.05137 9.63258 5.87571 9.34091C5.70005 9.04593 5.44981 8.81061 5.125 8.63494C4.80019 8.45597 4.41572 8.36648 3.97159 8.36648H1.46591V11.9062ZM1.46591 7.29261H3.75284C4.12405 7.29261 4.45881 7.2197 4.7571 7.07386C5.05871 6.92803 5.29735 6.72254 5.47301 6.45739C5.65199 6.19223 5.74148 5.88068 5.74148 5.52273C5.74148 5.07528 5.5857 4.69579 5.27415 4.38423C4.9626 4.06937 4.46875 3.91193 3.79261 3.91193H1.46591V7.29261ZM13.9918 9.87784V5.36364H15.1651V13H13.9918V11.7074H13.9123C13.7333 12.0952 13.4549 12.425 13.0771 12.6967C12.6992 12.9652 12.2219 13.0994 11.6452 13.0994C11.168 13.0994 10.7437 12.995 10.3725 12.7862C10.0013 12.5741 9.70964 12.2559 9.49751 11.8317C9.28539 11.4041 9.17933 10.8655 9.17933 10.2159V5.36364H10.3526V10.1364C10.3526 10.6932 10.5084 11.1373 10.82 11.4688C11.1348 11.8002 11.5359 11.9659 12.0231 11.9659C12.3147 11.9659 12.6114 11.8913 12.913 11.7422C13.2179 11.593 13.4731 11.3643 13.6786 11.0561C13.8874 10.7479 13.9918 10.3551 13.9918 9.87784ZM17.3141 13V5.36364H18.4874V13H17.3141ZM17.9107 4.09091C17.682 4.09091 17.4848 4.01302 17.3191 3.85724C17.1567 3.70147 17.0755 3.5142 17.0755 3.29545C17.0755 3.0767 17.1567 2.88944 17.3191 2.73366C17.4848 2.57789 17.682 2.5 17.9107 2.5C18.1394 2.5 18.3349 2.57789 18.4973 2.73366C18.6631 2.88944 18.7459 3.0767 18.7459 3.29545C18.7459 3.5142 18.6631 3.70147 18.4973 3.85724C18.3349 4.01302 18.1394 4.09091 17.9107 4.09091ZM21.8097 2.81818V13H20.6364V2.81818H21.8097ZM27.2797 5.36364V6.35795H23.3223V5.36364H27.2797ZM24.4757 3.53409H25.649V10.8125C25.649 11.1439 25.697 11.3925 25.7931 11.5582C25.8926 11.7206 26.0185 11.83 26.171 11.8864C26.3268 11.9394 26.4908 11.9659 26.6632 11.9659C26.7924 11.9659 26.8985 11.9593 26.9814 11.946C27.0642 11.9295 27.1305 11.9162 27.1802 11.9062L27.4189 12.9602C27.3393 12.9901 27.2283 13.0199 27.0858 13.0497C26.9432 13.0829 26.7626 13.0994 26.5439 13.0994C26.2124 13.0994 25.8876 13.0282 25.5694 12.8857C25.2546 12.7431 24.9927 12.526 24.7839 12.2344C24.5784 11.9427 24.4757 11.5748 24.4757 11.1307V3.53409ZM33.1412 13V2.81818H34.3145V6.5767H34.4139C34.5001 6.44413 34.6194 6.27509 34.7718 6.0696C34.9276 5.8608 35.1497 5.67519 35.438 5.51278C35.7297 5.34706 36.1241 5.2642 36.6213 5.2642C37.2643 5.2642 37.831 5.42495 38.3216 5.74645C38.8121 6.06794 39.1949 6.52367 39.47 7.11364C39.7451 7.7036 39.8826 8.39962 39.8826 9.2017C39.8826 10.0104 39.7451 10.7114 39.47 11.3047C39.1949 11.8946 38.8137 12.352 38.3265 12.6768C37.8393 12.9983 37.2775 13.1591 36.6412 13.1591C36.1506 13.1591 35.7579 13.0779 35.4629 12.9155C35.1679 12.7498 34.9409 12.5625 34.7818 12.3537C34.6227 12.1416 34.5001 11.9659 34.4139 11.8267H34.2747V13H33.1412ZM34.2946 9.18182C34.2946 9.75852 34.3791 10.2673 34.5481 10.7081C34.7172 11.1456 34.9641 11.4886 35.2889 11.7372C35.6137 11.9825 36.0114 12.1051 36.4821 12.1051C36.9726 12.1051 37.3819 11.9759 37.71 11.7173C38.0415 11.4555 38.2901 11.1042 38.4558 10.6634C38.6248 10.2192 38.7093 9.72538 38.7093 9.18182C38.7093 8.64489 38.6265 8.16098 38.4608 7.73011C38.2984 7.29593 38.0514 6.95289 37.72 6.70099C37.3919 6.44579 36.9792 6.31818 36.4821 6.31818C36.0048 6.31818 35.6038 6.43916 35.2789 6.68111C34.9541 6.91974 34.7089 7.2545 34.5431 7.68537C34.3774 8.11293 34.2946 8.61174 34.2946 9.18182ZM42.1596 15.8636C41.9608 15.8636 41.7834 15.8471 41.6277 15.8139C41.4719 15.7841 41.3642 15.7543 41.3045 15.7244L41.6028 14.6903C41.8878 14.7633 42.1397 14.7898 42.3585 14.7699C42.5772 14.75 42.7711 14.6522 42.9402 14.4766C43.1125 14.3042 43.2699 14.0241 43.4125 13.6364L43.6312 13.0398L40.8074 5.36364H42.0801L44.188 11.4489H44.2676L46.3755 5.36364H47.6483L44.4068 14.1136C44.2609 14.508 44.0803 14.8345 43.8649 15.093C43.6494 15.3549 43.3992 15.5488 43.1142 15.6747C42.8324 15.8007 42.5143 15.8636 42.1596 15.8636Z"}),i.default.createElement("g",{clipPath:"url(#clip0_0_1)"},i.default.createElement("path",{d:"M75.332 6.38824C74.9045 5.65294 74.2692 5.05882 73.5032 4.67647C72.7106 4.28529 71.8348 4.08823 70.9501 4.1C70.1367 4.09118 69.3321 4.28529 68.6137 4.66176C67.9309 5.02059 67.349 5.53529 66.9156 6.16765C66.4881 5.62647 65.9537 5.17059 65.3481 4.82941C64.4871 4.35 63.5104 4.10588 62.5218 4.11765C61.6282 4.10882 60.7465 4.32059 59.9598 4.73529C59.651 4.89706 59.3601 5.09118 59.0929 5.31471V1.02941C59.0989 0.891176 59.0781 0.755882 59.0276 0.62647C58.9771 0.497059 58.8999 0.382353 58.802 0.285294C58.704 0.188235 58.5853 0.111765 58.4546 0.0647057C58.321 0.0147057 58.1815 -0.00588252 58.042 -1.67987e-07C57.7718 -0.00294134 57.5106 0.0941175 57.3146 0.27647C57.2107 0.373529 57.1306 0.488235 57.0771 0.617647C57.0207 0.747059 56.997 0.888235 56.9999 1.02647V9.67353C57.0118 10.6294 57.2731 11.5647 57.7599 12.3882C58.232 13.1853 58.9118 13.8441 59.7282 14.2971C60.5773 14.7676 61.5362 15.0088 62.5099 15C63.4985 15.0147 64.4753 14.7676 65.3362 14.2912C66.1615 13.8265 66.8443 13.1529 67.3134 12.3412C67.8003 11.4912 68.0496 10.5324 68.0378 9.55588V8.46176C68.0318 8.05 68.1565 7.64706 68.394 7.31176C68.6553 6.95 69.0085 6.65882 69.4212 6.47647C69.8992 6.26176 70.4217 6.15588 70.9471 6.16471C71.4815 6.15588 72.0099 6.26765 72.4939 6.49412C72.9243 6.70294 73.2835 7.03235 73.524 7.44412C73.8031 7.95882 73.9367 8.53824 73.91 9.12059V13.9676C73.91 14.2412 74.0198 14.5029 74.2157 14.6941C74.4117 14.8882 74.6759 14.9971 74.955 14.9971C75.234 14.9971 75.4982 14.8882 75.6942 14.6941C75.8901 14.5 76 14.2382 76 13.9676V9.10294C76.0267 8.15588 75.7981 7.21765 75.335 6.38824H75.332ZM60.7643 6.55C61.1562 6.32059 61.5926 6.17059 62.0468 6.10882C62.4981 6.04706 62.9612 6.07353 63.4006 6.18824C63.8429 6.30294 64.2556 6.50294 64.6178 6.77647C64.9799 7.05 65.2828 7.39412 65.5114 7.78235C65.7815 8.25 65.9359 8.77353 65.9596 9.31176V9.59118C65.9596 9.62059 65.9596 9.64706 65.9596 9.67647C65.9507 10.2529 65.7964 10.8206 65.5084 11.3235C65.2145 11.8324 64.7899 12.2588 64.2764 12.5588C63.739 12.8559 63.1334 13.0118 62.5159 13.0118C61.8984 13.0118 61.2928 12.8559 60.7554 12.5588C60.2389 12.2647 59.8143 11.8382 59.5264 11.3235C59.2235 10.7765 59.0692 10.1647 59.0781 9.54117C59.0662 8.92059 59.2206 8.31176 59.5264 7.76765C59.8203 7.25882 60.2448 6.83824 60.7584 6.54706L60.7643 6.55Z",fill:"url(#paint0_linear_0_1)"})),i.default.createElement("defs",null,i.default.createElement("linearGradient",{gradientUnits:"userSpaceOnUse",id:"paint0_linear_0_1",x1:"56.9999",x2:"76",y1:"7.5",y2:"7.5"},i.default.createElement("stop",{stopColor:"#662681"}),i.default.createElement("stop",{offset:"0.15",stopColor:"#692581"}),i.default.createElement("stop",{offset:"0.26",stopColor:"#722381"}),i.default.createElement("stop",{offset:"0.36",stopColor:"#822080"}),i.default.createElement("stop",{offset:"0.43",stopColor:"#931C80"}),i.default.createElement("stop",{offset:"0.62",stopColor:"#B51C7B"}),i.default.createElement("stop",{offset:"0.87",stopColor:"#D91D75"}),i.default.createElement("stop",{offset:"1",stopColor:"#E71D73"})),i.default.createElement("clipPath",{id:"clip0_0_1"},i.default.createElement("rect",{className:"rect",fill:"white",height:"15",transform:"translate(57)",width:"19"}))))},AM=$e.main`
  display: flex;
  flex-grow: 1;
`;AM.defaultProps={className:"dbuitkMain"};const CM=AM;const EM=$e.svg`
  display: block;
  flex-shrink: 0;

  .theme {
    fill: #2e3048;

    [data-theme='dark'] & {
      fill: #f7f7f7;
    }
  }
`;EM.defaultProps={className:"dark"};const OM=$e.svg`
  display: block;
  flex-shrink: 0;

  .theme {
    fill: #fff;

    [data-theme='dark'] & {
      fill: #f7f7f7;
    }
  }
`;OM.defaultProps={className:"light"};const hM=$e.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--base-active-state-size);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: var(--base-active-state-size);
  z-index: 5;
`,mM=$e(hM)`
  left: var(--base-left-end);

  [data-theme='dark'] & {
    cursor: pointer;
  }
`,wM=$e(hM)`
  left: var(--base-left-start);

  [data-theme='light'] & {
    cursor: pointer;
  }
`,bM=$e.button`
  --base-switch-theme-button-animation-delay: var(--base-animation-time, 0.3s);
  --base-active-state-size: 36px;
  --base-left-start: 4px;
  --base-left-end: 44px;
  --base-active-state-left: var(--base-left-end);

  --theme-switch-theme-button-background-color: #fff;
  --theme-active-state-background-color: #8b46a4;

  [data-theme='dark'] & {
    --theme-switch-theme-button-background-color: #24263d;
    --base-active-state-left: var(--base-left-start);
  }

  background-color: var(--theme-switch-theme-button-background-color);
  border-radius: 40px;
  border: none;
  height: 44px;
  justify-content: space-between;
  padding: 4px 12px;
  position: relative;
  transition:
    background-color var(--base-switch-theme-button-animation-delay) ease-in-out,
    border-color var(--base-animation-time-sm, 0.2s) ease-in-out;
  width: 84px;

  [data-theme='light'] &:active {
    ${wM} {
      opacity: 0.5;
    }
  }

  [data-theme='dark'] &:active {
    ${mM} {
      opacity: 0.5;
    }
  }
`;bM.defaultProps={className:"dbuitkSwitchThemeButton",type:"button"};const vM=$e.div`
  border-radius: 50%;
  background-color: var(--theme-active-state-background-color);
  height: var(--base-active-state-size);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: var(--base-active-state-left);
  transition: left var(--base-switch-theme-button-animation-delay) ease-in-out;
  width: var(--base-active-state-size);
  z-index: 1;
`,kM=(function(t){for(var e=[],u=1;u<arguments.length;u++)e[u-1]=arguments[u];var r=Jt(We.apply(void 0,M([t],e,!1))),i=ht(r);return new Oe(i,r)})`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,YM=We`
  cursor: pointer;
  position: relative;
  z-index: 10;

  path {
    transition: fill var(--base-switch-theme-button-animation-delay) ease-in-out;
  }
`,QM=$e((t=>{var e=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,[]);return i.default.createElement(OM,Object.assign({fill:"none",height:"20",viewBox:"0 0 21 20",width:"21",xmlns:"http://www.w3.org/2000/svg"},e),i.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M10.1462 6.66667C8.30529 6.66667 6.81291 8.15905 6.81291 10C6.81291 11.8409 8.30529 13.3333 10.1462 13.3333C11.9872 13.3333 13.4796 11.8409 13.4796 10C13.4796 8.15905 11.9872 6.66667 10.1462 6.66667ZM5.14624 10C5.14624 7.23858 7.38482 5 10.1462 5C12.9077 5 15.1462 7.23858 15.1462 10C15.1462 12.7614 12.9077 15 10.1462 15C7.38482 15 5.14624 12.7614 5.14624 10Z",fillRule:"evenodd"}),i.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M10.1464 0C10.6067 0 10.9798 0.373096 10.9798 0.833333V2.5C10.9798 2.96024 10.6067 3.33333 10.1464 3.33333C9.68621 3.33333 9.31311 2.96024 9.31311 2.5V0.833333C9.31311 0.373096 9.68621 0 10.1464 0Z",fillRule:"evenodd"}),i.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M10.1464 16.6667C10.6067 16.6667 10.9798 17.0398 10.9798 17.5V19.1667C10.9798 19.6269 10.6067 20 10.1464 20C9.68621 20 9.31311 19.6269 9.31311 19.1667V17.5C9.31311 17.0398 9.68621 16.6667 10.1464 16.6667Z",fillRule:"evenodd"}),i.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M3.07391 2.9274C3.39935 2.60196 3.92699 2.60196 4.25242 2.9274L5.43576 4.11073C5.76119 4.43617 5.76119 4.9638 5.43576 5.28924C5.11032 5.61468 4.58268 5.61468 4.25724 5.28924L3.07391 4.10591C2.74847 3.78047 2.74847 3.25283 3.07391 2.9274Z",fillRule:"evenodd"}),i.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M14.8569 14.7108C15.1824 14.3853 15.71 14.3853 16.0354 14.7108L17.2188 15.8941C17.5442 16.2195 17.5442 16.7472 17.2188 17.0726C16.8933 17.398 16.3657 17.398 16.0403 17.0726L14.8569 15.8893C14.5315 15.5638 14.5315 15.0362 14.8569 14.7108Z",fillRule:"evenodd"}),i.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M0.146484 10C0.146484 9.53978 0.51958 9.16669 0.979818 9.16669H2.64648C3.10672 9.16669 3.47982 9.53978 3.47982 10C3.47982 10.4603 3.10672 10.8334 2.64648 10.8334H0.979818C0.51958 10.8334 0.146484 10.4603 0.146484 10Z",fillRule:"evenodd"}),i.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M16.8132 10C16.8132 9.53978 17.1863 9.16669 17.6465 9.16669H19.3132C19.7734 9.16669 20.1465 9.53978 20.1465 10C20.1465 10.4603 19.7734 10.8334 19.3132 10.8334H17.6465C17.1863 10.8334 16.8132 10.4603 16.8132 10Z",fillRule:"evenodd"}),i.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M5.43576 14.7108C5.76119 15.0362 5.76119 15.5638 5.43576 15.8893L4.25242 17.0726C3.92699 17.398 3.39935 17.398 3.07391 17.0726C2.74847 16.7472 2.74847 16.2195 3.07391 15.8941L4.25724 14.7108C4.58268 14.3853 5.11032 14.3853 5.43576 14.7108Z",fillRule:"evenodd"}),i.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M17.2188 2.9274C17.5442 3.25283 17.5442 3.78047 17.2188 4.10591L16.0354 5.28924C15.71 5.61468 15.1824 5.61468 14.8569 5.28924C14.5315 4.9638 14.5315 4.43617 14.8569 4.11073L16.0403 2.9274C16.3657 2.60196 16.8933 2.60196 17.2188 2.9274Z",fillRule:"evenodd"}))}))`
  ${YM}

  [data-theme='light'] & {
    animation: ${kM} var(--base-switch-theme-button-animation-delay) linear;
    cursor: default;
  }
`,UM=$e((t=>{var e=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,[]);return i.default.createElement(EM,Object.assign({fill:"none",height:"18",viewBox:"0 0 19 18",width:"19",xmlns:"http://www.w3.org/2000/svg"},e),i.default.createElement("path",{className:"theme",fill:"#2e3048",clipRule:"evenodd",d:"M9.04723 0.376814C9.19049 0.631 9.17106 0.945625 8.99763 1.18026C8.18646 2.27769 7.79611 3.62981 7.8976 4.99071C7.99909 6.35161 8.58566 7.63088 9.55063 8.59585C10.5156 9.56083 11.7949 10.1474 13.1558 10.2489C14.5167 10.3504 15.8688 9.96003 16.9662 9.14885C17.2009 8.97542 17.5155 8.956 17.7697 9.09925C18.0239 9.24251 18.1702 9.52171 18.1433 9.81225C17.9857 11.5178 17.3456 13.1431 16.298 14.4982C15.2503 15.8532 13.8384 16.8818 12.2275 17.4637C10.6166 18.0456 8.87327 18.1566 7.20153 17.7839C5.5298 17.4111 3.99879 16.5699 2.78767 15.3588C1.57654 14.1477 0.735386 12.6167 0.362628 10.945C-0.0101295 9.27321 0.100927 7.52989 0.682804 5.91897C1.26468 4.30804 2.29331 2.89615 3.64833 1.8485C5.00335 0.800846 6.62871 0.160765 8.33424 0.00315322C8.62477 -0.0236961 8.90398 0.122627 9.04723 0.376814ZM6.96762 1.77251C6.09814 2.03739 5.27962 2.45862 4.55389 3.01974C3.42133 3.89539 2.56158 5.07548 2.07524 6.42192C1.58889 7.76837 1.49607 9.22548 1.80763 10.6228C2.11919 12.02 2.82224 13.2997 3.83453 14.312C4.84681 15.3242 6.12646 16.0273 7.52373 16.3389C8.92101 16.6504 10.3781 16.5576 11.7246 16.0712C13.071 15.5849 14.2511 14.7252 15.1267 13.5926C15.6879 12.8669 16.1091 12.0483 16.374 11.1789C15.331 11.6196 14.1908 11.8107 13.0457 11.7253C11.3312 11.5974 9.71948 10.8584 8.50377 9.64271C7.28806 8.427 6.54907 6.81532 6.42122 5.10081C6.33582 3.95567 6.52684 2.81547 6.96762 1.77251Z",fillRule:"evenodd"}))}))`
  ${YM}

  [data-theme='dark'] & {
    animation: ${kM} var(--base-switch-theme-button-animation-delay) linear;
    cursor: default;
  }
`,PM=t=>{var{onClick:e}=t,M=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,["onClick"]);return i.default.createElement(bM,Object.assign({onClick:e},M),i.default.createElement(wM,null,i.default.createElement(UM,null)),i.default.createElement(mM,null,i.default.createElement(QM,null)),i.default.createElement(vM,null))},ZM=$e.p`
  color: var(--theme-color-text, #000);
  font-size: var(--base-text-font-size, 16px);
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 calc(var(--base-gap, 8px) * 2);
  max-width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;ZM.defaultProps={className:"dbuitkText"};const GM=ZM,RM=We`
  ${({$cssVarRoot:t})=>We`
    background-color: var(${t}-background-color, #ccc);
    border-color: var(${t}-border-color, #ccc);
    color: var(${t}-color, #000);

    &:hover {
      background-color: var(${t}-background-color-hover, #aaa);
      border-color: var(${t}-border-color-hover, #aaa);
      color: var(${t}-color-hover, #000);
    }

    &[disabled],
    &[disabled]:hover {
      background-color: var(
        ${t}-background-color-disabled,
        ${t}-background-color,
        #ccc
      );
      border-color: var(${t}-border-color-disabled, ${t}-border-color, #ccc);
      color: var(${t}-color-disabled, ${t}-color, #000);
    }
  `}
`,WM=$e.button`
  /**
   * You can use a combination of these to make any component look like a button
   */
  ${Xe}
  ${He}
  ${Fe}
  ${RM}
`;WM.defaultProps={className:"dbuitkThemedButton",type:"button"};const VM=WM,BM=$e.h1`
  color: var(--theme-color-text-primary, #000);
  font-size: var(--base-title-font-size, 24px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 calc(var(--base-gap, 8px) * 3);
`;BM.defaultProps={className:"dbuitkTitle"};const $M=BM,FM=$e.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;FM.defaultProps={className:"dbuitkWrapper"};const HM=FM,XM={desktopStart:"1025px",desktopWideStart:"1281px",tabletLandscapeStart:"769px",tabletPortraitStart:"481px"},JM=(t,e)=>`@media (min-width: ${XM[t]}) {\n    ${e}\n  }`,_M=We`
  padding-left: var(--base-padding-mobile, 4px);
  padding-right: var(--base-padding-mobile, 4px);

  ${JM("tabletPortraitStart",We`
      padding-left: var(--base-padding-tablet-portrait, 8px);
      padding-right: var(--base-padding-tablet-portrait, 8px);
    `)}

  ${JM("tabletLandscapeStart",We`
      padding-left: var(--base-padding-tablet-landscape, 8px);
      padding-right: var(--base-padding-tablet-landscape, 8px);
    `)}

  ${JM("desktopStart",We`
      padding-left: var(--base-padding-desktop, 16px);
      padding-right: var(--base-padding-desktop, 16px);
    `)}

  ${JM("desktopWideStart",We`
      padding-left: var(--base-padding-desktop-xl, 16px);
      padding-right: var(--base-padding-desktop-xl, 16px);
    `)}
`})();var i=r.YM,n=r.$n,o=r.Ql,a=r.hE,c=r.Zp,L=r.Ve,j=r.i8,s=r._8,N=r.ms,l=r.Gr,g=r.wi,y=r.Y9,I=r.wO,d=r.q7,S=r.gu,D=r.pq,T=r.gZ,p=r.IG,x=r.EY,z=r.cc,f=r.A1,A=r.mO,C=r.g,E=r.fi;export{i as ActiveButtonCSS,n as Button,o as ButtonCSS,a as ButtonVariantCSS,c as Card,L as ContainerPadding,j as CopyButton,s as DisabledButtonCSS,N as Dropdown,l as ExternalLink,g as Footer,y as Header,I as InnerContainer,d as Item,S as Logo,D as LogoMini,T as Main,p as SwitchThemeButton,x as Text,z as ThemedButton,f as Title,A as Wrapper,C as breakpointMediaQuery,E as breakpoints};