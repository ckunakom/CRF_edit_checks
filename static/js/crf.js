//---------- 1d. Co-Morbidities ----------//
var comorbidityList = [
    {disease: 'Chronic cardiac disease (not hypertension)', type: 'left'},
    {disease: 'Diabetes', type: 'right' },
    {disease:'Hypertension', type: 'left'},  
    {disease:'Current smoking', type:  'right'}, 
    {disease:'Chronic pulmonary disease', type: 'left'},
    {disease:'Tuberculosis (active)', type: 'right'}, 
    {disease:'Asthma', type: 'left'}, 
    {disease:'Tuberculosis (previous)', type: 'right'},
    {disease:'Chronic kidney disease', type: 'left'}, 
    {disease:'Asplenia', type: 'right'}, 
    {disease:'Chronic liver disease', type: 'left'},
    {disease:'Chronic neurological disorder', type: 'right'}, 
    {disease:'Malignant neoplasm',type: 'left'},
    {disease:'Other', type: 'other'}, {disease:'HIV', type: 'hiv'}
];

var comorbDom = "";

for (var c = 0; c < comorbidityList.length; c++) {
    const {disease, type} = comorbidityList[c];
    
    // Exception for 'Other' and 'HIV'
    if (type == 'other') {
        comorbDom += `
            <div class="col-sm-2">${disease}</div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c}" id="comorb${c}Yes" value="Yes">
                        Yes
                    </label>
                </div>
            </div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c}" id="comorb${c}No" value="No">
                        No
                    </label>
                </div>
            </div>
            <div class="col-sm-1.5">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c}" id="comorb${c}U" value="Unknown">
                        Unknown
                    </label>
                </div>
            </div>            
            </div>

            <div class="form-group row" style="height: 20px;">
            <div class="col-sm-1">HIV</div>
            <div class="col-sm-2">
                <select class="form-control form-control-sm" id="comorb${c+1}">
                    <option></option>
                    <option>Yes (on ART)</option>
                    <option>Yes (not on ART)</option>
                    <option>No</option>
                    <option>Unknown</option>
                </select>
            </div>
            <div class="col-sm-1">ART Regimen</div>
            <label for="artregimen" class="form-check-label col-sm-2">
                <input type="text" class="form-control form-control-sm" id="artregimen" disabled>
            </label>

            <div class="col-sm-1"></div>
            <div class="col-sm-2">&nbsp;&nbsp;&nbsp;&nbsp;If yes, specify:</div>
            <label for="comorbOther" class="form-check-label col-sm-3">
                <input type="text" class="form-control form-control-sm" id="comorbOther" disabled>
            </label>        
        </div>`;
        }

    // Generic format
    else if (type == 'left') {
        comorbDom += `<div class="form-group row">
            <div class="col-sm-2">${disease}</div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c}" id="comorb${c}Yes" value="Yes">
                        Yes
                    </label>
                </div>
            </div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c}" id="comorb${c}No" value="No">
                        No
                    </label>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c}" id="comorb${c}U" value="Unknown">
                        Unknown
                    </label>
                </div>
            </div>`;
    }

    else if (type == 'right') {
        comorbDom += `
            <div class="col-sm-2">${disease}</div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c}" id="comorb${c}Y" value="Yes">
                        Yes
                    </label>
                </div>
            </div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c}" id="comorb${c}N" value="No">
                        No
                    </label>
                </div>
            </div>
            <div class="col-sm-1.5">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c}" id="comorb${c}U" value="Unknown">
                        Unknown
                    </label>
                </div>
            </div>
        </div>`;
    }
}

document.getElementById('comorbiditiesQ').innerHTML = comorbDom;

// ---------- 1e. pre-admission ----------//
var medicationPreList = [
    {medication: 'Angiotensin convertin g enzyme inhibitors (ACE inhibitors)', type: 'med'},
    {medication: 'Angiotensin II receptor blockers (ARBs)', type: 'med'},
    {medication: 'Non-steroidal anti-inflammatory (NSAID)', type: 'med'},
    {medication: 'Antiviral', type: 'antiviral'}
];

var medDom = "";

