### Folders & Files

The naming rule is: order + _ + module-id  
example: 1_introduction

The modules and menu order derive from this naming rule.

The .jade and css files must follow the same folder identification:

```markup
Folder: 1_introduction  
        /_introduction.jade  
        /_introduction.sass  
```

### _data.json
In this file you can set the module and it's content. The rule is:

```json
{
	"id": "Unique module id, same name as folder but without the order numbers",
	"name": "Module name, shown in menu and module title",
	"scripts": ["Javascript file(s) path is optional"],
	"items": "object, array, ou any type of data that will be held as the modules contents"
}
```

Example:

```json
// Folder: 2_colors
{
    "id": "colors",
    "name": "Colors",
    "items": {
        "intro": ["Huge have two main colors: Magenta and Black."],
        "colors": [
            {
                "className": "bg-magenta"
            },
            {
                "className": "bg-black"
            },
            {
                "className": "bg-grey"
            },
            {
                "className": "bg-blue"
            }
        ]
    }
}
```
### Jade
Jade is one of the most simple ways for writing HTML. It allows to use programming logic to write HTML in a smarter way. To learn more, <a href="http://jade-lang.com" target="_blank">click here</a>.

All data from the _data.json file will be available to the .jade file as variables.

### CSS Styles
This projects supports SASS, LESS and Stylus. Choose one and use the file with the matching extension.

The stylesheet of the module will be automatically loaded.