var Palindrome = function (word) {
    word = word.toLowerCase();
    var charArr = word.split("");
    var validChar = "abcdefghijklmnopqrstuvwxyz".split("");
    var lettersArr = [];
    charArr.forEach(function (char) {
        if (validChar.indexOf(char) > -1)
            lettersArr.push(char);
    });
    return lettersArr.join("") === lettersArr.reverse().join("");
};
var result = Palindrome("madam");
console.log(result);
