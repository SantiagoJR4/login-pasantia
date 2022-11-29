import { Component, Input, OnInit } from '@angular/core';

interface ColumnTable {
  field: string,
  name: string
}

@Component({
  selector: 'app-ucs-table',
  templateUrl: './ucs-table.component.html',
  styleUrls: ['./ucs-table.component.css']
})
export class UcsTableComponent implements OnInit {

  @Input() columns: ColumnTable[] = [];
  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
