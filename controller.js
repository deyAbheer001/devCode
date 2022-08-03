let Salcalculator = require("./model")

const basic = document.getElementById('basic').value

// console.log(basic)


const hra = document.getElementById("hra");
hra.innerText = Salcalculator.calHra(basic)
// console.log()
const da = document.getElementById("da");
const ta = document.getElementById("ta");
const pf = document.getElementById("pf");
const ma = document.getElementById("ma");
const tax = document.getElementById("tax");
const gross = document.getElementById("gross");


const compute = document.getElementById("compute")

compute.addEventListener('click', () =>{

    const basic = document.getElementById("basic").value;
    console.log(basic);
})


