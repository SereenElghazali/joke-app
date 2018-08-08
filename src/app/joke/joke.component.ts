import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Joke } from 'src/app/joke';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() data:Joke;
  @Output() jokeRemoved = new EventEmitter<Joke>();

  constructor() {
    
   }

  ngOnInit() {
  }
  removeJoke() {
    this.jokeRemoved.emit();
  }
}
