





var sol = 0;

for (let i = 1; i != 3; i++) {

    sol = sol * i

    for (let j = 1; j != 3; j++) {

        sol = sol + j

        for (let k = 2; k != 4; k++) {

            sol = i + j + k;

        }


    }
}
console.log(sol)


