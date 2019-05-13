const panggilperulangan = () => {
    var datakota = ['jakarta', 'Balikapapn', 'Medan']


    // Menggunakan for
    // for (var i = 0; i < datakota.length; i++) {
    //     console.log(datakota[i])
    //     console.log(i)
    //     console.log(datakota)
    // }

    // Menggunakan forEach
    // datakota.forEach((item, index, array) => {
    //     console.log(item)
    //     console.log(index)
    //     console.log(array)
    // })

    // Menggunakan Map
    datakota.map((item, index, array) => {
        console.log(item)
        console.log(index)
        console.log(array)
    })
}

panggilperulangan()