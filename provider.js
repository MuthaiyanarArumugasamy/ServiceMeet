function registerProvider(){


let provider={


name:
document.getElementById("name").value,


email:
document.getElementById("email").value,


phone:
document.getElementById("phone").value,


service:
document.getElementById("service").value,


experience:
document.getElementById("experience").value,


location:
document.getElementById("location").value,


price:
document.getElementById("price").value,


rating:0,


reviews:0,


created:
new Date()


};



db.collection("providers")
.add(provider)

.then(()=>{


alert(
"Provider profile created successfully!"
);


window.location.href=
"provider-dashboard.html";


})


.catch(error=>{


alert(error.message);


});


}
