import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //instance variables
  title = 'angularpb1';
  public users = ['Srikanth', 'Surya','Ravisai','Raju','Saikumar','Ravisai'] //array of elements
  public books= [
    {id:1,name:'Maha Bharatha', author:'author1'},
    {id:2,name:'Ramayana', author:'author1'},
    {id:3,name:'Life of software engineer', author:'author1'},
    {id:4,name:'Rich Dad Poor Dad', author:'author1'},
    {id:5,name:'Letus C', author:'author1'}
  ]
  // what is array?
  /**
   * Array is index based and accepts duplicate values
   * Array is collection of different types of data
   * 
   */
  /**
   * 
   * { id: 1, name: 'srikanth'}
   * 
   */

  /**
   * Access Modifiers
   * public , private ,optional
   */

  constructor(){

  }
}
