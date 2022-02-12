import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  id:any=1;

  ngOnInit(): void {
  }

  submitForm(){
    this.router.navigate(['/users'])
  }

  method1(){
    this.router.navigate(['/comments/comment-details-edit',this.id]) //sending parameters thorough with navigation
                          // url, parameters
  }

  method2(){
   this.router.navigate(['/comments/comment-details-edit/'+this.id]) //or  
    //this.router.navigate([`/comments/comment-details-edit/${this.id}`])
    //url with paramether
  }
}
