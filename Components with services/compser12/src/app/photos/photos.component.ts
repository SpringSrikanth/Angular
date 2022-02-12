import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public photos:any[] =[]

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getPhotosData()
  }

  public getPhotosData(){
    this.service.getPhotos().subscribe((res:any)=>{
      console.log(res);
      this.photos=res;
    },err=>{
      console.log(err)
    })
  }

}
