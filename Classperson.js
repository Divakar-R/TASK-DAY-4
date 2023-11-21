class Person{
    constructor(a,b,c,d){
        this.personname=a;
        this.phno=b;
        this.city=c;
        this.state=d;
    }
    getprsndetails(){
        return "Name:" +this.personname+ "\n"+
        "Phone:" +this.phno+ "\n"+
        "City:" +this.city+"\n"+
        "State:" +this.state;
    }
}
var Member=new Person("Virat",54321,"Chennai","Tamilnadu")
console.log(Member.getprsndetails());
