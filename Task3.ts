interface IPerson { 
    age:number;
    name:string; 
    phone:number;
    fulldetails();
} 

class Details implements IPerson {

    age:number;
    name:string; 
    phone:number;

    constructor(AGE: number, NAME: string, PHONE: number) {  
        this.age=AGE;
        this.name=NAME;
        this.phone=PHONE;     
    } 
    
    fulldetails(){
        return this.age+'\n'+this.name+'\n'+this.phone;
    }

}

 let v = new Details(12,"Vikram",231231231);
 let k = v.fulldetails();
 console.log("\nThe Details Of Person : ",k);