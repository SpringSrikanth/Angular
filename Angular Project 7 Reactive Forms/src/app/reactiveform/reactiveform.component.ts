import { Component, OnInit } from '@angular/core';
import {  Employee } from "../modal/Employee";
//import formgroup,formcontrol,Validators from @angular/forms --1
import { FormGroup ,FormControl ,Validators} from "@angular/forms";
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  empList :Employee[]=[];
  
//create form instance --2
  form: FormGroup;
  constructor() { 
    //register form using form group with intial loading
    this.form = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.maxLength(25),Validators.pattern('[a-zA-z][a-zA-z ]+')]),
      secondName: new FormControl('',[Validators.required,Validators.maxLength(25),,Validators.pattern('[a-zA-z][a-zA-z ]+')]),
      userName:new FormControl('',[Validators.required,Validators.maxLength(12)]),
        companyName:new FormControl('',[Validators.required,Validators.maxLength(25),,Validators.pattern('[a-zA-z][a-zA-z ]+')]),
        email:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(8)]),
        day:new FormControl('-1',[Validators.required]),
        month:new FormControl('-1',[Validators.required]),
        year:new FormControl('-1',[Validators.required]),
        gender:new FormControl('',[Validators.required]),
    });

  }
  yearsArray: number[] =[]
  daysArray: number[]=[]
  monthsArray: string[]=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  selectedMonth:boolean =true;
  selectedYear:number = 0;
  selectionYear:boolean =true;
  checkedValue:string ="";
  ngOnInit() {
    for (let index= 1990; index <= new Date().getFullYear(); index++) {
      this.yearsArray.push(index);
    }
  }
  selectedYearFun(obj){
    if(obj.target.value!="-1")
    {
      this.selectedYear = parseInt(obj.target.value);
      this.selectionYear = false;
      this.monthsArray=new Date().getFullYear() == this.selectedYear? this.getMonthsArray(new Date().getMonth()):this.monthsArray;
    }
    else{
      this.selectedYear =0;
      this.selectionYear=true;
    }
  }

  getMonthsArray(month){
    let array:string[] =[]
    for (let index = 0; index <= month; index++) {
      array.push(this.monthsArray[index]);
    }
    this.monthsArray = array;
    return array;
  }

  selectedMonthFun(obj){
    console.log(obj.target.value);
    if(obj.target.value!="-1"){
      console.log("if");
      
      this.selectedMonth=false;
      this.daysArray=[];
      for (let index = 1; index <= this.getDaysBasedOnMonthName(obj.target.value); index++) {
        this.daysArray.push(index);
      }
    }
      else{
        console.log("else");
        this.selectedMonth=true
      }
  }
  getSelectedMonth(){
     return this.getSelectedMonth;
  }
  getDaysBasedOnMonthName(month){
    let days:number=0;
    switch (month) {
        case "Jan":
          days=31;
          break;
        case "Feb":
          if(this.selectedYear!=0){
            let leapYear=(this.selectedYear % 100 === 0) ? (this.selectedYear % 400 === 0) : (this.selectedYear % 4 === 0);
            days= leapYear?29:28;
          }
          else{
            days=28;
          }
          break;
        case "Mar":
          days=31;
          break;
        case "Apr":
          days=30;
          break;
        case "May":
          days=31;
          break;
        case "Jun":
          days=30;
          break;
        case "Jul":
          days=31;
          break;
        case "Aug":
          days=31;
          break;
        case "Sep":
          days=30;
          break;
        case "Oct":
          days=31;
          break;
        case "Nov":
          days=30;
          break;
        case "Dec":
          days=31;
          break;
    }
    return days;
  }

  selectGender(obj){
    console.log(obj.target.value);
    this.checkedValue=obj.target.value;
  }

  isChecked(value){
    return this.checkedValue==value?true:false;
  }

  addEmployee(form){
    console.log(form);
    
  }
}
