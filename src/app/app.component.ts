import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'port-folio';
  myimage:string="../assets/img/jacob.jpg";
  portfolio:string="../assets/img/logo.svg";
  isSideBarShowing = false;

  openSideBar(){
    this.isSideBarShowing = true;
  }

  closeSideBar(){
    this.isSideBarShowing = false;
  }

}
