1 - Debes permitir que aplicaciones sin registrar corran en tu sistema para poder usar el archivo Start.app. Puedes hacerlo en Preferencias > Seguridad & Privacidad

2 - La versión offline compilada tiene un pequeño problema en Chrome. Chrome tiene una política de seguridad de no permitir la comunicación con iframes bajo el protocolo `file://`, así que cualquier interacción que requiera este tipo de comunicación será eliminada (básicamente el menú lateral). Esto solo aplica para la versión offline compilada.

3 - Si eres un usuario de OS X y después de correr Start.app obtienes este error:

```
npm ERR! Please try running this command again as root/Administrator.
```

Probablemente hayas instalado Nodejs como sudo o con permisos de root. Debes cambiar los permisos del directorio `.npm` ejecutando los siguientes comandos:

```
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

Después de esto, trata de correr Start.app de nuevo.

4 - Si tienes Xcode instalado pero no has aceptado los términos de la licencia obtendrás este error:

```
Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.
```

Abre Xcode y acepta los terminos de la licencia, luego trata de correr Start.app de nuevo.

5 - Si obtienes un error `404 - No data received`, es posible que tengas un conflicto de puertos. Existen dos formas en las que puedes cambiar el número del puerto (predeterminado a `9241`):
- Cambia la variable `PORT` dentro del archivo `styleguide/structure/_node-files/watch.js`
- Establece una variable de ambiente (`PORT` o `STYLEGUIDE_PORT`):
    
    Si estás corriendo la guía de estilo manualmente, en el último paso puedes:
    ```
    PORT=7000 node watch.js
    ```
    o
    ```
    STYLEGUIDE_PORT=7000 node watch.js
    ```
    
    Start.app es autónomo, y por razones de seguridad no tiene acceso a las variables externas. Si quieres cambiar el puerto para Start.app es recomendado cambiar el archivo `watch.js`. Tambien puedes agregar una variable a tu archivo .bashrc y estará disponible para Start.app:
    ```
    touch ~/.bashrc
    echo 'export PORT=1234' >> ~/.bashrc
    ```
    o
    ```
    echo 'export STYLEGUIDE_PORT=1234' >> ~/.bashrc
    ```
