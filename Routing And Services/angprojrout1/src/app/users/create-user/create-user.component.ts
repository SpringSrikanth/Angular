import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../api/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public form:any;

  constructor(private service :UserServiceService,private fb:FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.form= this.fb.group({
      name:['',Validators.required],
      job:['',Validators.required]
    })
  }

  ngOnInit(): void {

  }
  
  submitForm(){
    console.log(this.form.value)
  }

}
