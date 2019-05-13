const panggilshift = () => {
    var kota = ['jakarta', 'bandung', 'semarang', 'surabaya', 'makasar']
    console.log('kota sebelum di apus : ' + kota)
    console.log('========================')
    var kota2 = kota.shift();
    console.log("kota yang diapus oleh shift :" + kota2)
    console.log("hasil kota yang telah di shift : ")

    return kota
}

console.log(panggilshift())

// panggilshift()