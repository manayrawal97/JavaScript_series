// const form = document.querySelector('form');

// // this usecase will give you empty
// // const height = parselnt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     if (height === '' || height < 0 || isNaN(height)) {
//         results.innerHTML = `Please give a valid height ${height}`;
//     } else if (weight === '' || weight < 0 || isNaN(weight)) {
//         results.innerHTML = `Please give a valid weight ${weight}`;
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         // show the result
//         results.innerHTML = `<span>${bmi}</span>`;
//     }

//     if(results <18.6){
//         const category = results.innerHTML = 'Your BMI is underweight';
//         results.innerHTML = `<span>${category}</span>`;

//     }
//     else if(results < 24.9 || results > 18.6 ){
//         const category = results.innerHTML = 'Your BMI is Normal';
//         results.innerHTML = `<span>${category}</span>`;
//     }
//     else if(results <18.6){
//         const category = results.innerHTML = 'Your BMI is Overweight';
//         results.innerHTML = `<span>${category}</span>`;
//     }
// });


const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (!height || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please provide a valid height.`;
    } else if (!weight || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please provide a valid weight.`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let category = '';
        if (bmi < 18.6) {
            category = 'Underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'Normal';
        } else {
            category = 'Overweight';
        }

        results.innerHTML = `Your BMI is <strong>${bmi}</strong>. You are categorized as <strong>${category}</strong>.`;
    }
});
