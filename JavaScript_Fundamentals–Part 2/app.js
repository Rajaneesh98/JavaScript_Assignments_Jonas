mark = {
    fullName : "mark miller",
    weight : 78,
    height : 1.69,
    calcBMI : function() {
        this.BMI = this.weight/(this.height*this.height)
        return this.BMI
    }
}

john ={
    fullName : "john smith",
    weight : 92,
    height : 1.95,
    calcBMI : function() {
        this.BMI = this.weight/(this.height*this.height)
        return this.BMI
    }
}

higherBMI = function() {
    const johnBMI = john.calcBMI();
    const markBMI = mark.calcBMI();
    if(johnBMI > markBMI){
        const higher= john;
        const smaller = mark;
    }else{
        const higher= mark;
        const smaller =john;
    }

    console.log(johnBMI.toFixed(4))

}

higherBMI()