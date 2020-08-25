(this.webpackJsonpaftersale=this.webpackJsonpaftersale||[]).push([[0],{29:function(t,n,e){t.exports=e(56)},56:function(t,n,e){"use strict";e.r(n);var a={};e.r(a),e.d(a,"loadData",(function(){return E})),e.d(a,"loadLamps",(function(){return _})),e.d(a,"setLamps",(function(){return L})),e.d(a,"setLamp",(function(){return S})),e.d(a,"setSwitcher",(function(){return D})),e.d(a,"loadLampson",(function(){return B}));var r=e(0),o=e.n(r),i=e(9),c=e.n(i),l=e(10),u=e(1),s=e(5),d=e(25),f=e.n(d),p="sunrisesunset",m="lamps",b="lampson",h="data_load",g="lamps_load",v="lamps_set",y="lamp_set",O="switcher_set",w="lampson_load",j="".concat("https","://").concat("api.sunrise-sunset.org"),x=Object(s.a)({},p,"".concat(j,"/json")),k=function(t,n){return f.a.get(x[t],n)},E=function(t,n){return{type:h,payload:k(t,n).then((function(n){return{dataType:t,data:n.data}}))}},_=function(t,n){return{type:g,payload:{dataType:t,data:n}}},L=function(t){return{type:v,payload:t}},S=function(t,n,e){return{type:y,payload:{floor:t,lamp:n,data:e}}},D=function(t){return{type:O,payload:t}},B=function(t){return{type:w,payload:t}};function T(t){return"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(n){var e={params:{lat:n.coords.latitude,lng:n.coords.longitude,formatted:0}};t.sunrisesunset||t.loadData(p,e)}),(function(t){return console.log(t)})),t.children}var C=e(11),I=e(2),M={title:"astronomicaldawn",colors:{sky:"linear-gradient(to bottom, #20202c 0%, #515175 100%)",facade:"#101329",shine:"0 10px 20px rgba(242, 237, 11, .6)",illumination:"#fce400",frame:"#00042a"}},z={title:"nauticaldawn",colors:{sky:"linear-gradient(to bottom, #4a4969 0%, #7072ab 50%, #cd82a0 100%)",facade:"#13252e",shine:"0 10px 20px rgba(242, 237, 11, .6)",illumination:"#fce400",frame:"#444a4e"}},J={title:"civildawn",colors:{sky:"linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%)",facade:"#13252e",shine:"0 10px 20px rgba(242, 237, 11, .6)",illumination:"#fce400",frame:"#444a4e"}},A={title:"day",colors:{sky:"linear-gradient(to bottom, #b7eaff 0%, #94dfff 100%)",facade:"#10678f",shine:"transparent",illumination:"#55562b",frame:"#fff"}},P={title:"noon",colors:{sky:"linear-gradient(to bottom, #90dffe 0%, #38a3d1 100%)",facade:"#3a738e",shine:"transparent",illumination:"#55562b",frame:"#fff"}},q={title:"night",colors:{sky:"linear-gradient(to bottom, #020111 60%, #20202c 100%)",facade:"#101329",shine:"0 10px 20px rgba(242, 237, 11, .6)",illumination:"#fce400",frame:"#101329"}},F={title:"astronomicaldusk",colors:{sky:"linear-gradient(to bottom, #090401 50%, #4B1D06 100%)",facade:"#101329",shine:"0 10px 20px rgba(242, 237, 11, .6)",illumination:"#fce400",frame:"#101329"}},G={title:"nauticaldusk",colors:{sky:"linear-gradient(to bottom, #071B26 0%, #071B26 30%, #8A3B12 80%, #240E03 100%)",facade:"#141629",shine:"0 10px 20px rgba(242, 237, 11, .6)",illumination:"#fce400",frame:"#141629"}},H={title:"civildusk",colors:{sky:"linear-gradient(to bottom, #1e528e 0%, #728a7c 50%, #e9ce5d 100%)",facade:"#041d29",shine:"0 10px 20px rgba(242, 237, 11, .6)",illumination:"#fce400",frame:"#041d29"}},K={title:"sunset",colors:{sky:"linear-gradient(to bottom, #1e528e 0%, #265889 50%, #9da671 100%)",facade:"#0d5475",shine:"0 10px 20px rgba(242, 237, 11, .6)",illumination:"#fce400",frame:"#0d5475"}};function N(){var t=Object(r.useState)(q),n=Object(C.a)(t,2),e=n[0],a=n[1],o=function(t){return new Date(t)},i=function(t,n){return t<o(n.astronomical_twilight_begin)?q:t<o(n.nautical_twilight_begin)?M:t<o(n.civil_twilight_begin)?z:t<o(n.sunrise)?J:t<o(n.solar_noon)?A:t<o(n.sunset)?P:t<o(n.civil_twilight_end)?K:t<o(n.nautical_twilight_end)?H:t<o(n.astronomical_twilight_end)?G:t<function(t,n){var e=t.getMinutes();e+=n;var a=t.setMinutes(e);return new Date(a)}(o(n.astronomical_twilight_end),20)?F:q};return[e,function(t,n){n&&a(i(t,n))}]}var Q=e(3);function R(){var t=Object(Q.a)(["\n\tbackground-color: ",";\n\tbox-shadow: ",";\n\theight: 100%;\n\twidth: 100%;\n"]);return R=function(){return t},t}function U(){var t=Object(Q.a)(["\n\tborder: 2px solid;\n\tborder-color: ",';\n\theight: 100%;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\n\t:after, :before {\n\t\tcontent: "";\n\t\tbackground-color: ',";\n\t\tposition: absolute;\n\t}\n\n\t:before {\n\t\theight: 100%;\n\t\tleft: 0;\n\t\tmargin: 0 auto;\n\t\tright: 0;\n\t\twidth: 2px;\n\t}\n\n\t:after {\n\t\tbottom: 0;\n\t\theight: 2px;\n\t\tmargin: auto 0;\n\t\ttop: 0;\n\t\twidth: 100%;\n\t}\n"]);return U=function(){return t},t}function V(){var t=Object(Q.a)(["\n\tbackground-color: #414257;\n\tdisplay: inline-block;\n\theight: 55px;\n\tposition: relative;\n\twidth: 40px;\n"]);return V=function(){return t},t}var W=I.c.div(V()),X=I.c.div(U(),(function(t){return t.theme.colors.frame}),(function(t){return t.theme.colors.frame})),Y=I.c.div(R(),(function(t){return t.theme.colors.illumination}),(function(t){return t.theme.colors.shine}));function Z(t){var n=t.floor,e=t.lamp,a=t.lampOn;return Object(r.useEffect)((function(){if(t.lampson){var n=t.lampson,e=n.count;e===n.total&&t.setSwitcher(!0),0===e&&t.setSwitcher(!1)}}),[t.lampOn]),o.a.createElement(W,{onClick:function(){t.setLamp(n,e,!a),t.loadLampson(b)}},a&&o.a.createElement(Y,null),o.a.createElement(X,null))}function $(){var t=Object(Q.a)(["\n\tbackground-color: ",";\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin: 0 10px;\n\tpadding: 20px;\n\ttransition: background-color 600ms;\n\t\n\t& > div {\n\t\tflex: 25%;\n\t\tmargin: 0 10px;\n\n\t\t&:first-child {\n\t\t\tmargin-left: 0;\n\t\t}\n\n\t\t&:last-child {\n\t\t\tmargin-right: 0;\n\t\t}\n\t}\n"]);return $=function(){return t},t}var tt=I.c.div($(),(function(t){return t.theme.colors.facade}));function nt(t){return o.a.createElement(tt,null,t.lamps.map((function(n,e){return o.a.createElement(Z,Object.assign({key:e},t,{lamp:e,lampOn:n}))})))}function et(){var t=Object(Q.a)(["\n\tbottom: 0;\n\tleft: 0;\n\tmargin: 0 auto;\n\tposition: absolute;\n\tright: 0;\n\twidth: 275px;\n\n\t& > div:first-child {\n\t\tpadding-top: 50px\n\t}\n"]);return et=function(){return t},t}var at=I.c.div(et());function rt(t){var n=t.lamps||[];return o.a.createElement(at,null,n.map((function(n,e){return o.a.createElement(nt,Object.assign({key:e},t,{floor:e,lamps:n}))})))}function ot(){var t=Object(Q.a)(["\n\tbackground: ",";\n\theight: 100%;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\tz-index: -1;\n"]);return ot=function(){return t},t}var it=I.c.div(ot(),(function(t){return t.theme.colors.sky}));function ct(){return o.a.createElement(it,null)}function lt(){var t=Object(Q.a)(["\n\tborder: 0;\n\tclip: rect(0,0,0,0);\n\theight: 1px;\n\tmargin: 1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n"]);return lt=function(){return t},t}function ut(){var t=Object(Q.a)(["\n\tdisplay: block;\n\theight: 30px;\n\tposition: relative;\n\twidth: 30px;\n\n\t&:after, &:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t}\n\n\t&:before {\n\t\tborder: 6px solid;\n\t\tborder-color: ",";\n\t\tborder-top-color: transparent;\n\t\tborder-radius: 50%;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t}\n\n\t&:after {\n\t\tbackground-color: ",";\n\t\theight: 15px;\n\t\tleft: 0;\n\t\tmargin: 0 auto;\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 0;\n\t\twidth: 5px;\n\t}\n"]);return ut=function(){return t},t}function st(){var t=Object(Q.a)(["\n\tbackground-color: rgb(83,87,93);\n\tborder: none;\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tpadding: 10px;\n\tposition: absolute;\n\tright: 20px;\n\ttop: 20px;\n"]);return st=function(){return t},t}var dt=I.c.button(st()),ft=I.c.i(ut(),(function(t){return t.isOn?"white":"rgb(37,37,37)"}),(function(t){return t.isOn?"white":"rgb(37,37,37)"})),pt=I.c.span(lt());function mt(t){return o.a.createElement(dt,{type:"button",onClick:function(){var n=!t.switcher;t.setSwitcher(n),t.setLamps(n),t.loadLampson(b)}},o.a.createElement(ft,{isOn:t.switcher}),o.a.createElement(pt,null,"Liga/desliga l\xe2mpadas"))}function bt(t){var n=N(),e=Object(C.a)(n,2),a=e[0],i=e[1];Object(r.useEffect)((function(){var n=setInterval((function(){i(new Date,t.sunrisesunset)}),1e3);return function(){return clearInterval(n)}}));return Object(r.useEffect)((function(){t.setSwitcher(!1),t.loadLamps(m,function(){var t=[[!1,!1,!1],[!1,!1,!1],[!1,!1,!1],[!1,!1,!1]],n=[[!0,!1,!1],[!1,!1,!1],[!1,!1,!1],[!1,!0,!0]],e=[[!1,!1,!0],[!0,!0,!1],[!1,!0,!1],[!0,!0,!1]];switch(a.title){case"nauticaldawn":case"civildawn":return n;case"day":case"noon":return t;case"sunset":case"civildusk":case"nauticaldusk":return n;case"astronomicaldusk":default:return e}}())}),[a]),o.a.createElement(I.a,{theme:a},o.a.createElement(mt,t),o.a.createElement(ct,null),o.a.createElement(rt,{lamps:t.lamps,lampson:t.lampson,setLamp:t.setLamp,loadLampson:t.loadLampson,setSwitcher:t.setSwitcher}))}var ht=Object(u.a)({},a),gt=Object(l.b)((function(t){return Object(u.a)({},t)}),ht)((function(t){return o.a.createElement(T,t,o.a.createElement(bt,t))})),vt=e(8),yt=Object(vt.c)((function(t,n){switch(n.type){case h:return Object(u.a)(Object(u.a)({},t),{},Object(s.a)({},n.payload.dataType,n.payload.data.results));case g:return Object(u.a)(Object(u.a)({},t),{},Object(s.a)({},n.payload.dataType,n.payload.data));case v:var e=t.lamps.map((function(t){return t.map((function(t){return n.payload}))}));return Object(u.a)(Object(u.a)({},t),{},{lamps:e});case y:var a=n.payload,r=a.floor,o=a.lamp,i=a.data,c=Object.assign([],t.lamps);return c[r][o]=i,Object(u.a)(Object(u.a)({},t),{},{lamps:c});case O:return Object(u.a)(Object(u.a)({},t),{},{switcher:n.payload});case w:var l=0,d=0;return t.lamps.forEach((function(t){return t.forEach((function(t){t&&l++,d++}))})),Object(u.a)(Object(u.a)({},t),{},Object(s.a)({},n.payload,{count:l,total:d}));default:return t||{}}}),Object(vt.a)((function(){return function(t){return function(n){var e;"object"!==typeof(e=n.payload)&&"function"!==typeof e||"function"!==typeof e.then?t(n):n.payload.then((function(e){return t(Object(u.a)(Object(u.a)({},n),{},{payload:e}))}))}}})));function Ot(){var t=Object(Q.a)(["\n  *,\n  *:after,\n  *:before {\n    margin: 0;\n    padding: 0;\n    outline: none !important;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n"]);return Ot=function(){return t},t}var wt=Object(I.b)(Ot());function jt(){return o.a.createElement(l.a,{store:yt},o.a.createElement(wt,null),o.a.createElement(gt,null))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(jt,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.dd7b0f9a.chunk.js.map