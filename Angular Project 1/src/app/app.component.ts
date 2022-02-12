import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
  {{title}} 

  <first class='container-fluid'></first>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is AppComponent!';
}
