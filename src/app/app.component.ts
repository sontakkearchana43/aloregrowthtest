import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  emoji = '';
  segmentsList = [{
    name:"Test",
    icon: "🥰",
    description:"asda"
  },{
    name:"Test1",
    icon: "🥰",
    description:"asda"
  },{
    name:"Test2",
    icon: "🥰",
    description:"asda"
  }]
  title = 'aloretestapp';
  constructor(private matDialog:MatDialog) { }

  onAddSegment(){
    this.matDialog.open(DialogComponent,{
      width:"400px",
      data:'S'
    }).afterClosed().subscribe(data => {
       if(data){
         this.segmentsList.push(data);
       }
    })
  }

}
