// Co-Morbidities
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
    const {disease, type} = comorbidityList[c]
    
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

            <div class="form-group row">
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
            <div class="col-sm-1"><p>&nbsp;&nbsp;ART Regimen</p></div>
            <label for="artregimen" class="form-check-label col-sm-2">
                <input type="text" class="form-control form-control-sm" id="artregimen" disabled>
            </label>

            <div class="col-sm-1"></div>
            <div class="col-sm-2"><p>&nbsp;&nbsp;&nbsp;&nbsp;If yes, specify:</p></div>
            <label for="comorbOther" class="form-check-label col-sm-2">
                <input type="text" class="form-control form-control-sm" id="comorbOther">
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