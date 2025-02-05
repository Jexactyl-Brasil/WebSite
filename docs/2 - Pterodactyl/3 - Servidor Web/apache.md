---
sidebar_position: 3
---

# Usando Apache

***

> O Pterodactyl recomenda enfaticamente que você use SSL para proteger seu site.
Considere habilitar o SSL seguindo o guia [Configurando o SSL](/docs/2%20-%20Pterodactyl/3%20-%20Servidor%20Web/setup-ssl.mdx).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ApacheNoSSL, ApacheSSL } from '@site/src/components/Pages/Apache';

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
Se você deseja usar o Nginx ou caddy como um servidor web ou não deseja usar SSL, consulte
às instruções do outro servidor web.
:::

:::danger AVISO
Nota: Ao usar o Apache, certifique-se de ter o pacote **`libapache2-mod-php`** instalado ou então o PHP não será exibido em seu servidor web.
:::

Faça um arquivo chamado `pterodactyl.conf` em `/etc/apache2/sites-available` e insira o seguinte:

```bash
sudo nano /etc/apache2/sites-available/pterodactyl.conf
```

Após isso, cole **UMA DAS CONFIGURAÇÕES ABAIXO** dentro do arquivo que acabamos de criar.

<Tabs>
  <TabItem value="apache-ssl" label="Com SSL">
    <ApacheSSL/>
  </TabItem>
  <TabItem value="apache-nossl" label="Sem SSL">
    <ApacheNoSSL/>
  </TabItem>
</Tabs>


***

### Ativando a configuração

Em primeiro lugar, vamos vincular o arquivo que criamos ao diretório que o Apache usa para as configurações.
```bash
ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
```

Em seguida, aplicaremos as configurações que o Apache precisa para hospedar o Pterodactyl.
```bash
sudo a2enmod rewrite
# Caso esteja usando SSL
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
