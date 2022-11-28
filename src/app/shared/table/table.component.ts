import { Component, Input, OnInit } from '@angular/core';

interface Title {
  field: string,
  name: string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columns: Title[] = [];
  @Input() data = [];

  constructor() {}

  ngOnInit(): void {
  }

}
