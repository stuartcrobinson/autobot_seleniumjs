module.exports = {
    asdf: async function(){
        // console.log("here we are - where is error????")
        // throw new Error("here is an error stuart");

        console.log("here we are - where is error????")

        await asdf2(driver);
    }
}


// module.exports = {
//     asdf: function () {
//         console.log("here we are - where is error????")
//         throw new Error("here is an error stuart");
//     }
// }

// export const asdf = async function (driver) {
//     console.log("here we are - where is error????")

//     await asdf2(driver);
    
//     // throw new Error("here is an error stuart");
// }

const asdf2 = async function (driver) {
    console.log("here we are - where is error????")

    await driver.sleep(100);
    
    console.log(Function.caller)
    console.log(Function.caller.caller)
    console.log(Function.caller.caller.caller)
    console.log("asdf2.caller")
    console.log("asdf2.caller.caller")
    console.log("asdf2.caller.caller.caller")

    console.log("new Error().stack")
    console.log(new Error().stack)
    throw new Error("here is an error stuart");
}