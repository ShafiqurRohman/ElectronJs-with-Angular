import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { Question } from '../models/question.model';
import { Header } from '../models/header.model';


@Injectable({
  providedIn: 'root'
})
export class MainFormService {
  public applyChanges = new Subject<any>();

  constructor(
    private angularFirestore: AngularFirestore
  ) { }


  updateHeader(headerData : Header) {
    return this.angularFirestore
    .collection('header')
    .doc('header')
    .set(headerData);
  }

  getHeader() {
    return this.angularFirestore
    .collection('header')
    .snapshotChanges();
  }

  getAllQuestion() {
    return this.angularFirestore
    .collection('question')
    .snapshotChanges();
  }


  createQuestion(question: Question) {
    return this.angularFirestore
    .collection('question')
    .add(question);
  }

  deleteQuestion(question: Question) {
    return  this.angularFirestore
    .collection('/question')
    .doc(question.id)
    .delete();
  }

  deleteField(question: Question) {
   // console.log(question);
    return this.angularFirestore.doc(`/question/tDcEtDjpawZBLkzhDWGR`).delete();
  }

  updateQuestion(question: Question) {
    return this.angularFirestore
    .collection('question')
    .doc(question.id)
    .update(question);
  }

}

