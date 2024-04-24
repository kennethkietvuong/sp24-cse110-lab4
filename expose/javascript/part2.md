# Part 2

1. At line 12, the console will just print the number `3`. Recall that variables using the `var` type have function-scope regardless if it is inside a block. In this case, the variable `i` was declared in the `for` loop block as a `var`, which ran for 3 iterations (based on the length of `prices` array which is 3). For each price in the `prices` array, the variable `i` went from 0, 1, 2, and then `i=3`. At `i=3`, the `for` loop stops as it breaks the condition of the loop and continues to line 12. This is where the console prints out the number 3, since `i=3` due to the `for` loop.
2. At line 13, the console will just print the number `150`. In this case, the variable `discountedPrice` is declared as a `var` inside the `for` loop, so it has function-scope. The variable `discountedPrice` calculates the value of the original price item by its discount percentage, and adds that to the `discounted` array. In the last iteration of the `for` loop, `discountedPrice` calculates the last item at `i=2`. This calculates to be `300 * (1 - 0.5) = 150`, thus, is the last value that is printed at line 13.
3. At line 14, the console prints out the number `150`. Similarly to the previous questions, the variable `finalPrice` is declared to be a `var` and that the last iteration within the `for` loop calculates the last value of `finalPrice`. When the last iteration comes around in the `for` loop at `i=2`, it uses the value of `discountedPrice = 150` and rounds it to be a decimal. Thus, the `finalPrice` at `i=2` is calculated to be: `Math.round(150 * 100) / 100 = 150`, which is printed at line 14.
4. This function will return an array that contains integer values that consist of the prices of items at a given discount. In short, it returns an array that contains the discounted prices (with a 50% discount) of an array of items given a specified discount value.
5. At line 12, the code will throw an error stating that the variable `i` is `undefined` (or not defined). The reason this code causes an error is because the variable `i` is declared using the `let` keyword. This means that the variable `i` only has a block scope, which in this case, is only tied to the `for` loop. Thus attempting to print out `i` outside of the `for` loop causes the code to throw the undefined variable error.
6. At line 13, the code will throw an error stating that the variable `discountedPrice` is `undefined` (or not defined). Similarly to question 5, the variable `discountedPrice` is declared using the `let` keyword which only has block-scope functionality. The variable `discountedPrice` is defined only within the `for` loop, so attempting to print it out outside of the `for` loop will throw the undefined variable error.
7. At line 14, the console will print the number `150`. This is because the variable `finalPrice` is declared outside of the `for` loop, meaning that it has "function-scope" functionality (note: it is using the `let` keyword). Thus, after the `for` loop runs all of its iterations, the final value that `finalPrice` results in will be `150` after all of the calculations, which is able to be printed, since the variable is part of the "block" that the print statement is in.
8. Similar to question 4, this function will return an array containing the discounted integer values of items based on the discount value (which in this case is 50% or 0.5).
9. At line 11, the code will throw an error stating that the  variable `i` is `not defined`. Variable `i` is declared using the `let` keyword, so it has block-scope functionality. On top of that, it is declared/defined within the `for` loop, so the variable `i` only works within the `for` loop. Thus when attempting to print the variable `i` outside of the `for` loop, it causes the code to throw an error, since variable `i` is out of scope of the block (`for` loop).
10. At line 12, the console will print the number `3`. The reason that it prints a value of `3` is because of the `const` variable being defined at the start of the function. At line 4, the variable `length` is calculated by getting the length of the `prices` array (in this case, it is 3, since the array consists of 3 items). The variable `length` never changes afterwards, so when we reach the print statement, it prints out the variable of `length` (which is 3).
11. This function will return an array that contains the discounted items which are 50% off. The array return is: `discounted = [50, 100, 150]`. The reason that this works is because the variable within the `for` loop of `discountedPrice` is constantly being declared using the `const` keyword, thus it does not throw an error.
12. Below are the following notations:
    A. `student.name`
    B. `student['Grad Year']`
    C. `student.greeting()`
    D. `student['Favorite Teacher'].name`
    E. `student.courseLoad[0]`
13. Below are Arithmetic Outputs:
    A. `'32'`. The integer `2` maps to its string representation of `'2'`. Thus the two strings get concatenated.
    B. `1`. The string `'3'` maps to its integer representation of `3`. Thus, `3` gets subtracted by the integer of `2` to get `1`.
    C. `3`. The `null` variable gets mapped to the integer of `0`. Thus `3 + 0 = 3`.
    D. `'3null'`. The `null` variable gets mapped to the string representation of `'null'`. Thus concatenating the two strings.
    E. `4`. The `true` boolean gets mapped to its integer representation of `1`. Thus `1 + 3 = 4`.
    F. `0`. The `false` boolean gets mapped to its integer representation of `0` while the `null` variable gets mapped to the integer of `0`. Thus `0 + 0 = 0`.
    G. `'3undefined'`. The `undefined` gets mapped to its string representation of `'undefined'`. Thus concatenated the two strings.
    H. `NaN`. When subtracting, both the string and `undefined` attempts to convert to integers. The string is able to convert, but `undefined` cannot. This throws an error, where it is not possible to calculate a value.
14. Below are Comparison Outputs:
    A. `true`. The string `'2'` gets mapped to its integer equivalent of `2` and gets compared to `1`, which it is true that 2 is greater than 1.
    B. `false`. The string `'2'` gets lexicographically compared letter-by-letter with the string `'12'`. In this case, the string `'2'` gets compared to the first letter of `'1'` in `'12'`, and it is not less than (resulting in false).
    C. `true`. The string `'2'` gets mapped to its integer equivalent of `2` and gets compared to `2` which is true.
    D. `false`. The strict equality operator checks the equality without type conversion. Because there is two different types, it will immediately return false.
    E. `false`. The `true` boolean gets mapped to its integer equivalent of `1` and gets compared to `2`, which is false for equality.
    F. `true`. The `Boolean(2)` type-casts the integer `2` into a boolean, which makes it so any other value that is not zero will be a `true` boolean. This gets strictly compared to the `true` boolean, which `true === true` is `true`.
15. The difference between the `==` and `===` is that `==` does type conversion while `===` does not. The `===` operand is called the strict equality operator, and will attempt to check equality without converting types at all.
17. The result after the function is called is that the new modified array becomes `[2,4,6]`. When we call `modifyArray`, we take in an initial array of `[1,2,3]` and the callback function of `doSomething`. We get into the `modifyArray` function and we initialize a new empty array that will be returned at the end of the function. We then get into the `for` loop that iterates through the entire initial array of `[1,2,3]` (so 3 iterations or loops) and for each iteration, the new array adds in a new value given by the callback function of the corresponding array element. The callback function of `doSomething` takes in an integer, multiplies that by `2`, and returns that multiplied integer. That integer is then pushed or added into the new array from the function `modifyArray`. This continues on with each array element and then the new array gets returned, which is our final result.
19. The output is as follows:
    ```
    1
    4
    3
    2
    ```