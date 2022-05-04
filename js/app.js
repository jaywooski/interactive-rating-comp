const submitBtn = document.getElementById("submitBtn"); 
const main = document.getElementById("main");
const rating = document.querySelector(".ratings")
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");

function renderThankYou() {
    var rate = sessionStorage.getItem('myRate');
    main.innerHTML = "";
    main.innerHTML = 
    `<section class="response">
        <div>
            <img src="./images/illustration-thank-you.svg" alt="Thank You :)">
        </div>   
        <div class="response">
            <p id="selection">You selected ${rate} out of 5</p>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>
        </div>
    </section>`
    
}

function ratingHandler(e) {
    
    // console.log(e.target);
    if(e.target != submitBtn) {
        const rating = e.target.innerHTML;
        console.log(rating);
        sessionStorage.setItem('myRate', rating);
        return rating;
        
    }
    
}



rating.addEventListener('click', ratingHandler);

submitBtn.addEventListener('click', renderThankYou)