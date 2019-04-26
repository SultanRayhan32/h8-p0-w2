//1

console.log('1 <-------> \n')

var x = 2;

console.log('LOOPING PERTAMA')

while ( x <= 20){
    console.log(x + ' - I love coding');
    x+=2;
}

console.log('LOOPING KEDUA')

var y = 20;

while( y >= 2){
    console.log(y + ' - I will become fullstack developer');
    y-=2;
}

//2

console.log('\n2 <-------> \n')


console.log('LOOPING PERTAMA')


for(var i = 1; i <= 20; i++){
    console.log(i + '- I love coding')
}

console.log('LOOPING KEDUA')


for(var u = 20; u >=1; u--){
    console.log(u + ' - I will become fullstack developer')
}

//3

console.log('\n3 <-------> \n')

for(var a = 1; a <=100; a++){
    if(a % 2 !== 0){
        // console.log( `counter sekarang = ${a} \n` + 'GANJIL')
        console.log('GANJIL')
    }
    else{
        // console.log( `counter sekarang = ${a} \n` + 'GENAP')
        console.log('GENAP')
    }
}


for(var b = 1; b <= 100; b+=2){
    if(b % 3 === 0){
        console.log(b + ' KELIPATAN 3')
    }
    else { console.log('')}
}

for(var c = 1; c <= 100; c+=5){
    if(c % 6 === 0){
        console.log(c + ' KELIPATAN 6')
    }
    else { console.log('')}
}

for(var d = 1; d <= 100; d+=9){
    if(d % 10 === 0){
        console.log(d + ' KELIPATAN 10')
    }
    else { console.log('')}
}

//contoh - ganjil genap
//counter sekarang = 1,
//output
"GANJIL"
//counter sekarang = 2,
//output
"GENAP"
// dan seterusnya :)

//contoh - untuk pertambahan counter 2
//counter sekarang = 1,
//output
""
//counter sekarang = 3,
//output
"3 KELIPATAN 3"
// dan seterusnya :)

//contoh - untuk pertambahan counter 5
//counter sekarang = 1,
//output
""
//counter sekarang = 6,
//output
"6 KELIPATAN 6"
// dan seterusnya :)

//contoh - untuk pertambahan counter 9
//counter sekarang = 1,
//output
""
//counter sekarang = 10,
//output
"10 KELIPATAN 10"
// dan seterusnya :)