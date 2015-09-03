La bonne nouvelle est que quelque soit ce que vous créée dans le Styleguide sera traité en tant que module. Ainsi nous pouvons integrer une super ressource pour la communauté.
<!-- The good news is that whatever you create in the Styleguide will be treated as a module. This way we are able to add an awesome resource for the community. -->

N'oubliez pas de lire ["How modules work (anglais)"](modules.html#how-they-work) et ["Module Structure (anglais"](modules.html#modules-structure) avant d'aller plus en  avant.
<!-- Don't forget to read about ["How modules work"](modules.html#how-they-work) and ["Module Structure"](modules.html#modules-structure) before you move forward. -->

###_data.json
Vous pouvez définier une valeur-clé dans ce fichier pour être utilisée dans votre module.
<!-- You can define a key-value in this file that will be used in your module. -->

Exemples:

```json
"items": {
	"personnes": [
		{
			"nom": "John",
			"age": "32"
		},
		{
			"nom": "Kirsten",
			"age": "28"
		}
	]
}
```

### Jade
Vous pouvez utiliser toutes les données de _data.json dans le fichier .jade.
<!-- You can use all the info of _data.json inside the .jade file: -->

```html
table
	each personne in personnes
		tr
			td=personne.nome
			td=personne.age
```

### Javascript
Au cas ou vous auriez besoin de javascript pour votre module, utilisez les clés de script et les chemins d'accès.
<!-- In case you need Javascript for your module, use the key scripts and add the file path: -->

```json
"scripts": ["vendor/foundation.equalizer.js", "pricing-tables.js"]
```