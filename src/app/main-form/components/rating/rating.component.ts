import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { MainFormService } from 'src/app/services/main-form.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements AfterContentChecked, OnInit {
  Number: number = 5;
  Type: string = 'thumb_up';
  Arr : number[] = [];
  temp:string = `<span class="material-symbols-outlined">${this.Type}</span>`;

  @Input()index!: number;
  @Input () data : any;

  numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  types = [
    'thumb_up',
    'favorite',
    'star',
    'workspace_premium',
    'lightbulb',
    'military_tech',
    'sentiment_very_satisfied'
  ];

  constructor(
    private mainFormService: MainFormService
  ) { }

  ngOnInit(): void {
  
  }


  deleteComponent(): void {
    console.log(this.data);
    this.mainFormService.deleteQuestion(this.data)
    .then(data => {
      
    });
  }


  copyComponent(): void {
    const copyData : Question = {
      question: this.data.question,
      type: this.data.type,
    }
    this.mainFormService.createQuestion(copyData)
    .then(data => {
     
    })
    .catch(error => {
      console.log(error);
    });
  }

  ngAfterContentChecked() {
    this.Arr = Array(this.Number).fill(0).map((x, i) => (i + 1));
  }

}
