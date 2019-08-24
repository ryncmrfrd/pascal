/**
    CALCULATING PASCAL'S TRIANGLE IN JS
    @author Ryan Comerford <https://ryncmrfrd.com>\
    For minified/production code @see pascal.min.js :)
*/

/** @function pascal - define async function (allowing for .then() usage like a promise) */
const pascal = async function(number){

    var results = [[1]], /** @var results - all currently canculated rows to return at the end */
        latestrow = [1]; /** @var latestrow - the last calculated row */

    /** @for the number of rows to be calculated */
    for(var i = 0; i < number - 1; i++){

        var nextrow = []; /** @var nextrow - each integers calculated in the row */
        
        /** @for the number of integers in the current row */
        for(var y = 0; y < (latestrow.length + 1); y++){

            /** add the next integer to the nextrow @see nextrow */
            nextrow.push((latestrow[y - 1] || 0) + (latestrow[y] || 0))
        }

        /** set lastrow to the newest "latest calculated row" @see latestrow */
        latestrow = nextrow;

        /** add the new to results @see results */
        results.push(nextrow);
    }

    return results;
}