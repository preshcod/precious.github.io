const hamsburger = document.querySelector(".hamsburger");
const navBar = document.querySelector(".navbar");


hamsburger.addEventListener("click",() => {
    hamsburger.classlist.togle("active"); 
    navBar.classlist.togle("active");
})

document.querySelectorAll