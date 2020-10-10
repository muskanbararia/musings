var fs = require('fs');

const {
    exec
} = require("child_process");


// Read main 

// Create input/index.md, run command, read from output/index.html, remove input/ & output
fs.mkdir('js', function () {
            fs.mkdir('input', function () {
                exec("cp -r Markdowns/* input/", (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    exec("generate-md --layout witex --input ./input --output ./output ", (error, stdout, stderr) => {
                        if (error) {
                            console.log(`error: ${error.message}`);
                            return;
                        }
                        if (stderr) {
                            console.log(`stderr: ${stderr}`);
                            return;
                        }
                        exec("cp -r output/* js/", (error, stdout, stderr) => {
                            if (error) {
                                console.log(`error: ${error.message}`);
                                return;
                            }
                            if (stderr) {
                                console.log(`stderr: ${stderr}`);
                                return;
                            }
                            exec("rm -rf input/ output/", (error, stdout, stderr) => {
                                if (error) {
                                    console.log(`error: ${error.message}`);
                                    return;
                                }
                                if (stderr) {
                                    console.log(`stderr: ${stderr}`);
                                    return;
                                }
                            }) 
                        })
                    });


                })
            })
        })
        

        // // main2
        // var readMe2 = fs.readFileSync('./Markdowns/main2.md', 'utf-8');
        // var markdownReadMe2 = marked(readMe2);
        // fs.writeFileSync('./js/main2.html', markdownReadMe2);