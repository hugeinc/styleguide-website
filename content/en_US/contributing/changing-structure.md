### Dependencies
- <a href="http://nodejs.org" target="_blank">Node.js</a>
- <a href="http://harpjs.com" target="_blank">Harp.js</a>
- <a href="https://www.npmjs.com/package/livereload" target="_blank">Node Livereload</a>
- <a href="https://www.npmjs.com/package/watch" target="_blank">Node Watch</a>

### Harp
Harp is used for both serving files and compiling, such actions are done through the Start.app and Compile.add. The Start.app uses a Node.js file in order to configure Livereload and Harp together.

### Scripts
The source of the Start.app and Compile.app are inside of each app content: Contents/Resources/script

### Node Files
In the styleguide/structure/_node-files folder you will find the code that:  

- Start Harp
- Start Livereload
- Writes the current date to styleguide/_data.json file (on start and compile)
- Concatenate all modules javascript code into one file in styleguide/assets/scripts/styleguide.js
- Concatenate all modules stylesheet code into one file in styleguide/assets/styles/styleguide.js

### Structure CSS
In the folder styleguide/structure/styles is the stylesheet of the structure (header, sidebar and basic components), without any module specific code.

### Structure Javascript
In the folder styleguide/structure/scripts is the javascript of the structure (header, sidebar and basic components), without any module specific code.

### Modules Data
The styleguide/structure/_includes/modulesData.jade is responsible for collecting all necessary data of all modules into one object that will be used by all structure files.

### Pull Request
In order to do a Pull Request, you should first lint your code with styleguide/structure/_tests/_lint.sh (execute in the command line). Code with lint errors will not be accepted.