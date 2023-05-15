import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/models/header.model';
import { Question } from 'src/app/models/question.model';
import { MainFormService } from 'src/app/services/main-form.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {
  header!: string;
  description!: string;
  allQuestion: any;

  constructor(
    private mainFormService: MainFormService
  ) { }

  ngOnInit(): void {
    this.mainFormService.getHeader().subscribe(data => {
      data.map((item) => {
        const data = item.payload.doc.data() as Header;
        this.header = data.header;
        this.description = data.description;
      });
    });

    this.mainFormService.getAllQuestion().subscribe(data => {
      this.allQuestion = data.map((item) => {
        const id = item.payload.doc.id;
        const data = item.payload.doc.data() as Question;
        return { id, ...data };
      });

      console.log(this.allQuestion);
      
    });

  }

}
