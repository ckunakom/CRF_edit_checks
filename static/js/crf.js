// Co-Morbidities
var comorbidityList = [
    'Chronic cardiac disease (not hypertension)', 'Diabetes',
    'Hypertension', 'Current smoking', 'Chronic pulmonary disease', 
    'Tuberculosis (active)', 'Asthma', 'Tuberculosis (previous)',
    'Chronic kidney disease', 'Asplenia', 'Chronic liver disease',
    'Malignant neoplasm', 'Chronic neurological disorder', 
    'Other', 'HIV'
];

var comorbDom = "";

for (var c = 0; c < comorbidityList.length; c++) {
    // Add conditionals: if 'other' and HIV do this
    if (comorbidityList[c] == 'HIV') {
        comorbDom += 
        `<div class="form-group row">
            <div class="col-sm-2">HIV</div>
            <div class="col-sm-2">
                <select class="form-control form-control-sm" id="comorb${c}">
                    <option></option>
                    <option>Yes (on ART)</option>
                    <option>Yes (not on ART)</option>
                    <option>No</option>
                    <option>Unknown</option>
                </select>
            </div>
        </div>
    
        <div class="form-group row">
            <div class="col-sm-2"><p>&nbsp;&nbsp;ART Regimen</p></div>
            <label for="artregimen" class="form-check-label col-sm-2">
                <input type="text" class="form-control form-control-sm" id="artregimen" disabled>
            </label>
        </div>`
    }    
    
    // else do below:
    else if (comorbidityList[c] == 'Other') {
            comorbDom += `<div class="form-group row">
            <div class="col-sm-2">${comorbidityList[c]}</div>
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
            </div>

            <div class="form-group row">
            <div class="col-sm-2"><p>&nbsp;&nbsp;If yes, specify:</p></div>
                <label for="comorbOther" class="form-check-label col-sm-3">
                    <input type="text" class="form-control form-control-sm" id="comorbOther">
                </label>
            </div>
            </div>`;
        }


    else {
        comorbDom += `<div class="form-group row">
            <div class="col-sm-2">${comorbidityList[c]}</div>
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
            </div>

            <div class="col-sm-2">${comorbidityList[c+1]}</div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c+1}" id="comorb${c+1}Y" value="Yes">
                        Yes
                    </label>
                </div>
            </div>
            <div class="col-sm-1">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c+1}" id="comorb${c+1}N" value="No">
                        No
                    </label>
                </div>
            </div>
            <div class="col-sm-1.5">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="comorb${c+1}" id="comorb${c+1}U" value="Unknown">
                        Unknown
                    </label>
                </div>
            </div>
        </div>`;
    }
    c += 1;
}

document.getElementById('comorbiditiesQ').innerHTML = comorbDom;