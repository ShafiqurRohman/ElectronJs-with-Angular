import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { MainFormService } from 'src/app/services/main-form.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input()index!: number;
  @Input () data : any;

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


}
