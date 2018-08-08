import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/joke';
import { ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  model: Joke = new Joke('','');
  @ViewChild('f') form: any;
  @Output() jokeCreated=new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {

  }
  //addJoke(setupVal:string,punchlineVal:string){
   // this.jokeCreated.emit(new Joke(setupVal,punchlineVal));
 // }
  onSubmit() {
    if(this.form.valid) {
      console.log('values ', this.form.value);
      console.log('setup ', this.model.setup);

      this.jokeCreated.emit(new Joke(this.model.setup,this.model.punchline));
      this.form.reset();
    } else {
      console.log('Invalid Form ');
    }
  }
}
