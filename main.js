var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('./Markdowns/main.md', 'utf-8');
var markdownReadMe = marked(readMe);
fs.mkdir('js', function(){
fs.writeFileSync('./js/main.html', markdownReadMe);
}
)