### Pastas e arquivos
A regra de nomenclatura é: ordem + traço baixo + id do módulo
Exemplo: 1_introduction

A ordem do menu e dos módulos vem daí.

Os arquivos .jade e css devem seguir o mesmo identificador da pasta:

```markup
Pasta: 1_introduction  
       1_introduction/_introduction.jade  
       1_introduction/_introduction.sass  
```

### _data.json
Nesse arquivo você pode configurar o módulo e seu conteúdo. A regra é:

```json
{
	"id": "id único do módulo, igual o nome da pasta sem a ordem",
	"name": "Nome do módulo, aparece no menu e no título",
	"scripts": ["caminho do(s) arquivos de javascript opcionais"],
	"items": "objeto, array, ou qualquer tipo de dados que abriga o conteúdo do módulo"
}
```

Exemplo:

```json
// Pasta: 2_colors
{
    "id": "colors",
    "name": "Colors",
    "items": {
        "intro": ["Huge have two main colors: Magenta and Black. Additional Blue might be found on slides or t-shirts."],
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
Jade é uma forma mais simples e rápida de escrever HTML. Com ele é possível usar estruturas lógicas de programação para escrever HTML de uma forma mais inteligente. Para saber mais clique aqui.

### Estilos CSS
Esse projeto suporta Sass, Less e Stylus. Escolha um e use o arquivo com a extensão correspondente.