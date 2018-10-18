

/******************************** tools ************************************/

export function fxName(stack){
    // let stack = error.stack

    // console.log("getFunctionName stack");
    // console.log(stack);
    let arr = stack.split(' at ')
    let line = arr[arr.length - 1];
    let name = line.split('.')[1]
    name = name.split('(')[0]
    name = name.trim();
    return name;
}

// module.exports = {getFunctionName}