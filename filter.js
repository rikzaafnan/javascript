const panggilfilter = () => {
    var arr = [1, 2, 3, 4, 5]
    var arrganjil = []

    // menggunakan for
    // ===========================================
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 !== 0) {
    //         arrganjil.push(arr[i])
    //     }
    // }
    // return arrganjil

    // menggunakan filter
    // ============================================


}

// console.log(panggilfilter())
var arr = [1, 2, 3, 4, 5]
var arrganjil = arr.filter(function(el) {
    return el % 2 !== 0
})

console.log(arrganjil)