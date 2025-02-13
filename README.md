# JavaScript Division by Zero Bug

This repository demonstrates a common error in JavaScript: division by zero.  The `myFunc` function attempts to divide `a` by `b`, but it fails to handle cases where `b` (or `a`) is zero, leading to an error. The solution provides a more robust approach.

## Bug

The original `bug.js` file contains the function with the error.  Running this function with either 'a' or 'b' as 0 will result in an error.

## Solution

The `bugSolution.js` file demonstrates how to correctly handle zero values, preventing the division by zero error.  It uses explicit checks to handle these cases gracefully.
