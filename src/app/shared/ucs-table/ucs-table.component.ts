import { Component, Input, OnInit } from '@angular/core';
import { ColumnTable } from 'src/app/interfaces/table.model';

@Component({
  selector: 'app-ucs-table',
  templateUrl: './ucs-table.component.html',
  styleUrls: ['./ucs-table.component.css']
})
export class UcsTableComponent implements OnInit {

  @Input() columns: ColumnTable[] = [];
  @Input() data: any;
  @Input() editButton: boolean = false;
  @Input() deleteButton: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
