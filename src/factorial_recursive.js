// Description: https://www.hackerrank.com/challenges/js10-function/problem

function factorial(n) {
    if (n == 0) {
        console.log("termino")
        return 1;
    } else {
        console.log("else" + n)
        return n * factorial(n - 1)
    }
}

console.log("solu: " + factorial(4))