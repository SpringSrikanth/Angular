import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whishme';
  name="";
  greetMsg=''

  public submit(){
    if(this.name){
      const date= new Date();
      const hours= date.getHours();
      this.greetMsg =this.getGreetMsg(Number(6))
    }
    else{
      this.name=null
      this.greetMsg='';
    }
  }

  private getGreetMsg(hours):string{
    let msg=''
    if(hours>=20 && hours <=24){
      msg = 'Its Too late Time to sleep !! Good Night'
    }
    else if(hours>=16 && hours <20){
      msg = 'Drink Coffee or Tea  !! Good Evening '
    }
    else if (hours >=13 && hours<16){
      msg= 'Time to eat !! Good After noon';
    }
    else if (hours >=0 && hours<6){
      msg= 'Dont wake up !! its sleeping time you need to sleep atleast 6 hours a day.';
    }
    else{
      msg="Its time to wake up !! Good morning "
    }
    return msg;
  }

}
