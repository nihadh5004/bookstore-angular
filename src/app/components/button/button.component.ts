import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() classText:string=''
  @Input() text:string=''
  @Output() buttonClick:EventEmitter<any>=new EventEmitter()

  eventEmit(){
    console.log('clicked');
    
    this.buttonClick.emit()

  }

}
