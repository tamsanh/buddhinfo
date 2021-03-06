/*!
 * hash-router v1.2.7
 * https://github.com/michaelsogos/Hash-Router
 * 
 * Developed by Michael Sogos
 * Copyright 2016
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 CreatedOn: 2014-10-19
 *
 * Copyright (C) 2016 by Michael Sogos <![[michael.sogos[at]gurustudioweb[dot]it]]>
 * Thanks to these libraries to inspired me:
 * - path.js https://github.com/mtrpcic/pathjs
 * - sammy.js http://sammyjs.org/
 * - director.js https://github.com/flatiron/director
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 **/
(function(n){var t={init:function(n,i){return(t.__eventOnChange=n,t.__eventOnNotFound=i,!("onhashchange"in window))?(console.error("The browser doesn't support HASH on URL!"),!1):(t.__bindHashChange(),window.location.hash==""||window.location.hash=="#"?(t.__listener("#/"),!0):(t.__listener(window.location.hash),!0))},navigate:function(n){window.location.hash=n},run:function(n){t.__eventOnChange!=null&&t.__eventOnChange(n);t.__run(n,"before")},add:function(n,i){var u=!1,r;if(!n.path)return console.error("Cannot find property path when adding a new route!"),!1;for(r=0;r<t.routes.length;r++)if(t.routes[r].path===n.path){if(u=!0,i===!0)return t.routes[r]=n,!0;break}return u?(console.error("A route for the path "+n.path+" is already mapped!"),!1):(t.routes.push(n),!0)},findRoute:function(n){for(var i=0;i<t.routes.length;i++)if(t.routes[i].path===n)return t.routes[i]},matchRoute:function(n){var u=t.__cleanHash(n),c=u.hashParams.split("/"),o=u.hashParams,l={},a={},s,f,h,r,e,i;if(u.hashQueryArray.length>0)for(s=0;s<u.hashQueryArray.length;s++)f=u.hashQueryArray[s].split("="),f.length>=1&&f[0]&&(a[decodeURIComponent(f[0])]=f[1]?decodeURIComponent(f[1]):"");for(h=0;h<t.routes.length;h++){if(r=t.routes[h],o=u.hashParams,r.path.search(/:/)>0)for(e=r.path.split("/"),i=0;i<e.length;i++)i<c.length&&e[i].charAt(0)===":"&&(l[e[i].replace(/:/,"")]=c[i],o=o.replace(c[i],e[i]));if(r.path===o)return r.params=l,r.url=n,r.query=a,r}return null},actualRoute:function(){return this.matchRoute(window.location.hash)},routes:[],__bindHashChange:function(){window.onhashchange=function(){t.__listener(location.hash)}},__cleanHash:function(n){var i={},r=n.indexOf("?"),u;return i.hash=n,i.hashParams=r>=0?n.substring(0,r):n,i.hashQuery=r>=0?n.substring(n.indexOf("?")+1):"",i.hashQueryArray=i.hashQuery?i.hashQuery.split("&"):[],u=i.hashParams.replace(/\/+$/,""),i.hashParams!==u&&(window.onhashchange=null,i.hash=u,i.hash+=i.hashQuery?"?"+i.hashQuery:"",window.location.hash=i.hash,t.__bindHashChange()),i},__listener:function(n){var i=t.matchRoute(n);if(i||t.__eventOnNotFound){if(!i&&t.__eventOnNotFound)return t.__eventOnNotFound(t.__hashToArray(n)),!1}else return console.error("Cannot find a valid route for hash "+n+"!"),!1;return t.run(i)},__hashToArray:function(n){var t=n.split("/");return t.length>0&&t[0]=="#"&&t.shift(),t},__run:function(n,i,r){var f,u;n[i]?(f=new t.__task(function(r){var u=t.__nextState(i);u&&t.__run(n,u,r)}),n.event={},n.event.previousResult=r,n.event.state=i,n.task=f,n[i]()):(u=t.__nextState(i),u&&t.__run(n,u))},__nextState:function(n){return n=="before"?"on":n=="on"?"after":null},__eventOnChange:null,__eventOnNotFound:null,__task:function(n){return{__callback:n,done:function(n){this.__callback(n)}}}};n.Router=t})(this);
//# sourceMappingURL=hash-router.min.js.map
