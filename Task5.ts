function print(name:string | string[]) { 
    if(typeof name === "string") { 
       console.log(name) 
    } 
    else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
} 
print("Vikram Jothik mateti"); 
console.log("Printing name array...."); 
print(["vikram","Jothik","Mateti","jdaojoiw"]);

