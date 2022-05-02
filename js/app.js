const submitBtn = document.getElementById("submitBtn"); 
const main = document.getElementById("main");
const ratings = document.querySelector(".ratings");

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

function ratingHandler() {
    console.log("Successful");
    
    var childrenCount = ratings.childElementCount;

    var childrenVal = ratings.children;

    console.log(childrenCount);
    console.log(childrenVal);


    var rate = ratings.innerHTML;
    switch (rate) {
        case "<p>1</p>":
            console.log("1")
            break;
        case "<p>2</p>":
            return "2"
            break;
        case "<p>3</p>":
            return "3"
            break;
        case "<p>4</p>":
            return "4"
            break;
        case "<p>5</p>":
            return "5"
            break;
        default:
            // console.log("not detecting child elements")
            break;
    }
    
}

// ratingHandler();

ratings.addEventListener('click', ratingHandler)

submitBtn.addEventListener('click', renderThankYou)