function konversiMenit(menit) {
    var jam = menit / 60;
    var sisaMenit = menit % 60;
    if(sisaMenit > 9){
        return Math.floor(jam)  + ':' + sisaMenit;
    }
    else{
        return Math.floor(jam)  + ':0' + sisaMenit;
    }
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

// console.log(63 / 60)
// console.log(63 % 60)
// console.log(124 / 60)
// console.log(124 % 60)
// console.log(88 / 60)
// console.log(88 % 60)

// 