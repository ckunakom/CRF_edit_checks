//---------- 1a. Header & Inclusion ----------//
function inclusion() {
    var feverNo = document.getElementById("feverRadioN");
    var coughNo = document.getElementById("coughRadioN");
    var sobNo = document.getElementById("sobRadioN");
    var clinNo = document.getElementById("clinRadioN");

    var pass = true;

    //  All of the field is 'No'
    if (feverNo.checked == true && coughNo.checked == true && sobNo.checked == true && clinNo.checked == true) {
        document.getElementById("inclusion-1a-ec2").innerHTML = `<p>The participant does not meet the clinical inclusion criteria, please verify.</p>`;
        pass = false;
    }
    else {
        document.getElementById("inclusion-1a-ec2").innerHTML = ``;
    }

    // Date of Enrollment is in the future
    if (Date.parse(enroll.value) > new Date()) {
        document.getElementById("inclusion-1a-ec1").innerHTML = `<p>The Date of Enrollment ${new Date(enroll.value).toDateString()} is in the future, please verify.`;
        pass = false;
    }
    else {
        document.getElementById("inclusion-1a-ec1").innerHTML = ``;
    }

    // If pass, show the green message
    document.getElementById("inclusion-1a-ec0").innerHTML = pass ? `<div class="complete"><p>All fields have been saved complete!</p></div>` : "";
    
    // ------- REMINDER to self: This is what line 29 is do but shorter ---------
    // if (pass) {
    //     document.getElementById("inclusion-1a-ec0").innerHTML = `<div class="complete"><p>All fields have been saved complete!</p></div>`;
    // }

    // else {
    //     document.getElementById("inclusion-1a-ec0").innerHTML = ``;
    // }    
}

// Brendan help me later! (Add an array of all the forms ID and have below cycle through it.)
var headerInclusion = document.getElementById("header-inclusion");
function handleForm(event) { event.preventDefault(); } 
headerInclusion.addEventListener('submit', handleForm);

//---------- 1b. Demographics ----------//
function demographics () {
 



    



}

// Date of birth is Unknown,  Age field enabled
var dobInput = document.getElementById("dob");
var dobUnk = document.getElementById("DOB-unknown");
var ageInput = document.getElementById("age");
var ageUnitInput = document.getElementById("ageUnit");

dobUnk.addEventListener("change", unknownDob);

function unknownDob() {
    if (dobUnk.checked == true) {
        dobInput.disabled = true;
        ageInput.disabled = false;
        ageUnitInput.disabled = false;
    }

    else {
        dobInput.disabled = false;
        ageInput.disabled = true;
        ageUnitInput.disabled = true;
    }

    // find a way to clear the input
}

// Pregnant is Yes, gestational field enabled

// TODO: Go through all the unknown field that has disabled input and change checkbox to radio button!

//---------- 1d. Co-Morbidities ----------//