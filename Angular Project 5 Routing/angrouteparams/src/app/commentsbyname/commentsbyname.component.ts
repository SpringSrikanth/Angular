import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commentsbyname',
  templateUrl: './commentsbyname.component.html',
  styleUrls: ['./commentsbyname.component.scss']
})
export class CommentsbynameComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      console.log(params);
      console.log(params.get('id'))
      console.log(params.get('name'))
    })
  }

}
