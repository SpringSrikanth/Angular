import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  public albums:any[] =[]

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getAlbumsData()
  }

  public getAlbumsData(){
    this.service.getAlbums().subscribe((res:any)=>{
      console.log(res);
      this.albums=res;
    },err=>{
      console.log(err)
    })
  }
}
