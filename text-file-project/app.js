const fs = require('fs');

var content = "OGO Studio, Best Campus Cup Solution, Buffalo City Public TVET College"

fs.writeFile('info.txt', content, err => {
    if(err){
        console.error(err);
        return
    }
});

fs.readFile('info.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return
    }
    console.log(data);
});