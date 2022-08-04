let calculation = {

    calHra(basicSal) {

        return basicSal * 0.25;
    },

    calDa(basicSal) {

        return basicSal * 0.02;
    },

    calTa(basicSal) {

        return basicSal * 0.20;
    },

    calPf(basicSal) {

        return basicSal * 0.10;
    },

    calMa(basicSal) {

        return basicSal * 0.25;
    },

    calTax(basicSal) {

        return basicSal * 0.05;
    }


}

function calGs(basicSal) {

    return (basicSal + calculation.calHra(basicSal)+calculation.calDa(basicSal)+calculation.calTa(basicSal)+calculation.calPf(basicSal)+calculation.calMa(basicSal));
}


