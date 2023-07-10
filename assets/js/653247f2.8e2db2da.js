"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8593],{3905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>g});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),l=function(e){var a=t.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):c(c({},a),e)),o},p=function(e){var a=l(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return o?t.createElement(g,c(c({ref:a},p),{},{components:o})):t.createElement(g,c({ref:a},p))}));function g(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,c=new Array(n);c[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<n;l++)c[l]=o[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9131:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var t=o(7462),r=(o(7294),o(3905));const n={sidebar_position:2},c="Configurar pagamentos com Mercado Pago",i={unversionedId:"Jexactyl/Extras/Adicional/Mercado_Pago",id:"Jexactyl/Extras/Adicional/Mercado_Pago",title:"Configurar pagamentos com Mercado Pago",description:"*",source:"@site/docs/3 - Jexactyl/6 - Extras/2 - Adicional/Mercado_Pago.md",sourceDirName:"3 - Jexactyl/6 - Extras/2 - Adicional",slug:"/Jexactyl/Extras/Adicional/Mercado_Pago",permalink:"/docs/Jexactyl/Extras/Adicional/Mercado_Pago",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configurar Discord 0Auth para Jexactyl",permalink:"/docs/Jexactyl/Extras/Adicional/configura\xe7\xe3o"},next:{title:"Aceite pagamentos com PayPal",permalink:"/docs/Jexactyl/Extras/Adicional/paypal"}},s={},l=[{value:"Obtenha o Access Token",id:"obtenha-o-access-token",level:3},{value:"1. Fa\xe7a login no console do desenvolvedor do Mercado Pago",id:"1-fa\xe7a-login-no-console-do-desenvolvedor-do-mercado-pago",level:3},{value:"2. V\xe1 para o painel e crie um novo aplicativo em Suas integra\xe7\xf5es",id:"2-v\xe1-para-o-painel-e-crie-um-novo-aplicativo-em-suas-integra\xe7\xf5es",level:3},{value:"3. Crie seu aplicativo do Mercado Pago",id:"3-crie-seu-aplicativo-do-mercado-pago",level:3},{value:"4. Obtenha o Access Token",id:"4-obtenha-o-access-token",level:3},{value:"5. Adicionar Access Token do Cliente ao Jexactyl",id:"5-adicionar-access-token-do-cliente-ao-jexactyl",level:3},{value:"6. Ative o gateway do Mercado Pago nas configura\xe7\xf5es",id:"6-ative-o-gateway-do-mercado-pago-nas-configura\xe7\xf5es",level:3},{value:"7. Teste sua configura\xe7\xe3o",id:"7-teste-sua-configura\xe7\xe3o",level:3}],p={toc:l},d="wrapper";function u(e){let{components:a,...o}=e;return(0,r.kt)(d,(0,t.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configurar-pagamentos-com-mercado-pago"},"Configurar pagamentos com Mercado Pago"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Mostraremos nesse guia como fazer as configura\xe7\xf5es para come\xe7ar a utilizar o Mercado Pago\npara processar as compras de forma pr\xe1tica e segura."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Este metodo de pagamento foi implementado na ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.8.4"),". Verifique se voc\xea est\xe1 executando esta vers\xe3o\nou a mais recente para usar o sistema do Mercado Pago.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"obtenha-o-access-token"},"Obtenha o Access Token"),(0,r.kt)("p",null,"Voc\xea precisar\xe1 primeiro criar um novo 'App' com o Mercado Pago para obter um Access Token\npara usar no Jexactyl."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1-fa\xe7a-login-no-console-do-desenvolvedor-do-mercado-pago"},"1. Fa\xe7a login no console do desenvolvedor do Mercado Pago"),(0,r.kt)("p",null,"URL: ",(0,r.kt)("a",{parentName:"p",href:"https://www.mercadopago.com.br/developers/panel/app"},"https://www.mercadopago.com.br/developers/panel/app")),(0,r.kt)("p",null,"Caso n\xe3o tenha conta no Mercado Pago, ",(0,r.kt)("a",{parentName:"p",href:"https://www.mercadopago.com.br/hub/registration/landing"},"Crie uma Conta")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/1183ce43-04e1-492f-bfc3-f0c678ab2865",alt:"image"})),(0,r.kt)("h3",{id:"2-v\xe1-para-o-painel-e-crie-um-novo-aplicativo-em-suas-integra\xe7\xf5es"},"2. V\xe1 para o painel e crie um novo aplicativo em ",(0,r.kt)("a",{parentName:"h3",href:"https://www.mercadopago.com.br/developers/panel/app"},"Suas integra\xe7\xf5es")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/510bfa90-55e1-4b79-a55b-dca398ce374e",alt:"image"})),(0,r.kt)("h3",{id:"3-crie-seu-aplicativo-do-mercado-pago"},"3. Crie seu aplicativo do Mercado Pago"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/33673f6c-605b-482d-87a9-f73f939bc483",alt:"image"})),(0,r.kt)("h3",{id:"4-obtenha-o-access-token"},"4. Obtenha o Access Token"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/83d4d56b-6cd7-4a6c-a647-113b57d5f873",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/b072392a-316b-4f13-a629-3ba203d9633c",alt:"image"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"5-adicionar-access-token-do-cliente-ao-jexactyl"},"5. Adicionar Access Token do Cliente ao Jexactyl"),(0,r.kt)("p",null,"Em seguida, voc\xea precisar\xe1 colocar essas chaves em seu arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," para permitir o login do Jexactyl."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/jexactyl\nnano .env\n\n# No final do arquivo .env preencha o campo MPAGO_ACCESS_TOKEN=\n# Caso ele n\xe3o exista, crie ele.\n")),(0,r.kt)("h3",{id:"6-ative-o-gateway-do-mercado-pago-nas-configura\xe7\xf5es"},"6. Ative o gateway do Mercado Pago nas configura\xe7\xf5es"),(0,r.kt)("admonition",{title:"Informa\xe7\xe3o",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Certifique-se de que a configura\xe7\xe3o 'Mercado Pago' esteja definida como 'Habilitado'.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Next-Panel/Docs/assets/30575805/0a52d5d2-dce4-45f6-b3ae-f063ab573858",alt:"image"})),(0,r.kt)("h3",{id:"7-teste-sua-configura\xe7\xe3o"},"7. Teste sua configura\xe7\xe3o"),(0,r.kt)("p",null,"V\xe1 at\xe9 a Loja e clique na guia 'Saldo'. Quando estiver l\xe1, tente comprar cr\xe9ditos ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," com o Mercado Pago.\nSe a p\xe1gina redirecionar para um portal de compras do Mercado Pago, parab\xe9ns! Voc\xea configurou tudo com sucesso!"),(0,r.kt)("admonition",{title:"Informa\xe7\xe3o",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Se voc\xea tiver problemas ao come\xe7ar a usar o Mercado Pago, informe-nos no nosso ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/8r7n7mU33R"},"Discord"))))}u.isMDXComponent=!0}}]);