"use strict";
$(document).ready(function(){
    var email = sessionStorage.getItem("emailId");
    if( email !== ""){
        document.querySelector("#getEmail").innerHTML=email;
    }
         
});