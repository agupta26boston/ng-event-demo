import { Component, OnInit ,EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-childbar',
  templateUrl: './childbar.component.html',
  styleUrls: ['./childbar.component.css']
})
export class ChildbarComponent implements OnInit {

  @Output() changeval = new EventEmitter();
  count=0;

  constructor() {} 
  valueChanged() {

    this.count = this.count + 1;
    this.changeval.emit(this.count);
 } 

  ngOnInit() {
  }

}
