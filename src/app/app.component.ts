import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-dialog';
  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.matDialog.open(DialogContentComponent, {
      width: '700px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