for (var m = 0; m < medicationPreList.length; m++) {
    const {medication, type} = medicationPreList[m];

    if (type == 'antiviral') {
        medDom += `
            <div class="form-group row" style="height: 20px;">
                <div class="col-sm-2">${medication}</div>
                <div class="col-sm-3">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="medication${m}" id="medication${m}chlr-hydrchol" value="Chloroquine/hydroxychloroquine">
                            Chloroquine/hydroxychloroquine
                        </label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="medication${m}" id="medication${m}azith" value="Azithromycin">
                            Azithromycin
                        </label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="medication${m}" id="medication${m}lop-rit" value="Lopinavir/Ritonavir">
                            Lopinavir/Ritonavir
                        </label>
                    </div>
                </div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="medication${m}" id="medication${m}other" value="Other">
                            Other:
                        </label>
                    </div>
                </div>
                <label for="medication${m}other" class="form-check-label col-sm-2">
                    <input type="text" class="form-control form-control-sm" id="medication${m}other" disabled>
                </label>    
            </div>`
    }

    else {
        medDom += `
            <div class="form-group row">
                <div class="col-sm-9">${medication}</div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="medication${m}" id="medication${m}Yes" value="Yes">
                            Yes
                        </label>
                    </div>
                </div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="medication${m}" id="medication${m}No" value="No">
                            No
                        </label>
                    </div>
                </div>
                <div class="col-sm-1.5">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="medication${m}" id="medication${m}U" value="Unknown">
                            Unknown
                        </label>
                    </div>
                </div>
            </div>`
    }
}

document.getElementById('pre-admissionQ').innerHTML = medDom;

// ---------- 1f. sign and symptoms ----------//
var sxsList = [
    {sxs: 'History of fever', type: 'left'},
    {sxs: 'Lower chest indrawing', type: 'right'},
    {sxs: 'Cough', type: 'left'}, // with sputum and with haemoptysis
    {sxs: 'Headache', type: 'right'},
    {sxs: '&nbsp;&nbsp;&nbsp;&nbsp;with sputum<br />&nbsp;&nbsp;&nbsp;&nbsp;production', type: 'left'},
    {sxs: 'Altered consciousness<br />/confusion', type: 'right'},
    {sxs: '&nbsp;&nbsp;&nbsp;&nbsp;with haemoptysis', type: 'left'},
    {sxs: 'Seizures', type: 'right'},
    {sxs: 'Sore throat', type: 'left'},
    {sxs: 'Abdominal pain', type: 'right'},
    {sxs: 'Runny nose', type: 'left'},
    {sxs: 'Vomiting/nausea', type: 'right'},
    {sxs: 'Wheezing', type: 'left'},
    {sxs: 'Diarrhoea', type: 'right'},
    {sxs: 'Chest pain', type: 'left'},
    {sxs: 'Conjunctivitis', type: 'right'},
    {sxs: 'Muscle aches', type: 'left'},
    {sxs: 'Skin rash', type: 'right'},
    {sxs: 'Joint pain (arthralgia)', type: 'left'},
    {sxs: 'Skin ulcers', type: 'right'},
    {sxs: 'Fatigue/malaise', type: 'left'},
    {sxs: 'Lymphadenopathy', type: 'right'},
    {sxs: 'Loss of taste', type: 'left'},
    {sxs: 'Inability to walk', type: 'right'},
    {sxs: 'Loss of smell', type: 'left'},
    {sxs: 'Bleeding', type: 'right'},
    {sxs: 'Shortness of breath', type: 'left'},
    {sxs: '&nbsp;&nbsp;&nbsp;&nbsp;If bleeding, <br />&nbsp;&nbsp;&nbsp;&nbspspecify site(s):', type: 'bleeding'}, // bleeding specify
    {sxs: 'Stroke: ischaemic stroke', type: 'left'},
    {sxs: 'Stroke: intracerebral haemorrhage', type: 'right'},
    {sxs: 'Other', type: 'other'}
];

var sxsDom = "";

