const panggilbilanganngenap = () => {

    var bilangangenap = []

    for (let index = 0; index < 10; index++) {
        if (index % 2 === 0) {
            bilangangenap.push(index)
        }
    }
    return bilangangenap
}

console.log(panggilbilanganngenap())