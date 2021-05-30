import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:string="";
  flag:number=0;
  historyArray=new Set();
  trim:string="";
  togle:string="+";

 click(event:any){
    
  if(event.target.id=="one"){
    this.result=this.result+"1";
   this.flagDecrement();
  }

  else if(event.target.id=="two"){
    this.result=this.result+"2";
   this.flagDecrement();
  }
  else if(event.target.id=="three"){
    this.result=this.result+"3";
   this.flagDecrement();
  }
  else if(event.target.id=="four"){
    this.result=this.result+"4";
   this.flagDecrement();
  }
  else if(event.target.id=="five"){
    this.result=this.result+"5";
   this.flagDecrement();
  }
  else if(event.target.id=="six"){
    this.result=this.result+"6";
   this.flagDecrement();
  }
  else if(event.target.id=="seven"){
    this.result=this.result+"7";
   this.flagDecrement();
  }

  else if(event.target.id=="eight"){
    this.result=this.result+"8";
   this.flagDecrement();
  }
  else if(event.target.id=="nine"){
    this.result=this.result+"9";
   this.flagDecrement();
  }
  else if(event.target.id=="zero"){
    if(this.result.length>0 && Number(this.result)<1){
      this.result="0";
     this.flagDecrement();
    }
    else{
      this.result=this.result+"0";
     this.flagDecrement();
    }
  }

  else if(event.target.id=="clear"){
    this.result="";
  }

  
  }

  action(event:any){

    console.log(event.target.id+" "+this.result.length);

    if(this.flag==1){
      
      alert("Two symbols cant be used together");
    }
    
    else if(event.target.id=="plus" && this.result.length>0){
      this.result=this.result+"+";
      this.flagIncrement();
    }
  
    else if(event.target.id=="minus" && this.result.length>0){
      this.result=this.result+"-";
      this.flagIncrement();
    }

    else if(event.target.id=="divide" && this.result.length>0){
      this.result=this.result+"/";
      this.flagIncrement();
    }
    else if(event.target.id=="multiply" && this.result.length>0){
      this.result=this.result+"x";
      this.flagIncrement();
    }
    
    else{
      alert("enter number first");
    }
  }
  calculate(event:any){
    length=this.result.length;
    this.trim=this.result;
    if(this.result[length-1]=="+" || this.result[length-1]=="-" ||
    this.result[length-1]=="x" || this.result[length-1]=="/"){
      this.trim=this.result.slice(0,this.result.length-1);
    }

    this.trim=this.trim.replace("x","*");
    this.result=""+Number(eval(this.trim)).toFixed(1);
    this.historyArray.add(this.trim+"="+this.result);
    this.flag=0;


  }

  toggle(){
this.togle=this.togle=="x"? "+":"x";
  }

  flagIncrement(){
    this.flag+=1;

  }

  flagDecrement(){

    if(this.flag==1){
      this.flag=0;
    }

  }

}
