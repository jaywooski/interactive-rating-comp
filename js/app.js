const submitBtn = document.getElementById("submitBtn"); 
const main = document.getElementById("main");

function renderThankYou() {
    main.innerHTML = "";
    
}

submitBtn.addEventListener('click', renderThankYou)