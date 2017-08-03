import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'sh-radio-button',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  // values passed from parent component
  @Input() disabled:boolean;
  @Input() scheme:string;
  @Input() label:string;
  @Input() radioid:string;
  @Input() name:string;
  @Input() checked:boolean;

  public isTouchDevice : boolean;
  public isLight : boolean;
  public themeClassName : string;

  constructor() {
  }

  ngOnInit() {
    this.disabled = this.disabled || false;
    this.checked  = this.checked || false;
    this.themeClassName = `SHRadioButton--${this.scheme}Scheme`;
    this.isTouchDevice = 'ontouchstart' in document.documentElement;
    this.isLight = this.scheme === 'light' ? true : false;
  }

}
