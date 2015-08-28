Las buenas noticias son que cualquier cosa que crees en el Styleguide será tratado como un módulo. De esta forma podremos añadir un increíble recurso a la comunidad.

No olvides leer acerca de ["Como funcionan los módulos"](modules.html#how-they-work) y ["Estructura de un módulo"](modules.html#modules-structure) antes de continuar.

### `_data.json`
Puedes definir un key-value en este archivo que luego será usado en tu módulo.

Ejemplos:

```json
"items": {
  "people": [
    {
      "name": "John",
      "age": "32"
    },
    {
      "name": "Kirsten",
      "age": "28"
    }
  ]
}
```

### Jade
Puedes usar toda la información contenida en `_data.json` dentro del archivo `.jade`:

```html
table
  each folk in people
    tr
      td=folk.name
      td=folk.age
```

### JavaScript
En caso de que necesites JavaScript para un módulo, usa la clave (`key`) `scripts` y añade la ruta del archivo:

```json
"scripts": ["vendor/foundation.equalizer.js", "pricing-tables.js"]
```
