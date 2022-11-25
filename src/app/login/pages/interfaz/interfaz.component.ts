import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent implements OnInit {

  isPasswordVisible: boolean = false
  passwordValue: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  seePassword () {
    this.isPasswordVisible = !this.isPasswordVisible
    console.log(this.isPasswordVisible);
    
  }

}
