import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
userInput;
servicecalls =[];
constructor(){}
  fetchData=()=>{
    console.log('Service called from UI');
    this.servicecalls.push('Service called from UI ---> '+this.userInput);
  }
  betterFunction(execFunction,delay){
    let timer;
    return function(){
      
      if(timer){
        clearTimeout(timer);
      }
       timer = setTimeout(()=>{
         if(this.userInput){
           execFunction();
         }
        
        },delay);
      }
    
  }
    betteFun = this.betterFunction(this.fetchData,3000);
  keyUpPress(){
    this.betteFun();
  }
}
