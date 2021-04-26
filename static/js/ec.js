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
        // document.getElementById("inclusion-1a-ec1").innerHTML = `<p>The Date of Enrollment ${new Date(enroll.value).toDateString()} is in the future, please verify.`;
        document.getElementById("inclusion-1a-ec1").innerHTML = `<p>The Date of Enrollment ${enroll.value} is in the future, please verify.`;
        pass = false;
    }
    else {
        document.getElementById("inclusion-1a-ec1").innerHTML = ``;
    }

    // Header field incomplete
    // if (participantId.value == '' || facilityName.value == '' || country.value == '' || enrollment.value == '') {
    //     document.getElementById("inclusion-1a-ec3").innerHTML = `<p>Please complete all the required field.</p>`;
    //     pass = false;
    // }

    // else {
    //     document.getElementById("inclusion-1a-ec3").innerHTML = ``;
    // }
    // console.log(pass);
    // If pass, show the green message -- HMM, THIS DOESN'T TAKE INTO ACCOUNT THE REQUIRED FIELDS -- Need to rethink
    // document.getElementById("inclusion-1a-ec0").innerHTML = pass ? `<div class="complete"><p>All fields have been complete!</p></div>` : ``;
    
    // ------- REMINDER to self: This is what line 29 does but shorter ---------
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
function demographics() {
    let pass = true;

    // Date of Birth is in the future
    if (Date.parse(dob.value) > new Date()) {
        document.getElementById("demographic-1b-ec0").innerHTML = `<p>The Date of Birth ${dob.value} is in the future, please verify.`;
        pass = false;
    }
    else {
        document.getElementById("demographic-1b-ec0").innerHTML = ``;
    }

    // Date of birth < Date of enrollment: The Date of Enrollment is before the participant's Date of Birth, please verify.
    if (Date.parse(dob.value) > Date.parse(enroll.value)) {
        document.getElementById("demographic-1b-ec1").innerHTML = `<p>The Date of Enrollment (${enroll.value}) is before the participant's Date of Birth (${dob.value}), please verify.`;
        pass = false;
    }
    else {
        document.getElementById("demographic-1b-ec1").innerHTML = ``;
    }
    console.log(pass);
    // If pass, show the green message -- need to restrategize
    // document.getElementById("demographic-1a-ec2").innerHTML = pass ? `<div class="complete"><p>All fields have been complete!</p></div>` : ``;
    
}

// Date of birth is Unknown,  Age field enabled
let dobInput = document.getElementById("dob");
let dobUnk = document.getElementById("DOB-unknown");
let ageInput = document.getElementById("age");
let ageUnitInput = document.getElementById("ageUnit");

dobUnk.addEventListener("change", unknownDob);

function unknownDob() {
    if (dobUnk.checked == true) {
        ageInput.required = true;
        ageUnitInput.required = true;
        dobInput.value = '';
        dobInput.disabled = true;
        ageInput.disabled = false;
        ageUnitInput.disabled = false;
    }

    else {
        dobUnk.required = false;
        dobInput.value = '';
        dobInput.disabled = false;
        ageInput.value = '';
        ageUnitInput.value = '';
        ageInput.disabled = true;
        ageUnitInput.disabled = true;
    }

}

// Sex is Male, disable pregnant field
let male = document.getElementById("genderRadioM");
let female = document.getElementById("genderRadioMF");
let genderNull = document.getElementById("genderRadioN");

let pregnantY = document.getElementById("parentsY");
let pregnantN = document.getElementById("parentsN");
let pregnantUnk = document.getElementById("parentsU");
let pregnantNa = document.getElementById("parentsNA");

male.addEventListener("change", noPreg);
female.addEventListener("change", noPreg);
genderNull.addEventListener("change", noPreg);

function noPreg() {
    if (male.checked == true) {
        pregnantY.disabled = true;
        pregnantN.disabled = true;
        pregnantUnk.disabled = true;
        pregnantNa.disabled = true;
        pregnantY.checked = false;
        pregnantN.checked = false;
        pregnantNa.checked = false;
        pregnantUnk.checked = false;
        gestationYes();
    }
    else {
        pregnantY.disabled = false;
        pregnantN.disabled = false;
        pregnantUnk.disabled = false;
        pregnantNa.disabled = false;
    }
}

// Pregnant is Yes, gestational field enabled
let gestation = document.getElementById("gest");

pregnantY.addEventListener("change", gestationYes);
pregnantN.addEventListener("change", gestationYes);
pregnantUnk.addEventListener("change", gestationYes);
pregnantNa.addEventListener("change", gestationYes);

function gestationYes() {
    if (pregnantY.checked == true) {
        gestation.required = true;
        gestation.disabled = false;
    }

    else {
        pregnantY.checked = false;
        gestation.value = '';
        gestation.disabled = true;
    }
}

let demographicSection = document.getElementById("demographic");
demographicSection.addEventListener('submit', handleForm);

// TODO: Go through all the unknown field that has disabled input and change checkbox to radio button!

//---------- 1d. Co-Morbidities ----------//