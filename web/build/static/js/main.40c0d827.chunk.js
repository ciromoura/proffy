(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/logo.86fef799.svg"},32:function(e,a,t){e.exports=t.p+"static/media/landing.211f2bb0.svg"},33:function(e,a,t){e.exports=t.p+"static/media/study.e7a7e1b4.svg"},34:function(e,a,t){e.exports=t.p+"static/media/give-classes.156102ee.svg"},35:function(e,a,t){e.exports=t.p+"static/media/purple-heart.bfdb3ebe.svg"},39:function(e,a,t){e.exports=t.p+"static/media/back.dc8c47fa.svg"},40:function(e,a,t){e.exports=t.p+"static/media/whatsapp.45c6e6ec.svg"},42:function(e,a,t){e.exports=t.p+"static/media/warning.6dfaa2f9.svg"},44:function(e,a,t){e.exports=t(81)},49:function(e,a,t){},50:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),c=t.n(r),o=(t(49),t(8)),s=t(1),i=t(3),u=(t(50),t(14)),m=t.n(u),b=t(32),d=t.n(b),v=t(33),p=t.n(v),f=t(34),E=t.n(f),g=t(35),h=t.n(g),j=t(36),O=t.n(j).a.create({baseURL:"http://localhost:3333"});var y=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){O.get("connections").then((function(e){var a=e.data.total;r(a)}))}),[]),l.a.createElement("div",{id:"page-landing"},l.a.createElement("div",{id:"page-landing-content",className:"container"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("img",{src:m.a,alt:"Proffy"}),l.a.createElement("h2",null,"Sua plataforma de estudos online.")),l.a.createElement("img",{src:d.a,alt:"Plataforma de estudos",className:"hero-image"}),l.a.createElement("div",{className:"buttons-container"},l.a.createElement(o.b,{to:"/study",className:"study"},l.a.createElement("img",{src:p.a,alt:"Estudar"}),"Estudar"),l.a.createElement(o.b,{to:"/give-classes",className:"give-classes"},l.a.createElement("img",{src:E.a,alt:"Dar aulas"}),"Dar aulas")),l.a.createElement("span",{className:"total-connections"},"Total de ",t," conex\xf5es j\xe1 realizadas. ",l.a.createElement("img",{src:h.a,alt:"Cora\xe7\xe3o Roxo"}))))},S=t(19),N=t.n(S),k=t(38),w=t(20),x=(t(74),t(39)),C=t.n(x),D=function(e){return l.a.createElement("header",{className:"page-header"},l.a.createElement("div",{className:"top-bar-container"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{src:C.a,alt:"Voltar"})),l.a.createElement("img",{src:m.a,alt:"Proffy"})),l.a.createElement("div",{className:"header-content"},l.a.createElement("strong",null,e.title),e.description&&l.a.createElement("p",null,e.description),e.children))},_=t(40),A=t.n(_),B=(t(75),function(e){var a=e.teacher;return l.a.createElement("article",{className:"teacher-item"},l.a.createElement("header",null,l.a.createElement("img",{src:a.avatar,alt:a.name}),l.a.createElement("div",null,l.a.createElement("strong",null,a.name),l.a.createElement("span",null,a.subject))),l.a.createElement("p",null,a.bio),l.a.createElement("footer",null,l.a.createElement("p",null,"Pre\xe7o/Hora",l.a.createElement("strong",null,"R$ ",a.cost)),l.a.createElement("a",{target:"_blank",onClick:function(){O.post("connections",{user_id:a.id})},href:"https://wa.me/".concat(a.whatsapp)},l.a.createElement("img",{src:A.a,alt:"Whatsapp"}),"Entrar em contato")))}),H=t(10),M=(t(76),function(e){var a=e.label,t=e.name,n=Object(H.a)(e,["label","name"]);return l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("input",Object.assign({type:"text",id:t},n)))}),P=(t(77),function(e){var a=e.label,t=e.name,n=e.options,r=Object(H.a)(e,["label","name","options"]);return l.a.createElement("div",{className:"select-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("select",Object.assign({value:"",id:t},r),l.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Selecione uma op\xe7\xe3o"),n.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)}))))});t(78);var Q=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),o=Object(i.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(""),b=Object(i.a)(m,2),d=b[0],v=b[1],p=Object(n.useState)(""),f=Object(i.a)(p,2),E=f[0],g=f[1],h=Object(n.useState)(""),j=Object(i.a)(h,2),y=j[0],S=j[1];function x(){return(x=Object(k.a)(N.a.mark((function e(a){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,O.get("classes",{params:{week_day:E,subject:d,time:y}});case 3:t=e.sent,r(t.data),u(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",{id:"page-teacher-list",className:"container"},l.a.createElement(D,{title:"Estes s\xe3o os proffys dispon\xedveis:"},l.a.createElement("form",{id:"search-teachers",onSubmit:function(e){return x.apply(this,arguments)}},l.a.createElement(P,{name:"subject",label:"Mat\xe9ria",value:d,onChange:function(e){v(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Banco de Dados",label:"Banco de Dados"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Economia",label:"Economia"}]}),l.a.createElement(P,{name:"week-day",label:"Dia da semana",value:E,onChange:function(e){g(e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(M,{type:"time",name:"time",label:"Hora",value:y,onChange:function(e){S(e.target.value)}}),l.a.createElement("button",{type:"submit"},"Buscar"))),l.a.createElement("main",null,s&&l.a.createElement("div",{className:"noResult"},l.a.createElement(w.a,null)," Informe a mat\xe9ria, o dia da semana e o hor\xe1rio."),!s&&0===t.length&&l.a.createElement("div",{className:"noResult"},l.a.createElement(w.b,null)," Nenhum(a) professor(a) encontrado(a) com a sua pesquisa."),t.map((function(e){return l.a.createElement(B,{key:e.id,teacher:e})}))))},R=t(15),q=t(41),F=t(43),I=(t(79),function(e){var a=e.label,t=e.name,n=Object(H.a)(e,["label","name"]);return l.a.createElement("div",{className:"textarea-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("textarea",Object.assign({id:t},n)))}),T=t(42),z=t.n(T);t(80);var J=function(){var e=Object(s.e)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),m=u[0],b=u[1],d=Object(n.useState)(""),v=Object(i.a)(d,2),p=v[0],f=v[1],E=Object(n.useState)(""),g=Object(i.a)(E,2),h=g[0],j=g[1],y=Object(n.useState)(""),S=Object(i.a)(y,2),N=S[0],k=S[1],w=Object(n.useState)(""),x=Object(i.a)(w,2),C=x[0],_=x[1],A=Object(n.useState)([{week_day:0,from:"",to:""}]),B=Object(i.a)(A,2),H=B[0],Q=B[1];function T(e,a,t){var n=H.map((function(n,l){return l===e?Object(q.a)({},n,Object(R.a)({},a,t)):n}));Q(n)}return l.a.createElement("div",{id:"page-teacher-form",className:"container"},l.a.createElement(D,{title:"Que incr\xedvel que voc\xea quer dar aulas!",description:"O primeiro passo \xe9 preencher esse formul\xe1rio de inscri\xe7\xe3o"}),l.a.createElement("main",null,l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),O.post("classes",{name:r,avatar:m,whatsapp:p,bio:h,subject:N,cost:Number(C),schedule:H}).then((function(){alert("Cadastro realizado com sucesso!"),e.push("/")})).catch((function(){alert("Erro no cadastro!")}))}},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Seus dados"),l.a.createElement(M,{name:"name",label:"Nome Completo",value:r,onChange:function(e){c(e.target.value)}}),l.a.createElement(M,{name:"avatar",label:"Avatar",value:m,onChange:function(e){b(e.target.value)}}),l.a.createElement(M,{name:"whatsapp",label:"Whatsapp",value:p,onChange:function(e){f(e.target.value)}}),l.a.createElement(I,{name:"bio",label:"Biografia",value:h,onChange:function(e){j(e.target.value)}})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Sobre sua aula"),l.a.createElement(P,{name:"subject",label:"Mat\xe9ria",value:N,onChange:function(e){k(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Banco de Dados",label:"Banco de Dados"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Economia",label:"Economia"}]}),l.a.createElement(M,{name:"cost",label:"Custo da sua hora por aula",value:C,onChange:function(e){_(e.target.value)}})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Hor\xe1rios dispon\xedveis",l.a.createElement("button",{type:"button",onClick:function(){Q([].concat(Object(F.a)(H),[{week_day:0,from:"",to:""}]))}},"+ Novo hor\xe1rio")),H.map((function(e,a){return l.a.createElement("div",{key:e.week_day,className:"schedule-item"},l.a.createElement(P,{name:"week-day",label:"Dia da semana",value:e.week_day,onChange:function(e){return T(a,"week_day",e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(M,{name:"from",label:"De",type:"time",value:e.from,onChange:function(e){return T(a,"from",e.target.value)}}),l.a.createElement(M,{name:"to",label:"At\xe9",type:"time",value:e.to,onChange:function(e){return T(a,"to",e.target.value)}}))}))),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("img",{src:z.a,alt:"Aviso importante"}),"Importante ",l.a.createElement("br",null),"Preencha todos os dados."),l.a.createElement("button",{type:"submit"},"Salvar cadastro")))))};var W=function(){return l.a.createElement(o.a,null,l.a.createElement(s.a,{path:"/",exact:!0,component:y}),l.a.createElement(s.a,{path:"/study",component:Q}),l.a.createElement(s.a,{path:"/give-classes",component:J}))};var L=function(){return l.a.createElement(W,null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.40c0d827.chunk.js.map