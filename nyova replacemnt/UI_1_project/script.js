document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault();

let phone = document.getElementById("phone").value;

if(phone.length !== 10){
alert("Enter valid phone number");
return;
}

alert("Message Sent Successfully 🚀");

});