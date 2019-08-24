const _handleSubmit = function(e){
    console.log
    e.preventDefault();

    var n = Number(document.querySelector("#pascalNumber").value),
        results = document.querySelector("#result");

    while(results.firstChild) results.removeChild(results.firstChild); 
    results.classList.remove("scroll")

    if(_isValid(n)){
        _p(n).then(triangle => {
            for(let row of triangle) results.innerHTML += `<p>${row}</p>`
        })
    } else results.innerHTML = 
    `
    
    <article class="message is-danger">
        <div class="message-body">
            Error. Please try again or log a bug on Github
        </div>
    </article>
    `
}

const _p=async function(n){for(var r=[[1]],a=[1],s=0;s<n-1;s++){for(var c=[],o=0;o<a.length+1;o++)c.push((a[o-1]||0)+(a[o]||0));a=c,r.push(c)}return r};

const _isValid = function(n){
    if(n > 1000 || n == '' || n < 1 || !n) return false;
    return true;
}

window.onload = document.getElementById("form").addEventListener("submit", _handleSubmit, false);