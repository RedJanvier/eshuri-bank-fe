
//Using luhn algorithm to check valid card number.
export function isLuhnValid(number) {
    number = number?.trim() || "";

    return (
        /^[0-9]+$/.test(number) &&
        number
            .split("")
            .reverse()
            .reduce((sum, digit, idx) => {
                digit = parseInt(digit, 10);
                if (idx % 2) digit = digit * 2 > 9 ? digit * 2 - 9 : digit * 2;
                return sum + digit;
            }, 0) %
        10 ===
        0
    );
}
