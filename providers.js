// Load Providers from Firebase


const providerList =
document.getElementById("providerList");


function loadProviders(){


db.collection("providers")
.get()

.then((snapshot)=>{


snapshot.forEach((doc)=>{


let provider = doc.data();



let card = document.createElement("div");


card.className="professional-card";



card.innerHTML = `

<h3>${provider.name}</h3>

<p>🔧 ${provider.service}</p>

<p>📍 ${provider.location}</p>

<p>⭐ ${provider.rating}</p>

<p>Experience:
${provider.experience} Years
</p>

<p>
Starting Price ₹${provider.price}
</p>


<button onclick="bookProvider('${doc.id}')">

Book Now

</button>

`;



providerList.appendChild(card);



});


});


}



loadProviders();





// Search Provider


function searchProvider(){


let keyword =
document.getElementById("serviceSearch")
.value
.toLowerCase();



let cards =
document.querySelectorAll(
".professional-card"
);



cards.forEach(card=>{


if(
card.innerText
.toLowerCase()
.includes(keyword)

){


card.style.display="block";


}

else{


card.style.display="none";


}


});


}





// Booking Function


function bookProvider(id){


localStorage.setItem(
"providerID",
id
);


window.location.href=
"booking.html";


}
