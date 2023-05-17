/**
 * Generates n Rows of a Pascal's Triangle
 * @author Ryan Comerford <https://ryncmrfrd.com>
 * @param {int} n - The number of triangle rows to generate
 * @return {int[][]} A 2D array of length n
 */
p=n=>{
    r=[[1]];
    for(i=n-1;i--;){
        c=[];
        [0,...[...r].pop()].forEach((t,i,a)=>c.push(t+(a[i+1]||0)));
        r.push(c)
    }
    return r
}
