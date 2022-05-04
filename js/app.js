const submitBtn = document.getElementById("submitBtn"); 
const main = document.getElementById("main");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");

function renderThankYou() {
    main.innerHTML = "";
    main.innerHTML = 
    `<section class="response">
        <div>
            <img src="./images/illustration-thank-you.svg" alt="Thank You :)">
        </div>   
        <div class="response">
            <p id="selection">You selected <!-- Add rating here --> out of 5</p>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>
        </div>
    </section>`
    
}

function ratingHandler(rating) {
    rating = [ one, two, three, four, five ];
    
    var childs = one.innerHTML;
    console.log(childs);

    for (let i = 0; i < rating.length; i++) {
        
        switch (rating[i]){ 
            case one:
                console.log("1")
                break;
            case two:
                return "2"
                break;
            case three:
                return "3"
                break;
            case four:
                return "4"
                break;
            case five:
                return "5"
                break;
            default:
                console.log("not detecting child elements")
                break;
        }
        
    }

    
}

// ratingHandler();

one.addEventListener('click', ratingHandler)
two.addEventListener('click', ratingHandler)
three.addEventListener('click', ratingHandler)
four.addEventListener('click', ratingHandler)
five.addEventListener('click', ratingHandler)

submitBtn.addEventListener('click', renderThankYou)