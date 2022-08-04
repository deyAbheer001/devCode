const hra = document.getElementById("hra");
const da = document.getElementById("da");
const ta = document.getElementById("ta");
const pf = document.getElementById("pf");
const ma = document.getElementById("ma");
const tax = document.getElementById("tax");
const gross = document.getElementById("gross");


const compute = document.getElementById("compute")

compute.addEventListener('click', () =>{

    const basic = parseInt(document.getElementById("basic").value);
    
    hra.innerText = calculation.calHra(basic);
    da.innerText = calculation.calDa(basic);
    ta.innerText = calculation.calTa(basic);
    pf.innerText = calculation.calPf(basic);
    ma.innerText = calculation.calMa(basic);
    tax.innerText = calculation.calTax(basic);
    gross.innerText = calGs(basic);
    net.innerText = calGs(basic)-(calculation.calPf(basic+calculation.calTax(basic)));

})


