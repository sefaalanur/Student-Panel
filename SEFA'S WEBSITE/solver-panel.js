const imgDiv=document.querySelector('.profilep');
const img=document.querySelector('#pphoto');
const file=document.querySelector('#s_file');
const upload=document.querySelector('#s_upload');

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


document.querySelector("#s_files").addEventListener("change", (e) => { //CHANGE EVENT FOR UPLOADING PHOTOS
    if (window.File && window.FileReader && window.FileList && window.Blob) { //CHECK IF FILE API IS SUPPORTED
        const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
        const output = document.querySelector("#s_result");
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
document.querySelector("#s_submit1").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the form from being submitted

    // Get the uploaded images
    const images = document.querySelectorAll(".thumbnail");

    // Store the images in local storage
    localStorage.setItem("images", JSON.stringify(Array.from(images).map(image => image.src)));
});

var s_profile = document.getElementById("solverinfo");
// Listen for the submit event
s_profile.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the value of the input field
    var s_input1 = document.getElementById("s_file").value;
    var s_input2 = document.getElementById("s_fname").value;
    var s_input3 = document.getElementById("s_lname").value;
    var s_input4 = document.getElementById("s_fmail").value;
});


var s_form = document.getElementById("s_assingmentsform");
s_form.addEventListener("submit", function(event) {
    var s_input6 = document.getElementById("s_files").value;
    var s_input7 = document.getElementById("s_submit1").value;
});





