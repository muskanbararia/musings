var marked = require('marked');
var fs = require('fs');


// Read main 
var readMe = fs.readFileSync('./Markdowns/main.md', 'utf-8');
var markdownReadMe = marked(readMe);
fs.mkdir('js', function(){
fs.writeFileSync('./js/main.html', markdownReadMe);
}
)

// main2
var readMe2 = fs.readFileSync('./Markdowns/main2.md', 'utf-8');
var markdownReadMe2 = marked(readMe2);
fs.writeFileSync('./js/main2.html', markdownReadMe2);
