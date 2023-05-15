import { Component } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { MainFormService } from 'src/app/services/main-form.service';

@Component({
  selector: 'app-intert-new-item',
  templateUrl: './intert-new-item.component.html',
  styleUrls: ['./intert-new-item.component.css']
})
export class IntertNewItemComponent{
  display: boolean = true;

  constructor(
    private mainFormService: MainFormService
  ) { }

  changeDisplay(): void {
    this.display = !this.display;
  }

  addChoiceQuestion() {
    const data : Question ={
      question: 'Question for choice',
      type: 'choice'
    }
    
    this.mainFormService.createQuestion(data).then(data => {
      this.mainFormService.applyChanges.next(data);
    });
  }

  addTextQuestion() {
    const data : Question ={
      question: 'Question for Text',
      type: 'text'
    }
    
    this.mainFormService.createQuestion(data).then(data => {
      this.mainFormService.applyChanges.next(data);
    });
  }

  addRattingQuestion() {
    const data : Question ={
      question: 'Question for Rating',
      type: 'ratting',
      symbol: 'star',
      numberOfSymbols: 5
    }
    
    this.mainFormService.createQuestion(data).then(data => {
      this.mainFormService.applyChanges.next(data);
    });
  }

  addDateQuestion() {
    const data : Question ={
      question: 'Question for date',
      type: 'date'
    }
    
    this.mainFormService.createQuestion(data).then(data => {
      this.mainFormService.applyChanges.next(data);
    });
  }

  

}
