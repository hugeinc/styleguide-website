### Dependencias
- <a href="http://nodejs.org" target="_blank">Node.js</a>
- <a href="http://harpjs.com" target="_blank">Harp.js</a>
- <a href="https://www.npmjs.com/package/livereload" target="_blank">Node Livereload</a>
- <a href="https://www.npmjs.com/package/watch" target="_blank">Node Watch</a>

### Harp
Harp es usado para compilar y servir archivos, dichas acciones son realizadas a través de Start.app y Compile.app. Start.app usa un archivo de Nodejs para configurar Livereload y Harp al mismo tiempo.

### Scripts
El código fuente de Start.app y Compile.app están dentro de cada uno de los contenidos de la aplicación: `Contents/Resources/script`

### Archivos Node
En el directorio `styleguide/structure/_node-files` encontrarás el código que:

- Inicia Harp
- Inicia Livereload
- Escribe la fecha actual en el archivo `styleguide/_data.json` (en start y compile)
- Concatena todos los módulos JavaScript en un solo archivo `styleguide/assets/scripts/styleguide.js`
- Concatena todos los módulos de estilos en un solo archivo `styleguide/assets/styles/styleguide.js`

### Estructura CSS
En el directorio `styleguide/structure/styles` está la hoja de estilo de la estructura (header, sidebar y componentes básicos), sin código específico de algún módulo.

### Estructura JavaScript
En el directorio `styleguide/structure/scripts` está el JavaScript de la estructura (header, sidebar y componentes básicos), sin código específico de algún módulo.

### Información de módulos
El archivo `styleguide/structure/_includes/modulesData.jade` es responsable de recolectar toda la información necesaria de todos los módulos en un solo objeto que será usado por todos los archivos de la estructura.

### Pull Request
Para realizar un Pull Request, debes primero verificar tu código con `styleguide/structure/_tests/_lint.sh` (ejecutar en la línea de comandos). Código con errores de estilo no será aceptado.
