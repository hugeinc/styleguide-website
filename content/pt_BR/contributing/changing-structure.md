### Dependências
- <a href="http://nodejs.org" target="_blank">Node.js</a>
- <a href="http://harpjs.com" target="_blank">Harp.js</a>
- <a href="https://www.npmjs.com/package/livereload" target="_blank">Node Livereload</a>
- <a href="https://www.npmjs.com/package/watch" target="_blank">Node Watch</a>

### Harp
Harp é usado por ambos, servir e compilar aquivos, tais ações são feitas através do Start.app e Compile.app. O Start.app usa o arquivo de Node.js para configurar o Livereload e o Harp juntos.

### Scripts
O código fonte do Start.app e Compile.app estão dentro de cada conteúdo interno do app: Contents/Resources/script

### Arquivos Node
Na pasta styleguide/structure/_node-files você achará o código para:

- Iniciar o Harp
- Iniciar Livereload
- Escrever a data atual para o arquivo styleguide/_data.json (no start and compile)
- Concatenar todos os códigos dos módulos javascript em um arquivo em styleguide/assets/scripts/styleguide.js
- Concatenar todos os códigos de estilo em um arquivo em styleguide/assets/styles/styleguide.js

### Estrutura CSS
No diretório styleguide/structure/styles está presente a o estilo da estrutura (header, sidebar e componentes básicos), sem qualquer código de módulo específico.

### Estrutura Javascript
No diretório styleguide/structure/scripts está presente o javascript da estrutura (header, sidebar e componentes básicos), sem qualquer código de módulo específico.

### Dados de módulos
A styleguide/structure/_includes/modulesData.jade é responsável por coletar todos os dados necessários para todos os módulos em um único objeto que será usado por toda a estrutura de arquivos.

### Pull Request
A fim de realizar o Pull Request, você deverá primeiramente realizar a validação do seu código utilizando styleguide/structure/_tests/_lint.sh (executar como linha de comando). Códigos com erros de validação não serão aceitos.
