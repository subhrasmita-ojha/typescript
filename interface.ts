interface Person {   
    name:string    
 }  
 interface PersonDetail {   
     age:number  
      
 }  
 interface Employee extends Person, PersonDetail {   
     age:number  
 }  
 let empObject = <Employee>{};   
 empObject.name = "subhrasmita ojha"  
 empObject.age = 24   
  
 console.log("Name: "+empObject.name);  
 console.log("age: "+empObject.age); 