This project has the following dependencies (click to install each of them):

- <a href="http://nodejs.org" target="_blank">Node.js</a>
- <a href="http://harpjs.com" target="_blank">Harp.js</a>

You also need to go to styleguide/structure/_node-files and run:
```
npm install
```

To start the Styleguide go to the root folder and execute in the command-line:

##### harp server

```
cd styleguide/structure/_node-files && node watch.js
```
Wait and the browser will open with the Styleguide running.

##### harp compile
To manually compile the project, go to its root folder and execute (still in the command-line):
```
cd styleguide/structure/_node-files && node write-date-exec.js
cd ../../.. && harp compile
```
A folder called 'www' will contain all the compiled files.