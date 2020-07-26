const { odd, even } = require("./var");
const checkNumber = require("./func");
//es6 모듈시스템
/*
    import {odd, even} from "./var";
    import checkNumber from './func';
    export defaul checkOddOrEven;
*/
function checkStringOddOrEven(str) {
    if (!str.length % 2) {
        //짝수
        return even;
    } else {
        return odd;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven(`Hello`));
