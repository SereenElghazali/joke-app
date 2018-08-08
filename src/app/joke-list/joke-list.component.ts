import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  data: any;
  jokeList:Array<Joke>;
  constructor() { 
    this.jokeList=[
      new Joke('obj #1', 'punchline #1'),
      new Joke('obj #2', 'punchline #2'),
      new Joke('obj #3', 'punchline #3'),
    ];
    
    
  }

  ngOnInit() {
  }
  addNewJoke(val:Joke){
    this.jokeList.unshift(val);
    const index: number = this.jokeList.indexOf(val);
    {{console.log(index +"input")}}
 
  }
  removeNewJoke(index) {

    {{console.log(index +"output")}}
 
  this.jokeList.splice(index, 1);
    
  }
}
