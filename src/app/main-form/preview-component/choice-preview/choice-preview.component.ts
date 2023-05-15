import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-choice-preview',
  templateUrl: './choice-preview.component.html',
  styleUrls: ['./choice-preview.component.css']
})
export class ChoicePreviewComponent {

  @Input() data!: any;
  @Input() index!: number;

  selectedOption: string = '';

  options = ['Option - 1', 'Option - 2'];

  constructor() { 
  
  }

}
