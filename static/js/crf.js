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
                <label for="medOther" class="form-check-label col-sm-2">
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
    {med: '&nbsp;&nbsp;&nbsp;&nbsp;If yes:', input: 'special', 
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