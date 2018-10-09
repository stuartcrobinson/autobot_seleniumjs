
export class Shape {
    constructor(height){
        this.height = height
    }
    logColor(){
        console.log(this.height);
    }
}


export class Triangle extends Shape{
    // constructor(height) {
    //     super(height);
    //     this.height = height;
    // }
    logSomething(){
        console.log("asdfasdf");
    }
}

let s = new Triangle();

s.logSomething();