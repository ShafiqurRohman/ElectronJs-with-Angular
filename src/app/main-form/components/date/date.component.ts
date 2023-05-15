import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { MainFormService } from 'src/app/services/main-form.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {

  @Input()index!: number;
  @Input () data : any;

  constructor(
    private mainFormService: MainFormService
  ) { }

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


}
