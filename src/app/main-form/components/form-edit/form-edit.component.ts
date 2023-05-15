import { Component, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MainFormService } from 'src/app/services/main-form.service';
import { Question } from 'src/app/models/question.model';
import { Header } from 'src/app/models/header.model';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit, OnDestroy{
  headerDisplay:boolean = false;
  allQuestion : any;
  $Event!: CdkDragDrop<string[], string[], any>;
  header: string = 'Untitled Header';
  description!: string;

  constructor(
    private mainFormService: MainFormService
    ) { }

  ngOnInit() {
    this.mainFormService.getAllQuestion().subscribe(data => {
      console.log(data);
      this.allQuestion = data.map((item) => {
        const id = item.payload.doc.id;
        const data = item.payload.doc.data() as Question;
        return { id, ...data };
      });
      
    });

    this.mainFormService.getHeader().subscribe(data => {
      console.log(data);
      if(data.length == 0){
        const headerData : Header = {
          header: this.header,
          description: this.description
        }
        this.mainFormService.updateHeader(headerData)
        .then(data => {
          console.log(data);
        })
      }
      else{
      data.map((item) => {
        const data = item.payload.doc.data() as Header;
        this.header = data.header;
        this.description = data.description;
      });
    }
    });
  }
  
  currentCall(event : Event): void {
    event.stopPropagation();
    this.headerDisplay = true;
  }


  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent){
    const clickDom = JSON.stringify(event.target);
    if(clickDom.includes('{"__ngContext__":14}')){
      console.log('clicked');
      this.headerDisplay = false;
      const headerData : Header = {
        header: this.header,
        description: this.description
      }
      this.mainFormService.updateHeader(headerData)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
    }
}


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allQuestion, event.previousIndex, event.currentIndex);
  }

  ngOnDestroy() {
    //this.mainFormService.getAllQuestion().unsubscribe();
  }

}
