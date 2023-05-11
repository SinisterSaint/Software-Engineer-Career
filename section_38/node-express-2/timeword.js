function timeToWords(timeString) {
    const [hourString, minuteString] = timeString.split(':');
    const hour = parseInt(hourString);
    const minute = parseInt(minuteString);

    // Special Case: noon/midnight
    if (hour === 0 && minute === 0){
        return 'midnight';
    } else if (hour === 12 && minute === 0) {
        return 'noon';
    }

    // Build up the result in stages 
    let result = '';
    if (hour === 0) {
        result += 'twelve';
    } else if (hour <= 12) {
        result += convertSingleDigitToWord(hour);
    } else {
        result += convertSingleDigitToWord(hour - 12);
    }

    if (minute === 0) {
        result += ' o clock ';
    } else if (minute < 10) {
        result += `oh ${convertSingleDigitToWord()}`;
    } else {
        result +=  `${convertSingleDigitToWord(minute)}`;
    } if (minute % 10 !== 0) {
        result +=  `${convertSingleDigitToWord(minute)}`;
    }

    if (hour < 12) {
        result += ' am';
    }   else {
        result += ' pm';
    }
    return result;
}

function convertSingleDigitToWord(digit) {
    const words = [
        'oh', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve'
    ];
}

function convertTensToWord(tens) {
    const tensWords = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    return tensWords[Math.floor(tens / 10)];
}

