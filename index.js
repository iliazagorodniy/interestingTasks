function bracketsValidation(inputString) {
    let bracketsOpen = ['(', '[', '{'];
    let bracketsClosed = [')', ']', '}'];
    let stack = [];
    let string = inputString.split("");
    let result;

    for (let char of string) {
        if (bracketsOpen.includes(char)) {
            stack.push(char)
        }
        if (bracketsClosed.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            let typeOfBracket = bracketsClosed.indexOf(char);
            let openBracket = bracketsOpen[typeOfBracket];
            if (stack[stack.length - 1] === openBracket) {
                stack.pop();
            } else {
                return false
            }
        }
    }

    return stack.length === 0;
}


let str1 = '[{([[[<>]]])(<>)(){}}]';
let str2 = ']()(){<>}[[()]]';
let str3 = '[(sjd),"2"],{2:3}, [<>]';
let str4 = '{[[[[((({)))]]]]}';

console.log(bracketsValidation(str1));
console.log(bracketsValidation(str2));
console.log(bracketsValidation(str3));
console.log(bracketsValidation(str4));