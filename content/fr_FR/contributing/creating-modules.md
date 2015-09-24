La bonne nouvelle est que tout ce que vous créée dans Styleguide sera traité en tant que module. Ainsi nous pouvons integrer une super ressource pour la communauté.

N'oubliez pas de lire ["How modules work (anglais)"](modules.html#how-they-work) et ["Module Structure (anglais"](modules.html#modules-structure) avant d'aller plus loin.

###_data.json
Vous pouvez définir une valeur-clé dans ce fichier pour être utilisée dans votre module.

Exemples:

```json
"elements": {
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

```html
table
	each personne in personnes
		tr
			td=personne.nom
			td=personne.age
```

### Javascript
Au cas ou vous auriez besoin de javascript pour votre module, utilisez les clés de script et les chemins d'accès.

```json
"scripts": ["vendor/foundation.equalizer.js", "pricing-tables.js"]
```