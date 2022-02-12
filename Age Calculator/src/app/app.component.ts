import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ageCalculator';
  dateOfBirth;
  periodName='';
  personAge:any='';


  //const one time we need to give value it will be constant 
  //let is for updating values 
  // both are in scope. not able to access out side of method.
  submitForm(){
    console.log(this.dateOfBirth)
    if(this.dateOfBirth){
      const date=new Date(this.dateOfBirth);
      const currentYear= new Date().getFullYear();
      const birthYear= date.getFullYear()
      const old= currentYear - birthYear;
      console.log(old)
      this.periodName =this.getPeriodName(old);
      this.personAge=old
    }
  }

  getPeriodName(old):string{
    let period='';
    if( old>=55) {
      period ='You are senior citizen , Careful while walking !'
    }
    else if(old<55 && old>=20) {
      period ='You are adult ! You can travel the world But Be care ful with strangers'
    }
    else if(old<20 && old>=13){
      period ='You are an teenager , Dont Attract Stay safe'
    }
    else{
      period ='You are a child dont go out alone !'
    }
    return period;
  }
}
