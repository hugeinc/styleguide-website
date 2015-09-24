### Dossier & Fichiers

La règle de nommage est la suivante: ordre + _ + module-id  
example: 1_introduction

Les modules et l'ordre des menus découlent de cette règle de nommage.

Les fichiers .jade et css doivent suivrent la même identification que les dossiers:

```markup
Dossier: 1_introduction
         /_introduction.jade
         /_introduction.sass
```

### _data.json
Dans ce fichier, vous pouvez définier le module et son contenu. La règle est la suivante:

```json
{
	"id": "Id unique de module, même nom que le dossier mais sans les numéros de commande",
	"name": "Nom du module, comme montré dans le menu et titre",
	"scripts": ["Chemin de fichier(s) Javascript optionnel"],
	"items": "objet, array, ou tout type de donnée qui servira de contenu pour les modules"
}
```

Example:

```json
// Dossier: 2_couleurs
{
    "id": "couleurs",
    "name": "Couleurs",
    "items": {
        "intro": ["Huge possède deux couleurs principales: magenta et noir."],
        "couleurs": [
            {
                "className": "bg-magenta"
            },
            {
                "className": "bg-noir"
            },
            {
                "className": "bg-gris"
            },
            {
                "className": "bg-bleu"
            }
        ]
    }
}
```
### Jade
Jade est l'un des moyens les plus simples pour écriture du HTML. Il permet d'utiliser une logique de programmation pour écrire du HTML d'une façon plus intelligente. En apprendre plus, <a href="http://jade-lang.com" target="_blank">sur Jade</a>.

Toutes les données des fichiers _data.json seront disponibles dans les fichiers .jade comme variables.

### Styles CSS
Ce projet utilise SASS, LESS et Stylus. Choisissez en un et utilisez l'extension correspondante pour les fichiers.

La feuille de style du module sera automatiquement chargé.