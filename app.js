// https://www.omnicalculator.com/health/estimated-average-glucose

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averageglucoseRadio = document.getElementById('averageglucoseRadio');
const hbA1cRadio = document.getElementById('hbA1cRadio');

let averageglucose;
let hbA1c = v; 

// labels of the inpust
const variable = document.getElementById('variable');

averageglucoseRadio.addEventListener('click', function() {
  variable.textContent = 'HbA1c';
  hbA1c = v;
  result.textContent = '';
});

hbA1cRadio.addEventListener('click', function() {
  variable.textContent = 'Average glucose';
  averageglucose = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(averageglucoseRadio.checked)
    result.textContent = `Average glucose = ${computeaverageglucose().toFixed(5)}`;

  else if(hbA1cRadio.checked)
    result.textContent = `HbA1c = ${computehbA1c().toFixed(5)}`;
})

// calculation

// Est Avg Glucose = (28.7 * HbA1c) - 46.7

function computeaverageglucose() {
  return (28.7 * Number(hbA1c.value)) - 46.7;
}

function computehbA1c() {
  return (Number(averageglucose.value) + 46.7) / 28.7;
}