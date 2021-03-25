
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

//  This loops twice, why?
for (var u = 0; u < labList.length; u++) {
    labList.forEach((item) => {
        // console.log(item)
    })
// console.log(labList.length)
}

// So something like this, but need to figure out how to give unique name and id for each radio button.
///// I want to use parameter's name and unit index, so haemoglobin-unit0, haemoglobin-unit1, haemoglobin-unit3, etc. out of wits here. 
for (var u = 0; u < labList.length; u++) {
    labList.forEach((item) => {
        // console.log(item);

    Object.entries(item).forEach(([key, value]) => {
        // console.log(`Key: ${key} and Value ${value}`);
        if (key === 'units') {
            // console.log(value);
            for (var unit = 0; unit < value.length; unit++) {
                console.log(`
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="lab-unit${key}" id="lab-unit${key}" value="${value[unit]}">
                        ${value[unit]}
                    </label>
                </div>`);
                console.log(key);

            }

        }
    })
    })

}

// {/* <div class="form-check">
//     <label class="form-check-label">
//         <input type="radio" class="form-check-input" name="lab-unit${l}" id="lab-unit${l}" value="${units}">
//         ${units}
//     </label>
// </div> */}

