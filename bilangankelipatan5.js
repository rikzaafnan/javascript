const panggilbilangankelipatan5 = () => {
    var bilangankelipatan5 = []

    for (var i = 1; i < 50; i++) {
        if (i % 5 === 0) {
            if (i % 10 === 0) {
                var y = 'koma'
                bilangankelipatan5.push(y)
            } else {
                bilangankelipatan5.push(i)
            }
        }
    }
    return bilangankelipatan5
}

console.log(panggilbilangankelipatan5())