import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-segments-list',
  templateUrl: './segments-list.component.html',
  styleUrls: ['./segments-list.component.scss']
})
export class SegmentsListComponent implements OnInit {
  segmentsList = [
    {
      name:"Segment 1",
      icon:'🐔',
      list:[{
        isPlus:true
      }]
    },
    {
      name:"Segment 2",
      icon:'🐔',
      list:[
        {
          name:"Newyork-Ies-11-50",
          icon:'🐔',
          color:'rgba(255, 179, 200, 1)'
        },
        {
          name:"Newyork-Ies-11-50",
          icon:'🤙',
          color:'rgba(255, 227, 175, 1)'
        },
        {
          name:"Newyork-Ies-11-50",
          icon:'🤙',
          color:'rgba(255, 159, 242, 1)'
        },
        {
          name:"Newyork-Ies-11-50",
          icon:'🤙',
          color:'rgba(255, 179, 200, 1)'
        },
        {
          isPlus:true
        }
      ]
    }
  ]
  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  onAddTable(index:number){
    this.matDialog.open(DialogComponent,{
      width:"400px",
      data:'T'
    }).afterClosed().subscribe(data => {
       if(data){
         this.segmentsList[index].list.splice(this.segmentsList[index].list.length - 1,0,data);
       }
    })
  }

}
