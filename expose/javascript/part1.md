# Part 1

1. `values added: 20`
2. `final result: 20`
3. `values added: 20`
4. The code returns an error. The variable `result` is not defined. Because the variable `result` is declared using the `let` keyword, it only has a block scope within the `if` statement. So in line 13, because it is outside the block scope, the variable `result` is not defined.
5. The code returns an error. Technically, nothing is printed by line 9 as the error occurs on line 7. The `const` keyword does not allow for any changes made to the variable of `result`, so line 7 attempts to reasssign the value, which the variable is not allowed to do.
6. Similarly to question 5, the code returns an error due to the `const` variable not being able to change its value by summing the two numbers on line 7.