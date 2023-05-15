import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-preview',
  templateUrl: './date-preview.component.html',
  styleUrls: ['./date-preview.component.css']
})
export class DatePreviewComponent {

  @Input() data!: any;
  @Input() index!: number;

  
}
