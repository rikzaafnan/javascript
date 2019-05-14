const panggilnestedarray = (value) => {
    for (let index = 0; index < value.length; index++) {
        console.log('id : ', value[index][0])
        console.log('Name : ', value[index][1])
        console.log('Company : ', value[index][2])
    }

}

var nestedarray = [
    [1, "Mark Zuckerberg", "Facebook"],
    [2, "Elon Musk", "Tesla"],
    [3, "Bill Gates", "Microsoft"],
    [4, "Steve Jobs", "Apple"]
]

console.log(panggilnestedarray(nestedarray))