(this["webpackJsonpcovid-pass"]=this["webpackJsonpcovid-pass"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=(t(12),t(2)),m=t(5),o=t(1);t(13);var i,E=t(6),p=t.n(E);t(14);function u(e){var a=e.onChange,t=Object(n.useState)(Object.keys(h)[0]),r=Object(o.a)(t,2),c=r[0],s=r[1];return l.a.createElement("div",{className:"PassSelector"},l.a.createElement("div",{className:"PassSelector-label"},"\u0422\u0438\u043f \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430"),l.a.createElement("div",{className:"PassSelector-tabs"},Object.entries(h).map((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",{key:n,className:p()("PassSelector-tab",{"PassSelector-tab--active":n===c}),onClick:function(){s(n),a(n)}},r.name)}))))}!function(e){e.PASSPORT_SERIES="passport-series",e.PASSPORT_NUMBER="passport-number",e.DATE_OF_BIRTH="date-of-birth",e.VEHICLE_NUMBER="vehicle-number",e.TROIKA="troika",e.STRELKA="strelka",e.EMPLOYER_TAX_NUMBER="employer-tax-number",e.EMPLOYER_DESCRIPTION="employer-description",e.DESTINATION="destination"}(i||(i={}));var h={work:{id:1,name:"\u0420\u0430\u0431\u043e\u0442\u0430",FormPass:function(e){return l.a.createElement("div",{className:"Pass"},l.a.createElement("div",{className:"Pass-field"},l.a.createElement("label",{className:"Pass-label"},"\u041f\u0430\u0441\u043f\u043e\u0440\u0442"),l.a.createElement("input",{type:"text",name:"passport-series",placeholder:"\u0421\u0435\u0440\u0438\u044f",onChange:e.onChange}),l.a.createElement("input",{type:"text",name:"passport-number",placeholder:"\u041d\u043e\u043c\u0435\u0440",onChange:e.onChange})),l.a.createElement("div",{className:"Pass-field"},l.a.createElement("label",{className:"Pass-label"},"\u041d\u043e\u043c\u0435\u0440 \u0422\u0421"),l.a.createElement("input",{type:"text",name:"vehicle",placeholder:"\u041d\u043e\u043c\u0435\u0440",onChange:e.onChange})),l.a.createElement("div",{className:"Pass-field"},l.a.createElement("label",{className:"Pass-label"},"\u041d\u043e\u043c\u0435\u0440 \u0422\u0440\u043e\u0439\u043a\u0438"),l.a.createElement("input",{type:"text",name:"troika",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0422\u0440\u043e\u0439\u043a\u0438",onChange:e.onChange})),l.a.createElement("div",{className:"Pass-field"},l.a.createElement("label",{className:"Pass-label"},"\u041d\u043e\u043c\u0435\u0440 \u0421\u0442\u0440\u0435\u043b\u043a\u0438"),l.a.createElement("input",{type:"text",name:"strelka",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0421\u0442\u0440\u0435\u043b\u043a\u0438",onChange:e.onChange})),l.a.createElement("div",{className:"Pass-field"},l.a.createElement("label",{className:"Pass-label"},"\u0418\u041d\u041d \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"),l.a.createElement("input",{type:"text",name:"employee-tax-number",placeholder:"\u0418\u041d\u041d",maxLength:20,onChange:e.onChange})),l.a.createElement("div",{className:"Pass-field"},l.a.createElement("label",{className:"Pass-label"},"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),l.a.createElement("input",{type:"text",name:"employee-description",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:e.onChange})))},fields:[i.PASSPORT_SERIES,i.PASSPORT_NUMBER,i.TROIKA,i.STRELKA,i.EMPLOYER_TAX_NUMBER,i.EMPLOYER_DESCRIPTION]},medical:{id:2,name:"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430",FormPass:function(e){return l.a.createElement("div",{className:"Pass"},l.a.createElement("div",null,l.a.createElement("label",null,"\u041f\u0430\u0441\u043f\u043e\u0440\u0442"),l.a.createElement("input",{type:"text",name:"passport-series",placeholder:"\u0421\u0435\u0440\u0438\u044f",onChange:e.onChange}),l.a.createElement("input",{type:"text",name:"passport-number",placeholder:"\u041d\u043e\u043c\u0435\u0440",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"),l.a.createElement("input",{type:"text",name:"vehicle",placeholder:"\u041d\u043e\u043c\u0435\u0440",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u041d\u043e\u043c\u0435\u0440 \u0422\u0421"),l.a.createElement("input",{type:"text",name:"vehicle",placeholder:"\u041d\u043e\u043c\u0435\u0440",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u041d\u043e\u043c\u0435\u0440 \u0422\u0440\u043e\u0439\u043a\u0438"),l.a.createElement("input",{type:"text",name:"troika",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0422\u0440\u043e\u0439\u043a\u0438",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u041d\u043e\u043c\u0435\u0440 \u0421\u0442\u0440\u0435\u043b\u043a\u0438"),l.a.createElement("input",{type:"text",name:"strelka",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0421\u0442\u0440\u0435\u043b\u043a\u0438",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"),l.a.createElement("input",{type:"text",name:"aim-address",placeholder:"\u041f\u0443\u043d\u043a\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",onChange:e.onChange})))},fields:[i.PASSPORT_SERIES,i.PASSPORT_NUMBER,i.DATE_OF_BIRTH,i.TROIKA,i.STRELKA,i.EMPLOYER_TAX_NUMBER,i.EMPLOYER_DESCRIPTION]},other:{id:3,name:"\u0418\u043d\u044b\u0435",FormPass:function(e){return l.a.createElement("div",{className:"Pass"},l.a.createElement("div",null,l.a.createElement("label",null,"\u041f\u0430\u0441\u043f\u043e\u0440\u0442"),l.a.createElement("input",{type:"text",name:"passport-series",placeholder:"\u0421\u0435\u0440\u0438\u044f",onChange:e.onChange}),l.a.createElement("input",{type:"text",name:"passport-number",placeholder:"\u041d\u043e\u043c\u0435\u0440",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u041d\u043e\u043c\u0435\u0440 \u0422\u0421"),l.a.createElement("input",{type:"text",name:"vehicle",placeholder:"\u041d\u043e\u043c\u0435\u0440",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u041d\u043e\u043c\u0435\u0440 \u0422\u0440\u043e\u0439\u043a\u0438"),l.a.createElement("input",{type:"text",name:"troika",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0422\u0440\u043e\u0439\u043a\u0438",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u041d\u043e\u043c\u0435\u0440 \u0421\u0442\u0440\u0435\u043b\u043a\u0438"),l.a.createElement("input",{type:"text",name:"strelka",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0421\u0442\u0440\u0435\u043b\u043a\u0438",onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u0426\u0435\u043b\u044c \u0432\u044b\u0445\u043e\u0434\u0430"),l.a.createElement("input",{type:"text",name:"aim",placeholder:"\u0426\u0435\u043b\u044c \u0432\u044b\u0445\u043e\u0434\u0430",maxLength:20,onChange:e.onChange})),l.a.createElement("div",null,l.a.createElement("label",null,"\u041f\u0443\u043d\u043a\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"),l.a.createElement("input",{type:"text",name:"aim-address",placeholder:"\u041f\u0443\u043d\u043a\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",onChange:e.onChange})))},fields:[i.PASSPORT_SERIES,i.PASSPORT_NUMBER,i.DESTINATION]}};function d(e){e.preventDefault()}function g(){var e,a=Object(n.useState)("work"),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)({}),E=Object(o.a)(i,2),p=E[0],g=E[1],b=h[r].FormPass;return l.a.createElement("div",null,l.a.createElement(u,{onChange:function(e){c(e)}}),l.a.createElement("form",{onSubmit:d},l.a.createElement(b,{values:p,onChange:function(e){g(Object(m.a)({},p,Object(s.a)({},e.target.name,e.target.value)))}}),l.a.createElement("br",null),l.a.createElement("div",null,(e=p,"\u041f\u0440\u043e\u043f\u0443\u0441\u043a*"+h[r].fields.map((function(a){return e[a]})).join("*")))))}t(15);var b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"}),l.a.createElement("div",{className:"App-page"},l.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.03a13cef.chunk.js.map