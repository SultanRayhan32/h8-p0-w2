function xo(str) {
    var x1 = [];
    var o1 = []
    for(var u = 0; u < str.length; u++){
        if(str[u] === 'x'){
            x1.push(str[u])
        }
        else{
            o1.push(str[u])
        }
    }

    if(x1.length === o1.length){
        return true;
    }
    else{
        return false;
    }

  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
//   console.log(xo('ooooooxxxxx'))