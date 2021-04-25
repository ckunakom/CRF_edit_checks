//---------- 1a. Header & Inclusion ----------//
function inclusion() {

    // header field
    let participantId = document.getElementById("participantID");
    let facilityName = document.getElementById("facility");
    let country = document.getElementById("country");
    let enrollment = document.getElementById("enroll");

    // inclusion field
    let feverNo = document.getElementById("feverRadioN");
    let coughNo = document.getElementById("coughRadioN");
    let sobNo = document.getElementById("sobRadioN");
    let clinNo = document.getElementById("clinRadioN");

    let pass = true;

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

    // Header field incomplete
    if (participantId.value == '' || facilityName.value == '' || country.value == '' || enrollment.value == '') {
        document.getElementById("inclusion-1a-ec3").innerHTML = `<p>Please complete all the required field.</p>`;
        pass = false;
    }

    else {
        document.getElementById("inclusion-1a-ec3").innerHTML = ``;
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
let headerInclusion = document.getElementById("header-inclusion");
function handleForm(event) { event.preventDefault(); } 
headerInclusion.addEventListener('submit', handleForm);

//---------- 1b. Demographics ----------//
function demographics () {
 
    // Date of Birth is in the future - recycle, update variable plz
    // if (Date.parse(enroll.value) > new Date()) {
    //     document.getElementById("inclusion-1a-ec1").innerHTML = `<p>The Date of Enrollment ${new Date(enroll.value).toDateString()} is in the future, please verify.`;
    //     pass = false;
    // }
    // else {
    //     document.getElementById("inclusion-1a-ec1").innerHTML = ``;
    // }


    



}

// Date of birth is Unknown,  Age field enabled
let dobInput = document.getElementById("dob");
let dobUnk = document.getElementById("DOB-unknown");
let ageInput = document.getElementById("age");
let ageUnitInput = document.getElementById("ageUnit");

dobUnk.addEventListener("change", unknownDob);

function unknownDob() {
    if (dobUnk.checked == true) {
        dobInput.value = '';
        dobInput.disabled = true;
        ageInput.disabled = false;
        ageUnitInput.disabled = false;
    }

    else {
        dobInput.value = '';
        dobInput.disabled = false;
        ageInput.value = '';
        ageUnitInput.value = '';
        ageInput.disabled = true;
        ageUnitInput.disabled = true;
    }

}

// Pregnant is Yes, gestational field enabled
let pregnantY = document.getElementById("parentsY");
let gestation = document.getElementById("gest");

pregnantY.addEventListener("change", gestationYes);

function gestationYes() {
    if (pregnantY.checked == true) {
        // dobInput.value = '';
        gestation.disabled = false;
    }

    else {
        pregnantY.checked = false;
        gestation.value = '';
        gestation.disabled = true;
    }
    console.log('yes');
}


// TODO: Go through all the unknown field that has disabled input and change checkbox to radio button!

//---------- 1d. Co-Morbidities ----------//