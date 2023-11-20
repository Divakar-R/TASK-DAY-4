//get circumference of circle

class Circle{
    constructor(radius,color){
        this.radius=1.0;
        this.color="red";
    }
    getcircumference(){
        return 2*Math.PI*this.radius;
    }
}
const mycircle=new Circle();
console.log(mycircle.getcircumference());


//get Area of circle

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
getarea(){
    return Math.PI*this.radius*this.radius;
}
}
const mycircle=new Circle(1.0,"red");
console.log(mycircle.getarea());


//get radius

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getradius(){
        return this.radius;
    }
}
const mycircle=new Circle(1.0,"red");
console.log(mycircle.getradius());


//get color

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getcolor(){
        return this.color;
    }
}
const mycircle=new Circle(1.0,"red");
console.log(mycircle.getcolor());
