function func(N) {
    if (N % 2 == 0) {
        if (N >= 2 && N <= 5 || N > 20) {
            console.log("Not Weird")
        }
        if (N >= 6 && N <= 20) {
            console.log("Weird")
        }

    } else {
        console.log("Weird")
    }
}

console.log(func(6))