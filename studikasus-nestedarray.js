const panggilnestedarray = (value) => {

    let rows = value.length
    for (let i = 0; i < rows; i++) {
        let items = value[i].length
            // console.log(i, items)
        for (let n = 0; n < items; n++) {
            // console.log(value[i][n])
            let arraybaru = []

            console.log(value[i][n])
                // arraybaru.push(value[i][n])
                // console.log(arraybaru)
        }
    }

    //console.log(value)
    //console.log(value[0][0])
    // console.log(value[0][0])
    // console.log(value[1][0])
    // console.log(value[2][0])

    // let arraybaru = []
    // arraybaru.push(value[0][0])
    // arraybaru.push(value[1][0])
    // arraybaru.push(value[2][0])
    //     // let arraybarulagi = []
    //     // arraybarulagi.push[arraybaru]

    // console.log(arraybaru)
}

var nestedarray = [
    [1, 2, 3, 4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]
console.log(panggilnestedarray(nestedarray))