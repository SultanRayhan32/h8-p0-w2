// var buttonPushed = 2;
// switch(buttonPushed) {
//   case 1:   { console.log('matikan TV!'); break; }
//   case 2:   { console.log('turunkan volume TV!'); break; }
//   case 3:   { console.log('tingkatkan volume TV!'); break; }
//   case 4:   { console.log('matikan suara TV!'); break; }
//   default:  { console.log('Tidak terjadi apa-apa'); }
// }

var tanggal = 12
var bulan = 7
var tahun = 2015

switch(bulan) {
    case 1 : { bulan = 'Januari' ; break;}
    case 2 : { bulan = 'Februari' ; break;}
    case 3 : { bulan = 'Maret' ; break;}
    case 4 : { bulan = 'April' ; break;}
    case 5 : { bulan = 'Mei' ; break;}
    case 6 : { bulan = 'Juni' ; break;}
    case 7 : { bulan = 'Juli' ; break;}
    case 8 : { bulan = 'Agustus' ; break;}
    case 9 : { bulan = 'September' ; break;}
    case 10 : { bulan = 'Oktober' ; break;}
    case 11 : { bulan = 'November' ; break;}
    case 12 : { bulan = 'Desember' ; break;}
}

console.log(`${tanggal} ${bulan} ${tahun}`)