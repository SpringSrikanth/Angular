import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //variable are using for intialing the values
  title = 'calculator';
  value1 ='';
  value2 ='';

  result =0;

  constructor(){}

  // methods /functions are using for executing the logics / statements
  addNumbers(){
    this.result =Number(this.value1) + Number(this.value2) ;
  }

  mulNumbers(){
    this.result =Number(this.value1) * Number(this.value2) ;
  }

  divNumbers(){
    this.result =Number(this.value1) / Number(this.value2) ;
  }

  subNumbers(){
    this.result =Number(this.value1) - Number(this.value2) ;
  }

  resetNumbers(){
    this.value1='',
    this.value2='',
    this.result=0;
  }

  persentNumbers(){
    this.result =(Number(this.value1) / Number(this.value2)) *100 ;
  }
}
