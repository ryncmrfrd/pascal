# 📐 Pascal's Triangle Generator

> In mathematics, Pascal's triangle is a triangular array of the binomial coefficients that arises in probability theory, combinatorics, and algebra. In much of the Western world, it is named after the French mathematician Blaise Pascal, although other mathematicians studied it centuries before him in Persia, India, China, Germany, and Italy. - [Wikipedia](https://en.wikipedia.org/wiki/Pascal's_triangle)

Bored in maths class in 2020 I decided to write a piece of Javascript to generate Pascal's triangles from a starting row of `[0, 1, 0]`. From there, I decided to optomise this tiny function as much as possible, testing myself and my knowlege of obscure ES6 notation.

The final result was this function, which generates a 2 dimensional array of integers representing n rows of a Pascal's triangle in a minified size of __115__ bytes.
```javascript
p=n=>{r=[[1]];for(i=n-1;i--;){c=[];[0,...[...r].pop()].forEach((t,i,a)=>c.push(t+(a[i+1]||0)));r.push(c)}return r}
```

## 🧠 Complexity Analysis

The code has a loop that runs n-1 times to generate the remaining rows of the triangle. Within each iteration, the nested loop created by the `.forEach()` iterates over the elements of the previous row, which in the worst case has a length of n. The full number of elements has 1 + 2 + ... + n elements. This arithmetic progression sums to `n*(n+1)/2`, which proved the time complexity of __O(n<sup>2</sup>)__.

## 💻 How It Works

When the function is called, in the form `p(n)`, the code iteratively builds Pascal's triangle row by row, using the previous row's values to calculate the current row's values in a series of nested loops.

Firstly, the array `r` is initialised to the value of the first triangle row, `[[1]]`. The code then enters a loop that runs `n-1` times (excluding the first row). This loop will handle the generation of the remaining rows of Pascal's triangle. Within each iteration of the loop, a new empty array `c` is created to store the numbers of the current row.
    
The next section, `[0,...[...r].pop()]`, creates a new array by first cloning the `r` array and then removing the last row from the clone. This new array represents the previous row of Pascal's triangle, which is then iterated over by the `.forEach()`  loop. This form, with the spread index and `.pop()` function, was chosen as it took the fewest bytes to generate the previous row array.
    
Within the `forEach` loop, for each element `t` at index `i`, the code calculates the value for the current row by adding `t` to the next element `a[i+1]` (or 0 if the element doesn't exist). This sum represents the value in Pascal's triangle obtained by adding the two numbers directly above it. The resulting sum is then pushed into the `c` array.
    
After the loop finishes, the `c` array containing the numbers of the current row is pushed into the `r` array, adding a new row to Pascal's triangle, and after the parent `for(i=n-1;i--;)` loop finishes, the `r` array represents the complete Pascal's triangle with `n` rows. Finally, the `r` array is returned as the output of the function.
