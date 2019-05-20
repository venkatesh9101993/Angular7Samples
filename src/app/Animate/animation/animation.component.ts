import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, animation, transition } from '@angular/animations'
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger("animateParagraph", [state("one", style({
      color: 'red',
      transform: 'scale(1)'
    }
    )), state("two",
      style(
        {
          color: 'green',
          transform: 'scale(2)'
        })), transition('one <-> two', animate('2000ms ease-in'))
    ])
  ]
})
export class AnimationComponent implements OnInit {

  myState = "two"

  animateText = function () {
    this.myState = this.myState == "two" ? "one" : "two"

  }
  constructor() { }

  ngOnInit() {
  }

}
