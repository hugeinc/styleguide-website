1 - Autorisez les applications non enregistrées à être exécutés afin d'utiliser le fichier Start.app. Ceci peut être effectué dans Settings > Sécurité et confidentialité

2 - La version compilée a un bug hors ligne sous Chrome car ce dernier dispose d'une politique de sécurité qui ne permet pas la communication avec les iframes sous le protocole file://. Pour ceci, les interactions qui ont besoin de ce type de communication seront annulées (essentiellement le menu latéral). Ceci uniquement pour la version compilée hors ligne.

3 - Si vous êtes sous Mac et une fois lancé Start.app vous recevez cette erreur:

```
npm ERR! Please try running this command again as root/Administrator.
```

Vous avez probablement installé Node avec sudo ou en permission root. Vérifiez les permissions du dossier .npm avec la ligne de commande suivante:

```
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

Une fois effectué, essayez de relancer Start.app.

4 - Si vous avez XCode installé mais que vous n'avez pas accepté la license, vous recevrez cette erreur:

```
Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.
```
Ouvrez XCode, acceptez la license et relancez Start.app.

5 - Si vous recevez une erreur **404 - No data received**, vous pouvez avoir un conflit de port (défaut **9241**). Deux solutions s'offrent à vous:
- Changer la variable PORT dans le fichier styleguide/structure/_node-files/watch.js
- Définir une variable d'environnement (PORT ou STYLEGUIDE_PORT):

    Si vous utilisez Styleguide manuellement, dans la dernière étape, vous pouvez faire:

    ```
    PORT=7000 node watch.js
    ```
    ou
    ```
    STYLEGUIDE_PORT=7000 node watch.js
    ```
    L'application start.app est autonome et pour des raisons de sécurité n'a pas accès à des variables externes.
    Si vous voulez changer le port pour Start.app, il est recommandé de changer le fichier watch.js.
    Vous pouvez également additionner une variable à votre fichier .bashrc pour être utilisée par Start.app:
    ```
    touch ~/.bashrc
    echo 'export PORT=1234' >> ~/.bashrc
    ```
    ou
    ```
    echo 'export STYLEGUIDE_PORT=1234' >> ~/.bashrc
    ```