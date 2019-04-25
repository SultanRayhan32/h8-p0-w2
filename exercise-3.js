var nama = 'Mack';
var peran = '';

if(nama === "" && peran === ''){
    console.log('Nama harus diisi!')
}
else if(peran === '' && nama !== ''){
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}

else if(peran === 'Ksatria'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}\nHalo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
}
else if(peran === 'Tabib'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}\nHalo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
}

else if(peran === 'Penyihir'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}\nHalo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
}