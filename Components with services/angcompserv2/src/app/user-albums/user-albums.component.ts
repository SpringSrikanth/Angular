import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  constructor(private api:UserServiceService) { }
  _userId:any;
  albums:any[]=[];

  @Input()
  public set userId(value:any){
    if(value){
      this._userId =value;
      this.api.getAlbums().subscribe((res)=>{
        this.albums = res.filter((item)=>{return item.userId==this._userId});
        console.log(this.albums);
        
      },(err)=>{
        console.log(err)
      })

    }
  }
  ngOnInit(): void {
  }

}
