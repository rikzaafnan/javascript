const panggilsplice = () => {
    var kota = ['Jakarta', 'Medan', 'Padang', 'Malang']

    //console.log('data sebelum menggunakan splice :' + kota)
    console.log(kota)
        // console.log("============")
        // console.log("pada parameter angka nya 0")
        // kota.splice(2, 0, 'palembang')
        // console.log(kota)
        // console.log('=====')
        // console.log("pada parameter angka nya 1")
        // kota.splice(2, 0, 'palembang')
        // return kota

    // menghapus data dengan splice
    kota.splice(1, 2)
    return kota
}

console.log(panggilsplice())