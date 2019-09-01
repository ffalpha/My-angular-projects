import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  
  public names ="Codevolation";
  public message="Welcome to codevlation";
  public person ={
    "firstName" : "John",
    "lastName" : "Doe"
  }
  @Input() public parentData;

  @Output() public childevent =new EventEmitter();
    title="Kalana"
    public name="";
  constructor() { }

  ngOnInit() {
  }
   onfire(){
     this.childevent.emit('Hey Codevelaution');
   }

  onClick(value){
    console.log(value);
  }
}
