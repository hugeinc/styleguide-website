Ce projet a les dépendances suivantes (Cliquez pour les installer chacune d'elles):

- <a href="http://nodejs.org" target="_blank">Node.js</a>
- <a href="http://harpjs.com" target="_blank">Harp.js</a>

Vous pouvez également aller au dossier styleguide/structure/_node-files et lancer dans le terminal:
```
npm install
```

Pour lancer Styleguide, aller au dossier racine et exécuter en ligne de commande:

##### harp server

```
cd styleguide/structure/_node-files && node watch.js
```
Patienter pendant que le navigateur sóuvre avec Styleguide.

##### harp compile
Pour compiler manuellement le projet, aller au dossier racine et exécuter (en ligne de commande):
```
cd styleguide/structure/_node-files && node write-date-exec.js
cd ../../.. && harp compile
```
Un dossier nommé 'www' sera créé avec tous les fichiers compilés.