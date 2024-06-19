import*as t from"react";var e={945:t=>{t.exports=function(t,e,M,u){var r=M?M.call(u,t,e):void 0;if(void 0!==r)return!!r;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(e),a=0;a<i.length;a++){var c=i[a];if(!o(c))return!1;var L=t[c],j=e[c];if(!1===(r=M?M.call(u,L,j,c):void 0)||void 0===r&&L!==j)return!1}return!0}}},M={};function u(t){var r=M[t];if(void 0!==r)return r.exports;var i=M[t]={exports:{}};return e[t](i,i.exports,u),i.exports}u.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return u.d(e,{a:e}),e},u.d=(t,e)=>{for(var M in e)u.o(e,M)&&!u.o(t,M)&&Object.defineProperty(t,M,{enumerable:!0,get:e[M]})},u.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),u.nc=void 0;var r={};u.d(r,{YM:()=>Je,$n:()=>Ke,Ql:()=>_e,hE:()=>VM,Zp:()=>aM,Ve:()=>KM,i8:()=>sM,_8:()=>Xe,ms:()=>nM,Gr:()=>yM,wi:()=>SM,Y9:()=>DM,wO:()=>xM,q7:()=>eM,gu:()=>fM,pq:()=>CM,gZ:()=>OM,IG:()=>GM,EY:()=>WM,cc:()=>$M,A1:()=>HM,mO:()=>JM,g:()=>qM,fi:()=>_M});var i=function(){return i=Object.assign||function(t){for(var e,M=1,u=arguments.length;M<u;M++)for(var r in e=arguments[M])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)};function n(t,e,M){if(M||2===arguments.length)for(var u,r=0,i=e.length;r<i;r++)!u&&r in e||(u||(u=Array.prototype.slice.call(e,0,r)),u[r]=e[r]);return t.concat(u||Array.prototype.slice.call(e))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const o=(a={cloneElement:()=>t.cloneElement,createElement:()=>t.createElement,createRef:()=>t.createRef,default:()=>t.default,useCallback:()=>t.useCallback,useContext:()=>t.useContext,useEffect:()=>t.useEffect,useMemo:()=>t.useMemo,useState:()=>t.useState},c={},u.d(c,a),c);var a,c,L=u(945),j=u.n(L),s="-ms-",N="-moz-",l="-webkit-",g="comm",y="rule",I="decl",S="@import",d="@keyframes",D="@layer",T=Math.abs,x=String.fromCharCode,p=Object.assign;function z(t){return t.trim()}function f(t,e){return(t=e.exec(t))?t[0]:t}function A(t,e,M){return t.replace(e,M)}function C(t,e,M){return t.indexOf(e,M)}function E(t,e){return 0|t.charCodeAt(e)}function O(t,e,M){return t.slice(e,M)}function h(t){return t.length}function m(t){return t.length}function w(t,e){return e.push(t),t}function b(t,e){return t.filter((function(t){return!f(t,e)}))}var v=1,k=1,Y=0,Q=0,U=0,P="";function Z(t,e,M,u,r,i,n,o){return{value:t,root:e,parent:M,type:u,props:r,children:i,line:v,column:k,length:n,return:"",siblings:o}}function G(t,e){return p(Z("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function R(t){for(;t.root;)t=G(t.root,{children:[t]});w(t,t.siblings)}function W(){return U=Q>0?E(P,--Q):0,k--,10===U&&(k=1,v--),U}function V(){return U=Q<Y?E(P,Q++):0,k++,10===U&&(k=1,v++),U}function B(){return E(P,Q)}function $(){return Q}function F(t,e){return O(P,t,e)}function H(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X(t){return z(F(Q-1,q(91===t?t+2:40===t?t+1:t)))}function J(t){for(;(U=B())&&U<33;)V();return H(t)>2||H(U)>3?"":" "}function _(t,e){for(;--e&&V()&&!(U<48||U>102||U>57&&U<65||U>70&&U<97););return F(t,$()+(e<6&&32==B()&&32==V()))}function q(t){for(;V();)switch(U){case t:return Q;case 34:case 39:34!==t&&39!==t&&q(U);break;case 40:41===t&&q(t);break;case 92:V()}return Q}function K(t,e){for(;V()&&t+U!==57&&(t+U!==84||47!==B()););return"/*"+F(e,Q-1)+"*"+x(47===t?t:V())}function tt(t){for(;!H(B());)V();return F(t,Q)}function et(t,e){for(var M="",u=0;u<t.length;u++)M+=e(t[u],u,t,e)||"";return M}function Mt(t,e,M,u){switch(t.type){case D:if(t.children.length)break;case S:case I:return t.return=t.return||t.value;case g:return"";case d:return t.return=t.value+"{"+et(t.children,u)+"}";case y:if(!h(t.value=t.props.join(",")))return""}return h(M=et(t.children,u))?t.return=t.value+"{"+M+"}":""}function ut(t,e,M){switch(function(t,e){return 45^E(t,0)?(((e<<2^E(t,0))<<2^E(t,1))<<2^E(t,2))<<2^E(t,3):0}(t,e)){case 5103:return l+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+t+t;case 4789:return N+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return l+t+N+t+s+t+t;case 5936:switch(E(t,e+11)){case 114:return l+t+s+A(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return l+t+s+A(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return l+t+s+A(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return l+t+s+t+t;case 6165:return l+t+s+"flex-"+t+t;case 5187:return l+t+A(t,/(\w+).+(:[^]+)/,l+"box-$1$2"+s+"flex-$1$2")+t;case 5443:return l+t+s+"flex-item-"+A(t,/flex-|-self/g,"")+(f(t,/flex-|baseline/)?"":s+"grid-row-"+A(t,/flex-|-self/g,""))+t;case 4675:return l+t+s+"flex-line-pack"+A(t,/align-content|flex-|-self/g,"")+t;case 5548:return l+t+s+A(t,"shrink","negative")+t;case 5292:return l+t+s+A(t,"basis","preferred-size")+t;case 6060:return l+"box-"+A(t,"-grow","")+l+t+s+A(t,"grow","positive")+t;case 4554:return l+A(t,/([^-])(transform)/g,"$1"+l+"$2")+t;case 6187:return A(A(A(t,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),t,"")+t;case 5495:case 3959:return A(t,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return A(A(t,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+s+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+t+t;case 4200:if(!f(t,/flex-|baseline/))return s+"grid-column-align"+O(t,e)+t;break;case 2592:case 3360:return s+A(t,"template-","")+t;case 4384:case 3616:return M&&M.some((function(t,M){return e=M,f(t.props,/grid-\w+-end/)}))?~C(t+(M=M[e].value),"span",0)?t:s+A(t,"-start","")+t+s+"grid-row-span:"+(~C(M,"span",0)?f(M,/\d+/):+f(M,/\d+/)-+f(t,/\d+/))+";":s+A(t,"-start","")+t;case 4896:case 4128:return M&&M.some((function(t){return f(t.props,/grid-\w+-start/)}))?t:s+A(A(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return A(t,/(.+)-inline(.+)/,l+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(t)-1-e>6)switch(E(t,e+1)){case 109:if(45!==E(t,e+4))break;case 102:return A(t,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+N+(108==E(t,e+3)?"$3":"$2-$3"))+t;case 115:return~C(t,"stretch",0)?ut(A(t,"stretch","fill-available"),e,M)+t:t}break;case 5152:case 5920:return A(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(e,M,u,r,i,n,o){return s+M+":"+u+o+(r?s+M+"-span:"+(i?n:+n-+u)+o:"")+t}));case 4949:if(121===E(t,e+6))return A(t,":",":"+l)+t;break;case 6444:switch(E(t,45===E(t,14)?18:11)){case 120:return A(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===E(t,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+s+"$2box$3")+t;case 100:return A(t,":",":"+s)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(t,"scroll-","scroll-snap-")+t}return t}function rt(t,e,M,u){if(t.length>-1&&!t.return)switch(t.type){case I:return void(t.return=ut(t.value,t.length,M));case d:return et([G(t,{value:A(t.value,"@","@"+l)})],u);case y:if(t.length)return function(t,e){return t.map(e).join("")}(M=t.props,(function(e){switch(f(e,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":R(G(t,{props:[A(e,/:(read-\w+)/,":"+N+"$1")]})),R(G(t,{props:[e]})),p(t,{props:b(M,u)});break;case"::placeholder":R(G(t,{props:[A(e,/:(plac\w+)/,":"+l+"input-$1")]})),R(G(t,{props:[A(e,/:(plac\w+)/,":"+N+"$1")]})),R(G(t,{props:[A(e,/:(plac\w+)/,s+"input-$1")]})),R(G(t,{props:[e]})),p(t,{props:b(M,u)})}return""}))}}function it(t){return function(t){return P="",t}(nt("",null,null,null,[""],t=function(t){return v=k=1,Y=h(P=t),Q=0,[]}(t),0,[0],t))}function nt(t,e,M,u,r,i,n,o,a){for(var c=0,L=0,j=n,s=0,N=0,l=0,g=1,y=1,I=1,S=0,d="",D=r,p=i,z=u,f=d;y;)switch(l=S,S=V()){case 40:if(108!=l&&58==E(f,j-1)){-1!=C(f+=A(X(S),"&","&\f"),"&\f",T(c?o[c-1]:0))&&(I=-1);break}case 34:case 39:case 91:f+=X(S);break;case 9:case 10:case 13:case 32:f+=J(l);break;case 92:f+=_($()-1,7);continue;case 47:switch(B()){case 42:case 47:w(at(K(V(),$()),e,M,a),a);break;default:f+="/"}break;case 123*g:o[c++]=h(f)*I;case 125*g:case 59:case 0:switch(S){case 0:case 125:y=0;case 59+L:-1==I&&(f=A(f,/\f/g,"")),N>0&&h(f)-j&&w(N>32?ct(f+";",u,M,j-1,a):ct(A(f," ","")+";",u,M,j-2,a),a);break;case 59:f+=";";default:if(w(z=ot(f,e,M,c,L,r,o,d,D=[],p=[],j,i),i),123===S)if(0===L)nt(f,e,z,z,D,i,j,o,p);else switch(99===s&&110===E(f,3)?100:s){case 100:case 108:case 109:case 115:nt(t,z,z,u&&w(ot(t,z,z,0,0,r,o,d,r,D=[],j,p),p),r,p,j,o,u?D:p);break;default:nt(f,z,z,z,[""],p,0,o,p)}}c=L=N=0,g=I=1,d=f="",j=n;break;case 58:j=1+h(f),N=l;default:if(g<1)if(123==S)--g;else if(125==S&&0==g++&&125==W())continue;switch(f+=x(S),S*g){case 38:I=L>0?1:(f+="\f",-1);break;case 44:o[c++]=(h(f)-1)*I,I=1;break;case 64:45===B()&&(f+=X(V())),s=B(),L=j=h(d=f+=tt($())),S++;break;case 45:45===l&&2==h(f)&&(g=0)}}return i}function ot(t,e,M,u,r,i,n,o,a,c,L,j){for(var s=r-1,N=0===r?i:[""],l=m(N),g=0,I=0,S=0;g<u;++g)for(var d=0,D=O(t,s+1,s=T(I=n[g])),x=t;d<l;++d)(x=z(I>0?N[d]+" "+D:A(D,/&\f/g,N[d])))&&(a[S++]=x);return Z(t,e,M,0===r?y:o,a,c,L,j)}function at(t,e,M,u){return Z(t,e,M,g,x(U),O(t,2,-2),0,u)}function ct(t,e,M,u,r){return Z(t,e,M,I,O(t,0,u),O(t,u+1,-1),u,r)}var Lt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jt="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",st="active",Nt="data-styled-version",lt="6.1.11",gt="/*!sc*/\n",yt="undefined"!=typeof window&&"HTMLElement"in window,It=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),St=(new Set,Object.freeze([])),dt=Object.freeze({});var Dt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xt=/(^-|-$)/g;function pt(t){return t.replace(Tt,"-").replace(xt,"")}var zt=/(a)(d)/gi,ft=52,At=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ct(t){var e,M="";for(e=Math.abs(t);e>ft;e=e/ft|0)M=At(e%ft)+M;return(At(e%ft)+M).replace(zt,"$1-$2")}var Et,Ot=5381,ht=function(t,e){for(var M=e.length;M;)t=33*t^e.charCodeAt(--M);return t},mt=function(t){return ht(Ot,t)};function wt(t){return Ct(mt(t)>>>0)}function bt(t){return"string"==typeof t&&!0}var vt="function"==typeof Symbol&&Symbol.for,kt=vt?Symbol.for("react.memo"):60115,Yt=vt?Symbol.for("react.forward_ref"):60112,Qt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ut={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zt=((Et={})[Yt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Et[kt]=Pt,Et);function Gt(t){return("type"in(e=t)&&e.type.$$typeof)===kt?Pt:"$$typeof"in t?Zt[t.$$typeof]:Qt;var e}var Rt=Object.defineProperty,Wt=Object.getOwnPropertyNames,Vt=Object.getOwnPropertySymbols,Bt=Object.getOwnPropertyDescriptor,$t=Object.getPrototypeOf,Ft=Object.prototype;function Ht(t,e,M){if("string"!=typeof e){if(Ft){var u=$t(e);u&&u!==Ft&&Ht(t,u,M)}var r=Wt(e);Vt&&(r=r.concat(Vt(e)));for(var i=Gt(t),n=Gt(e),o=0;o<r.length;++o){var a=r[o];if(!(a in Ut||M&&M[a]||n&&a in n||i&&a in i)){var c=Bt(e,a);try{Rt(t,a,c)}catch(t){}}}}return t}function Xt(t){return"function"==typeof t}function Jt(t){return"object"==typeof t&&"styledComponentId"in t}function _t(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function qt(t,e){if(0===t.length)return"";for(var M=t[0],u=1;u<t.length;u++)M+=e?e+t[u]:t[u];return M}function Kt(t){return null!==t&&"object"==typeof t&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function te(t,e,M){if(void 0===M&&(M=!1),!M&&!Kt(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var u=0;u<e.length;u++)t[u]=te(t[u],e[u]);else if(Kt(e))for(var u in e)t[u]=te(t[u],e[u]);return t}function ee(t,e){Object.defineProperty(t,"toString",{value:e})}function Me(t){for(var e=[],M=1;M<arguments.length;M++)e[M-1]=arguments[M];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ue=function(){function t(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return t.prototype.indexOfGroup=function(t){for(var e=0,M=0;M<t;M++)e+=this.groupSizes[M];return e},t.prototype.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var M=this.groupSizes,u=M.length,r=u;t>=r;)if((r<<=1)<0)throw Me(16,"".concat(t));this.groupSizes=new Uint32Array(r),this.groupSizes.set(M),this.length=r;for(var i=u;i<r;i++)this.groupSizes[i]=0}for(var n=this.indexOfGroup(t+1),o=(i=0,e.length);i<o;i++)this.tag.insertRule(n,e[i])&&(this.groupSizes[t]++,n++)},t.prototype.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],M=this.indexOfGroup(t),u=M+e;this.groupSizes[t]=0;for(var r=M;r<u;r++)this.tag.deleteRule(M)}},t.prototype.getGroup=function(t){var e="";if(t>=this.length||0===this.groupSizes[t])return e;for(var M=this.groupSizes[t],u=this.indexOfGroup(t),r=u+M,i=u;i<r;i++)e+="".concat(this.tag.getRule(i)).concat(gt);return e},t}(),re=new Map,ie=new Map,ne=1,oe=function(t){if(re.has(t))return re.get(t);for(;ie.has(ne);)ne++;var e=ne++;return re.set(t,e),ie.set(e,t),e},ae=function(t,e){ne=e+1,re.set(t,e),ie.set(e,t)},ce="style[".concat(jt,"][").concat(Nt,'="').concat(lt,'"]'),Le=new RegExp("^".concat(jt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),je=function(t,e,M){for(var u,r=M.split(","),i=0,n=r.length;i<n;i++)(u=r[i])&&t.registerName(e,u)},se=function(t,e){for(var M,u=(null!==(M=e.textContent)&&void 0!==M?M:"").split(gt),r=[],i=0,n=u.length;i<n;i++){var o=u[i].trim();if(o){var a=o.match(Le);if(a){var c=0|parseInt(a[1],10),L=a[2];0!==c&&(ae(L,c),je(t,L,a[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}};function Ne(){return u.nc}var le=function(t){var e=document.head,M=t||e,u=document.createElement("style"),r=function(t){var e=Array.from(t.querySelectorAll("style[".concat(jt,"]")));return e[e.length-1]}(M),i=void 0!==r?r.nextSibling:null;u.setAttribute(jt,st),u.setAttribute(Nt,lt);var n=Ne();return n&&u.setAttribute("nonce",n),M.insertBefore(u,i),u},ge=function(){function t(t){this.element=le(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var e=document.styleSheets,M=0,u=e.length;M<u;M++){var r=e[M];if(r.ownerNode===t)return r}throw Me(17)}(this.element),this.length=0}return t.prototype.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch(t){return!1}},t.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},t.prototype.getRule=function(t){var e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""},t}(),ye=function(){function t(t){this.element=le(t),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(t,e){if(t<=this.length&&t>=0){var M=document.createTextNode(e);return this.element.insertBefore(M,this.nodes[t]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},t.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},t}(),Ie=function(){function t(t){this.rules=[],this.length=0}return t.prototype.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,!0)},t.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},t.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},t}(),Se=yt,de={isServer:!yt,useCSSOMInjection:!It},De=function(){function t(t,e,M){void 0===t&&(t=dt),void 0===e&&(e={});var u=this;this.options=i(i({},de),t),this.gs=e,this.names=new Map(M),this.server=!!t.isServer,!this.server&&yt&&Se&&(Se=!1,function(t){for(var e=document.querySelectorAll(ce),M=0,u=e.length;M<u;M++){var r=e[M];r&&r.getAttribute(jt)!==st&&(se(t,r),r.parentNode&&r.parentNode.removeChild(r))}}(this)),ee(this,(function(){return function(t){for(var e=t.getTag(),M=e.length,u="",r=function(M){var r=function(t){return ie.get(t)}(M);if(void 0===r)return"continue";var i=t.names.get(r),n=e.getGroup(M);if(void 0===i||0===n.length)return"continue";var o="".concat(jt,".g").concat(M,'[id="').concat(r,'"]'),a="";void 0!==i&&i.forEach((function(t){t.length>0&&(a+="".concat(t,","))})),u+="".concat(n).concat(o,'{content:"').concat(a,'"}').concat(gt)},i=0;i<M;i++)r(i);return u}(u)}))}return t.registerId=function(t){return oe(t)},t.prototype.reconstructWithOptions=function(e,M){return void 0===M&&(M=!0),new t(i(i({},this.options),e),this.gs,M&&this.names||void 0)},t.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(t=function(t){var e=t.useCSSOMInjection,M=t.target;return t.isServer?new Ie(M):e?new ge(M):new ye(M)}(this.options),new ue(t)));var t},t.prototype.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},t.prototype.registerName=function(t,e){if(oe(t),this.names.has(t))this.names.get(t).add(e);else{var M=new Set;M.add(e),this.names.set(t,M)}},t.prototype.insertRules=function(t,e,M){this.registerName(t,e),this.getTag().insertRules(oe(t),M)},t.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},t.prototype.clearRules=function(t){this.getTag().clearGroup(oe(t)),this.clearNames(t)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Te=/&/g,xe=/^\s*\/\/.*$/gm;function pe(t,e){return t.map((function(t){return"rule"===t.type&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map((function(t){return"".concat(e," ").concat(t)}))),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=pe(t.children,e)),t}))}function ze(t){var e,M,u,r=void 0===t?dt:t,i=r.options,n=void 0===i?dt:i,o=r.plugins,a=void 0===o?St:o,c=function(t,u,r){return r.startsWith(M)&&r.endsWith(M)&&r.replaceAll(M,"").length>0?".".concat(e):t},L=a.slice();L.push((function(t){t.type===y&&t.value.includes("&")&&(t.props[0]=t.props[0].replace(Te,M).replace(u,c))})),n.prefix&&L.push(rt),L.push(Mt);var j=function(t,r,i,o){void 0===r&&(r=""),void 0===i&&(i=""),void 0===o&&(o="&"),e=o,M=r,u=new RegExp("\\".concat(M,"\\b"),"g");var a=t.replace(xe,""),c=it(i||r?"".concat(i," ").concat(r," { ").concat(a," }"):a);n.namespace&&(c=pe(c,n.namespace));var j,s,N,l=[];return et(c,(j=L.concat((N=function(t){return l.push(t)},function(t){t.root||(t=t.return)&&N(t)})),s=m(j),function(t,e,M,u){for(var r="",i=0;i<s;i++)r+=j[i](t,e,M,u)||"";return r})),l};return j.hash=a.length?a.reduce((function(t,e){return e.name||Me(15),ht(t,e.name)}),Ot).toString():"",j}var fe=new De,Ae=ze(),Ce=o.default.createContext({shouldForwardProp:void 0,styleSheet:fe,stylis:Ae}),Ee=(Ce.Consumer,o.default.createContext(void 0));function Oe(){return(0,o.useContext)(Ce)}function he(t){var e=(0,o.useState)(t.stylisPlugins),M=e[0],u=e[1],r=Oe().styleSheet,i=(0,o.useMemo)((function(){var e=r;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,r]),n=(0,o.useMemo)((function(){return ze({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:M})}),[t.enableVendorPrefixes,t.namespace,M]);(0,o.useEffect)((function(){j()(M,t.stylisPlugins)||u(t.stylisPlugins)}),[t.stylisPlugins]);var a=(0,o.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:n}}),[t.shouldForwardProp,i,n]);return o.default.createElement(Ce.Provider,{value:a},o.default.createElement(Ee.Provider,{value:n},t.children))}var me=function(){function t(t,e){var M=this;this.inject=function(t,e){void 0===e&&(e=Ae);var u=M.name+e.hash;t.hasNameForId(M.id,u)||t.insertRules(M.id,u,e(M.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=e,ee(this,(function(){throw Me(12,String(M.name))}))}return t.prototype.getName=function(t){return void 0===t&&(t=Ae),this.name+t.hash},t}(),we=function(t){return t>="A"&&t<="Z"};function be(t){for(var e="",M=0;M<t.length;M++){var u=t[M];if(1===M&&"-"===u&&"-"===t[0])return t;we(u)?e+="-"+u.toLowerCase():e+=u}return e.startsWith("ms-")?"-"+e:e}var ve=function(t){return null==t||!1===t||""===t},ke=function(t){var e,M,u=[];for(var r in t){var i=t[r];t.hasOwnProperty(r)&&!ve(i)&&(Array.isArray(i)&&i.isCss||Xt(i)?u.push("".concat(be(r),":"),i,";"):Kt(i)?u.push.apply(u,n(n(["".concat(r," {")],ke(i),!1),["}"],!1)):u.push("".concat(be(r),": ").concat((e=r,null==(M=i)||"boolean"==typeof M||""===M?"":"number"!=typeof M||0===M||e in Lt||e.startsWith("--")?String(M).trim():"".concat(M,"px")),";")))}return u};function Ye(t,e,M,u){return ve(t)?[]:Jt(t)?[".".concat(t.styledComponentId)]:Xt(t)?!Xt(r=t)||r.prototype&&r.prototype.isReactComponent||!e?[t]:Ye(t(e),e,M,u):t instanceof me?M?(t.inject(M,u),[t.getName(u)]):[t]:Kt(t)?ke(t):Array.isArray(t)?Array.prototype.concat.apply(St,t.map((function(t){return Ye(t,e,M,u)}))):[t.toString()];var r}function Qe(t){for(var e=0;e<t.length;e+=1){var M=t[e];if(Xt(M)&&!Jt(M))return!1}return!0}var Ue=mt(lt),Pe=function(){function t(t,e,M){this.rules=t,this.staticRulesId="",this.isStatic=(void 0===M||M.isStatic)&&Qe(t),this.componentId=e,this.baseHash=ht(Ue,e),this.baseStyle=M,De.registerId(e)}return t.prototype.generateAndInjectStyles=function(t,e,M){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,e,M):"";if(this.isStatic&&!M.hash)if(this.staticRulesId&&e.hasNameForId(this.componentId,this.staticRulesId))u=_t(u,this.staticRulesId);else{var r=qt(Ye(this.rules,t,e,M)),i=Ct(ht(this.baseHash,r)>>>0);if(!e.hasNameForId(this.componentId,i)){var n=M(r,".".concat(i),void 0,this.componentId);e.insertRules(this.componentId,i,n)}u=_t(u,i),this.staticRulesId=i}else{for(var o=ht(this.baseHash,M.hash),a="",c=0;c<this.rules.length;c++){var L=this.rules[c];if("string"==typeof L)a+=L;else if(L){var j=qt(Ye(L,t,e,M));o=ht(o,j+c),a+=j}}if(a){var s=Ct(o>>>0);e.hasNameForId(this.componentId,s)||e.insertRules(this.componentId,s,M(a,".".concat(s),void 0,this.componentId)),u=_t(u,s)}}return u},t}(),Ze=o.default.createContext(void 0);Ze.Consumer;var Ge={};function Re(t,e,M){var u=Jt(t),r=t,n=!bt(t),a=e.attrs,c=void 0===a?St:a,L=e.componentId,j=void 0===L?function(t,e){var M="string"!=typeof t?"sc":pt(t);Ge[M]=(Ge[M]||0)+1;var u="".concat(M,"-").concat(wt(lt+M+Ge[M]));return e?"".concat(e,"-").concat(u):u}(e.displayName,e.parentComponentId):L,s=e.displayName,N=void 0===s?function(t){return bt(t)?"styled.".concat(t):"Styled(".concat(function(t){return t.displayName||t.name||"Component"}(t),")")}(t):s,l=e.displayName&&e.componentId?"".concat(pt(e.displayName),"-").concat(e.componentId):e.componentId||j,g=u&&r.attrs?r.attrs.concat(c).filter(Boolean):c,y=e.shouldForwardProp;if(u&&r.shouldForwardProp){var I=r.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;y=function(t,e){return I(t,e)&&S(t,e)}}else y=I}var d=new Pe(M,l,u?r.componentStyle:void 0);function D(t,e){return function(t,e,M){var u=t.attrs,r=t.componentStyle,n=t.defaultProps,a=t.foldedComponentIds,c=t.styledComponentId,L=t.target,j=o.default.useContext(Ze),s=Oe(),N=t.shouldForwardProp||s.shouldForwardProp,l=function(t,e,M){return void 0===M&&(M=dt),t.theme!==M.theme&&t.theme||e||M.theme}(e,j,n)||dt,g=function(t,e,M){for(var u,r=i(i({},e),{className:void 0,theme:M}),n=0;n<t.length;n+=1){var o=Xt(u=t[n])?u(r):u;for(var a in o)r[a]="className"===a?_t(r[a],o[a]):"style"===a?i(i({},r[a]),o[a]):o[a]}return e.className&&(r.className=_t(r.className,e.className)),r}(u,e,l),y=g.as||L,I={};for(var S in g)void 0===g[S]||"$"===S[0]||"as"===S||"theme"===S&&g.theme===l||("forwardedAs"===S?I.as=g.forwardedAs:N&&!N(S,y)||(I[S]=g[S]));var d=function(t,e){var M=Oe();return t.generateAndInjectStyles(e,M.styleSheet,M.stylis)}(r,g),D=_t(a,c);return d&&(D+=" "+d),g.className&&(D+=" "+g.className),I[bt(y)&&!Dt.has(y)?"class":"className"]=D,I.ref=M,(0,o.createElement)(y,I)}(T,t,e)}D.displayName=N;var T=o.default.forwardRef(D);return T.attrs=g,T.componentStyle=d,T.displayName=N,T.shouldForwardProp=y,T.foldedComponentIds=u?_t(r.foldedComponentIds,r.styledComponentId):"",T.styledComponentId=l,T.target=u?r.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=u?function(t){for(var e=[],M=1;M<arguments.length;M++)e[M-1]=arguments[M];for(var u=0,r=e;u<r.length;u++)te(t,r[u],!0);return t}({},r.defaultProps,t):t}}),ee(T,(function(){return".".concat(T.styledComponentId)})),n&&Ht(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function We(t,e){for(var M=[t[0]],u=0,r=e.length;u<r;u+=1)M.push(e[u],t[u+1]);return M}new Set;var Ve=function(t){return Object.assign(t,{isCss:!0})};function Be(t){for(var e=[],M=1;M<arguments.length;M++)e[M-1]=arguments[M];if(Xt(t)||Kt(t))return Ve(Ye(We(St,n([t],e,!0))));var u=t;return 0===e.length&&1===u.length&&"string"==typeof u[0]?Ye(u):Ve(Ye(We(u,e)))}function $e(t,e,M){if(void 0===M&&(M=dt),!e)throw Me(1,e);var u=function(u){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return t(e,M,Be.apply(void 0,n([u],r,!1)))};return u.attrs=function(u){return $e(t,e,i(i({},M),{attrs:Array.prototype.concat(M.attrs,u).filter(Boolean)}))},u.withConfig=function(u){return $e(t,e,i(i({},M),u))},u}var Fe=function(t){return $e(Re,t)},He=Fe;Dt.forEach((function(t){He[t]=Fe(t)})),function(){function t(t,e){this.rules=t,this.componentId=e,this.isStatic=Qe(t),De.registerId(this.componentId+1)}t.prototype.createStyles=function(t,e,M,u){var r=u(qt(Ye(this.rules,e,M,u)),""),i=this.componentId+t;M.insertRules(i,i,r)},t.prototype.removeStyles=function(t,e){e.clearRules(this.componentId+t)},t.prototype.renderStyles=function(t,e,M,u){t>2&&De.registerId(this.componentId+t),this.removeStyles(t,M),this.createStyles(t,e,M,u)}}(),function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString(),M=Ne(),u=qt([M&&'nonce="'.concat(M,'"'),"".concat(jt,'="true"'),"".concat(Nt,'="').concat(lt,'"')].filter(Boolean)," ");return"<style ".concat(u,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Me(2);return t._emitSheetCSS()},this.getStyleElement=function(){var e;if(t.sealed)throw Me(2);var M=((e={})[jt]="",e[Nt]=lt,e.dangerouslySetInnerHTML={__html:t.instance.toString()},e),u=Ne();return u&&(M.nonce=u),[o.default.createElement("style",i({},M,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new De({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Me(2);return o.default.createElement(he,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(t){throw Me(3)}}(),"__sc-".concat(jt,"__");const Xe=Be`
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Je=Be`
  &:active {
    opacity: 0.8;
  }
`,_e=Be`
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
`,qe=He.button`
  ${_e}
  ${Je}
  ${Xe}
`;qe.defaultProps={type:"button"};const Ke=qe,tM=He.div`
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
`;tM.defaultProps={className:"dbuitkDropdownItem",$closeOnClick:!0,disabled:!1};const eM=He(tM)`
  &,
  &:hover {
    ${({$state:t})=>"danger"===t?Be`
            color: var(--theme-color-danger, #800);
          `:"ok"===t?Be`
              color: var(--theme-color-ok, #080);
            `:"warning"===t&&Be`
              color: var(--theme-color-warning, #cc0);
            `};
  }
`,MM=He.div`
  display: ${({$isOpen:t})=>t?"flex":"none"};
  flex-direction: column;
  min-width: 90px;
  position: absolute;
  white-space: nowrap;

  ${({$position:t})=>"left"===t&&Be`
      left: 0;
    `}

  ${({$position:t})=>"right"===t&&Be`
      right: 0;
    `}

  ${({$position:t})=>"center"===t&&Be`
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({$direction:t})=>"downwards"===t&&Be`
      top: calc(100% + 10px);
    `}

  ${({$direction:t})=>"upwards"===t&&Be`
      bottom: calc(100%);
    `}
`;MM.defaultProps={$direction:"downwards",$isOpen:!1,$position:"left",className:"dbuitkDropdownItems"};const uM=He(MM)`
  background-color: var(--theme-dropdown-background-color, #fff);
  border-color: var(--theme-dropdown-border-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border-style: solid;
  border-width: 1px;
  box-shadow: var(--theme-dropdown-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
`;const rM=He.div`
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
`;rM.defaultProps={className:"dbuitkDropdown",disabled:!1};const iM=He.div`
  background-color: transparent;
  border: none;
  display: flex;
  outline: none;
  padding: 0;
  user-select: none;
  width: 100%;
`;iM.defaultProps={className:"dbuitkDropdownButton"};const nM=t=>{var{button:e,className:M,clearDropdownStyle:u=!1,direction:r="downwards",disabled:i=!1,highlightItem:n,items:a,position:c="left"}=t,L=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,["button","className","clearDropdownStyle","direction","disabled","highlightItem","items","position"]);const j=o.default.useMemo((()=>{const t="number"==typeof n,e=t&&n<0,M=Array.isArray(a)&&t&&n>a.length-1;if(!e&&!M)return n}),[n,a]),[s,N]=(0,o.useState)(!1),[l,g]=(0,o.useState)(j),y=(0,o.createRef)(),I=(0,o.useCallback)((t=>{t.stopPropagation(),i||N(!s)}),[i,s]);(0,o.useEffect)((()=>{const t=t=>{y&&y.current&&y.current.contains(t.target)||N(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[y]);const S=(t,e)=>{const{$closeOnClick:M,onClick:u,className:r}=t.props;return(0,o.cloneElement)(t,{className:`${r||""} ${void 0!==j&&e===l?"dropdownItemActive":""}`.trim(),onClick:t=>{t.stopPropagation(),M&&N(!1),g(e),u&&u()}})};return o.default.createElement(rM,Object.assign({className:`${s?"isOpen":""} ${M||""}`.trim(),disabled:i,ref:y},L),o.default.createElement(iM,{onClick:I},e),o.default.createElement(MM,{as:u?void 0:uM,$direction:r,$position:c,$isOpen:s},Array.isArray(a)?a.map(((t,e)=>S(t,e))):S(a)))},oM=He.div`
  background-color: var(--theme-card-background-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border: 1px solid var(--theme-card-border-color, #fff);
  box-shadow: var(--theme-card-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
  display: flex;
  flex-direction: column;
  padding: var(--base-common-padding, 8px);
  white-space: normal;
`;oM.defaultProps={className:"dbuitkCard"};const aM=oM;var cM=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M};const LM=t=>{var e=cM(t,[]);return o.default.createElement("svg",Object.assign({fill:"currentColor",height:"15",viewBox:"0 0 24 24",width:"15",xmlns:"http://www.w3.org/2000/svg"},e),o.default.createElement("path",{className:"fill",clipRule:"evenodd",d:"M10 9C9.44771 9 9 9.44771 9 10V21C9 21.5523 9.44771 22 10 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44771 21.5523 9 21 9H10ZM15 7V3C15 2.44772 14.5523 2 14 2H3C2.44772 2 2 2.44772 2 3V14C2 14.5523 2.44772 15 3 15H7V10C7 8.34315 8.34315 7 10 7H15ZM17 7H21C22.6569 7 24 8.34315 24 10V21C24 22.6569 22.6569 24 21 24H10C8.34315 24 7 22.6569 7 21V17H3C1.34315 17 0 15.6569 0 14V3C0 1.34315 1.34315 0 3 0H14C15.6569 0 17 1.34315 17 3V7Z",fillRule:"evenodd"}))},jM=He.button`
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
`;jM.defaultProps={className:"dbuitkCopyButton",type:"button"};const sM=t=>{var{children:e=o.default.createElement(LM,null),onClick:M,value:u}=t,r=cM(t,["children","onClick","value"]);return o.default.createElement(jM,Object.assign({onClick:t=>{navigator.clipboard.writeText(u),M&&M(t)}},r),e)};var NM=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M};const lM=t=>{var e=NM(t,[]);return o.default.createElement("svg",Object.assign({fill:"currentColor",height:"12.5",viewBox:"0 0 10 10",width:"12.5",xmlns:"http://www.w3.org/2000/svg"},e),o.default.createElement("path",{className:"fill",clipRule:"evenodd",d:"M1.11111 1.11111V8.88892H8.88892V5H10V8.88892C10 9.5 9.5 10 8.88892 10H1.11111C0.494442 10 0 9.5 0 8.88892V1.11111C0 0.5 0.494442 0 1.11111 0H5V1.11111H1.11111ZM6.11111 1.11111V0H10V3.88889H8.88892V1.89444L3.42777 7.35558L2.64444 6.57223L8.10558 1.11111H6.11111Z",fillRule:"evenodd"}))},gM=He.a`
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
`;gM.defaultProps={className:"dbuitkExternalLink",type:"button"};const yM=t=>{var{children:e=o.default.createElement(lM,null),target:M="_blank"}=t,u=NM(t,["children","target"]);return o.default.createElement(gM,Object.assign({target:M},u),e)},IM=He.footer`
  align-items: center;
  background-color: var(--theme-footer-background-color, transparent);
  color: var(--theme-footer-text-color, #000);
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
`;IM.defaultProps={className:"dbuitkFooter"};const SM=IM,dM=He.header`
  background-color: var(--theme-header-background-color, transparent);
  color: var(--theme-header-text-color, #000);
  flex-grow: 0;
  flex-shrink: 0;
`;dM.defaultProps={className:"dbuitkHeader"};const DM=dM,TM=He.div`
  display: flex;
  flex-shrink: 0;
  margin: 0 auto;
  max-width: 100%;
  width: var(--base-container-max-width, 1360px);
`;TM.defaultProps={className:"dbuitkInnerContainer"};const xM=TM,pM="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9Ijc3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNS41NzQgNDIuNDE2Yy0uMTMtLjM0Ni0uMjYtLjY5MS0uMzctMS4wNDctMS4yODctNC4yMjctMi4wMTUtMTMuMzIyLTIuNDc0LTE4LjU4NkMzMS42NzIgMTAuODczIDI3LjU1MSAxLjEwNSAyMS4xODUuNzVWLjY3Yy02LjM2Ny4zNDYtMTAuNDg4IDEwLjEyMy0xMS41NDYgMjIuMDI0LS40NjkgNS4yNzQtMS4xODcgMTQuMzYtMi40NzQgMTguNTg2LS4xMi4zNTYtLjI0LjcxMS0uMzcgMS4wNDctMTkuODE3IDEwLjIyMiA5LjU4IDExLjU2NSAxNC4zOSAxMS42MzR2LjA3OWM0LjgxLS4wNyAzNC4yMTYtMS40MTIgMTQuMzg5LTExLjYzNHYuMDF6IiBmaWxsPSIjMkUzMDQ4Ii8+PHBhdGggZD0iTTMwLjI4NSA1OC4xMmMxLjczNy0zLjEyIDIuOTk0LTcuNTEgMi45OTQtOS45NyAwLS42Mi0uMDYtMS4yNi0uMTYtMS44Ny0uMzUtMi4xNC0xLjUxNy0zLjU5LTIuODE0LTMuNThoLS4wM2MtMS4zMDcgMC0yLjQ2NCAxLjQ0LTIuODE0IDMuNTgtLjEuNjItLjE2IDEuMjUtLjE2IDEuODcgMCAyLjQ2IDEuMjU4IDYuODQgMi45OTQgOS45N2gtLjAxeiIgZmlsbD0iI0MxMUM3OSIvPjxwYXRoIGQ9Ik0zMC4yODUgNTEuODNjLjkzOC0xLjY5IDEuNjE3LTQuMDcgMS42MTctNS40IDAtLjM0LS4wMy0uNjgtLjA4LTEuMDEtLjE5LTEuMTYtLjgxOC0xLjk0LTEuNTI3LTEuOTRoLS4wMmMtLjcwOCAwLTEuMzM3Ljc4LTEuNTI2IDEuOTQtLjA2LjMzLS4wOC42OC0uMDggMS4wMSAwIDEuMzMuNjc4IDMuNzEgMS42MTYgNS40eiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0xMi4wMTQgNTguNTljMS43MzctMy4xMiAyLjk5NC03LjUxIDIuOTk0LTkuOTcgMC0uNjItLjA2LTEuMjYtLjE2LTEuODctLjM0OS0yLjE0LTEuNTE3LTMuNTktMi44MTQtMy41OGgtLjAzYy0xLjMwNyAwLTIuNDY0IDEuNDQtMi44MTQgMy41OC0uMS42Mi0uMTYgMS4yNS0uMTYgMS44NyAwIDIuNDYgMS4yNTggNi44NCAyLjk5NCA5Ljk3aC0uMDF6IiBmaWxsPSIjQzExQzc5Ii8+PHBhdGggZD0iTTEyLjAxNCA1MS44M2MuOTM4LTEuNjkgMS42MTctNC4wNyAxLjYxNy01LjQgMC0uMzQtLjAzLS42OC0uMDktMS4wMS0uMTktMS4xNi0uODE4LTEuOTQtMS41MjctMS45NGgtLjAyYy0uNzA4IDAtMS4zMzcuNzgtMS41MjYgMS45NC0uMDYuMzMtLjA5LjY4LS4wOSAxLjAxIDAgMS4zMy42NzggMy43MSAxLjYxNiA1LjRoLjAyeiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0yMS4xNDUgNjcuMTRjMi43NzQtNC41OSA0Ljc4LTExLjAyIDQuNzgtMTQuNjMgMC0uOTItLjA5LTEuODUtLjI1LTIuNzUtLjU2OS0zLjE0LTIuNDI1LTUuMjctNC41MS01LjI2aC0uMDVjLTIuMDg2LS4wMS0zLjk0MiAyLjExLTQuNTEgNS4yNi0uMTYuOS0uMjUgMS44My0uMjUgMi43NSAwIDMuNjEgMi4wMDYgMTAuMDUgNC43OCAxNC42M2guMDF6IiBmaWxsPSIjQzExQzc5Ii8+PHBhdGggZD0iTTIxLjE0NSA1OC4wMWMxLjI1Ny0yLjAxIDIuMTY1LTQuODQgMi4xNjUtNi40MyAwLS40LS4wNC0uODEtLjExLTEuMjEtLjI2LTEuMzgtMS4wOTctMi4zMi0yLjAzNS0yLjMxaC0uMDJjLS45MzggMC0xLjc4Ni45My0yLjAzNiAyLjMxLS4wNy40LS4xMS44MS0uMTEgMS4yMSAwIDEuNTkuOTA4IDQuNDEgMi4xNjYgNi40M2gtLjAyeiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0yMS4yMDUgMi4wM2MtNS44NzggMC05LjI5IDEyLjM4LTEwLjA3OSAyMS40Ny0uMzQgMy45NS0uODI4IDExLjA2LTEuNDI3IDE0LjMyLS4zNDkgMS45NC0xLjU0NiA1LjEyLTEuNjM2IDUuMzctNS4zNTkgMy4zMi02LjYwNiA0Ljg1LTYuMjk3IDUuMjMuMTQuMTYgMi4xODYtLjI1IDQuNTctLjc1IDEuODU2LS4zOSAzLjk1Mi0uNzcgNS4zMS0xLjQ1IDUuMjk4LTIuNjQgNC41NC04LjE5IDUuNDQ3LTguMjIgMS4wMzgtLjAzLjQyIDEuNjcgMS4xODggMy41MyAxLjAyOCAyLjUgMy43MjIgNS4zIDEwLjExOCA0LjM0LTEuNzc2LTEuNTUtMi4xNTUtNy44MS0xLjAzOC03LjgxLjgzOSAwIC4xNCAzLjI3IDMuNjEzIDYuNjEgMy4xODMgMy4wNyA5LjcxOSAzLjk4IDkuNzY5IDMuNzQuMjItMS4yMS00LjQxLTMuNjYtNi40NDYtNS4xOS0xLjQwNy0zLjMzLTIuNDM1LTE3LjU3LTIuNjc1LTE5Ljc3LTEuMTE3LTEwLjI3LTQuMzMtMjEuNDMtMTAuNDA3LTIxLjQzbC0uMDEuMDF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTIxLjIwNSAyLjAzYzYuMDc3IDAgOS4zIDExLjE2IDEwLjQwOCAyMS40My4yNCAyLjE5IDEuMjY3IDE2LjQ0IDIuNjc0IDE5Ljc3IDIuMDM1IDEuNTMgNi42NTYgMy45NyA2LjQ0NiA1LjE5IDAgLjAyLS4wNy4wNC0uMi4wNC0xLjEyNyAwLTYuNjk1LTEuMDItOS41NTktMy43OC0zLjQ3My0zLjM1LTIuNzc0LTYuNjEtMy42MTItNi42MS0xLjExOCAwLS43MzkgNi4yNiAxLjAzOCA3LjgxLS44NzkuMTMtMS42ODcuMTktMi40MzUuMTktNC42NyAwLTYuNzk2LTIuMzgtNy42ODQtNC41NC0uNzU4LTEuODUtLjE3LTMuNTMtMS4xNjctMy41M2gtLjAzYy0uOTA4LjAzLS4xNSA1LjU4LTUuNDQ5IDguMjItMS4zNTcuNjgtMy40NDIgMS4wNS01LjMwOCAxLjQ1LTIuMDE2LjQzLTMuODAyLjc5LTQuMzguNzktLjEgMC0uMTctLjAxLS4xOS0uMDQtLjMxLS4zNy45MzctMS45MSA2LjI5Ni01LjIzLjEtLjI2IDEuMjg3LTMuNDMgMS42MzctNS4zNy41ODgtMy4yNiAxLjA3Ny0xMC4zNiAxLjQyNy0xNC4zMi44MDgtOS4xIDQuMjEtMjEuNDcgMTAuMDg4LTIxLjQ3em0wLTEuNjFDMTMuNTYuNDIgMTAuMjY4IDE0Ljg0IDkuNTMgMjMuMzZjLS4wNy44NC0uMTUgMS44MS0uMjQgMi44Ni0uMzE5IDMuOTItLjcxOCA4LjgxLTEuMTY3IDExLjMtLjI0IDEuMzItLjk2OCAzLjQ2LTEuMzc3IDQuNThDLjQ0OSA0Ni4wNi4yNSA0Ny4yOS4xNCA0Ny45NmMtLjA5LjU0LjA1IDEuMDcuMzkgMS40OC4zMzguNDEuODE3LjYyIDEuNDI2LjYyczEuNzY2LS4yIDQuNzEtLjgzbC42OTgtLjE1YzEuNzc3LS4zNyAzLjYyMy0uNzUgNC45OS0xLjQ0IDIuNTc0LTEuMjggMy45NDEtMy4xNyA0LjczLTQuODggMS4wMzggMi4wNyAzLjQ2MiA0LjkgOC44OCA0LjkuODM5IDAgMS43MzctLjA3IDIuNjY1LS4yMWwyLjc1NC0uNDFjMy4zNzMgMi4yMyA4LjAwMyAzLjAxIDkuMTUgMy4wMSAxLjQ5NyAwIDEuNzU3LTEuMjMgMS43ODctMS4zNy4zMzktMS45Mi0xLjg3Ni0zLjM1LTQuOTUtNS4zNC0uNjM4LS40MS0xLjI0Ny0uOC0xLjczNi0xLjE1LTEuMDA4LTMuMS0xLjg4Ni0xMy4wNC0yLjIyNS0xNi44OS0uMDgtLjk0LS4xNS0xLjY2LS4xOS0yLjAzQzMyLjQ3MSAxNi40MSAyOS44MDYuNDIgMjEuMjA1LjQyeiIgZmlsbD0iIzJFMzA0OCIvPjxwYXRoIGQ9Ik0xNy40NTMgMjEuODFjMS4xMyAwIDIuMDQ1LTEuNTk4IDIuMDQ1LTMuNTcgMC0xLjk3Mi0uOTE2LTMuNTctMi4wNDUtMy41Ny0xLjEzIDAtMi4wNDYgMS41OTgtMi4wNDYgMy41NyAwIDEuOTcyLjkxNiAzLjU3IDIuMDQ2IDMuNTd6TTI1LjAxNyAyMS44MWMxLjEzIDAgMi4wNDUtMS41OTggMi4wNDUtMy41NyAwLTEuOTcyLS45MTYtMy41Ny0yLjA0Ni0zLjU3cy0yLjA0NSAxLjU5OC0yLjA0NSAzLjU3YzAgMS45NzIuOTE2IDMuNTcgMi4wNDYgMy41N3oiIGZpbGw9IiMyRTMwNDgiLz48cGF0aCBkPSJNMTguMjkgMzcuNjZjLS4zNDggMS41OS0uNDY4IDIuODUuMzMgNC41Ni42ODkgMS4yOCAxLjg2NiAyLjU0IDMuNzgyIDMuMjUtMi45MDQtMi45LTMuMTkzLTQuNTItNC4xMDEtNy44MWgtLjAxek0xMi4xMTQgNDUuOTVjLjQ4LTEuNjMuOTk4LTQuODUuOTI4LTYuNTgtLjA5LjYyLTEuODQ2IDQuMjMtMS44NDYgNC4yM3MtMS45MDYgMi4xNy00LjQ2IDMuOTdjMS43NTYtLjM3IDMuNjQyLS43NCA0LjktMS4zNi4xNjktLjA4LjMyOC0uMTcuNDc4LS4yNnpNMjcuODkgMzYuOTljMCAxLjIyLjE0IDMuNTggMS4yNjggNS40Mi40MjkuNzIgMS4wMDggMS40OSAxLjgwNiAyLjI2IDIuMzY1IDIuMjggNi41ODYgMy4zNyA4LjYxMSAzLjY4LTcuMjM0LTMuNTktOS41Mi02LjYxLTExLjY4NS0xMS4zNnoiIGZpbGw9IiNFMkUwRTciLz48cGF0aCBkPSJNMjEuMzY0IDI1LjQ1Yy40NjkgMCAuODQ4LS40ODMuODQ4LTEuMDggMC0uNTk2LS4zOC0xLjA4LS44NDgtMS4wOC0uNDY4IDAtLjg0OC40ODQtLjg0OCAxLjA4IDAgLjU5Ni4zOCAxLjA4Ljg0OCAxLjA4eiIgZmlsbD0iIzJFMzA0OCIvPjxwYXRoIGQ9Ik0yNy4yMzkgNi42MzdjLTEuNTg0LTIuODE1LTMuNTcyLTQuNjAxLTYuMDI0LTQuNjAxLTIuMjggMC02LjUyNyAyLjQ5Mi05LjA1IDE0LjYgMy4wMjgtNS41NSA1LjU1LTEyLjEwOCA5LjIxMS0xMS42NzQgMi4wNzkgMCA0LjAzNi41OTUgNS44NTMgMS42NjVsLjAxLjAxeiIgZmlsbD0iI0UyRTBFNyIvPjxwYXRoIGQ9Ik0yMS4xODUgNzYuMzZjMTAuMjU2IDAgMTguNTctMS4zODMgMTguNTctMy4wOSAwLTEuNzA2LTguMzE0LTMuMDktMTguNTctMy4wOXMtMTguNTcgMS4zODMtMTguNTcgMy4wOWMwIDEuNzA3IDguMzE0IDMuMDkgMTguNTcgMy4wOXoiIGZpbGw9IiNDNUMyQ0IiLz48cGF0aCBkPSJNNjIuOTMgMTQuNzI1djEwLjE2YzAgLjUyLjAzIDEgLjA4IDEuNDJoLTEuNzhjLS4wNS0uMy0uMDgtLjYzLS4wOC0xLjAxLS4xOS4zNS0uNDkuNjQtLjkuODYtLjQxLjIyLS44Ny4zNC0xLjM5LjM0LTEuMTEgMC0yLjAxLS4zOS0yLjctMS4xNy0uNjktLjc4LTEuMDQtMS43Ni0xLjA0LTIuOTRzLjM1LTIuMTEgMS4wNS0yLjljLjctLjc5IDEuNTktMS4xOCAyLjY2LTEuMTguNjIgMCAxLjEyLjExIDEuNS4zNC4zOC4yMy42NC40OS43OS43OHYtNC43aDEuODF6bS01Ljk1IDcuNjZjMCAuNzUuMTkgMS4zNS41OCAxLjguMzguNDUuODkuNjggMS41Mi42OHMxLjEtLjIzIDEuNDktLjY5Yy4zOS0uNDYuNTgtMS4wNi41OC0xLjgxcy0uMTktMS4zMi0uNTYtMS43NmMtLjM3LS40NC0uODctLjY2LTEuNDktLjY2cy0xLjEyLjIyLTEuNTIuNjZjLS4zOS40NC0uNTkgMS4wMy0uNTkgMS43N2wtLjAxLjAxek03My4yOCAyNi4zMDVsLTEuMDctMi44NWgtNC44bC0xLjA2IDIuODVoLTIuMDNsNC40Mi0xMS4zNGgyLjIybDQuNDIgMTEuMzRoLTIuMXptLTMuNDctOS4yNmwtMS43MyA0LjY0aDMuNDZsLTEuNzMtNC42NHpNNzguNTMgMjkuMzQ1aC0xLjg0di0xMC44M2gxLjc5djEuMDZjLjItLjM1LjUyLS42NC45Ni0uODguNDQtLjIzLjk0LS4zNSAxLjUyLS4zNSAxLjEyIDAgMiAuMzggMi42NCAxLjE0LjY0Ljc2Ljk2IDEuNzQuOTYgMi45MnMtLjM0IDIuMTYtMS4wMSAyLjk0Yy0uNjcuNzctMS41NiAxLjE2LTIuNjYgMS4xNi0uNTMgMC0xLjAxLS4xLTEuNDItLjMtLjQyLS4yLS43My0uNDYtLjk0LS43N3YzLjkyLS4wMXptNC4xOC02Ljk0YzAtLjcyLS4xOS0xLjMxLS41OC0xLjc1LS4zOC0uNDQtLjg5LS42Ni0xLjUyLS42NnMtMS4xMi4yMi0xLjUxLjY2Yy0uMzkuNDQtLjU4IDEuMDMtLjU4IDEuNzVzLjE5IDEuMzMuNTggMS43OGMuMzkuNDUuODkuNjcgMS41MS42N3MxLjEyLS4yMiAxLjUxLS42N2MuMzktLjQ1LjU4LTEuMDQuNTgtMS43OGguMDF6TTg4LjE5IDI5LjM0NWgtMS44NHYtMTAuODNoMS43OXYxLjA2Yy4yLS4zNS41Mi0uNjQuOTYtLjg4LjQ0LS4yMy45NC0uMzUgMS41Mi0uMzUgMS4xMiAwIDIgLjM4IDIuNjQgMS4xNC42NC43Ni45NiAxLjc0Ljk2IDIuOTJzLS4zNCAyLjE2LTEuMDEgMi45NGMtLjY3Ljc3LTEuNTYgMS4xNi0yLjY2IDEuMTYtLjUzIDAtMS4wMS0uMS0xLjQyLS4zLS40Mi0uMi0uNzMtLjQ2LS45NC0uNzd2My45Mi0uMDF6bTQuMTgtNi45NGMwLS43Mi0uMTktMS4zMS0uNTgtMS43NS0uMzgtLjQ0LS44OS0uNjYtMS41Mi0uNjZzLTEuMTIuMjItMS41MS42NmMtLjM5LjQ0LS41OCAxLjAzLS41OCAxLjc1cy4xOSAxLjMzLjU4IDEuNzhjLjM5LjQ1Ljg5LjY3IDEuNTEuNjdzMS4xMi0uMjIgMS41MS0uNjdjLjM5LS40NS41OC0xLjA0LjU4LTEuNzhoLjAxeiIgZmlsbD0iIzJFMzA0OCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODMuNDAyIDMxLjM1NWMtMy4wMzQgMC01LjYyOSAxLjAzMS03Ljc5NCAzLjA5NC0yLjE2NiAyLjA2Mi0zLjI0OSA0Ljc3LTMuMjQ5IDguMTMgMCAzLjM2IDEuMDgzIDYuMDQgMy4yNDkgOC4xMDMgMi4xNjUgMi4wNjMgNC43NiAzLjA5NCA3Ljc5NCAzLjA5NHM1LjY2My0xLjAzMSA3LjgyOS0zLjA5NGMyLjE2Ni0yLjA2MiAzLjI0OC00Ljc2IDMuMjQ4LTguMTA0IDAtMy4zNDMtMS4wODItNi4wNjctMy4yNDgtOC4xMy0yLjE2Ni0yLjA2Mi00Ljc3LTMuMDkzLTcuODI5LTMuMDkzem00LjczNSAxNi40OTFjLTEuMzMyIDEuMjQ3LTIuOTEzIDEuODY1LTQuNzM1IDEuODY1LTEuODIyIDAtMy4zNjktLjYxOC00LjctMS44NjUtMS4zMzMtMS4yNDYtMi4wMDMtMy4wMDctMi4wMDMtNS4yOTNzLjY3LTQuMDQ4IDIuMDAyLTUuMjk0YzEuMzMyLTEuMjQ2IDIuOTA1LTEuODY1IDQuNzAxLTEuODY1IDEuNzk2IDAgMy4zOTUuNjE5IDQuNzM1IDEuODY1IDEuMzMyIDEuMjQ2IDIuMDAzIDMuMDA4IDIuMDAzIDUuMjk0IDAgMi4yODYtLjY3IDQuMDQ3LTIuMDAzIDUuMjkzem0tMjEuODQ1LTUuNjI4Yy45MS0uMzAxIDEuNjU5LS44NzcgMi4yNDMtMS43MS41ODQtLjgzNC44NzYtMS44MDUuODc2LTIuODk3IDAtMS43MTgtLjU4NC0zLjExLTEuNzQ0LTQuMTg1LTEuMTYtMS4wNzQtMi43NjctMS42MDctNC44MTMtMS42MDdINTUuMTJ2MjEuNTFoOC4zMWMyLjAwMyAwIDMuNjEtLjU1OCA0LjgyMS0xLjY4NCAxLjIxMi0xLjEyNiAxLjgyMi0yLjU2MSAxLjgyMi00LjMyMyAwLTEuMjk3LS4zNi0yLjM5Ny0xLjA3NC0zLjMyNi0uNzIyLS45Mi0xLjYyNC0xLjUxMi0yLjcxNi0xLjc3OGguMDA5em0tNy4wMy02Ljg4NGgyLjkzYy45ODkgMCAxLjc1NC4yNCAyLjI5NS43MTMuNTMzLjQ3My44MDggMS4xMjYuODA4IDEuOTYgMCAuODMzLS4yNzUgMS40ODYtLjgxNiAxLjk2OC0uNTUuNDktMS4yOTguNzMtMi4yNDMuNzNoLTIuOTc0di01LjM3MXptNS43NzUgMTMuNzU5Yy0uNTc2LjQ5OC0xLjM2Ni43NDctMi4zOC43NDdoLTMuMzk1di01LjY3MmgzLjQ1NWMxLjAxNCAwIDEuNzk2LjI2NyAyLjM1NS43OTEuNTU4LjUyNC44MzMgMS4yMi44MzMgMi4wOTcgMCAuODc2LS4yODMgMS41NTUtLjg2OCAyLjA0NXYtLjAwOHptMzUuMDU0LTE0LjY0NGMyLjE2Ni0yLjA2MyA0Ljc2MS0zLjA5NCA3Ljc5NS0zLjA5NCAzLjA1OSAwIDUuNjYzIDEuMDMxIDcuODI5IDMuMDk0IDIuMTY1IDIuMDYyIDMuMjQ4IDQuNzg3IDMuMjQ4IDguMTMgMCAzLjM0Mi0xLjA4MyA2LjA0LTMuMjQ4IDguMTAzLTIuMTY2IDIuMDYzLTQuNzk2IDMuMDk0LTcuODI5IDMuMDk0LTMuMDM0IDAtNS42MjktMS4wMzEtNy43OTUtMy4wOTQtMi4xNjUtMi4wNjItMy4yNDgtNC43NDMtMy4yNDgtOC4xMDQgMC0zLjM2IDEuMDgyLTYuMDY3IDMuMjQ4LTguMTN6bTcuNzk1IDE1LjI2MmMxLjgyMiAwIDMuNDAzLS42MTggNC43MzUtMS44NjUgMS4zMzItMS4yNDYgMi4wMDItMy4wMDcgMi4wMDItNS4yOTNzLS42Ny00LjA0OC0yLjAwMi01LjI5NGMtMS4zNDEtMS4yNDYtMi45MzktMS44NjUtNC43MzUtMS44NjUtMS43OTYgMC0zLjM2OS42MTktNC43MDEgMS44NjUtMS4zMzIgMS4yNDYtMi4wMDIgMy4wMDgtMi4wMDIgNS4yOTQgMCAyLjI4Ni42NyA0LjA0NyAyLjAwMiA1LjI5MyAxLjMzMiAxLjI0NyAyLjg3OSAxLjg2NSA0LjcwMSAxLjg2NXptMjMuNDI2LTguOTJsLTMuMDA3LS41NzZjLTEuNTU2LS4zLTIuMzM4LTEuMTA4LTIuMzM4LTIuNDIzIDAtLjc0OC4zMTgtMS4zOTIuOTM3LTEuOTI1LjYxOC0uNTMzIDEuNDM1LS44MDggMi40MjMtLjgwOCAxLjIxMiAwIDIuMTMxLjMxOCAyLjc1OS45MzcuNjI3LjYyNyAxLjAxNCAxLjMyMyAxLjE1MSAyLjA5NmwzLjc2NC0xLjE1MWE3LjQ2IDcuNDYgMCAwMC0uNjk2LTEuOTA4Yy0uMzI2LS42MS0uNzgyLTEuMTk0LTEuMzY2LTEuNzc5LS41ODQtLjU4NC0xLjM2Ny0xLjA0LTIuMzM4LTEuMzgzLS45NzEtLjM0NC0yLjA3MS0uNTE2LTMuMzA4LS41MTYtMi4wNjMgMC0zLjgyNC42NDUtNS4yOTQgMS45NDItMS40NjkgMS4yOTgtMi4yIDIuODk2LTIuMiA0Ljc5NiAwIDEuNTk4LjUwNyAyLjkzIDEuNTEzIDQuMDA0IDEuMDE0IDEuMDc0IDIuMzg5IDEuNzg4IDQuMTI1IDIuMTU3bDMuMDA3LjYxYy44MjUuMTY0IDEuNDcuNDczIDEuOTI1LjkyOC40NTYuNDU2LjY3OS45OTcuNjc5IDEuNjI1IDAgLjc5LS4zMDkgMS40MjYtLjkyOCAxLjkwNy0uNjE5LjQ4Mi0xLjQ2OS43MzEtMi41NjEuNzMxLTEuNDM1IDAtMi41NTItLjM4Ny0zLjM1MS0xLjE1Mi0uOC0uNzY0LTEuMjQ2LTEuNzI3LTEuMzUtMi44NzhsLTMuODg0IDEuMDNjLjA3Ny44MDkuMzA5IDEuNTkuNjc5IDIuMzU1YTguNDQzIDguNDQzIDAgMDAxLjU2NCAyLjE1OGMuNjcuNjc4IDEuNTQ3IDEuMjIgMi42MzggMS42MjQgMS4wOTIuNDA0IDIuMzEyLjYxIDMuNjcuNjEgMi4zNjMgMCA0LjI1NC0uNjYyIDUuNjU1LTEuOTg1IDEuNC0xLjMyNCAyLjEwNS0yLjg4IDIuMTA1LTQuNjU4IDAtMS41NTYtLjUyNC0yLjkxMy0xLjU4MS00LjA2NS0xLjA1Ny0xLjE1MS0yLjUyNy0xLjkwOC00LjQyNi0yLjI3N2wuMDM0LS4wMjZ6bTE0LjMxOC01LjAxaC02Ljc5OHYtMy45N2gxNy44MDZ2My45N2gtNi43ODl2MTcuNTRoLTQuMjE5VjM1Ljc4em0xMy45NTYgMTcuNTRoMTMuNDY2di0zLjk0NWgtOS4yODFWNDQuNGg4LjQwNXYtMy43M2gtOC40MDV2LTQuOTE1aDkuMjgxVjMxLjgxaC0xMy40NjZ2MjEuNTF6bTMxLjY4NS0xMS4wMjZjLS44MTYgMS4wNzQtMS45MzQgMS44MjItMy4zNTIgMi4yMjZsNC42MTUgOC44aC00LjY3NWwtNC4yMTktOC4yODVoLTIuMTgzdjguMjg1aC00LjIyVjMxLjgxaDguNDA1YzIuMDYzIDAgMy43MjEuNjI3IDQuOTc2IDEuODgyIDEuMjU1IDEuMjU0IDEuODgyIDIuODM1IDEuODgyIDQuNzM1IDAgMS40OTUtLjQxMyAyLjc4NC0xLjIyOSAzLjg2N3ptLTYuNDItLjg2OGMxLjA1OCAwIDEuODgzLS4yNjcgMi40NzUtLjgxN3YtLjAwOGMuNTkzLS41NS44OTQtMS4yNDYuODk0LTIuMTU3cy0uMzAxLTEuNjMzLS44OTQtMi4xODNjLS42MDEtLjU0MS0xLjQyNi0uODE2LTIuNDc1LS44MTZoLTMuMzk0djUuOThoMy4zOTR6IiBmaWxsPSJ1cmwoI3ByZWZpeF9fcGFpbnQwX2xpbmVhcl8xMDU3XzI1MTMpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJwcmVmaXhfX3BhaW50MF9saW5lYXJfMTA1N18yNTEzIiB4MT0iNDguNzc5IiB5MT0iNjguNjk3IiB4Mj0iMjU2Ljc2MSIgeTI9IjEwLjMyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM2NjI2ODEiLz48c3RvcCBvZmZzZXQ9Ii44MTciIHN0b3AtY29sb3I9IiNCOTFDN0IiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=";const zM=He.img`
  --base-logo: url(${pM});

  [data-theme='light'] & {
    --base-logo: url(${pM});
  }

  [data-theme='dark'] & {
    --base-logo: url(${"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9Ijc3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNi40OCA0Mi41ODNjLS4xMy0uMzQzLS4yNi0uNjg3LS4zNy0xLjA0MS0xLjI5LTQuMjA0LTIuMDItMTMuMjUyLTIuNDgtMTguNDg4LTEuMDYtMTEuODQ3LTUuMTktMjEuNTYyLTExLjU3LTIxLjkxNnYtLjA3OWMtNi4zOC4zNDQtMTAuNTEgMTAuMDctMTEuNTcgMjEuOTA3LS40NyA1LjI0NS0xLjE5IDE0LjI4My0yLjQ4IDE4LjQ4OC0uMTIuMzUzLS4yNC43MDctLjM3IDEuMDQtMTkuODYgMTAuMTY4IDkuNiAxMS41MDQgMTQuNDIgMTEuNTczdi4wNzljNC44Mi0uMDcgMzQuMjktMS40MDUgMTQuNDItMTEuNTcydi4wMXoiIGZpbGw9IiMxMzE1MjEiLz48cGF0aCBkPSJNMzEuMTggNTguMjI1YzEuNzQtMy4xMiAzLTcuNTEgMy05Ljk3IDAtLjYyLS4wNi0xLjI2LS4xNi0xLjg3LS4zNS0yLjE0LTEuNTItMy41OS0yLjgyLTMuNThoLS4wM2MtMS4zMSAwLTIuNDcgMS40NC0yLjgyIDMuNTgtLjEuNjItLjE2IDEuMjUtLjE2IDEuODcgMCAyLjQ2IDEuMjYgNi44NCAzIDkuOTdoLS4wMXoiIGZpbGw9IiNDMTFDNzkiLz48cGF0aCBkPSJNMzEuMTggNTEuOTM1Yy45NC0xLjY5IDEuNjItNC4wNyAxLjYyLTUuNCAwLS4zNC0uMDMtLjY4LS4wOC0xLjAxLS4xOS0xLjE2LS44Mi0xLjk0LTEuNTMtMS45NGgtLjAyYy0uNzEgMC0xLjM0Ljc4LTEuNTMgMS45NC0uMDYuMzMtLjA4LjY4LS4wOCAxLjAxIDAgMS4zMy42OCAzLjcxIDEuNjIgNS40eiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0xMi44NyA1OC42OTZjMS43NC0zLjEyIDMtNy41MSAzLTkuOTcgMC0uNjItLjA2LTEuMjYtLjE2LTEuODctLjM1LTIuMTQtMS41Mi0zLjU5LTIuODItMy41OGgtLjAzYy0xLjMxIDAtMi40NyAxLjQ0LTIuODIgMy41OC0uMS42Mi0uMTYgMS4yNS0uMTYgMS44NyAwIDIuNDYgMS4yNiA2Ljg0IDMgOS45N2gtLjAxeiIgZmlsbD0iI0MxMUM3OSIvPjxwYXRoIGQ9Ik0xMi44NyA1MS45MzZjLjk0LTEuNjkgMS42Mi00LjA3IDEuNjItNS40IDAtLjM0LS4wMy0uNjgtLjA5LTEuMDEtLjE5LTEuMTYtLjgyLTEuOTQtMS41My0xLjk0aC0uMDJjLS43MSAwLTEuMzQuNzgtMS41MyAxLjk0LS4wNi4zMy0uMDkuNjgtLjA5IDEuMDEgMCAxLjMzLjY4IDMuNzEgMS42MiA1LjRoLjAyeiIgZmlsbD0iI0ZGNDM4QiIvPjxwYXRoIGQ9Ik0yMi4wMiA2Ny4yNDZjMi43OC00LjU5IDQuNzktMTEuMDIgNC43OS0xNC42MyAwLS45Mi0uMDktMS44NS0uMjUtMi43NS0uNTctMy4xNC0yLjQzLTUuMjctNC41Mi01LjI2aC0uMDVjLTIuMDktLjAxLTMuOTUgMi4xMS00LjUyIDUuMjYtLjE2LjktLjI1IDEuODMtLjI1IDIuNzUgMCAzLjYxIDIuMDEgMTAuMDUgNC43OSAxNC42M2guMDF6IiBmaWxsPSIjQzExQzc5Ii8+PHBhdGggZD0iTTIyLjAyIDU4LjExNWMxLjI2LTIuMDEgMi4xNy00Ljg0IDIuMTctNi40MyAwLS40LS4wNC0uODEtLjExLTEuMjEtLjI2LTEuMzgtMS4xLTIuMzItMi4wNC0yLjMxaC0uMDJjLS45NCAwLTEuNzkuOTMtMi4wNCAyLjMxLS4wNy40LS4xMS44MS0uMTEgMS4yMSAwIDEuNTkuOTEgNC40MSAyLjE3IDYuNDNoLS4wMnoiIGZpbGw9IiNGRjQzOEIiLz48cGF0aCBkPSJNMjIuMDggMi4xMzVjLTUuODkgMC05LjMxIDEyLjM4LTEwLjEgMjEuNDctLjM0IDMuOTUtLjgzIDExLjA2LTEuNDMgMTQuMzItLjM1IDEuOTQtMS41NSA1LjEyLTEuNjQgNS4zNy01LjM3IDMuMzItNi42MiA0Ljg1LTYuMzEgNS4yMy4xNC4xNiAyLjE5LS4yNSA0LjU4LS43NSAxLjg2LS4zOSAzLjk2LS43NyA1LjMyLTEuNDUgNS4zMS0yLjY0IDQuNTUtOC4xOSA1LjQ2LTguMjIgMS4wNC0uMDMuNDIgMS42NyAxLjE5IDMuNTMgMS4wMyAyLjUgMy43MyA1LjMgMTAuMTQgNC4zNC0xLjc4LTEuNTUtMi4xNi03LjgxLTEuMDQtNy44MS44NCAwIC4xNCAzLjI3IDMuNjIgNi42MSAzLjE5IDMuMDcgOS43NCAzLjk4IDkuNzkgMy43NC4yMi0xLjIxLTQuNDItMy42Ni02LjQ2LTUuMTktMS40MS0zLjMzLTIuNDQtMTcuNTctMi42OC0xOS43Ny0xLjEyLTEwLjI3LTQuMzQtMjEuNDMtMTAuNDMtMjEuNDNsLS4wMS4wMXoiIGZpbGw9IiNFOEU4RTgiLz48cGF0aCBkPSJNMjIuMDggMi4xMzZjNi4wOSAwIDkuMzIgMTEuMTYgMTAuNDMgMjEuNDMuMjQgMi4xOSAxLjI3IDE2LjQ0IDIuNjggMTkuNzcgMi4wNCAxLjUzIDYuNjcgMy45NyA2LjQ2IDUuMTkgMCAuMDItLjA3LjA0LS4yLjA0LTEuMTMgMC02LjcxLTEuMDItOS41OC0zLjc4LTMuNDgtMy4zNS0yLjc4LTYuNjEtMy42Mi02LjYxLTEuMTIgMC0uNzQgNi4yNiAxLjA0IDcuODEtLjg4LjEzLTEuNjkuMTktMi40NC4xOS00LjY4IDAtNi44MS0yLjM4LTcuNy00LjU0LS43Ni0xLjg1LS4xNy0zLjUzLTEuMTctMy41M2gtLjAzYy0uOTEuMDMtLjE1IDUuNTgtNS40NiA4LjIyLTEuMzYuNjgtMy40NSAxLjA1LTUuMzIgMS40NS0yLjAyLjQzLTMuODEuNzktNC4zOS43OS0uMSAwLS4xNy0uMDEtLjE5LS4wNC0uMzEtLjM3Ljk0LTEuOTEgNi4zMS01LjIzLjEtLjI2IDEuMjktMy40MyAxLjY0LTUuMzcuNTktMy4yNiAxLjA4LTEwLjM2IDEuNDMtMTQuMzIuODEtOS4xIDQuMjItMjEuNDcgMTAuMTEtMjEuNDd6bTAtMS42MWMtNy42NiAwLTEwLjk2IDE0LjQyLTExLjcgMjIuOTQtLjA3Ljg0LS4xNSAxLjgxLS4yNCAyLjg2LS4zMiAzLjkyLS43MiA4LjgxLTEuMTcgMTEuMy0uMjQgMS4zMi0uOTcgMy40Ni0xLjM4IDQuNTgtNi4zMSAzLjk2LTYuNTEgNS4xOS02LjYyIDUuODYtLjA5LjU0LjA1IDEuMDcuMzkgMS40OC4zNC40MS44Mi42MiAxLjQzLjYyczEuNzctLjIgNC43Mi0uODNsLjctLjE1YzEuNzgtLjM3IDMuNjMtLjc1IDUtMS40NCAyLjU4LTEuMjggMy45NS0zLjE3IDQuNzQtNC44OCAxLjA0IDIuMDcgMy40NyA0LjkgOC45IDQuOS44NCAwIDEuNzQtLjA3IDIuNjctLjIxbDIuNzYtLjQxYzMuMzggMi4yMyA4LjAyIDMuMDEgOS4xNyAzLjAxIDEuNSAwIDEuNzYtMS4yMyAxLjc5LTEuMzcuMzQtMS45Mi0xLjg4LTMuMzUtNC45Ni01LjM0LS42NC0uNDEtMS4yNS0uOC0xLjc0LTEuMTUtMS4wMS0zLjEtMS44OS0xMy4wNC0yLjIzLTE2Ljg5LS4wOC0uOTQtLjE1LTEuNjYtLjE5LTIuMDMtLjc1LTYuODYtMy40Mi0yMi44NS0xMi4wNC0yMi44NXoiIGZpbGw9IiMxMzE1MjEiLz48cGF0aCBkPSJNMTguMzIgMjEuOTE2YzEuMTMyIDAgMi4wNS0xLjU5OSAyLjA1LTMuNTcgMC0xLjk3Mi0uOTE4LTMuNTctMi4wNS0zLjU3LTEuMTMyIDAtMi4wNSAxLjU5OC0yLjA1IDMuNTcgMCAxLjk3MS45MTggMy41NyAyLjA1IDMuNTd6TTI1LjkgMjEuOTE2YzEuMTMyIDAgMi4wNS0xLjU5OSAyLjA1LTMuNTcgMC0xLjk3Mi0uOTE4LTMuNTctMi4wNS0zLjU3LTEuMTMyIDAtMi4wNSAxLjU5OC0yLjA1IDMuNTcgMCAxLjk3MS45MTggMy41NyAyLjA1IDMuNTd6IiBmaWxsPSIjMTMxNTIxIi8+PHBhdGggb3BhY2l0eT0iLjIiIGQ9Ik0xOS4xNiAzNy43NjZjLS4zNSAxLjU5LS40NyAyLjg1LjMzIDQuNTYuNjkgMS4yOCAxLjg3IDIuNTQgMy43OSAzLjI1LTIuOTEtMi45LTMuMi00LjUyLTQuMTEtNy44MWgtLjAxek0xMi45NyA0Ni4wNTZjLjQ4LTEuNjMgMS00Ljg1LjkzLTYuNTgtLjA5LjYyLTEuODUgNC4yMy0xLjg1IDQuMjNzLTEuOTEgMi4xNy00LjQ3IDMuOTdjMS43Ni0uMzcgMy42NS0uNzQgNC45MS0xLjM2LjE3LS4wOC4zMy0uMTcuNDgtLjI2ek0yOC43OCAzNy4wOTZjMCAxLjIyLjE0IDMuNTggMS4yNyA1LjQyLjQzLjcyIDEuMDEgMS40OSAxLjgxIDIuMjYgMi4zNyAyLjI4IDYuNiAzLjM3IDguNjMgMy42OC03LjI1LTMuNTktOS41NC02LjYxLTExLjcxLTExLjM2eiIgZmlsbD0iIzJFMzA0OCIvPjxwYXRoIGQ9Ik0yMi4yNCAyNS41NTVjLjQ3IDAgLjg1LS40ODMuODUtMS4wOCAwLS41OTYtLjM4LTEuMDgtLjg1LTEuMDhzLS44NS40ODQtLjg1IDEuMDhjMCAuNTk3LjM4IDEuMDguODUgMS4wOHoiIGZpbGw9IiMxMzE1MjEiLz48cGF0aCBkPSJNMjguMDY4IDYuNzI3Yy0xLjU4NC0yLjgxNS0zLjU3Mi00LjYwMi02LjAyNC00LjYwMi0yLjI4IDAtNi41MjYgMi40OTMtOS4wNDkgMTQuNjAxIDMuMDI3LTUuNTUgNS41NS0xMi4xMDggOS4yMS0xMS42NzQgMi4wOCAwIDQuMDM3LjU5NSA1Ljg1MyAxLjY2NWwuMDEuMDF6IiBmaWxsPSIjQzNDM0M4Ii8+PHBhdGggb3BhY2l0eT0iLjQiIGQ9Ik0yMi4wNiA3Ni40NjZjMTAuMjc4IDAgMTguNjEtMS4zODQgMTguNjEtMy4wOSAwLTEuNzA3LTguMzMyLTMuMDktMTguNjEtMy4wOS0xMC4yNzggMC0xOC42MSAxLjM4My0xOC42MSAzLjA5IDAgMS43MDYgOC4zMzIgMy4wOSAxOC42MSAzLjA5eiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik02NC4wODQgMTQuOTI4djEwLjE2YzAgLjUyLjAzIDEgLjA4IDEuNDJoLTEuNzhjLS4wNS0uMy0uMDgtLjYzLS4wOC0xLjAxLS4xOS4zNS0uNDkuNjQtLjkuODYtLjQxLjIyLS44Ny4zNC0xLjM5LjM0LTEuMTEgMC0yLjAxLS4zOS0yLjctMS4xNy0uNjktLjc4LTEuMDQtMS43Ni0xLjA0LTIuOTRzLjM1LTIuMTEgMS4wNS0yLjljLjctLjc5IDEuNTktMS4xOCAyLjY2LTEuMTguNjIgMCAxLjEyLjExIDEuNS4zNC4zOC4yMy42NC40OS43OS43OHYtNC43aDEuODF6bS01Ljk1IDcuNjZjMCAuNzUuMTkgMS4zNS41OCAxLjguMzguNDUuODkuNjggMS41Mi42OHMxLjEtLjIzIDEuNDktLjY5Yy4zOS0uNDYuNTgtMS4wNi41OC0xLjgxcy0uMTktMS4zMi0uNTYtMS43NmMtLjM3LS40NC0uODctLjY2LTEuNDktLjY2cy0xLjEyLjIyLTEuNTIuNjZjLS4zOS40NC0uNTkgMS4wMy0uNTkgMS43N2wtLjAxLjAxek03NC40MzQgMjYuNTA4bC0xLjA3LTIuODVoLTQuOGwtMS4wNiAyLjg1aC0yLjAzbDQuNDItMTEuMzRoMi4yMmw0LjQyIDExLjM0aC0yLjF6bS0zLjQ3LTkuMjZsLTEuNzMgNC42NGgzLjQ2bC0xLjczLTQuNjR6TTc5LjY4NCAyOS41NDhoLTEuODR2LTEwLjgzaDEuNzl2MS4wNmMuMi0uMzUuNTItLjY0Ljk2LS44OC40NC0uMjMuOTQtLjM1IDEuNTItLjM1IDEuMTIgMCAyIC4zOCAyLjY0IDEuMTQuNjQuNzYuOTYgMS43NC45NiAyLjkycy0uMzQgMi4xNi0xLjAxIDIuOTRjLS42Ny43Ny0xLjU2IDEuMTYtMi42NiAxLjE2LS41MyAwLTEuMDEtLjEtMS40Mi0uMy0uNDItLjItLjczLS40Ni0uOTQtLjc3djMuOTItLjAxem00LjE4LTYuOTRjMC0uNzItLjE5LTEuMzEtLjU4LTEuNzUtLjM4LS40NC0uODktLjY2LTEuNTItLjY2cy0xLjEyLjIyLTEuNTEuNjZjLS4zOS40NC0uNTggMS4wMy0uNTggMS43NXMuMTkgMS4zMy41OCAxLjc4Yy4zOS40NS44OS42NyAxLjUxLjY3czEuMTItLjIyIDEuNTEtLjY3Yy4zOS0uNDUuNTgtMS4wNC41OC0xLjc4aC4wMXpNODkuMzQ0IDI5LjU0OGgtMS44NHYtMTAuODNoMS43OXYxLjA2Yy4yLS4zNS41Mi0uNjQuOTYtLjg4LjQ0LS4yMy45NC0uMzUgMS41Mi0uMzUgMS4xMiAwIDIgLjM4IDIuNjQgMS4xNC42NC43Ni45NiAxLjc0Ljk2IDIuOTJzLS4zNCAyLjE2LTEuMDEgMi45NGMtLjY3Ljc3LTEuNTYgMS4xNi0yLjY2IDEuMTYtLjUzIDAtMS4wMS0uMS0xLjQyLS4zLS40Mi0uMi0uNzMtLjQ2LS45NC0uNzd2My45Mi0uMDF6bTQuMTgtNi45NGMwLS43Mi0uMTktMS4zMS0uNTgtMS43NS0uMzgtLjQ0LS44OS0uNjYtMS41Mi0uNjZzLTEuMTIuMjItMS41MS42NmMtLjM5LjQ0LS41OCAxLjAzLS41OCAxLjc1cy4xOSAxLjMzLjU4IDEuNzhjLjM5LjQ1Ljg5LjY3IDEuNTEuNjdzMS4xMi0uMjIgMS41MS0uNjdjLjM5LS40NS41OC0xLjA0LjU4LTEuNzhoLjAxeiIgZmlsbD0iI0JGQkZCRiIvPjxwYXRoIGQ9Ik02Ny4zODQgNDIuMzZjLjkwNi0uMjk5IDEuNjUtLjg3MSAyLjIzLTEuNy41ODItLjgzLjg3My0xLjc5NS44NzMtMi44OCAwLTEuNzEtLjU4MS0zLjA5NS0xLjczNS00LjE2M0M2Ny41OTggMzIuNTUgNjYgMzIuMDIgNjMuOTY2IDMyLjAyaC03LjY5MnYyMS4zOTJoOC4yNjRjMS45OTIgMCAzLjU5LS41NTYgNC43OTUtMS42NzUgMS4yMDUtMS4xMiAxLjgxMi0yLjU0NyAxLjgxMi00LjMgMC0xLjI5LS4zNi0yLjM4NC0xLjA2OS0zLjMwNy0uNzE3LS45MTQtMS42MTUtMS41MDQtMi43LTEuNzY5aC4wMDh6bS03LTYuODQ2aDIuOTI0Yy45ODIgMCAxLjc0My4yNCAyLjI4Mi43MS41My40Ny44MDMgMS4xMi44MDMgMS45NDkgMCAuODI4LS4yNzQgMS40NzgtLjgxMiAxLjk1Ny0uNTQ3LjQ4Ny0xLjI5LjcyNi0yLjIzLjcyNmgtMi45NTh2LTUuMzQyaC0uMDA4em01Ljc1MiAxMy42ODNjLS41NzIuNDk2LTEuMzU4Ljc0NC0yLjM2Ny43NDRoLTMuMzc2di01LjY0aDMuNDM2YzEuMDA5IDAgMS43ODYuMjY0IDIuMzQyLjc4Ni41NTUuNTIuODI5IDEuMjEzLjgyOSAyLjA4NSAwIC44NzItLjI4MiAxLjU0Ny0uODY0IDIuMDM0di0uMDA5eiIgZmlsbD0idXJsKCNwcmVmaXhfX3BhaW50MF9saW5lYXJfMTEwNl81NTI4KSIvPjxwYXRoIGQ9Ik04NC40IDMxLjU1OGMtMy4wMTcgMC01LjU5OCAxLjAyNS03Ljc1MSAzLjA3Ni0yLjE1NCAyLjA1MS0zLjIzIDQuNzQzLTMuMjMgOC4wODUgMCAzLjM0MiAxLjA3NiA2LjAwOCAzLjIzIDguMDYgMi4xNTMgMi4wNSA0LjczNCAzLjA3NiA3Ljc1MSAzLjA3NiAzLjAxNyAwIDUuNjMyLTEuMDI1IDcuNzg2LTMuMDc2IDIuMTU0LTIuMDUyIDMuMjMtNC43MzUgMy4yMy04LjA2IDAtMy4zMjQtMS4wNzYtNi4wMzQtMy4yMy04LjA4NS0yLjE1NC0yLjA1LTQuNzQzLTMuMDc2LTcuNzg2LTMuMDc2em00LjcxIDE2LjRjLTEuMzI1IDEuMjQtMi44OTggMS44NTUtNC43MSAxLjg1NS0xLjgxMSAwLTMuMzUtLjYxNi00LjY3NS0xLjg1NS0xLjMyNC0xLjI0LTEuOTktMi45OTEtMS45OS01LjI2NCAwLTIuMjc0LjY2Ni00LjAyNiAxLjk5LTUuMjY1IDEuMzI1LTEuMjQgMi44OS0xLjg1NSA0LjY3NS0xLjg1NSAxLjc4NyAwIDMuMzc2LjYxNiA0LjcxIDEuODU1IDEuMzI0IDEuMjQgMS45OSAyLjk5MSAxLjk5IDUuMjY0IDAgMi4yNzQtLjY2NiA0LjAyNi0xLjk5IDUuMjY1eiIgZmlsbD0idXJsKCNwcmVmaXhfX3BhaW50MV9saW5lYXJfMTEwNl81NTI4KSIvPjxwYXRoIGQ9Ik0xMDguNzQ5IDMxLjU1OGMtMy4wMTcgMC01LjU5OCAxLjAyNS03Ljc1MSAzLjA3Ni0yLjE1NCAyLjA1MS0zLjIzIDQuNzQzLTMuMjMgOC4wODUgMCAzLjM0MiAxLjA3NiA2LjAwOCAzLjIzIDguMDYgMi4xNTMgMi4wNSA0LjczNCAzLjA3NiA3Ljc1MSAzLjA3NiAzLjAxNyAwIDUuNjMyLTEuMDI1IDcuNzg2LTMuMDc2IDIuMTU0LTIuMDUyIDMuMjMxLTQuNzM1IDMuMjMxLTguMDYgMC0zLjMyNC0xLjA3Ny02LjAzNC0zLjIzMS04LjA4NS0yLjE1NC0yLjA1LTQuNzQzLTMuMDc2LTcuNzg2LTMuMDc2em00LjcwOSAxNi40Yy0xLjMyNCAxLjI0LTIuODk3IDEuODU1LTQuNzA5IDEuODU1LTEuODEyIDAtMy4zNS0uNjE2LTQuNjc1LTEuODU1LTEuMzI0LTEuMjQtMS45OTEtMi45OTEtMS45OTEtNS4yNjQgMC0yLjI3NC42NjctNC4wMjYgMS45OTEtNS4yNjUgMS4zMjUtMS4yNCAyLjg4OS0xLjg1NSA0LjY3NS0xLjg1NSAxLjc4NyAwIDMuMzc2LjYxNiA0LjcwOSAxLjg1NSAxLjMyNSAxLjI0IDEuOTkyIDIuOTkxIDEuOTkyIDUuMjY0IDAgMi4yNzQtLjY2NyA0LjAyNi0xLjk5MiA1LjI2NXoiIGZpbGw9InVybCgjcHJlZml4X19wYWludDJfbGluZWFyXzExMDZfNTUyOCkiLz48cGF0aCBkPSJNMTMyLjA0NyA0MC45NDFsLTIuOTkxLS41NzJjLTEuNTQ3LS4zLTIuMzI1LTEuMTAzLTIuMzI1LTIuNDEgMC0uNzQ0LjMxNi0xLjM4NS45MzItMS45MTUuNjE1LS41MyAxLjQyNy0uODAzIDIuNDEtLjgwMyAxLjIwNSAwIDIuMTE5LjMxNiAyLjc0My45MzIuNjI0LjYyMyAxLjAwOSAxLjMxNiAxLjE0NSAyLjA4NWwzLjc0NC0xLjE0NWE3LjQyMiA3LjQyMiAwIDAwLS42OTMtMS44OThjLS4zMjQtLjYwNi0uNzc3LTEuMTg4LTEuMzU4LTEuNzY5LS41ODItLjU4LTEuMzU5LTEuMDM0LTIuMzI1LTEuMzc2LS45NjYtLjM0Mi0yLjA2LS41MTItMy4yOTEtLjUxMi0yLjA1MSAwLTMuODAzLjY0LTUuMjY0IDEuOTMxLTEuNDYyIDEuMjktMi4xODggMi44OC0yLjE4OCA0Ljc2OSAwIDEuNTkuNTA0IDIuOTE0IDEuNTA0IDMuOTgzIDEuMDA5IDEuMDY4IDIuMzc2IDEuNzc3IDQuMTAyIDIuMTQ1bDIuOTkyLjYwNmMuODIuMTYzIDEuNDYxLjQ3IDEuOTE0LjkyNC40NTMuNDUzLjY3NS45OS42NzUgMS42MTUgMCAuNzg2LS4zMDcgMS40MTktLjkyMyAxLjg5Ny0uNjE1LjQ3OS0xLjQ2MS43MjctMi41NDcuNzI3LTEuNDI3IDAtMi41MzgtLjM4NS0zLjMzMy0xLjE0Ni0uNzk1LS43Ni0xLjIzOS0xLjcxOC0xLjM0MS0yLjg2M2wtMy44NjMgMS4wMjZjLjA3Ni44MDMuMzA3IDEuNTgxLjY3NSAyLjM0Mi4zNzYuNzUyLjg4OSAxLjQ3IDEuNTU1IDIuMTQ1LjY2Ny42NzUgMS41MzggMS4yMTMgMi42MjQgMS42MTUgMS4wODUuNDAyIDIuMjk5LjYwNyAzLjY0OS42MDcgMi4zNTEgMCA0LjIzMS0uNjU4IDUuNjI0LTEuOTc0IDEuMzkzLTEuMzE2IDIuMDk0LTIuODYzIDIuMDk0LTQuNjMzIDAtMS41NDctLjUyMi0yLjg5Ny0xLjU3My00LjA0MnMtMi41MTMtMS44OTctNC40MDEtMi4yNjVsLjAzNC0uMDI2eiIgZmlsbD0idXJsKCNwcmVmaXhfX3BhaW50M19saW5lYXJfMTEwNl81NTI4KSIvPjxwYXRoIGQ9Ik0xMzkuNTI1IDM1Ljk1OWg2Ljc2djE3LjQ0M2g0LjE5N1YzNS45Nmg2Ljc1MVYzMi4wMWgtMTcuNzA4djMuOTQ5eiIgZmlsbD0idXJsKCNwcmVmaXhfX3BhaW50NF9saW5lYXJfMTEwNl81NTI4KSIvPjxwYXRoIGQ9Ik0xNjAuMTY1IDUzLjQwMmgxMy4zOTJWNDkuNDhoLTkuMjNWNDQuNTNoOC4zNTh2LTMuNzFoLTguMzU4di00Ljg4OGg5LjIzdi0zLjkyMmgtMTMuMzkydjIxLjM5MXoiIGZpbGw9InVybCgjcHJlZml4X19wYWludDVfbGluZWFyXzExMDZfNTUyOCkiLz48cGF0aCBkPSJNMTg4LjM0MiA0NC42NWMxLjQxMS0uNDAxIDIuNTIyLTEuMTQ1IDMuMzMzLTIuMjEzLjgxMi0xLjA3NyAxLjIyMy0yLjM1OSAxLjIyMy0zLjg0NiAwLTEuODg5LS42MjQtMy40NjEtMS44NzItNC43MDktMS4yNDgtMS4yNDgtMi44OTctMS44NzEtNC45NDgtMS44NzFoLTguMzU5djIxLjM5MWg0LjE5NnYtOC4yMzloMi4xNzFsNC4xOTcgOC4yNGg0LjY0OWwtNC41OS04Ljc1MnptLS41ODktMy44ODhjLS41OS41NDctMS40MTEuODEyLTIuNDYyLjgxMmgtMy4zNzZ2LTUuOTQ4aDMuMzc2YzEuMDQzIDAgMS44NjMuMjczIDIuNDYyLjgxMi41ODkuNTQ2Ljg4OCAxLjI2NC44ODggMi4xNyAwIC45MDYtLjI5OSAxLjU5OS0uODg4IDIuMTQ2di4wMDh6IiBmaWxsPSJ1cmwoI3ByZWZpeF9fcGFpbnQ2X2xpbmVhcl8xMTA2XzU1MjgpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJwcmVmaXhfX3BhaW50MF9saW5lYXJfMTEwNl81NTI4IiB4MT0iNjMuNzE4IiB5MT0iODguMzQiIHgyPSI2My43MTgiIHkyPSIyNS45MzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNjYyNjgxIi8+PHN0b3Agb2Zmc2V0PSIuNzIiIHN0b3AtY29sb3I9IiNCOTFDN0IiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icHJlZml4X19wYWludDFfbGluZWFyXzExMDZfNTUyOCIgeDE9Ijg0LjQxOCIgeTE9Ijg4LjM0IiB4Mj0iODQuNDE4IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQyX2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxMDguNzY2IiB5MT0iMS41OTQiIHgyPSIxMDguNzY2IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQzX2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxMjkuOTAyIiB5MT0iODguMzQiIHgyPSIxMjkuOTAyIiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQ0X2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxNDguMzc5IiB5MT0iODguMzQiIHgyPSIxNDguMzc5IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQ1X2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxNjYuODY1IiB5MT0iODguMzQiIHgyPSIxNjYuODY1IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fcGFpbnQ2X2xpbmVhcl8xMTA2XzU1MjgiIHgxPSIxODUuMzI1IiB5MT0iODguMzQiIHgyPSIxODUuMzI1IiB5Mj0iMjUuOTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY2MjY4MSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjQjkxQzdCIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+"});
  }

  content: var(--base-logo);
  display: block;
  flex-shrink: 0;
`;zM.defaultProps={alt:"Logo",className:"dbuitkLogo"};const fM=t=>{var e=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,[]);return o.default.createElement(zM,Object.assign({},e))};const AM=He.svg`
  display: block;
  flex-shrink: 0;

  .themedColor {
    [data-theme='light'] & {
      fill: #2e3048;
    }

    [data-theme='dark'] & {
      fill: #c5c2cb;
    }
  }
`;AM.defaultProps={className:"dbuitkLogoMini"};const CM=t=>{var e=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,[]);return o.default.createElement(AM,Object.assign({width:"76",height:"17",viewBox:"0 0 76 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.default.createElement("path",{d:"M0.232955 13.8857V3.70392H3.79261C4.50189 3.70392 5.08688 3.82656 5.54759 4.07182C6.00829 4.31377 6.35133 4.64024 6.5767 5.05123C6.80208 5.4589 6.91477 5.91131 6.91477 6.40847C6.91477 6.84597 6.83688 7.20724 6.68111 7.49228C6.52865 7.77731 6.32647 8.00269 6.07457 8.16841C5.82599 8.33413 5.55587 8.45676 5.2642 8.53631V8.63574C5.57576 8.65563 5.88897 8.765 6.20384 8.96387C6.5187 9.16273 6.7822 9.44777 6.99432 9.81898C7.20644 10.1902 7.3125 10.6443 7.3125 11.1812C7.3125 11.6916 7.1965 12.1507 6.96449 12.5583C6.73248 12.966 6.36624 13.2892 5.86577 13.5278C5.36529 13.7664 4.71402 13.8857 3.91193 13.8857H0.232955ZM1.46591 12.792H3.91193C4.71733 12.792 5.28906 12.6362 5.62713 12.3247C5.96851 12.0098 6.1392 11.6286 6.1392 11.1812C6.1392 10.8365 6.05137 10.5183 5.87571 10.2267C5.70005 9.93167 5.44981 9.69635 5.125 9.52069C4.80019 9.34171 4.41572 9.25222 3.97159 9.25222H1.46591V12.792ZM1.46591 8.17836H3.75284C4.12405 8.17836 4.45881 8.10544 4.7571 7.95961C5.05871 7.81377 5.29735 7.60828 5.47301 7.34313C5.65199 7.07798 5.74148 6.76642 5.74148 6.40847C5.74148 5.96103 5.5857 5.58153 5.27415 5.26998C4.9626 4.95511 4.46875 4.79767 3.79261 4.79767H1.46591V8.17836ZM13.9918 10.7636V6.24938H15.1651V13.8857H13.9918V12.5931H13.9123C13.7333 12.9809 13.4549 13.3107 13.0771 13.5825C12.6992 13.8509 12.2219 13.9852 11.6452 13.9852C11.168 13.9852 10.7437 13.8808 10.3725 13.672C10.0013 13.4598 9.70964 13.1417 9.49751 12.7174C9.28539 12.2899 9.17933 11.7513 9.17933 11.1017V6.24938H10.3526V11.0221C10.3526 11.5789 10.5084 12.0231 10.82 12.3545C11.1348 12.6859 11.5359 12.8517 12.0231 12.8517C12.3147 12.8517 12.6114 12.7771 12.913 12.6279C13.2179 12.4788 13.4731 12.2501 13.6786 11.9419C13.8874 11.6336 13.9918 11.2409 13.9918 10.7636ZM17.3141 13.8857V6.24938H18.4874V13.8857H17.3141ZM17.9107 4.97665C17.682 4.97665 17.4848 4.89876 17.3191 4.74299C17.1567 4.58721 17.0755 4.39995 17.0755 4.1812C17.0755 3.96245 17.1567 3.77518 17.3191 3.61941C17.4848 3.46363 17.682 3.38574 17.9107 3.38574C18.1394 3.38574 18.3349 3.46363 18.4973 3.61941C18.6631 3.77518 18.7459 3.96245 18.7459 4.1812C18.7459 4.39995 18.6631 4.58721 18.4973 4.74299C18.3349 4.89876 18.1394 4.97665 17.9107 4.97665ZM21.8097 3.70392V13.8857H20.6364V3.70392H21.8097ZM27.2797 6.24938V7.2437H23.3223V6.24938H27.2797ZM24.4757 4.41983H25.649V11.6982C25.649 12.0297 25.697 12.2783 25.7931 12.444C25.8926 12.6064 26.0185 12.7158 26.171 12.7721C26.3268 12.8251 26.4908 12.8517 26.6632 12.8517C26.7924 12.8517 26.8985 12.845 26.9814 12.8318C27.0642 12.8152 27.1305 12.8019 27.1802 12.792L27.4189 13.846C27.3393 13.8758 27.2283 13.9056 27.0858 13.9355C26.9432 13.9686 26.7626 13.9852 26.5439 13.9852C26.2124 13.9852 25.8876 13.9139 25.5694 13.7714C25.2546 13.6289 24.9927 13.4118 24.7839 13.1201C24.5784 12.8285 24.4757 12.4606 24.4757 12.0164V4.41983ZM33.1412 13.8857V3.70392H34.3145V7.46245H34.4139C34.5001 7.32987 34.6194 7.16084 34.7718 6.95534C34.9276 6.74654 35.1497 6.56093 35.438 6.39853C35.7297 6.23281 36.1241 6.14995 36.6213 6.14995C37.2643 6.14995 37.831 6.31069 38.3216 6.63219C38.8121 6.95369 39.1949 7.40942 39.47 7.99938C39.7451 8.58934 39.8826 9.28536 39.8826 10.0874C39.8826 10.8962 39.7451 11.5972 39.47 12.1904C39.1949 12.7804 38.8137 13.2378 38.3265 13.5626C37.8393 13.8841 37.2775 14.0448 36.6412 14.0448C36.1506 14.0448 35.7579 13.9636 35.4629 13.8012C35.1679 13.6355 34.9409 13.4482 34.7818 13.2394C34.6227 13.0273 34.5001 12.8517 34.4139 12.7124H34.2747V13.8857H33.1412ZM34.2946 10.0676C34.2946 10.6443 34.3791 11.153 34.5481 11.5938C34.7172 12.0313 34.9641 12.3744 35.2889 12.623C35.6137 12.8682 36.0114 12.9909 36.4821 12.9909C36.9726 12.9909 37.3819 12.8616 37.71 12.6031C38.0415 12.3412 38.2901 11.9899 38.4558 11.5491C38.6248 11.105 38.7093 10.6111 38.7093 10.0676C38.7093 9.53063 38.6265 9.04673 38.4608 8.61586C38.2984 8.18167 38.0514 7.83863 37.72 7.58674C37.3919 7.33153 36.9792 7.20392 36.4821 7.20392C36.0048 7.20392 35.6038 7.3249 35.2789 7.56685C34.9541 7.80549 34.7089 8.14024 34.5431 8.57111C34.3774 8.99867 34.2946 9.49748 34.2946 10.0676ZM42.1596 16.7494C41.9608 16.7494 41.7834 16.7328 41.6277 16.6997C41.4719 16.6698 41.3642 16.64 41.3045 16.6102L41.6028 15.5761C41.8878 15.649 42.1397 15.6755 42.3585 15.6556C42.5772 15.6357 42.7711 15.538 42.9402 15.3623C43.1125 15.19 43.2699 14.9099 43.4125 14.5221L43.6312 13.9255L40.8074 6.24938H42.0801L44.188 12.3346H44.2676L46.3755 6.24938H47.6483L44.4068 14.9994C44.2609 15.3938 44.0803 15.7203 43.8649 15.9788C43.6494 16.2406 43.3992 16.4345 43.1142 16.5605C42.8324 16.6864 42.5143 16.7494 42.1596 16.7494Z",className:"themedColor"}),o.default.createElement("g",{clipPath:"url(#clip0_1034_1759)"},o.default.createElement("path",{d:"M75.332 7.27398C74.9045 6.53868 74.2692 5.94457 73.5033 5.56221C72.7106 5.17104 71.8348 4.97398 70.9502 4.98574C70.1367 4.97692 69.3322 5.17104 68.6138 5.54751C67.9309 5.90633 67.3491 6.42104 66.9156 7.05339C66.4881 6.51221 65.9538 6.05633 65.3481 5.71515C64.4872 5.23574 63.5105 4.99162 62.5219 5.00339C61.6283 4.99457 60.7466 5.20633 59.9598 5.62104C59.6511 5.7828 59.3602 5.97692 59.093 6.20045V1.91515C59.0989 1.77692 59.0781 1.64162 59.0277 1.51221C58.9772 1.3828 58.9 1.26809 58.802 1.17104C58.7041 1.07398 58.5853 0.997507 58.4547 0.950448C58.3211 0.900448 58.1816 0.87986 58.042 0.885742C57.7719 0.882801 57.5106 0.97986 57.3147 1.16221C57.2108 1.25927 57.1306 1.37398 57.0772 1.50339C57.0208 1.6328 56.997 1.77398 57 1.91221V10.5593C57.0119 11.5152 57.2731 12.4504 57.76 13.274C58.232 14.071 58.9119 14.7299 59.7283 15.1828C60.5773 15.6534 61.5363 15.8946 62.51 15.8857C63.4986 15.9004 64.4753 15.6534 65.3363 15.1769C66.1616 14.7122 66.8444 14.0387 67.3134 13.2269C67.8003 12.3769 68.0497 11.4181 68.0378 10.4416V9.34751C68.0319 8.93574 68.1566 8.5328 68.3941 8.19751C68.6553 7.83574 69.0086 7.54457 69.4213 7.36221C69.8992 7.14751 70.4217 7.04162 70.9472 7.05045C71.4816 7.04162 72.01 7.15339 72.4939 7.37986C72.9244 7.58868 73.2836 7.9181 73.5241 8.32986C73.8031 8.84457 73.9367 9.42398 73.91 10.0063V14.8534C73.91 15.1269 74.0198 15.3887 74.2158 15.5799C74.4117 15.774 74.6759 15.8828 74.955 15.8828C75.2341 15.8828 75.4983 15.774 75.6942 15.5799C75.8902 15.3857 76 15.124 76 14.8534V9.98868C76.0267 9.04162 75.7981 8.10339 75.335 7.27398H75.332ZM60.7644 7.43574C61.1563 7.20633 61.5927 7.05633 62.0469 6.99457C62.4981 6.9328 62.9613 6.95927 63.4006 7.07398C63.843 7.18868 64.2556 7.38868 64.6178 7.66221C64.98 7.93574 65.2828 8.27986 65.5114 8.66809C65.7816 9.13574 65.9359 9.65927 65.9597 10.1975V10.4769C65.9597 10.5063 65.9597 10.5328 65.9597 10.5622C65.9508 11.1387 65.7964 11.7063 65.5084 12.2093C65.2145 12.7181 64.79 13.1446 64.2764 13.4446C63.7391 13.7416 63.1334 13.8975 62.5159 13.8975C61.8984 13.8975 61.2928 13.7416 60.7555 13.4446C60.2389 13.1504 59.8144 12.724 59.5264 12.2093C59.2236 11.6622 59.0692 11.0504 59.0781 10.4269C59.0663 9.80633 59.2206 9.19751 59.5264 8.65339C59.8203 8.14457 60.2448 7.72398 60.7584 7.4328L60.7644 7.43574Z",className:"themedColor"})),o.default.createElement("defs",null,o.default.createElement("clipPath",{id:"clip0_1034_1759"},o.default.createElement("rect",{width:"19",height:"15",fill:"white",transform:"translate(57 0.885742)"}))))},EM=He.main`
  display: flex;
  flex-grow: 1;
`;EM.defaultProps={className:"dbuitkMain"};const OM=EM;const hM=He.svg`
  display: block;
  flex-shrink: 0;

  .theme {
    fill: #2e3048;

    [data-theme='dark'] & {
      fill: #f7f7f7;
    }
  }
`;hM.defaultProps={className:"dark"};const mM=He.svg`
  display: block;
  flex-shrink: 0;

  .theme {
    fill: #fff;

    [data-theme='dark'] & {
      fill: #f7f7f7;
    }
  }
`;mM.defaultProps={className:"light"};const wM=He.div`
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
`,bM=He(wM)`
  left: var(--base-left-end);

  [data-theme='dark'] & {
    cursor: pointer;
  }
`,vM=He(wM)`
  left: var(--base-left-start);

  [data-theme='light'] & {
    cursor: pointer;
  }
`,kM=He.button`
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
    ${vM} {
      opacity: 0.5;
    }
  }

  [data-theme='dark'] &:active {
    ${bM} {
      opacity: 0.5;
    }
  }
`;kM.defaultProps={className:"dbuitkSwitchThemeButton",type:"button"};const YM=He.div`
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
`,QM=(function(t){for(var e=[],M=1;M<arguments.length;M++)e[M-1]=arguments[M];var u=qt(Be.apply(void 0,n([t],e,!1))),r=wt(u);return new me(r,u)})`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,UM=Be`
  cursor: pointer;
  position: relative;
  z-index: 10;

  path {
    transition: fill var(--base-switch-theme-button-animation-delay) ease-in-out;
  }
`,PM=He((t=>{var e=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,[]);return o.default.createElement(mM,Object.assign({fill:"none",height:"20",viewBox:"0 0 21 20",width:"21",xmlns:"http://www.w3.org/2000/svg"},e),o.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M10.1462 6.66667C8.30529 6.66667 6.81291 8.15905 6.81291 10C6.81291 11.8409 8.30529 13.3333 10.1462 13.3333C11.9872 13.3333 13.4796 11.8409 13.4796 10C13.4796 8.15905 11.9872 6.66667 10.1462 6.66667ZM5.14624 10C5.14624 7.23858 7.38482 5 10.1462 5C12.9077 5 15.1462 7.23858 15.1462 10C15.1462 12.7614 12.9077 15 10.1462 15C7.38482 15 5.14624 12.7614 5.14624 10Z",fillRule:"evenodd"}),o.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M10.1464 0C10.6067 0 10.9798 0.373096 10.9798 0.833333V2.5C10.9798 2.96024 10.6067 3.33333 10.1464 3.33333C9.68621 3.33333 9.31311 2.96024 9.31311 2.5V0.833333C9.31311 0.373096 9.68621 0 10.1464 0Z",fillRule:"evenodd"}),o.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M10.1464 16.6667C10.6067 16.6667 10.9798 17.0398 10.9798 17.5V19.1667C10.9798 19.6269 10.6067 20 10.1464 20C9.68621 20 9.31311 19.6269 9.31311 19.1667V17.5C9.31311 17.0398 9.68621 16.6667 10.1464 16.6667Z",fillRule:"evenodd"}),o.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M3.07391 2.9274C3.39935 2.60196 3.92699 2.60196 4.25242 2.9274L5.43576 4.11073C5.76119 4.43617 5.76119 4.9638 5.43576 5.28924C5.11032 5.61468 4.58268 5.61468 4.25724 5.28924L3.07391 4.10591C2.74847 3.78047 2.74847 3.25283 3.07391 2.9274Z",fillRule:"evenodd"}),o.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M14.8569 14.7108C15.1824 14.3853 15.71 14.3853 16.0354 14.7108L17.2188 15.8941C17.5442 16.2195 17.5442 16.7472 17.2188 17.0726C16.8933 17.398 16.3657 17.398 16.0403 17.0726L14.8569 15.8893C14.5315 15.5638 14.5315 15.0362 14.8569 14.7108Z",fillRule:"evenodd"}),o.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M0.146484 10C0.146484 9.53978 0.51958 9.16669 0.979818 9.16669H2.64648C3.10672 9.16669 3.47982 9.53978 3.47982 10C3.47982 10.4603 3.10672 10.8334 2.64648 10.8334H0.979818C0.51958 10.8334 0.146484 10.4603 0.146484 10Z",fillRule:"evenodd"}),o.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M16.8132 10C16.8132 9.53978 17.1863 9.16669 17.6465 9.16669H19.3132C19.7734 9.16669 20.1465 9.53978 20.1465 10C20.1465 10.4603 19.7734 10.8334 19.3132 10.8334H17.6465C17.1863 10.8334 16.8132 10.4603 16.8132 10Z",fillRule:"evenodd"}),o.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M5.43576 14.7108C5.76119 15.0362 5.76119 15.5638 5.43576 15.8893L4.25242 17.0726C3.92699 17.398 3.39935 17.398 3.07391 17.0726C2.74847 16.7472 2.74847 16.2195 3.07391 15.8941L4.25724 14.7108C4.58268 14.3853 5.11032 14.3853 5.43576 14.7108Z",fillRule:"evenodd"}),o.default.createElement("path",{className:"theme",fill:"#fff",clipRule:"evenodd",d:"M17.2188 2.9274C17.5442 3.25283 17.5442 3.78047 17.2188 4.10591L16.0354 5.28924C15.71 5.61468 15.1824 5.61468 14.8569 5.28924C14.5315 4.9638 14.5315 4.43617 14.8569 4.11073L16.0403 2.9274C16.3657 2.60196 16.8933 2.60196 17.2188 2.9274Z",fillRule:"evenodd"}))}))`
  ${UM}

  [data-theme='light'] & {
    animation: ${QM} var(--base-switch-theme-button-animation-delay) linear;
    cursor: default;
  }
`,ZM=He((t=>{var e=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,[]);return o.default.createElement(hM,Object.assign({fill:"none",height:"18",viewBox:"0 0 19 18",width:"19",xmlns:"http://www.w3.org/2000/svg"},e),o.default.createElement("path",{className:"theme",fill:"#2e3048",clipRule:"evenodd",d:"M9.04723 0.376814C9.19049 0.631 9.17106 0.945625 8.99763 1.18026C8.18646 2.27769 7.79611 3.62981 7.8976 4.99071C7.99909 6.35161 8.58566 7.63088 9.55063 8.59585C10.5156 9.56083 11.7949 10.1474 13.1558 10.2489C14.5167 10.3504 15.8688 9.96003 16.9662 9.14885C17.2009 8.97542 17.5155 8.956 17.7697 9.09925C18.0239 9.24251 18.1702 9.52171 18.1433 9.81225C17.9857 11.5178 17.3456 13.1431 16.298 14.4982C15.2503 15.8532 13.8384 16.8818 12.2275 17.4637C10.6166 18.0456 8.87327 18.1566 7.20153 17.7839C5.5298 17.4111 3.99879 16.5699 2.78767 15.3588C1.57654 14.1477 0.735386 12.6167 0.362628 10.945C-0.0101295 9.27321 0.100927 7.52989 0.682804 5.91897C1.26468 4.30804 2.29331 2.89615 3.64833 1.8485C5.00335 0.800846 6.62871 0.160765 8.33424 0.00315322C8.62477 -0.0236961 8.90398 0.122627 9.04723 0.376814ZM6.96762 1.77251C6.09814 2.03739 5.27962 2.45862 4.55389 3.01974C3.42133 3.89539 2.56158 5.07548 2.07524 6.42192C1.58889 7.76837 1.49607 9.22548 1.80763 10.6228C2.11919 12.02 2.82224 13.2997 3.83453 14.312C4.84681 15.3242 6.12646 16.0273 7.52373 16.3389C8.92101 16.6504 10.3781 16.5576 11.7246 16.0712C13.071 15.5849 14.2511 14.7252 15.1267 13.5926C15.6879 12.8669 16.1091 12.0483 16.374 11.1789C15.331 11.6196 14.1908 11.8107 13.0457 11.7253C11.3312 11.5974 9.71948 10.8584 8.50377 9.64271C7.28806 8.427 6.54907 6.81532 6.42122 5.10081C6.33582 3.95567 6.52684 2.81547 6.96762 1.77251Z",fillRule:"evenodd"}))}))`
  ${UM}

  [data-theme='dark'] & {
    animation: ${QM} var(--base-switch-theme-button-animation-delay) linear;
    cursor: default;
  }
`,GM=t=>{var{onClick:e}=t,M=function(t,e){var M={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&e.indexOf(u)<0&&(M[u]=t[u]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(u=Object.getOwnPropertySymbols(t);r<u.length;r++)e.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(t,u[r])&&(M[u[r]]=t[u[r]])}return M}(t,["onClick"]);return o.default.createElement(kM,Object.assign({onClick:e},M),o.default.createElement(vM,null,o.default.createElement(ZM,null)),o.default.createElement(bM,null,o.default.createElement(PM,null)),o.default.createElement(YM,null))},RM=He.p`
  color: var(--theme-color-text, #000);
  font-size: var(--base-text-font-size, 16px);
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 calc(var(--base-gap, 8px) * 2);
  max-width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;RM.defaultProps={className:"dbuitkText"};const WM=RM,VM=Be`
  ${({$cssVarRoot:t})=>Be`
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
`,BM=He.button`
  /**
   * You can use a combination of these to make any component look like a button
   */
  ${_e}
  ${Je}
  ${Xe}
  ${VM}
`;BM.defaultProps={className:"dbuitkThemedButton",type:"button"};const $M=BM,FM=He.h1`
  color: var(--theme-color-text-primary, #000);
  font-size: var(--base-title-font-size, 24px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 calc(var(--base-gap, 8px) * 3);
`;FM.defaultProps={className:"dbuitkTitle"};const HM=FM,XM=He.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;XM.defaultProps={className:"dbuitkWrapper"};const JM=XM,_M={desktopStart:"1025px",desktopWideStart:"1281px",tabletLandscapeStart:"769px",tabletPortraitStart:"481px"},qM=(t,e)=>`@media (min-width: ${_M[t]}) {\n    ${e}\n  }`,KM=Be`
  padding-left: var(--base-padding-mobile, 4px);
  padding-right: var(--base-padding-mobile, 4px);

  ${qM("tabletPortraitStart",Be`
      padding-left: var(--base-padding-tablet-portrait, 8px);
      padding-right: var(--base-padding-tablet-portrait, 8px);
    `)}

  ${qM("tabletLandscapeStart",Be`
      padding-left: var(--base-padding-tablet-landscape, 8px);
      padding-right: var(--base-padding-tablet-landscape, 8px);
    `)}

  ${qM("desktopStart",Be`
      padding-left: var(--base-padding-desktop, 16px);
      padding-right: var(--base-padding-desktop, 16px);
    `)}

  ${qM("desktopWideStart",Be`
      padding-left: var(--base-padding-desktop-xl, 16px);
      padding-right: var(--base-padding-desktop-xl, 16px);
    `)}
`;var tu=r.YM,eu=r.$n,Mu=r.Ql,uu=r.hE,ru=r.Zp,iu=r.Ve,nu=r.i8,ou=r._8,au=r.ms,cu=r.Gr,Lu=r.wi,ju=r.Y9,su=r.wO,Nu=r.q7,lu=r.gu,gu=r.pq,yu=r.gZ,Iu=r.IG,Su=r.EY,du=r.cc,Du=r.A1,Tu=r.mO,xu=r.g,pu=r.fi;export{tu as ActiveButtonCSS,eu as Button,Mu as ButtonCSS,uu as ButtonVariantCSS,ru as Card,iu as ContainerPadding,nu as CopyButton,ou as DisabledButtonCSS,au as Dropdown,cu as ExternalLink,Lu as Footer,ju as Header,su as InnerContainer,Nu as Item,lu as Logo,gu as LogoMini,yu as Main,Iu as SwitchThemeButton,Su as Text,du as ThemedButton,Du as Title,Tu as Wrapper,xu as breakpointMediaQuery,pu as breakpoints};