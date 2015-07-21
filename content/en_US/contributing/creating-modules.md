The good news is that whatever you create in the Styleguide will be treated as a module. This way we are able to add an awesome resource for the community.

Don't forget to read about ["How modules work"](modules.html#how-they-work) and ["Module Structure"](modules.html#modules-structure) before you move forward.

###_data.json
You can define a key-value in this file that will be used in your module.

Examples:

```json
"items": {
	"people": [
		{
			"name": "John",
			"age": "32"
		},
		{
			"name": "Kirsten",
			"age": "28"
		}
	]
}
```

### Jade
You can use all the info of _data.json inside the .jade file:

```html
table
	each folk in people
		tr
			td=folk.name
			td=folk.age
```

### Javascript
In case you need Javascript for your module, use the key scripts e and add the file path:

```json
"scripts": ["vendor/foundation.equalizer.js", "pricing-tables.js"]
```