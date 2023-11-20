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
console.log(mycircle.getcircumference);