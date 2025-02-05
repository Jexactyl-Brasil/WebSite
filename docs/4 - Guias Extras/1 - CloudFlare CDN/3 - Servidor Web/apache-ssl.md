---
sidebar_position: 2
---

# Apache com SSL da CloudFlare

***

### Desativando a configuração padrão

Em primeiro lugar, vamos remover a configuração padrão do Apache do seu servidor.
```bash
a2dissite 000-default.conf
```

Feito isso, podemos fazer nossa configuração para o Pterodactyl rodar.

***

### Criar arquivo de configuração

:::danger
Certifique-se de substituir `<domain>` pelo seu próprio domínio neste arquivo de configuração.
Observe também que esta configuração é para Apache com ou sem SSL ativado.
Se você deseja usar o NGINX como um servidor web ou não deseja usar SSL, consulte
às instruções do outro servidor web.
:::

Nota: Ao usar o Apache, certifique-se de ter o pacote `libapache2-mod-php` instalado ou então o PHP não será exibido em seu servidor web.

Faça um arquivo chamado `pterodactyl.conf` em `/etc/apache2/sites-available` e insira o seguinte:

```apache
<VirtualHost *:80>
  ServerName <domain>
  
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] 
</VirtualHost>

<VirtualHost *:443>
  ServerName <domain>
  DocumentRoot "/var/www/pterodactyl/public"

  AllowEncodedSlashes On
  
  php_value upload_max_filesize 100M
  php_value post_max_size 100M

  <Directory "/var/www/pterodactyl/public">
    Require all granted
    AllowOverride all
  </Directory>

  SSLEngine on
  SSLCertificateFile /certificados/cert.pem
  SSLCertificateKeyFile /certificados/key.pem
</VirtualHost> 
```

***

### Ativando a configuração

Em primeiro lugar, vamos vincular o arquivo que criamos ao diretório que o Apache usa para as configurações.
```bash
ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
```

Em seguida, aplicaremos as configurações que o Apache precisa para hospedar o Pterodactyl.
```bash
sudo a2enmod rewrite
sudo a2enmod ssl
```

Por fim, reiniciaremos o Apache para colocar o Pterodactyl online.
```bash
systemctl restart apache2
```

:::info Parabéns!
Pterodactyl está instalado e deve estar funcionando normalmente.
Se você encontrar algum problema, informe-nos em nosso [Discord](https://discord.gg/8r7n7mU33R).
:::
