var solu = 0;
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


/*
Task
Given an integer,N, perform the following conditional actions:

If N is odd, print Weird
If N is even and in the inclusive range of 2 to 5, print Not Weird
If N is even and in the inclusive range of 6 to 20, print Weird
If N is even and greater than 20, print Not Weird
*/