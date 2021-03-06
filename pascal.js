/**
    CALCULATING A PASCAL'S TRIANGLE IN JS
    @author Ryan Comerford <https://ryncmrfrd.com>
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