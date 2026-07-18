// ===============================
// SERVICE SEARCH FUNCTION
// ===============================


const searchInput = document.querySelector(".search-box input");
const serviceCards = document.querySelectorAll(".service-card");


if(searchInput){

searchInput.addEventListener("keyup", function(){

    let searchValue = searchInput.value.toLowerCase();


    serviceCards.forEach(function(card){

        let text = card.innerText.toLowerCase();


        if(text.includes(searchValue)){

            card.style.display="block";

        }
        else{

            card.style.display="none";

        }

    });


});


}




// ===============================
// BUTTON ACTIONS
// ===============================


const buttons = document.querySelectorAll("button");


buttons.forEach(function(button){


button.addEventListener("click",function(){


if(button.innerText.includes("Provider")){


alert(
"Welcome Professional! Registration will open soon."
);


}


if(button.innerText.includes("Find")){


alert(
"Searching trusted professionals near you..."
);


}


});


});






// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll("nav a").forEach(function(link){


link.addEventListener("click",function(e){


let target = document.querySelector(
link.getAttribute("href")
);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});





// ===============================
// SUBSCRIPTION PLAN MESSAGE
// ===============================


const planButtons = document.querySelectorAll(".plan-card button");


planButtons.forEach(function(btn){


btn.addEventListener("click",function(){


alert(
"Thank you for choosing ServiceMeet. Subscription registration coming soon!"
);


});


});





// ===============================
// CONTACT FORM
// ===============================


const form = document.querySelector("form");


if(form){


form.addEventListener("submit",function(e){


e.preventDefault();


alert(
"Your message has been sent successfully!"
);


form.reset();


});


}