for (var s = 0; s < sxsList.length; s++) {
    const {sxs, type} = sxsList[s];
    
    if (type == 'left') {
        sxsDom += `<div class="form-group row">
        <div class="col-sm-2">${sxs}</div>
        <div class="col-sm-1">
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="sxs${s}" id="sxs${s}Yes" value="Yes">
                    Yes
                </label>
            </div>
        </div>
        <div class="col-sm-1">
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="sxs${s}" id="sxs${s}No" value="No">
                    No
                </label>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="sxs${s}" id="sxs${s}U" value="Unknown">
                    Unknown
                </label>
            </div>
        </div>`;
    }

    else if (type == 'right') {
        sxsDom += `
        <div class="col-sm-2">${sxs}</div>
        <div class="col-sm-1">
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="sxs${s}" id="sxs${s}Yes" value="Yes">
                    Yes
                </label>
            </div>
        </div>
        <div class="col-sm-1">
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="sxs${s}" id="sxs${s}No" value="No">
                    No
                </label>
            </div>
        </div>
        <div class="col-sm-1.5">
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="sxs${s}" id="sxs${s}U" value="Unknown">
                    Unknown
                </label>
            </div>    
        </div>
        </div>`;
    }

    else if (type == 'bleeding') {

        sxsDom += `<div class="col-sm-2" >${sxs}</div>
        <label for="bleedingOther" class="form-check-label col-sm-3">
            <input type="text" class="form-control form-control-sm" id="bleedingOther" disabled>
        </label>        
        </div>`;
    }
    
    else if (type == 'other') { 
    
        sxsDom += `</div><div class="form-group row style="height: 20px;">
        <div class="col-sm-2">${sxs}</div>
        <div class="col-sm-1">
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="sxs${s}" id="sxs${s}Yes" value="Yes">
                    Yes
                </label>
            </div>
        </div>
        <div class="col-sm-1">
        <div class="form-check">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" name="sxs${s}" id="sxs${s}No" value="No">
                No
            </label>
        </div>
        </div>
        <div class="col-sm-3">
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="sxs${s}" id="sxs${s}U" value="Unknown">
                    Unknown
                </label>
            </div>    
        </div>
        <div class="col-sm-2">If yes, specify</div>
        <label for="sxsOther" class="form-check-label col-sm-3">
            <input type="text" class="form-control form-control-sm" id="sxsOther" disabled>
        </label>
        </div>`;
    }
}

document.getElementById('sxsQ').innerHTML = sxsDom;

// ---------- 1g. Medication ----------//
var medAdminList = [
    {med: 'Oral/orogastric fluids', input: 'radio'},
    {med: 'Intravenous fluids', input: 'radio'},
    {med: 'Antiviral', input: 'radio'},
    {med: '&nbsp;&nbsp;&nbsp;&nbsp;If yes:', input: 'antiviral', 
        checkbox: ['Ribavirin', 'Lopinavir/Ritonavir', 'Neuraminidase inhibitor',  'Interferon alpha', 'Interferon beta', 'Other, specify:']},
    {med: 'Corticosteroid', input: 'steroid',
        route: ['Oral', 'Intravenous', 'Inhaled']}, // If yes, please provide agent and maximum daily dose:
    {med: 'Antibiotic', input: 'specify'},
    {med: 'Antifungal agent', input: 'radio'},
    {med: 'Antimalarial agent', input: 'specify'}, // If yes, specify:
    {med: 'Experimental agent', input: 'specify'},
    {med: 'Non-steroidal anti-inflammatory (NSAID)', input: 'radio'},
    {med: 'Angiotensin converting enzyme inhibitors (ACE inhibitors)', input: 'radio'},
    {med: 'Angiotensin II receptor blockers (ARBs)', input: 'radio'},
    {med: 'Systemic anticoagulation', input: 'radio'}
];

var medAdminDom = "";

