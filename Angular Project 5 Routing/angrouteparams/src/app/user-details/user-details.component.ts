import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   console.log( this.activatedRoute.snapshot.params.id );
    this.activatedRoute.paramMap.subscribe((params)=>{
      console.log(params);
      console.log(params.get('id'))
    })
  }

}
