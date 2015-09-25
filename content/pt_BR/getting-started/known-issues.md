1 - Você deve permitir aplicativos de desenvolvedores não identificados serem executados para conseguir executar o arquivo Start.app. Você pode fazer isso em Preferências de sistema > Segurança e Privacidade.

2 - A versão offline tem um pequeno problema no Chrome. Ele tem uma política de segurança de não permitir comunicação entre iframes no formato file:// protocolo, portanto qualquer interação que necessite tal comunicacão será removidas (basicamente o menu da barra lateral). Isto é apenas para versão offile compilada.

3 - Se você é um usuário Mac e depois de executar o Start.app tiver o erro:

```
npm ERR! Please try running this command again as root/Administrator.
```
Você provavelmente instalou Node com sudo ou permissão de super usuário. Você precisará corrigir as permissões no diretório .npm com o seguinte comando:

```
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

Depois disso, tente rodar o Start.app de novo.

4 - Se você tiver XCode instalado mas não tiver aceitado a Licença, você terá este erro:
```
Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.
```
Abra o XCode e aceite a licença, então tente rodar o Start.app de novo.


5 - Se você tiver um erro **404 - No data received**, você provavelmente tem um conflito de porta, existem dois caminhos para mudar o número da porta (padrão para **9241**):
- Mude a variável PORT dentro de styleguide/structure/_node-files/watch.js
- Sete a variável de ambiente (PORT or STYLEGUIDE_PORT):

    Se você estiver rodando Styleguide manualmente, no seu último passo, você pode fazer:

    ```
    PORT=7000 node watch.js
    ```
    ou
    ```
    STYLEGUIDE_PORT=7000 node watch.js
    ```
    O Start.app é independente, e por motivos de segurança não tem acesso à variáveis externas.
    Se você quer alterar a porta do Start.app é recomendado que altere o arquivo watch.js.
    Você pode, se você quiser, adicionar a variável para seu arquivo .bashrc ou será disponível para o Start.app:
    ```
    touch ~/.bashrc
    echo 'export PORT=1234' >> ~/.bashrc
    ```
    ou
    ```
    echo 'export STYLEGUIDE_PORT=1234' >> ~/.bashrc
    ```