for (var m = 0; m < medAdminList.length; m++) {
    const {med, input, checkbox} = medAdminList[m];

    if (input == 'antiviral') {

        medAdminDom += `
            <div class="form-group row" style="height: 20px;">
                <div class="col-sm-2">${med}</div>`;

                for (var c = 0; c < checkbox.length; c++ ) {
                    medAdminDom += 
                    `<div class="col-sm-3">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" name="antiviral${checkbox[c]}" id="medAdmin${m}antiviral${c}" value="${checkbox[c]}">
                                ${checkbox[c]}
                            </label>
                        </div>
                    </div>
                    
                    <div class="col-sm-3">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" name="antiviral${checkbox[c+1]}" id="medAdmin${m}antiviral${c+1}" value="${checkbox[c+1]}">
                                ${checkbox[c+1]}
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" name="antiviral${checkbox[c+2]}" id="medAdmin${m}antiviral${c+2}" value="${checkbox[c+2]}">
                                ${checkbox[c+2]}
                            </label>
                        </div>
                     </div>
                    </div>
                        
                    <div class="form-group row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-3">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="antiviral${checkbox[c+3]}" id="medAdmin${m}antiviral${c+3}" value="${checkbox[c+3]}">
                                    ${checkbox[c+3]}
                                </label>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="antiviral${checkbox[c+4]}" id="medAdmin${m}antiviral${c+4}" value="${checkbox[c+4]}">
                                    ${checkbox[c+4]}
                                </label>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="antiviral${checkbox[c+5]}" id="medAdmin${m}antiviral${c+5}" value="${checkbox[c+5]}">
                                    ${checkbox[c+5]}
                                </label>
                                <label for="${checkbox[c+5]}other" class="form-check-label col-sm-8">
                                    <input type="text" class="form-control form-control-sm" id="${checkbox[c+5]}other" disabled>
                                </label> 
                            </div>
                        </div>
                    </div>
                    </div>`;
                    break;
                }

    }

    else if (input == 'steroid') {
        medAdminDom += `
            <div class="form-group row">
            <div class="col-sm-9">${med}</div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="medAdmin${m}" id="medAdmin${m}Yes" value="Yes">
                        Yes
                    </label>
                </div>
            </div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="medAdmin${m}" id="medAdmin${m}No" value="No">
                        No
                    </label>
                </div>
            </div>
            <div class="col-sm-1.5">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="medAdmin${m}" id="medAdmin${m}U" value="Unknown">
                        Unknown
                    </label>
                </div>
            </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-5">&nbsp;&nbsp;&nbsp;&nbsp;If yes, please complete the log line for each medication:</div>
            </div>
            <div class="form-group row">
                <div class="col-sm-3"></div> 
                <div class="col-sm-6">
                    <table class="table table-sm table-bordered">
                        <thead class="text-center" id="steroid-table">
                            <tr>
                                <th>Agent</th>
                                <th>Route</th>
                                <th>Maximum Daily Dose</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label for="steroid1" class="form-check-label">
                                        <input type="text" class="form-control form-control-sm" id="steroid1" disabled>
                                    </label> 
                                </td>
                                <td>
                                    <select class="form-control form-control-sm" id="steroid-route1" disabled>                                            
                                        <option></option>
                                        <option>Oral</option>
                                        <option>Intravenous</option>
                                        <option>Inhaled</option>
                                    </select>
                                </td>
                                <td>
                                    <label for="steroid-dose1" class="form-check-label">
                                        <input type="text" class="form-control form-control-sm" id="steroid-dose1" disabled>
                                    </label> 
                                </td>
                                <td>
                                    <label for="steroid-unit2" class="form-check-label">
                                        <input type="text" class="form-control form-control-sm" id="steroid-unit2" disabled>
                                    </label> 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="steroid2" class="form-check-label">
                                        <input type="text" class="form-control form-control-sm" id="steroid2" disabled>
                                    </label> 
                                </td>
                                <td>
                                    <select class="form-control form-control-sm" id="steroid-route2" disabled>                                            
                                        <option></option>
                                        <option>Oral</option>
                                        <option>Intravenous</option>
                                        <option>Inhaled</option>
                                    </select>
                                </td>
                                <td>
                                    <label for="steroid-dose2" class="form-check-label">
                                        <input type="text" class="form-control form-control-sm" id="steroid-dose2" disabled>
                                    </label> 
                                </td>
                                <td>
                                    <label for="teroid-unit2" class="form-check-label">
                                        <input type="text" class="form-control form-control-sm" id="steroid-unit2" disabled>
                                    </label> 
                                </td>
                            </tr>                                <tr>
                            <td>
                                <label for="steroid3" class="form-check-label">
                                    <input type="text" class="form-control form-control-sm" id="steroid3" disabled>
                                </label> 
                            </td>
                            <td>
                                <select class="form-control form-control-sm" id="steroid-route3" disabled>                                            
                                    <option></option>   
                                    <option>Oral</option>
                                    <option>Intravenous</option>
                                    <option>Inhaled</option>
                                </select>
                            </td>
                            <td>
                                <label for="steroid-dose3" class="form-check-label">
                                    <input type="text" class="form-control form-control-sm" id="steroid-dose3" disabled>
                                </label> 
                            </td>
                            <td>
                                <label for="steroid-unit3" class="form-check-label">
                                    <input type="text" class="form-control form-control-sm" id="steroid-unit3" disabled>
                                </label> 
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>`
        
    }

    else if (input == 'specify') {
        medAdminDom += `
            <div class="form-group row">
                <div class="col-sm-4">${med}</div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="medAdmin${m}" id="medAdmin${m}Yes" value="Yes">
                            Yes
                        </label>
                    </div>
                </div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="medAdmin${m}" id="medAdmin${m}No" value="No">
                            No
                        </label>
                    </div>
                </div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="medAdmin${m}" id="medAdmin${m}U" value="Unknown">
                            Unknown
                        </label>
                    </div>
                </div>
                <div class="col-sm-2 text-right">If yes, specify:</div>
                <label for="medAdmin${m}other-abx" class="form-check-label col-sm-3">
                    <input type="text" class="form-control form-control-sm" id="medAdmin${m}other-abx" disabled>
                </label> 
            </div>`
    }

    else {
        medAdminDom += `
            <div class="form-group row">
                <div class="col-sm-9">${med}</div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="medAdmin${m}" id="medAdmin${m}Yes" value="Yes">
                            Yes
                        </label>
                    </div>
                </div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="medAdmin${m}" id="medAdmin${m}No" value="No">
                            No
                        </label>
                    </div>
                </div>
                <div class="col-sm-1.5">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="medAdmin${m}" id="medAdmin${m}U" value="Unknown">
                            Unknown
                        </label>
                    </div>
                </div>
            </div>`
    }
}

