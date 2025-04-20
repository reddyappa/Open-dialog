import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modelpopup';
  constructor(public dialog:MatDialog){}
  openDialog(){
    const userData = {
      name: 'John Doe',
      age: 30
    };
  

    this.dialog.open(DialogComponent,{
      data:userData
    })
  }
}
