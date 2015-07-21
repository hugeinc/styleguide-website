Uma ótima notícia é que a cada vez que você criar qualquer coisa no Styleguide, já será um módulo. Dessa forma vamos conseguir criar um bom recurso para toda a comunidade.

Não esqueça de ler sobre a Estrutura de Módulos e Como os módulos funcionam antes de seguir adiante.

### _data.json
Você pode criar qualquer par de chave-valor neste arquivo para utilizar no seu módulo.

Exemplos:

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
No arquivo .jade, você pode usar todas as informações do _data.json:

```html
table
	each folk in people
		tr
			td=folk.name
			td=folk.age
```

### Javascript
Caso o seu módulo tenha Javascript, use a chave scripts e coloque o caminho dos arquivos:

```json
"scripts": ["vendor/foundation.equalizer.js", "pricing-tables.js"]
```
