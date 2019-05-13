const panggilsplit = () => {
    var kalimat = "ini jaago juga ya javasccript dan bagus juga belajar di niomic"
    console.log("kalimat yang belom di split : ")
    console.log(kalimat)

    console.log("kalimat yang sudah di split :")
    var result = kalimat.split(" ")
    return result
}

console.log(panggilsplit())