const fs = require('fs');
const path = require('path');
fs.readdir(__dirname,function(err,files){
    console.log(files);
})