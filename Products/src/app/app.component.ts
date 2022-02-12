import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectstotal';
  products:any[] =[];

  p_id:'';
  p_name:'';
  p_quantity:'';
  p_amount:'';


  public get total(){
    let totalAmount:any =0
    if(this.products.length>0){
      for (let index = 0; index < this.products.length; index++) {
        const element = this.products[index];
        totalAmount = Number(element.total) +totalAmount;
      }
    }
    return totalAmount;
  }

  public reset(){
    //clearing values;
    this.p_id='',
    this.p_amount=''
    this.p_quantity=''
    this.p_name=''
  }

  public addProduct(){
    this.products.push({
      id:this.p_id,
      name:this.p_name,
      quantity:this.p_quantity,
      amount:this.p_amount,
      total : Number(this.p_quantity) * Number(this.p_amount)
    })

    //clearing values;
    this.p_id='',
    this.p_amount=''
    this.p_quantity=''
    this.p_name=''
  }

}
