const imgDiv=document.querySelector('.pp');
const img=document.querySelector('#photo');
const file=document.querySelector('#file');
const upload=document.querySelector('#upload');

file.addEventListener('change',function(){
    const choosedfile=this.files[0];
    if(choosedfile){
        const reader = new FileReader();
        reader.addEventListener('load',function (){
            img.setAttribute('src',reader.result);
        })
        reader.readAsDataURL(choosedfile);
    }
})

document.querySelector("#files").addEventListener("change", (e) => { //CHANGE EVENT FOR UPLOADING PHOTOS
    if (window.File && window.FileReader && window.FileList && window.Blob) { //CHECK IF FILE API IS SUPPORTED
        const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
        const output = document.querySelector("#result");
        output.innerHTML = "";
        for (let i = 0; i < files.length; i++) { // LOOP THROUGH THE FILE LIST OBJECT
            if (!files[i].type.match("image")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
            const picReader = new FileReader(); // RETRIEVE DATA URI
            picReader.addEventListener("load", function (event) { // LOAD EVENT FOR DISPLAYING PHOTOS
                const picFile = event.target;
                const div = document.createElement("div");
                div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
                output.appendChild(div);
            });
            picReader.readAsDataURL(files[i]); //READ THE IMAGE
        }
    } else {
        alert("Your browser does not support File API");
    }
});
document.querySelector("#submit1").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the form from being submitted

    // Get the uploaded images
    const images = document.querySelectorAll(".thumbnail");

    // Store the images in local storage
    localStorage.setItem("images", JSON.stringify(Array.from(images).map(image => image.src)));
});



var profile = document.getElementById("st_info");
// Listen for the submit event
profile.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the value of the input field
    var input1 = document.getElementById("file").value;
    var input2 = document.getElementById("fname").value;
    var input3 = document.getElementById("lname").value;
    var input4 = document.getElementById("fmail").value;
    var input5 = document.getElementById("fbday").value;
});


var form = document.getElementById("assingmentsform");
form.addEventListener("submit", function(event) {
    var input6 = document.getElementById("files").value;
    var input7 = document.getElementById("submit1").value;
});



