!function(t){"use strict";function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function e(t){return t instanceof Function}function a(t){return!e(t)&&t instanceof Object}function i(t,e){var r;for(r in e)a(e[r])||n(e[r])?(a(e[r])&&!a(t[r])&&(t[r]={}),n(e[r])&&!n(t[r])&&(t[r]=[]),i(t[r],e[r])):void 0!==e[r]&&(t[r]=e[r])}function r(t,n){var e={};return i(e,t),i(e,n),e}function o(t){var n,e,a,i,r,o,c,s,d,l,u;return l=Object.prototype.toString.call(t),"[object Date]"===l?t:"[object String]"===l?(a=t.match(E))?(u=parseInt(a[1],10),o=parseInt(a[3],10)-1,n=parseInt(a[5],10),e=parseInt(a[7],10),r=a[9]?parseInt(a[9],10):0,d=a[11]?parseInt(a[11],10):0,i=a[12]?1e3*parseFloat(I+a[12].slice(1)):0,s=Date.UTC(u,o,n,e,r,d,i),a[13]&&a[14]&&(c=60*a[15],a[17]&&(c+=parseInt(a[17],10)),c*="-"===a[14]?-1:1,s-=1e3*60*c),new Date(s)):void 0:void 0}function c(t){var n,e,a;for(n=0;n<t.length;n++)for(a=t[n].data,e=0;e<a.length;e++)if(a[e][1]<0)return!0;return!1}function s(t,n,e,a,i){return function(o,s,d){var l=r({},t);return l=r(l,d||{}),s.hideLegend&&n(l),"min"in s?e(l,s.min):c(o)||e(l,0),"max"in s&&a(l,s.max),s.stacked&&i(l),s.colors&&(l.colors=s.colors),l=r(l,s.library||{})}}function d(t,n){document.body.innerText?t.innerText=n:t.textContent=n}function l(t,n){d(t,"Error Loading Chart: "+n),t.style.color="#ff0000"}function u(n,e,a){var i=t.jQuery||t.Zepto||t.$;i.ajax({dataType:"json",url:e,success:a,error:function(t,e,a){var i="string"==typeof a?a:a.message;l(n,i)}})}function h(t,n){try{n(t)}catch(e){throw l(t.element,e.message),e}}function f(t,n){"string"==typeof t.dataSource?u(t.element,t.dataSource,function(e){t.data=e,h(t,n)}):(t.data=t.dataSource,h(t,n))}function p(t){return""+t}function m(t){return parseFloat(t)}function v(t){if("object"!=typeof t)if("number"==typeof t)t=new Date(1e3*t);else{var n=t.replace(/ /,"T").replace(" ","").replace("UTC","Z");t=o(n)||new Date(t)}return t}function g(t){if(!n(t)){var e,a=[];for(e in t)t.hasOwnProperty(e)&&a.push([e,t[e]]);t=a}return t}function C(t,n){return t[0].getTime()-n[0].getTime()}function w(t,n){var a,i,r;for(r="render"+t,a=0;a<W.length;a++)if(i=W[a],e(i[r]))return i[r](n);throw new Error("No adapter found")}function y(t,e,a){var i,r,o,c,s;for(!n(t)||"object"!=typeof t[0]||n(t[0])?(t=[{name:"Value",data:t}],e.hideLegend=!0):e.hideLegend=!1,e.discrete&&(a=!1),i=0;i<t.length;i++){for(o=g(t[i].data),c=[],r=0;r<o.length;r++)s=o[r][0],s=a?v(s):p(s),c.push([s,m(o[r][1])]);a&&c.sort(C),t[i].data=c}return t}function b(t){var n,e=g(t);for(n=0;n<e.length;n++)e[n]=[p(e[n][0]),m(e[n][1])];return e}function x(t){var n;for(n=0;n<t.length;n++)t[n][1]=v(t[n][1]),t[n][2]=v(t[n][2]);return t}function A(t){t.data=y(t.data,t.options,!0),w("LineChart",t)}function z(t){t.data=y(t.data,t.options,!1),w("ColumnChart",t)}function S(t){t.data=b(t.data),w("PieChart",t)}function T(t){t.data=y(t.data,t.options,!1),w("BarChart",t)}function k(t){t.data=y(t.data,t.options,!0),w("AreaChart",t)}function L(t){t.data=b(t.data),w("GeoChart",t)}function j(t){t.data=x(t.data),w("Timeline",t)}function O(t,n,e,a,i){"string"==typeof n&&(n=document.getElementById(n)),t.element=n,t.options=a||{},t.dataSource=e,D.charts[n.id]=t,f(t,i)}var D,E,I,P=t.Chartkick||{},W=[];if(E=/(\d\d\d\d)(\-)?(\d\d)(\-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([\.,]\d+)?($|Z|([\+\-])(\d\d)(:)?(\d\d)?)/i,I=String(1.5).charAt(1),"Highcharts"in t){var B=new function(){var n=t.Highcharts,e={chart:{},xAxis:{labels:{style:{fontSize:"12px"}}},yAxis:{title:{text:null},labels:{style:{fontSize:"12px"}}},title:{text:null},credits:{enabled:!1},legend:{borderWidth:0},tooltip:{style:{fontSize:"12px"}},plotOptions:{areaspline:{},series:{marker:{}}}},a=function(t){t.legend.enabled=!1},i=function(t,n){t.yAxis.min=n},o=function(t,n){t.yAxis.max=n},c=function(t){t.plotOptions.series.stacking="normal"},d=s(e,a,i,o,c);this.renderLineChart=function(t,e){e=e||"spline";var a={};"areaspline"===e&&(a={plotOptions:{areaspline:{stacking:"normal"},series:{marker:{enabled:!1}}}});var i,r,o,c=d(t.data,t.options,a);c.xAxis.type=t.options.discrete?"category":"datetime",c.chart.type=e,c.chart.renderTo=t.element.id;var s=t.data;for(r=0;r<s.length;r++){if(i=s[r].data,!t.options.discrete)for(o=0;o<i.length;o++)i[o][0]=i[o][0].getTime();s[r].marker={symbol:"circle"}}c.series=s,new n.Chart(c)},this.renderPieChart=function(t){var a={};t.options.colors&&(a.colors=t.options.colors);var i=r(r(e,a),t.options.library||{});i.chart.renderTo=t.element.id,i.series=[{type:"pie",name:"Value",data:t.data}],new n.Chart(i)},this.renderColumnChart=function(t,e){var a,i,r,o,e=e||"column",c=t.data,s=d(c,t.options),l=[];for(s.chart.type=e,s.chart.renderTo=t.element.id,a=0;a<c.length;a++)for(r=c[a],i=0;i<r.data.length;i++)o=r.data[i],l[o[0]]||(l[o[0]]=new Array(c.length)),l[o[0]][a]=o[1];var u=[];for(a in l)l.hasOwnProperty(a)&&u.push(a);s.xAxis.categories=u;var h=[];for(a=0;a<c.length;a++){for(o=[],i=0;i<u.length;i++)o.push(l[u[i]][a]||0);h.push({name:c[a].name,data:o})}s.series=h,new n.Chart(s)};var l=this;this.renderBarChart=function(t){l.renderColumnChart(t,"bar")},this.renderAreaChart=function(t){l.renderLineChart(t,"areaspline")}};W.push(B)}if(t.google&&t.google.setOnLoadCallback){var G=new function(){var n=t.google,e={},a=[],i=function(){for(var t,e,i=0;i<a.length;i++)t=a[i],e=n.visualization&&("corechart"==t.pack&&n.visualization.LineChart||"timeline"==t.pack&&n.visualization.Timeline),e&&(t.callback(),a.splice(i,1),i--)},o=function(t,r){if(r||(r=t,t="corechart"),a.push({pack:t,callback:r}),e[t])i();else{e[t]=!0;var o={packages:[t],callback:i};P.language&&(o.language=P.language),n.load("visualization","1",o)}},c={chartArea:{},fontName:"'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",pointSize:6,legend:{textStyle:{fontSize:12,color:"#444"},alignment:"center",position:"right"},curveType:"function",hAxis:{textStyle:{color:"#666",fontSize:12},gridlines:{color:"transparent"},baselineColor:"#ccc",viewWindow:{}},vAxis:{textStyle:{color:"#666",fontSize:12},baselineColor:"#ccc",viewWindow:{}},tooltip:{textStyle:{color:"#666",fontSize:12}}},d=function(t){t.legend.position="none"},l=function(t,n){t.vAxis.viewWindow.min=n},u=function(t,n){t.vAxis.viewWindow.max=n},h=function(t,n){t.hAxis.viewWindow.min=n},f=function(t,n){t.hAxis.viewWindow.max=n},p=function(t){t.isStacked=!0},v=s(c,d,l,u,p),g=function(t,e){var a=new n.visualization.DataTable;a.addColumn(e,"");var i,r,o,c,s,d=[];for(i=0;i<t.length;i++)for(o=t[i],a.addColumn("number",o.name),r=0;r<o.data.length;r++)c=o.data[r],s="datetime"===e?c[0].getTime():c[0],d[s]||(d[s]=new Array(t.length)),d[s][i]=m(c[1]);var l=[];for(i in d)d.hasOwnProperty(i)&&l.push(["datetime"===e?new Date(m(i)):i].concat(d[i]));return"datetime"===e&&l.sort(C),a.addRows(l),a},w=function(n){t.attachEvent?t.attachEvent("onresize",n):t.addEventListener&&t.addEventListener("resize",n,!0),n()};this.renderLineChart=function(t){o(function(){var e=v(t.data,t.options),a=g(t.data,t.options.discrete?"string":"datetime");t.chart=new n.visualization.LineChart(t.element),w(function(){t.chart.draw(a,e)})})},this.renderPieChart=function(t){o(function(){var e={chartArea:{top:"10%",height:"80%"}};t.options.colors&&(e.colors=t.options.colors);var a=r(r(c,e),t.options.library||{}),i=new n.visualization.DataTable;i.addColumn("string",""),i.addColumn("number","Value"),i.addRows(t.data),t.chart=new n.visualization.PieChart(t.element),w(function(){t.chart.draw(i,a)})})},this.renderColumnChart=function(t){o(function(){var e=v(t.data,t.options),a=g(t.data,"string");t.chart=new n.visualization.ColumnChart(t.element),w(function(){t.chart.draw(a,e)})})},this.renderBarChart=function(t){o(function(){var e={hAxis:{gridlines:{color:"#ccc"}}},a=s(c,d,h,f,p)(t.data,t.options,e),i=g(t.data,"string");t.chart=new n.visualization.BarChart(t.element),w(function(){t.chart.draw(i,a)})})},this.renderAreaChart=function(t){o(function(){var e={isStacked:!0,pointSize:0,areaOpacity:.5},a=v(t.data,t.options,e),i=g(t.data,t.options.discrete?"string":"datetime");t.chart=new n.visualization.AreaChart(t.element),w(function(){t.chart.draw(i,a)})})},this.renderGeoChart=function(t){o(function(){var e={legend:"none",colorAxis:{colors:t.options.colors||["#f6c7b6","#ce502d"]}},a=r(r(c,e),t.options.library||{}),i=new n.visualization.DataTable;i.addColumn("string",""),i.addColumn("number","Value"),i.addRows(t.data),t.chart=new n.visualization.GeoChart(t.element),w(function(){t.chart.draw(i,a)})})},this.renderTimeline=function(t){o("timeline",function(){var e={legend:"none"};t.options.colors&&(e.colorAxis.colors=t.options.colors);var a=r(r(c,e),t.options.library||{}),i=new n.visualization.DataTable;i.addColumn({type:"string",id:"Name"}),i.addColumn({type:"date",id:"Start"}),i.addColumn({type:"date",id:"End"}),i.addRows(t.data),t.chart=new n.visualization.Timeline(t.element),w(function(){t.chart.draw(i,a)})})}};W.push(G)}D={LineChart:function(t,n,e){O(this,t,n,e,A)},PieChart:function(t,n,e){O(this,t,n,e,S)},ColumnChart:function(t,n,e){O(this,t,n,e,z)},BarChart:function(t,n,e){O(this,t,n,e,T)},AreaChart:function(t,n,e){O(this,t,n,e,k)},GeoChart:function(t,n,e){O(this,t,n,e,L)},Timeline:function(t,n,e){O(this,t,n,e,j)},charts:{}},t.Chartkick=D}(window);