document.getElementById('medQ').innerHTML = medAdminDom;

// ---------- 1h. Surpportive Care ----------//
var supportList = [
    {care: 'ICU or high dependency unit admission', input: 'radio'},
    {care: 'Oxygen therapy', input: 'radio'},
    {care: '&nbsp;&nbsp;&nbsp;&nbsp;If yes:', input: 'o2'},
    {care: 'Non-invasive ventilation (e.g. BIPAP/CPAP)', input: 'radio'},
    {care: 'Invasive ventilation (any)', input: 'radio'},
    {care: '&nbsp;&nbsp;&nbsp;&nbsp;If yes, what were the following values closest to 08:00:', input: 'inv-vent',
        vent: ['PEEP (cm H<sub>2</sub>O)', 'FiO<sub>2</sub> (%)', 'Plateau pressure (cm H<sub>2</sub>O)', 'PaCO<sub>2</sub>', 'PaO<sub>2</sub>']},
    {care: 'Extracorporeal (ECMO) support', input: 'radio'},
    {care: 'Prone position', input: 'radio'},
    {care: 'Inotropes/vasopressors', input: 'radio'}
]

var supportDom = "";

for (var s = 0; s < supportList.length; s++) {
    const {care, input, vent} = supportList[s];

    if (input == 'o2') {
        supportDom += `
            <div class="form-group row">
                <div class="col-sm-1">${care}</div>
                <div class="col-sm-1 text-right">O<sub>2</sub> flow:</div>
                <div class="col-sm-2">
                    <select class="form-control form-control-sm" id="o2-flow" disabled>                                            
                        <option></option>
                        <option>1–5 L/min</option>
                        <option>6–10 L/min</option>
                        <option>11–15 L/min</option>
                        <option>>15 L/min</option>
                        <option>Unkown</option>
                    </select>
                </div>
                <div class="col-sm-2 text-right">Source of oxygen:</div>
                    <div class="col-sm-2">
                        <select class="form-control form-control-sm" id="o2-source" disabled>                                            
                            <option></option>
                            <option>Piped</option>
                            <option>Cylinder</option>
                            <option>Concentrator</option>
                            <option>Unkown</option>
                        </select>
                    </div>
                <div class="col-sm-1 text-right">Interface:</div>
                    <div class="col-sm-3">
                        <select class="form-control form-control-sm" id="o2-interface" disabled>
                            <option></option>                                            
                            <option>Nasal prongs</option>
                            <option>HF nasal cannula</option>
                            <option>Mask</option>
                            <option>Mask with reservoir</option>
                            <option>CPAP/NIV mask</option>
                            <option>Unkown</option>
                        </select>
                    </div>
            </div>`
    }

    else if (input == 'inv-vent') {
        supportDom += `
        <div class="form-group row">
            <div class="col-sm-10">${care}</div>
        </div>`;

        for (var v = 0; v < vent.length; v++ ) {
            supportDom += `
            <div class="form-group row">
                <div class="col-sm-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${vent[v]}</div>
                    <label for="gest" class="form-check-label col-sm-2">
                        <input type="text" class="form-control form-control-sm" id="inv-vent${[v]}" disabled>
                    </label>
            </div>`
        };
        
    }

    else {
        supportDom += `
            <div class="form-group row">
                <div class="col-sm-9">${care}</div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="care${s}" id="care${s}Yes" value="Yes">
                            Yes
                        </label>
                    </div>
                </div>
                <div class="col-sm-1">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="care${s}" id="care${s}No" value="No">
                            No
                        </label>
                    </div>
                </div>
                <div class="col-sm-1.5">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="care${s}" id="care${s}U" value="Unknown">
                            Unknown
                        </label>
                    </div>
                </div>
            </div>`
    }
}

