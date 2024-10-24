const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav =document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=> {
       nav.classList.remove('active');
   })
}

function LearnMore(){
        var getElementByClassName('normal')="about.html"
        window.'normal'=about.html;

}
/*function navigateToOtherPage() {
    // Get the URL of the target HTML page
    var targetPageUrl = "path/to/your/target/page.html";

    // Redirect to the target page using JavaScript's `location.href` property
    window.location.href = targetPageUrl;
}*/