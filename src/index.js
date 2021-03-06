module.exports = function toReadable(number) {
    const numOfDigits = String(number).length;
    const singleDigits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const firstTenNumbers = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const roundTwoDigitsNumbers = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    switch (numOfDigits) {
        case 1:
            return singleDigits[number];
        case 2:
            const firstDigit = Math.floor(number / 10);
            const lastDigit = number % 10;
            if (lastDigit === 0) {
                return roundTwoDigitsNumbers[firstDigit - 1];
            } else if (firstDigit === 1) {
                return firstTenNumbers[lastDigit - 1];
            } else {
                return `${roundTwoDigitsNumbers[firstDigit - 1]} ${
                    singleDigits[lastDigit]
                }`;
            }
        case 3:
            const hundredsDigit = Math.floor(number / 100);
            const digit = number % 10;
            const decimDigits = Math.floor(
                (number - hundredsDigit * 100 - digit) / 10
            );
            if (number % 100 === 0) {
                return `${singleDigits[hundredsDigit]} hundred`;
            } else if (digit === 0) {
                return `${singleDigits[hundredsDigit]} hundred ${
                    roundTwoDigitsNumbers[decimDigits - 1]
                }`;
            } else if (decimDigits === 0) {
                return `${singleDigits[hundredsDigit]} hundred ${singleDigits[digit]}`;
            } else if (decimDigits === 1) {
                return `${singleDigits[hundredsDigit]} hundred ${
                    firstTenNumbers[digit - 1]
                }`;
            } else {
                return `${singleDigits[hundredsDigit]} hundred ${
                    roundTwoDigitsNumbers[decimDigits - 1]
                } ${singleDigits[digit]}`;
            }
    }
};
