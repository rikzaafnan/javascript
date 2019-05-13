const panggilbilanganganjil = () => {
    var bilanganganjil = []

    for (let index = 1; index < 30; index++) {
        if (index % 2 !== 0) {
            bilanganganjil.push(index)
        }

    }
    return bilanganganjil
}

console.log(panggilbilanganganjil())