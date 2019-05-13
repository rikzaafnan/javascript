const perulangan = (a) => {
    for (var i = 1; i <= a; i++) {

        if (i % 2 != 0) {
            // switch (i) {
            //     case 3:
            //         console.log("coba")
            //         break;
            //     case 7:
            //         console.log("coba again")

            //     default:
            //         console.log("ganjil : ", i)
            // }

            if (i / i === 1) {
                console.log("prima : ", i)
            } else {
                console.log("ganjil : ", i)
            }
        }

    }
}

perulangan(10)