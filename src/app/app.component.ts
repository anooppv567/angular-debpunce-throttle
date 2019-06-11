import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
userInput;
constructor(){}
  fetchData(){
    console.log('Service called from UI');
  }
  betterFunction(execFunction,delay){
    let timer;
    return function(){
      
      if(timer){
        clearTimeout(timer);
      }
       timer = setTimeout(function(){
        execFunction();
        },delay);
      }
    
  }
    betteFun = this.betterFunction(this.fetchData,5000);
  keyUpPress(){
    this.betteFun();
  }
}
