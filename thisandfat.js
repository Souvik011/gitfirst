// This keyword 3-5 codes
var count = 0;

class Student {

   

    constructor(name,age,number,marks){
        this.name = name ;
        this.age = age; 
        this.phone_number = number;
        this.board_marks = marks;
        count++;
    }

    checkEgligible(){
        if(this.board_marks > 40){
            console.log(`${this.name} is Egligible`);
        }
        else{
            console.log(`${this.name} is not Egligible`);    
        }
    }

    egligibleForPlacement(){
        
        return (minage) =>  {
            if (this.board_marks > 40 && this.age > minage){
                console.log(`${this.name} is Egligible for placements`);
            } else {
                console.log(`${this.name} is not Egligible for placements`);
            }
        };
        
    }

}

let s1 = new Student('souvik',23,9064386228,40);
let s2 = new Student('sontu',24,7547967548,70);
let s3 = new Student('shibani',25,6294055429,90);
let s4 = new Student('pinky',22,8944939902,80);
let s5 = new Student('rahul',20,9064502554,20);



s1.egligibleForPlacement()(20);
s2.egligibleForPlacement()(20);
s3.egligibleForPlacement()(20);
s4.egligibleForPlacement()(20);
s5.egligibleForPlacement()(20);













