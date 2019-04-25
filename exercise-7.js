var rows1 = 5;
for(var x = 0; x <rows1; x++){
    // if(x === 0){
    //     console.log(' *')
    // }
    console.log('*')
}

var rows2 = 5;


var bintang = '';
for(var x = 0; x < rows2; x++){
    
    for(var u = 0; u < rows2; u++){
        bintang += '*'
    }
    bintang += '\n'
}

console.log(bintang)

var rows3 = 5;

var temp = '';
for(var x = 0; x < rows3; x++ ){
    for(var u = 0; u < x +1; u++){
        temp += '*';
    }
    temp += '\n'
}

console.log(temp)