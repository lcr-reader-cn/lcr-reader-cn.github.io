(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();var O,d,Y,L,G,Z,A,j,W,H,R={},ee=[],ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function C(_,e){for(var t in e)_[t]=e[t];return _}function _e(_){var e=_.parentNode;e&&e.removeChild(_)}function le(_,e,t){var i,n,r,l={};for(r in e)r=="key"?i=e[r]:r=="ref"?n=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?O.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(r in _.defaultProps)l[r]===void 0&&(l[r]=_.defaultProps[r]);return I(_,l,i,n,null)}function I(_,e,t,i,n){var r={type:_,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++Y,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(r),r}function M(_){return _.children}function N(_,e){this.props=_,this.context=e}function P(_,e){if(e==null)return _.__?P(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?P(_):null}function te(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return te(_)}}function J(_){(!_.__d&&(_.__d=!0)&&L.push(_)&&!F.__r++||G!==d.debounceRendering)&&((G=d.debounceRendering)||Z)(F)}function F(){var _,e,t,i,n,r,l,s;for(L.sort(A);_=L.shift();)_.__d&&(e=L.length,i=void 0,r=(n=(t=_).__v).__e,l=[],s=[],t.__P&&((i=C({},n)).__v=n.__v+1,d.vnode&&d.vnode(i),z(t.__P,i,n,t.__n,t.__P.namespaceURI,32&n.__u?[r]:null,l,r??P(n),!!(32&n.__u),s),i.__v=n.__v,i.__.__k[i.__i]=i,re(l,i,s),i.__e!=r&&te(i)),L.length>e&&L.sort(A));F.__r=0}function ne(_,e,t,i,n,r,l,s,u,c,p){var o,g,f,v,m,y=i&&i.__k||ee,a=e.length;for(t.__d=u,se(t,e,y),u=t.__d,o=0;o<a;o++)(f=t.__k[o])!=null&&typeof f!="boolean"&&typeof f!="function"&&(g=f.__i===-1?R:y[f.__i]||R,f.__i=o,z(_,f,g,n,r,l,s,u,c,p),v=f.__e,f.ref&&g.ref!=f.ref&&(g.ref&&V(g.ref,null,f),p.push(f.ref,f.__c||v,f)),m==null&&v!=null&&(m=v),65536&f.__u||g.__k===f.__k?u=oe(f,u,_):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:v&&(u=v.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=u,t.__e=m}function se(_,e,t){var i,n,r,l,s,u=e.length,c=t.length,p=c,o=0;for(_.__k=[],i=0;i<u;i++)l=i+o,(n=_.__k[i]=(n=e[i])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?I(null,n,null,null,null):q(n)?I(M,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?I(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=_,n.__b=_.__b+1,s=ce(n,t,l,p),n.__i=s,r=null,s!==-1&&(p--,(r=t[s])&&(r.__u|=131072)),r==null||r.__v===null?(s==-1&&o--,typeof n.type!="function"&&(n.__u|=65536)):s!==l&&(s==l-1?o--:s==l+1?o++:s>l?p>u-l?o+=s-l:o--:s<l&&(s==l-o?o-=s-l:o++),s!==i+o&&(n.__u|=65536))):(r=t[l])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=P(r)),B(r,r,!1),t[l]=null,p--);if(p)for(i=0;i<c;i++)(r=t[i])!=null&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=P(r)),B(r,r))}function oe(_,e,t){var i,n;if(typeof _.type=="function"){for(i=_.__k,n=0;i&&n<i.length;n++)i[n]&&(i[n].__=_,e=oe(i[n],e,t));return e}_.__e!=e&&(e&&_.type&&!t.contains(e)&&(e=P(_)),t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ce(_,e,t,i){var n=_.key,r=_.type,l=t-1,s=t+1,u=e[t];if(u===null||u&&n==u.key&&r===u.type&&!(131072&u.__u))return t;if(i>(u!=null&&!(131072&u.__u)?1:0))for(;l>=0||s<e.length;){if(l>=0){if((u=e[l])&&!(131072&u.__u)&&n==u.key&&r===u.type)return l;l--}if(s<e.length){if((u=e[s])&&!(131072&u.__u)&&n==u.key&&r===u.type)return s;s++}}return-1}function Q(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||ie.test(e)?t:t+"px"}function E(_,e,t,i,n){var r;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof i=="string"&&(_.style.cssText=i=""),i)for(e in i)t&&e in t||Q(_.style,e,"");if(t)for(e in t)i&&t[e]===i[e]||Q(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=t,t?i?t.u=i.u:(t.u=j,_.addEventListener(e,r?H:W,r)):_.removeEventListener(e,r?H:W,r);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,e=="popover"&&t==1?"":t))}}function X(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=j++;else if(e.t<t.u)return;return t(d.event?d.event(e):e)}}}function z(_,e,t,i,n,r,l,s,u,c){var p,o,g,f,v,m,y,a,h,S,w,T,x,K,D,$,k=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[s=e.__e=t.__e]),(p=d.__b)&&p(e);e:if(typeof k=="function")try{if(a=e.props,h="prototype"in k&&k.prototype.render,S=(p=k.contextType)&&i[p.__c],w=p?S?S.props.value:p.__:i,t.__c?y=(o=e.__c=t.__c).__=o.__E:(h?e.__c=o=new k(a,w):(e.__c=o=new N(a,w),o.constructor=k,o.render=ue),S&&S.sub(o),o.props=a,o.state||(o.state={}),o.context=w,o.__n=i,g=o.__d=!0,o.__h=[],o._sb=[]),h&&o.__s==null&&(o.__s=o.state),h&&k.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=C({},o.__s)),C(o.__s,k.getDerivedStateFromProps(a,o.__s))),f=o.props,v=o.state,o.__v=e,g)h&&k.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),h&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(h&&k.getDerivedStateFromProps==null&&a!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(a,w),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(a,o.__s,w)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(o.props=a,o.state=o.__s,o.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(U){U&&(U.__=e)}),T=0;T<o._sb.length;T++)o.__h.push(o._sb[T]);o._sb=[],o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(a,o.__s,w),h&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,v,m)})}if(o.context=w,o.props=a,o.__P=_,o.__e=!1,x=d.__r,K=0,h){for(o.state=o.__s,o.__d=!1,x&&x(e),p=o.render(o.props,o.state,o.context),D=0;D<o._sb.length;D++)o.__h.push(o._sb[D]);o._sb=[]}else do o.__d=!1,x&&x(e),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++K<25);o.state=o.__s,o.getChildContext!=null&&(i=C(C({},i),o.getChildContext())),h&&!g&&o.getSnapshotBeforeUpdate!=null&&(m=o.getSnapshotBeforeUpdate(f,v)),ne(_,q($=p!=null&&p.type===M&&p.key==null?p.props.children:p)?$:[$],e,t,i,n,r,l,s,u,c),o.base=e.__e,e.__u&=-161,o.__h.length&&l.push(o),y&&(o.__E=o.__=null)}catch(U){if(e.__v=null,u||r!=null){for(e.__u|=u?160:32;s&&s.nodeType===8&&s.nextSibling;)s=s.nextSibling;r[r.indexOf(s)]=null,e.__e=s}else e.__e=t.__e,e.__k=t.__k;d.__e(U,e,t)}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=fe(t.__e,e,t,i,n,r,l,u,c);(p=d.diffed)&&p(e)}function re(_,e,t){e.__d=void 0;for(var i=0;i<t.length;i++)V(t[i],t[++i],t[++i]);d.__c&&d.__c(e,_),_.some(function(n){try{_=n.__h,n.__h=[],_.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function fe(_,e,t,i,n,r,l,s,u){var c,p,o,g,f,v,m,y=t.props,a=e.props,h=e.type;if(h==="svg"?n="http://www.w3.org/2000/svg":h==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((f=r[c])&&"setAttribute"in f==!!h&&(h?f.localName===h:f.nodeType===3)){_=f,r[c]=null;break}}if(_==null){if(h===null)return document.createTextNode(a);_=document.createElementNS(n,h,a.is&&a),r=null,s=!1}if(h===null)y===a||s&&_.data===a||(_.data=a);else{if(r=r&&O.call(_.childNodes),y=t.props||R,!s&&r!=null)for(y={},c=0;c<_.attributes.length;c++)y[(f=_.attributes[c]).name]=f.value;for(c in y)if(f=y[c],c!="children"){if(c=="dangerouslySetInnerHTML")o=f;else if(c!=="key"&&!(c in a)){if(c=="value"&&"defaultValue"in a||c=="checked"&&"defaultChecked"in a)continue;E(_,c,null,f,n)}}for(c in a)f=a[c],c=="children"?g=f:c=="dangerouslySetInnerHTML"?p=f:c=="value"?v=f:c=="checked"?m=f:c==="key"||s&&typeof f!="function"||y[c]===f||E(_,c,f,y[c],n);if(p)s||o&&(p.__html===o.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),e.__k=[];else if(o&&(_.innerHTML=""),ne(_,q(g)?g:[g],e,t,i,h==="foreignObject"?"http://www.w3.org/1999/xhtml":n,r,l,r?r[0]:t.__k&&P(t,0),s,u),r!=null)for(c=r.length;c--;)r[c]!=null&&_e(r[c]);s||(c="value",v!==void 0&&(v!==_[c]||h==="progress"&&!v||h==="option"&&v!==y[c])&&E(_,c,v,y[c],n),c="checked",m!==void 0&&m!==_[c]&&E(_,c,m,y[c],n))}return _}function V(_,e,t){try{if(typeof _=="function"){var i=typeof _.__u=="function";i&&_.__u(),i&&e==null||(_.__u=_(e))}else _.current=e}catch(n){d.__e(n,t)}}function B(_,e,t){var i,n;if(d.unmount&&d.unmount(_),(i=_.ref)&&(i.current&&i.current!==_.__e||V(i,null,e)),(i=_.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){d.__e(r,e)}i.base=i.__P=null}if(i=_.__k)for(n=0;n<i.length;n++)i[n]&&B(i[n],e,t||typeof _.type!="function");t||_.__e==null||_e(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function ue(_,e,t){return this.constructor(_,t)}function pe(_,e,t){var i,n,r,l;d.__&&d.__(_,e),n=(i=typeof t=="function")?null:e.__k,r=[],l=[],z(e,_=(!i&&t||e).__k=le(M,null,[_]),n||R,R,e.namespaceURI,!i&&t?[t]:n?null:e.firstChild?O.call(e.childNodes):null,r,!i&&t?t:n?n.__e:e.firstChild,i,l),re(r,_,l)}O=ee.slice,d={__e:function(_,e,t,i){for(var n,r,l;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(_)),l=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(_,i||{}),l=n.__d),l)return n.__E=n}catch(s){_=s}throw _}},Y=0,N.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof _=="function"&&(_=_(C({},t),this.props)),_&&C(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),J(this))},N.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),J(this))},N.prototype.render=M,L=[],Z=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,A=function(_,e){return _.__v.__b-e.__v.__b},F.__r=0,j=0,W=X(!1),H=X(!0);var ae=0;function b(_,e,t,i,n,r){e||(e={});var l,s,u=e;if("ref"in u)for(s in u={},e)s=="ref"?l=e[s]:u[s]=e[s];var c={type:_,props:u,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ae,__i:-1,__u:0,__source:n,__self:r};if(typeof _=="function"&&(l=_.defaultProps))for(s in l)u[s]===void 0&&(u[s]=l[s]);return d.vnode&&d.vnode(c),c}const de="/LCR-Reader-Logo-full.svg";function he(){return b(M,{children:[b("div",{children:b("a",{href:"https://lcr-reader.cn",children:b("img",{src:de,class:"logo",alt:"LCR-Reader (中国)"})})}),b("div",{class:"card",children:[b("p",{children:"LCR-Reader 是一种高精度电子测试设备，将 LCR 测量仪的功能与镊子形式的便利性相结合。它专为测量小型电子元件的电感（L）、电容（C）和电阻（R）而设计，非常适合快速识别元件参数值并检测电路故障。"}),b("p",{children:"LCR-Reader 因其便携性、易用性以及能够测量极小的表面贴装器件（SMD）而深受电子工程师、维修技术人员和电子爱好者的青睐。无需将元件置于测试台上或使用传统测试探头，即可直接进行精确测量。其内置显示屏实时显示测量结果，且通常具备自动元件识别功能，从而进一步简化测试过程。"})]}),b("p",{children:["Check out"," ",b("a",{href:"https://lcr-reader.com",target:"_blank",children:"LCR-Reader.com"}),", the official LCR-Reader website in English."]}),b("p",{class:"read-the-docs",children:"LCR-Reader © Siborg Systems Inc. (Canada)"})]})}pe(b(he,{}),document.getElementById("app"));
