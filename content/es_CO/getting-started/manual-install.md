Este proyecto tiene las siguientes dependencias (click para instalar cada una de ellas):

- <a href="http://nodejs.org" target="_blank">Nodejs</a>
- <a href="http://harpjs.com" target="_blank">Harp</a>

Adicionalmente debes ir a `styleguide/structure/_node-files` y correr:
```
npm install
```

##### `harp server`
Para iniciar la guía de estilo, ve al directorio raíz y ejecuta en la línea de comandos:
```
cd styleguide/structure/_node-files && node watch.js
harp server
```
Espera y el navegador se abrirá con la guía de estilos corriendo.


##### `harp compile`
Para compilar manualmente el proyecto, ve al directorio raíz y ejecuta en la línea de comandos:
```
cd styleguide/structure/_node-files && node write-date-exec.js
cd ../../.. && harp compile
```
Un directorio llamado `www` será creado con todos los archivos compilados.
