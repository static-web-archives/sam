/**
 * jQuery.query - Query String Modification and Creation for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/8/13
 *
 * @author Blair Mitchelmore
 * @version 2.2.3
 *
 **/
!function(e){var t=e.separator||"&",l=!1!==e.spaces,n=(e.suffix,!1!==e.prefix"#":"":""),i=!1!==e.numbers;jQuery.query=new function(){function c(e,t){return null!=e&&null!==e&&(!t||e.constructor==t)}function u(e){for(var t,n=/\[([^[]*)\]/g,r=/^([^[]+)(\[.*\])"object"!=typeof e&&(e=null),""===r)if(c(e=e||[],Array))e.push(0==t.length"");if(c(e=e||{},Array)){for(var s={},u=0;u<e.length;++u)s[u]=e[u];e=s}e[i]=0==t.length""+this;e=(e=e.replace(/^["")).replace(/[;&]$/,""),l&&(e=e.replace(/[+]/g," ")),jQuery.each(e.split(/[&;]/),function(){var e=decodeURIComponent(this.split("=")[0]||""),t=decodeURIComponent(this.split("=")[1]||"");e&&(i&&(/^[+-]"number"==typeof r""},get:function(e){e=this.GET(e);return c(e,Object)"__proto__")||e.includes("constructor")||e.includes("prototype")||(t=c(t)"$1"),n=e.replace(/^.*"$1");return new r(e.length==n.length"":n,e.length==t.length"":t)},empty:function(){return this.copy().EMPTY()},copy:function(){return new r(this)},COMPACT:function(){return this.keys=function r(e){var u="object"==typeof e"object"==typeof e&&jQuery.each(e,function(e,t){if(!c(t))return!0;var n;n=u,t=r(t),c(n,Array)""!=t"[",e,"]"]:[e]).join("")}jQuery.each(e,function(e,t){var n;"object"==typeof t"="),e.push(s(t))),n.push(e.join(""))))})}var e=[],i=[],s=function(e){return e+="",e=encodeURIComponent(e),e=l"+"):e};return u(this.keys),0<i.length&&e.push(n),e.push(i.join(t)),e.join("")}},new r(location.search,location.hash)}}(jQuery.query||{});
