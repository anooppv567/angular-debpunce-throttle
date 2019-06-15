import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Debounce';
userInput;
throttleInput;
servicecalls =[];
throttleServiceCalls = [];
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
  fetchDataForThrottle =()=>{
   console.log('Service call for throttle----' ,this.throttleInput)
   this.throttleServiceCalls.push('Service call for throttle----'+ this.throttleInput);
  }
  throttleFun(execFun,delay){
    let lastExecutionTime =0;
       return ()=>{
         let currentTime =  Date.now();
          if((currentTime - lastExecutionTime) >delay){
            if(this.throttleInput){
             execFun();
            }
              
             lastExecutionTime = currentTime;
          }
       }
  }
  throttle = this.throttleFun(this.fetchDataForThrottle,3000)
  keyUpPressForThrottle(){
    this.throttle();
  }
}
