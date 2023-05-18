function addCommas(number) {
    //Create a function the turns the number into a string
    let fromNumberToString = String(number);

    //Make sure to split the number into an integer or decimal if needed
    let parts = fromNumberToString.split(".");
    let integerPart = parts[0];
    let decimalPart = parts[1] || "";

    //Create a variable that adds the commas to the integer part
    let formattedInt = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //Create a variable which allows the combination of integer and decimal parts
    let formattedNum = decimalPart.length > 0 ? formattedInt + "." +decimalPart : formattedInt;

    return formattedNum
}

module.exports = addCommas;