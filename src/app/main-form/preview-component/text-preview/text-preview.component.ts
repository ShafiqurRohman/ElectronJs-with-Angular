import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.css']
})
export class TextPreviewComponent {
  @Input() data!: any;
  @Input() index!: number;
}
