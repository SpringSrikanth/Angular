import { Component } from '@angular/core';
import {Student} from './model/student';
import { RestserviceService } from './service/restservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  studentList: Student[]=[];
  countriesData: any;
  constructor(private restService:RestserviceService){

  }
  addStudent(frm){
    let student: Student;
    student=frm.value;
    console.log(frm);
    this.studentList.push(student);
    frm.form.reset();
  }
 ngOnInit (){
     this.getAllContries();
  }
  getAllContries(){
      this.restService.getCountries().subscribe((res)=>{
        console.log(res._body);
        this.countriesData=res._body;
      }
      ,(err)=>{
        console.log(err);
        
      });
      console.log(this.countriesData);
  }
     
}
