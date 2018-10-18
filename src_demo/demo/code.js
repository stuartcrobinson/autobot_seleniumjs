// const autobot = require('./class')

// console.log(new autobot.Triangle(123).height);


// const getFunctionName = require('../../autobot_framework/support/Tools').getFunctionName


export function getFunctionName() {
    let stack = new Error().stack

    console.log(stack);
    let arr = stack.split(' at ')
    let line = arr[arr.length - 2];
    let name = line.split('.')[1]
    name = name.split('(')[0]
    name = name.trim();
    return name;
}


// const f = function(){
//     console.log(getFunctionName());
// }

// f();