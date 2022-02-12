import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'setproject1';// global variables/ Instance variable
  //public users= new Set(); // normal intialization containing no values.
  // public users= new Set()
  // .add('Srikanth')
  // .add('Raju')
  // .add('Sai')
  // .add('Naveen'); // adding intial values while initialization

  public users = new Set(['Srikanth',"Naveen","Naveen"]) ;// adding intial values while initialization
  public user;

  //remove method and user is parameter
  public remove(user){
    console.log(user);
    console.log(this.users.has(user))
    if(this.users.has(user)){
      this.users.delete(user);
      alert('User Deleted Success fully.')
    }
  }

  public addUser(){
    if(this.user && this.user!=='' &&  !this.users.has(this.user)){
      this.users.add(this.user);
      alert('user added successfully')
      this.user=''
    }
    else{
      alert('user not added successfully and already exists')
    }
  }
}
