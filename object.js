const panggilObject = () => {
    var mobil = {
        type: ' Sedan',
        harga: 200000000,
        warna: 'putih',
        tahun: [2001, 2002, 2003, 2004]
    }

    console.log(mobil)
    console.log('Mobil saya berwarna :',
        mobil.warna)


    if (mobil.tahun[1] === 2001) {
        console.log('Mobil dengan tahun : ', mobil.tahun[0])
    } else {
        console.log('error')
    }
}

panggilObject()