beforeEach(function () {
    console.log('GLOBAL beforeEach ############################')
});
afterEach(function () {
    console.log('GLOBAL afterEach ############################')
});


export class Triangle {
    constructor(height) {
        this.height = height;
    }
}

module.exports['Element'] =
    class Element {
        constructor(selector) {
            this.selector = selector;
        }

        click() {
            driver.fin
        }


    }






/**********************************************************
************************* Testing *************************
**********************************************************/

// //v1 - not clickable links through files

// module.exports['Rectangle'] =
//     class Rectangle {
//         constructor(height, width) {
//             this.height = height;
//             this.width = width;
//         }
//     };


// module.exports['circle'] =
//     new class Circle {
//         constructor(radius) {
//             this.radius = radius;
//         }
//     }(99);


//v2

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}



module.exports = {
    Rectangle,
    circle: new Circle(99)
};