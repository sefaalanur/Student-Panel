function setAction(url) {
    document.getElementById('login').action = url;
}


var form1 = document.getElementById("login");
form1.addEventListener("submit", function(event) {
    var inputmail = document.getElementById("mail").value;
    var inputpassword = document.getElementById("pass").value;
    var radio1 = document.getElementById("option-1").value;
    var radio2 = document.getElementById("option-2").value;
    var inputsubmit = document.getElementById("fsubmit").value;
});