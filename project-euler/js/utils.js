class Utils {
    static printFactorDecomposition(num) {
        // num = 2730
        //   r  | f
        // 2730 | 2
        // 1365 | 3
        //  455 | 5
        //   91 | 7
        //   13 | 13
        //    1 |
        let f = 2,
            r = num,
            space = "",
            spaces = 0,
            numLenght = num.toString().length;

        while (r != 1) {
            if (r % f === 0) {
                spaces = numLenght - r.toString().length;
                space = " ".repeat(spaces);
                console.log(`${space}${r} | ${f}`);
                r = r / f;
            } else {
                f++;
            }
        }
        console.log(" ".repeat(numLenght - 1) + "1 |");
    }

    static getFactorDecomposition(num) {
        let f = 2,
            r = num,
            factors = [];
        while (r !== 1) {
            if (r % f === 0) {
                factors.push(f);
                r = r / f;
            } else {
                f++;
            }
        }
        return factors;
    }

    // returns true if the string val is palindrome abcba, aasesaa, asddsa
    static isPalindrome(val) {
        let len = val.length,
            first = val.slice(0, len / 2),
            last = val.slice(-(len / 2));
        last = last.split("").reverse().join("");
        if (first === last) return true;
        return false;
    }
}

Utils.printFactorDecomposition(2730);
console.log(Utils.getFactorDecomposition(2730));
console.log(Utils.isPalindrome("abcjrcba"));
