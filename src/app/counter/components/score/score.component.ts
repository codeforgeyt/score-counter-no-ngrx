import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  home = 0;
  away = 0;

  private readonly HOME = 'home';

  constructor() { }

  ngOnInit() { }

  increment(team: string) {
    (team === this.HOME) ? this.home++ : this.away++;
  }

  decrement(team: string) {
    (team === this.HOME) ? this.home-- : this.away--;
  }

  reset() {
    this.home = 0;
    this.away = 0;
  }
}
