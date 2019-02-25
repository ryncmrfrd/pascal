var triangle = [], lastrow = [];
function calculate(n){
    $('.results').empty().removeClass('scroll');
    if(n < 1000 && n != '' && Math.sign(n) == 1 && n > 2){
        if(n > 16){$('.results').addClass('scroll');}
        CalcTriangle(n);
    }
    else{$('.results').append('<span class="label error">You did it wrong.</span>');}
}
function CalcTriangle(n){
    lastrow = [1,1];
    $('.results').append('<p>1</p>').append('<p>'+lastrow+'</p>');
    for (var i=0; i < n-2; i++){CalcRow(lastrow);}
}
function CalcRow(arr){
    var currentrow = [1];
    for(var i=0; i < arr.length-1;i++){currentrow.push(arr[i]+arr[i+1]);}
    currentrow.push(1); lastrow = currentrow;
    $('.results').append('<p>'+currentrow+'</p>');
}
$('.form').keydown(function(e){
    if (e.keyCode === 13) {$('button').click();}
});