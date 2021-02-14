var comorbidityList = [
    'Chronic cardiac disease (not hypertension)', 'Diabetes',
    'Hypertension', 'Current smoking', 'Chronic pulmonary disease', 
    'Tuberculosis (active)', 'Asthma', 'Tuberculosis (previous)',
    'Chronic kidney disease', 'Asplenia', 'Chronic liver disease',
    'Malignant neoplasm', 'Chronic neurological disorder', 
    'Other'
];

var comorbDom = "";

for (var c = 0; c < comorbidityList.length; c++) {
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
    c += 1;
}


document.getElementById('comorbiditiesQ').innerHTML = comorbDom;