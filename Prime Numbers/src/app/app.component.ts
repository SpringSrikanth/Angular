import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primenumbers';
  digitNumber;
  primeMsg='';
  

  checkPrimeNumber(){
    if(this.digitNumber){
      const value= Number(this.digitNumber);
      this.primeMsg =this.getPrime(value)
    }
  }

  getPrime(value):string{
    let msg= '';
    let isPrime =true;
    if(value){
      if(value<=1){
        msg="Not a prime number"
      }
      else if(value>1){
        for (let index = 2; index < value; index++) {
          if(value % index===0){
            isPrime=false;
            break;
          }
        }
        if(isPrime){
          msg="this is Prime Number !!!"
        }
        else{
          msg= "Not a Prime number"
        }
      }
    }
    return msg;
  }

}
