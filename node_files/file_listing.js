var fs = require('fs');

function readDir(path) {
    var file_list = fs.readdirSync(path);
    var pdf_list = new Array();
    for (x in file_list) {
        if (x.indexOf(/.pdf/i) != -1){
            pdf_list.push(x);
        }
    }
}