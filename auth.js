function registerUser(){


let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;


let role =
document.getElementById("role").value;



auth.createUserWithEmailAndPassword(
email,
password
)

.then((userCredential)=>{


let user = userCredential.user;



db.collection("users")
.doc(user.uid)
.set({

name:name,

email:email,

role:role,

created:new Date()

})


alert(
"Registration Successful"
);


})


.catch(error=>{


alert(error.message);


});


}

function loginUser(){


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



auth.signInWithEmailAndPassword(
email,
password
)


.then(()=>{


alert(
"Login Successful"
);


window.location.href=
"customer-dashboard.html";


})


.catch(error=>{


alert(error.message);


});


}

