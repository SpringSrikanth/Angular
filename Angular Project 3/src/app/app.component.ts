import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav">
              <li class="nav-item"  ><a routerLink='/' routerLinkActive="active" routerLinkActiveOptions="{exact:true}">Home</a></li>
              <li class="nav-item"  ><a routerLink='/about' routerLinkActive="active">About</a></li>
              <li class="nav-item"  ><a routerLink='/contact' routerLinkActive="active"y>Contact</a></li>
            </ul>
         </div>
         <router-outlet></router-outlet>
   </nav>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
