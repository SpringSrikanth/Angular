import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gstbill';
  totalAmount:any='';
  gstPercent:any='';
  gstAmount:any = '';
  netAmount:any =''

  calculateGstAmount(){
    if(this.totalAmount && this.gstPercent){
      this.gstAmount =  (Number(this.totalAmount)*( Number(this.gstPercent)/100))
      this.netAmount= Number(this.totalAmount) +this.gstAmount;
    }
    else{
      this.totalAmount=this.totalAmount ? this.totalAmount :null,
      this.gstPercent=this.gstPercent ? this.gstPercent :null,
      this.gstAmount=''
    }
  }
}
