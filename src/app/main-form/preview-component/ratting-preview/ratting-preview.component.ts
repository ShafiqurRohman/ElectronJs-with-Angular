import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ratting-preview',
  templateUrl: './ratting-preview.component.html',
  styleUrls: ['./ratting-preview.component.css']
})
export class RattingPreviewComponent {
  @Input() data!: any;
  @Input() index!: number;

  clickIndex = -1;
  
  clickedOnAIcon(iconNumber: number) {
    this.clickIndex = iconNumber;
  }

}
