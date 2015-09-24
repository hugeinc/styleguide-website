### Dépendances
- <a href="http://nodejs.org" target="_blank">Node.js</a>
- <a href="http://harpjs.com" target="_blank">Harp.js</a>
- <a href="https://www.npmjs.com/package/livereload" target="_blank">Node Livereload</a>
- <a href="https://www.npmjs.com/package/watch" target="_blank">Node Watch</a>

### Harp
Harp est utilisé en tant que serveur local et pour la compilation. Ces actions s'effectuent avec Start.app et Compile.app. Start.app utilise un fichier Node.js pour configurer Livereload et Harp conjointement.

### Scripts
Les sources de Start.app et Compile.app se trouvent dans chaque contenu d'application respectif: Contents/Resources/script

### Fichiers Node
Dans dossier styleguide/structure/_node-files vous trouverez le code qui:

- Lance Harp
- Lance Livereload
- Inscrit la date du jour dans le fichier styleguide/_data.json (avec start et compile)
- Concatène tous les modules javascript en un fichier dans styleguide/assets/scripts/styleguide.js
- Concatène tous les fichiers css en un fichier dans styleguide/assets/styles/styleguide.js

### Structure CSS
Dans le dossier styleguide/structure/styles se trouve la feuille de style de la structure (header, sidebar et composants basiques), sans code de module spécifique.

### Structure Javascript
Dans le dossier styleguide/structure/scripts se trouve le javascript de la structure (header, sidebar et composants basiques), sans code de module spécifique.

### Modules Data
Le ficher styleguide/structure/_includes/modulesData.jade est responsable de la collecte de toutes les informations et modules en un seul objet qui sera utilisé par tous les fichiers de structure.

### Pull Request
Pour effectuer une Pull Request, il vous faut d'abord nettoyer votre code avec styleguide/structure/_tests/_lint.sh (à executer en ligne de commande). Un code avec erreurs ne sera pas accepté.