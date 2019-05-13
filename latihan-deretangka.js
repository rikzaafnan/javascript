const deretAngka = (n) => {
    var hasilderetangka = ''
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            hasilderetangka += 'NIOMIC '
        } else {
            if (i % 3 === 0) {
                hasilderetangka += 'NIO '
            } else if (i % 5 === 0) {
                hasilderetangka += 'MIC '
            } else {
                hasilderetangka += i + ' '
            }
        }
    }
    return hasilderetangka
}

console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))
console.log(deretAngka(15))