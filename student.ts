  
class Student {   
      
    class: String;  
    FAVORITE_SUBJECT:string;  
     
    display():void {   
        console.log("CLASS: "+this.class)   
        console.log("FAVORITE SUBJECT: "+this.FAVORITE_SUBJECT)   
    }   
}   
  
    
let obj = new Student();  
obj.class = "SEVENTH";  
obj.FAVORITE_SUBJECT = "physics";  
obj.display();