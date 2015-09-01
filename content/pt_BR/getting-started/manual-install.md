Este projeto possui as seguintes dependências (clique para instalar cada uma):

- <a href="http://nodejs.org" target="_blank">Node.js</a>
- <a href="http://harpjs.com" target="_blank">Harp.js</a>

Você também precisa ir em styleguide/structure/_node-files e rodar:
```
npm install
```

Para iniciar o Styleguide, vá pra o diretório raiz e execute no terminal:

##### Harp server

```
cd styleguide/structure/_node-files && node watch.js
```
Aguarde que o navegador irá abrir quando o Styleguide estiver rodando.

##### Harp compile
Para compilar manualmente o projeto, vá para o diretório raiz e execure (ainda no terminal):
```
cd styleguide/structure/_node-files && node write-date-exec.js
cd ../../.. && harp compile
```
Um diretório chamado 'www' conterá todos os arquivos compilados.
