var fs = require('fs');

const {
    exec
} = require("child_process");


// Read main 

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
                    exec("generate-md --layout github --input ./input --output ./output ", (error, stdout, stderr) => {
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
        