(this["webpackJsonpaulicksah.github.io"]=this["webpackJsonpaulicksah.github.io"]||[]).push([[6],{161:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",a="month",o="quarter",u="year",c="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,o=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:u,w:s,d:r,D:c,h:i,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",p={};p[m]=d;var g=function(t){return t instanceof y},v=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)p[t]&&(i=t),e&&(p[t]=e,i=t);else{var r=t.name;p[r]=t,i=r}return!n&&i&&(m=i),i||!n&&m},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},j=$;j.l=v,j.i=g,j.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function d(t){this.$L=v(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return j},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return M(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<M(t)},f.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,l=!!j.u(o)||o,d=j.p(t),f=function(t,e){var n=j.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return l?n:n.endOf(r)},$=function(t,e){return j.w(h.toDate()[t].apply(h.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return l?f(1,0):f(31,11);case a:return l?f(1,p):f(0,p+1);case s:var M=this.$locale().weekStart||0,y=(m<M?m+7:m)-M;return f(l?g-y:g+(6-y),p);case r:case c:return $(v+"Hours",0);case i:return $(v+"Minutes",1);case n:return $(v+"Seconds",2);case e:return $(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,l=j.p(s),d="set"+(this.$u?"UTC":""),f=(h={},h[r]=d+"Date",h[c]=d+"Date",h[a]=d+"Month",h[u]=d+"FullYear",h[i]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[l],$=l===r?this.$D+(o-this.$W):o;if(l===a||l===u){var m=this.clone().set(c,1);m.$d[f]($),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[j.p(t)]()},f.add=function(t,o){var c,h=this;t=Number(t);var l=j.p(o),d=function(e){var n=M(h);return j.w(n.date(n.date()+Math.round(e*t)),h)};if(l===a)return this.set(a,this.$M+t);if(l===u)return this.set(u,this.$y+t);if(l===r)return d(1);if(l===s)return d(7);var f=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[l]||1,$=this.$d.getTime()+t*f;return j.w($,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,h=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},d=function(t){return j.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:j.s(o+1,2,"0"),MMM:h(r.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,u,2),ddd:h(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:j.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||$[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,h){var l,d=j.p(c),f=M(t),$=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,p=j.m(this,f);return p=(l={},l[u]=p/12,l[a]=p,l[o]=p/3,l[s]=(m-$)/6048e5,l[r]=(m-$)/864e5,l[i]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[d]||m,h?p:j.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=v(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return j.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),b=y.prototype;return M.prototype=b,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",u],["$D",c]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,y,M),t.$i=!0),M},M.locale=v,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=p[m],M.Ls=p,M.p={},M}()},173:function(t,e,n){"use strict";n.r(e);var i=n(0),r=(n(1),n(5)),s=n(21),a=n(161),o=n.n(a),u=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},c=[{title:"Intelligent Travel Manager",subtitle:"Data preprocessing, Web scraping, Implemented Algorithm",link:"https://github.com/aulicksah/Intelligent-Travel-Manager",image:"/images/projects/nearestdollar.jpg",date:"Oct 2019 - May 2020",desc:"Tour Recommendation System to generate an itinerary wherein we need to provide information like startingpoint and no. of places to visit, to create a personalized itinerary based on user\u2019s interest using severalalgorithms such as POI Popularity, POI Ranking and Markov Chain"},{title:"Streamz(Video Portal)",subtitle:"ACMS(Amazon Campus Mentorship Series",link:"https://github.com/aulicksah/Streamz",image:"/images/projects/harvest.jpg",date:"2015-09-20",desc:"Development of an Application Service module which coordinates all the other modules The video portal provides an authenticated user with an ability to stream videos with all the necessaryfunctionality like upload, delete, like and comment on videos."}];e.default=function(){return Object(i.jsx)(s.a,{title:"Projects",description:"Learn about Aulick Sah's projects.",children:Object(i.jsxs)("article",{className:"post",id:"projects",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),c.map((function(t){return Object(i.jsx)(u,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=6.7b83be88.chunk.js.map