document.getElementById('supportiveQ').innerHTML = supportDom;

// ---------- 1i. Surpportive Care ----------//
var labList = [
    {firstParameter: 'Haemoglobin',
        units: ['g/L', 'g/dL', 'other, specify']},
    {secondParameter: 'Creatinine',
        units: ['mg/L', 'μmol/L', 'other, specify']},
    {firstParameter: 'WBC count',
        units: ['/mm<sup>3</sup>', 'G/L or x10<sup>9</sup>/L', 'other, specify']},
    {secondParameter: 'Sodium',
        units: ['mEq/L or mmoL', 'other, specify']},
    {firstParameter: 'Haematocrit',
        units: ['%', 'other, specify']},
    {secondParameter: 'Potassium',
        units: ['mEq/L or mmoL', 'other, specify']},
    {firstParameter: 'Platelets',
        units: ['/mm<sup>3</sup>', 'G/L or x10<sup>9</sup>/L', 'other, specify']},
    {secondParameter: 'Procalcitonin',
        units: ['ng/mL', 'μg/L', 'other, specify']},
    {firstParameter: 'APTT/APTR',    
        units: ['seconds', 'other, specify']},
    {secondParameter: 'CRP',
        units: ['mg/L', 'other, specify']},
    {firstParameter: 'PT (seconds)',
        units: ['seconds', 'other, specify']},
    {secondParameter: 'LDH',
        units: ['IU/L', 'other, specify']},
    {firstParameter: 'INR',
        units: ['N/A', 'other, specify']},
    {secondParameter: 'Creatine kinase',
        units: ['IU/L', 'UKAT/L', 'other, specify']},
    {firstParameter: 'ALT/SGPT',
        units: ['IU/L', 'other, specify']},
    {secondParameter: 'Troponin',
        units: ['ng/mL', 'μg/L', 'other, specify']},
    {firstParameter: 'AST/SGOT',
        units: ['IU/L', 'other, specify']},
    {secondParameter: 'ESR',
        units: ['mm/hour', 'other, specify']},
    {firstParameter: 'Total bilirubin',
        units: ['mg/L', 'μmol/L', 'other, specify']},
    {secondParameter: 'D-dimer',
        units: ['ng/mL', 'μg/L', 'other, specify']},
    {firstParameter: 'Urea (BUN)',
        units: ['g/L', 'mg/DL', 'mmol/L', 'other, specify']},
    {secondParameter: 'Ferritin',
        units: ['ng/mL', 'μg/L', 'other, specify']},
    {firstParameter: 'Lactate',
        units: ['mg/dL', 'mmol/L', 'other, specify']},
    {secondParameter: 'IL-6',
        units: ['pg/mL', 'other, specify']}
]

var labDom = "";

for (var l = 0; l < labList.length; l++) {
    const {firstParameter} = labList[l];
    const {secondParameter} = labList[l+1];
    console.log(firstParameter)
    // const {parameter} = labList[l];
    // console.log(l);
    // console.log(parameter);

    labDom += `
        <tr>
            <td>${firstParameter}</td>
            <td>
                <label for="lab-value${[l]}" class="form-check-label">
                    <input type="text" class="form-control form-control-sm" id="lab-value${[l]}">
                </label>
                <div class="form-check"> 
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="lab-not-done${[l]}" id="lab-not-done${[l]}" value="Not Done${[l]}"> Not Done
                    </label>
                </div>
            </td>
            <td>units here
            </td>

            <td>${secondParameter}</td>
            <td>
                <label for="lab-value${[l+1]}" class="form-check-label">
                    <input type="text" class="form-control form-control-sm" id="lab-value${[l+1]}">
                </label>
                <div class="form-check"> 
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="lab-not-done${[l+1]}" id="lab-not-done${[l+1]}" value="Not Done${[l+1]}"> Not Done
                    </label> 
                </div>
            </td>
            <td>units here
            </td>
        </tr>`;
    l += 1;
}

document.getElementById('labQ').innerHTML = labDom;