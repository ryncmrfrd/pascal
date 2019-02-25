var triangle = [], lastrow = [];
function calculate(n){
    $('.results').empty().removeClass('scroll');
    if(n < 1000 && n != '' && n > 2){
        if(n > 16){$('.results').addClass('scroll');}
        CalcTriangle(n);
    }
    else{
        if(n == ''){$('.results').append('<span class="label error">Please enter a number.</span>');}
        else if(n < 3){$('.results').append('<span class="label error">Sorry, the number has to be equal to or higher than 3.</span>');}
        if(n >= 1000){$('.results').append('<span class="label error">Please enter a number lower than 1000.</span>');}
    }
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