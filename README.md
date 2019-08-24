# Pascal's Triangle Generator
An almost completely useless welsite for creating funky maths shapes.
Well, one shape in particular - the Pascal's Triangle.
If you don't know what I'm on about, [Wikipedia](https://en.wikipedia.org/wiki/Pascal's_triangle) will tell you, or you can just look the below slick animation:

![Pascal's Triangle Explanation](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif "Pascal's Triangle Explanation")

### What now?
To generate your own cool triangle, download [pascal.min.js](https://github.com/ryncmrfrd/pascal/blob/master/pascal.min.js) and run: ` pascal(number) `
This will return a promise, so you can do things like:` pascal(10).then(data => console.log(data) ) `\

Or alternatively, you can read the code explanation and have a look at the unminified version at [pascal.js](https://github.com/ryncmrfrd/pascal/blob/master/pascal.js).

### Build with :coffee: by [Ryan Comerford](https://ryncmrfrd.com) 