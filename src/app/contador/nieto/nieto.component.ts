import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit{
  @Input() contador = 0;

  constructor(){
  }

  ngOnInit(){

  }
}
