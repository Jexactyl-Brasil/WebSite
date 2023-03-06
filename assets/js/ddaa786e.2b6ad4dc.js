"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6654],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5576:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Nginx com SSL",s={unversionedId:"Pterodactyl/Servidor Web/nginx-ssl",id:"Pterodactyl/Servidor Web/nginx-ssl",title:"Nginx com SSL",description:"*",source:"@site/docs/2 - Pterodactyl/3 - Servidor Web/nginx-ssl.md",sourceDirName:"2 - Pterodactyl/3 - Servidor Web",slug:"/Pterodactyl/Servidor Web/nginx-ssl",permalink:"/docs/Pterodactyl/Servidor Web/nginx-ssl",draft:!1,editUrl:"https://github.com/Next-Panel/Docs/docs/2 - Pterodactyl/3 - Servidor Web/nginx-ssl.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configurar SSL",permalink:"/docs/Pterodactyl/Servidor Web/setup-ssl"},next:{title:"Nginx sem SSL",permalink:"/docs/Pterodactyl/Servidor Web/nginx"}},l={},c=[{value:"Remova a configura\xe7\xe3o padr\xe3o",id:"remova-a-configura\xe7\xe3o-padr\xe3o",level:3},{value:"Criar arquivo de configura\xe7\xe3o",id:"criar-arquivo-de-configura\xe7\xe3o",level:3},{value:"Ativando a Configura\xe7\xe3o",id:"ativando-a-configura\xe7\xe3o",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nginx-com-ssl"},"Nginx com SSL"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"remova-a-configura\xe7\xe3o-padr\xe3o"},"Remova a configura\xe7\xe3o padr\xe3o"),(0,a.kt)("p",null,"Em primeiro lugar, vamos remover a configura\xe7\xe3o NGINX padr\xe3o do seu servidor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm /etc/nginx/sites-available/default; rm /etc/nginx/sites-enabled/default\n")),(0,a.kt)("p",null,"Feito isso, podemos fazer nossa configura\xe7\xe3o para o Pterodactyl rodar."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"criar-arquivo-de-configura\xe7\xe3o"},"Criar arquivo de configura\xe7\xe3o"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Certifique-se de substituir ",(0,a.kt)("inlineCode",{parentName:"p"},"<domain>")," pelo seu pr\xf3prio dom\xednio neste arquivo de configura\xe7\xe3o.\nObserve tamb\xe9m que esta configura\xe7\xe3o \xe9 para NGINX com SSL ativado.\nSe voc\xea deseja usar o Apache como servidor web ou n\xe3o deseja usar SSL, consulte\n\xe0s instru\xe7\xf5es do outro servidor web.")),(0,a.kt)("p",null,"Fa\xe7a um arquivo chamado ",(0,a.kt)("inlineCode",{parentName:"p"},"pterodactyl.conf")," em ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available")," e insira o seguinte:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},'server {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ativando-a-configura\xe7\xe3o"},"Ativando a Configura\xe7\xe3o"),(0,a.kt)("p",null,"Em primeiro lugar, vamos vincular o arquivo que criamos ao diret\xf3rio que o NGINX usa para configura\xe7\xf5es."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n")),(0,a.kt)("p",null,"Em seguida, podemos testar nossa configura\xe7\xe3o nginx para garantir que esteja funcionando e seja v\xe1lida:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -t\n")),(0,a.kt)("p",null,"Por fim, podemos reiniciar o processo do servidor NGINX para disponibilizar nosso Painel no dom\xednio."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart nginx\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Parab\xe9ns! Pterodactyl est\xe1 instalado e deve estar funcionando normalmente.\nSe voc\xea encontrar algum problema, informe-nos em nosso ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/8r7n7mU33R"},"Discord"),".")))}u.isMDXComponent=!0}}]);