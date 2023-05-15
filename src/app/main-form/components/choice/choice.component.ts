import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Question } from 'src/app/models/question.model';
import { MainFormService } from 'src/app/services/main-form.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
     @Input()index!: number;
     @Input () data : any;
    otherDisplay: boolean = true;
    arr = ['Option - 1', 'Option - 2'];
    $Event!: CdkDragDrop<string[], string[], any>;

    constructor(
      private mainFormService: MainFormService
    ) { }
    
    ngOnInit() {
      
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


  
    drop(event: CdkDragDrop<string[]>) {
      console.log(event);
      moveItemInArray(this.arr, event.previousIndex, event.currentIndex);
    }

    AddOpiton() : void {
      this.arr.push('Option - ' + (this.arr.length + 1));
    }
    AddOtherOption(): void {
      this.arr.push('Other');
      this.otherDisplay = false;
    }

    questionFormControl = new FormControl('Question for option', Validators.required);
}
