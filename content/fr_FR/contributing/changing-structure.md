### Dépendances
- <a href="http://nodejs.org" target="_blank">Node.js</a>
- <a href="http://harpjs.com" target="_blank">Harp.js</a>
- <a href="https://www.npmjs.com/package/livereload" target="_blank">Node Livereload</a>
- <a href="https://www.npmjs.com/package/watch" target="_blank">Node Watch</a>

### Harp
Harp est utilisé en tant que serveur local et pour la compilation. Ces actions s'effectuent avec Start.app et Compile.app. Start.app utilise un fichier Node.js pour configurer Livereload et Harp conjointement.

<!-- Harp is used for both serving files and compiling, such actions are done through the Start.app and Compile.app. The Start.app uses a Node.js file in order to configure Livereload and Harp together. -->

### Scripts
Les sources de Start.app et Compile.app se trouvent dans chaque contenu d'application respectif: Contents/Resources/script
<!-- The source of the Start.app and Compile.app are inside of each app content: Contents/Resources/script -->

### Fichiers Node
Dans dossier styleguide/structure/_node-files vous trouverez le code qui:
<!-- In the styleguide/structure/_node-files folder you will find the code that: -->

- Lance Harp
- Lance Livereload
- Inscrit la date du jour dans le fichier styleguide/_data.json (avec start et compile)
- Concatenate all modules javascript code into one file in styleguide/assets/scripts/styleguide.js
- Concatenate all modules stylesheet code into one file in styleguide/assets/styles/styleguide.js

### Structure CSS
Dans le dossier styleguide/structure/styles se trouve la feuille de style de la structure (header, sidebar et composants basiques), sans code de module spécifique.

<!-- In the folder styleguide/structure/styles is the stylesheet of the structure (header, sidebar and basic components), without any module specific code. -->

### Structure Javascript
Dans le dossier styleguide/structure/scripts se trouve le javascript de la structure (header, sidebar et composants basiques), sans code de module spécifique.

<!-- In the folder styleguide/structure/scripts is the javascript of the structure (header, sidebar and basic components), without any module specific code. -->

### Modules Data
Le ficher styleguide/structure/_includes/modulesData.jade est responsable de la collecte de toutes les informations et modules en un seul objet qui sera utilisé par tous les fichiers de structure.

<!-- The styleguide/structure/_includes/modulesData.jade is responsible for collecting all necessary data of all modules into one object that will be used by all structure files. -->

### Pull Request
Pour effectuer une Pull Request, il vous faut d'abord nettoyer votre code avec styleguide/structure/_tests/_lint.sh (à executer en ligne de commande). Un code avec erreurs ne sera pas accepté.

<!-- In order to do a Pull Request, you should first lint your code with styleguide/structure/_tests/_lint.sh (execute in the command line). Code with lint errors will not be accepted. -->
