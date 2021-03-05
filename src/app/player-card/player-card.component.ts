import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() playerInfo;
  imageURL: string = ``;

  constructor() { }

  ngOnInit(): void {
    this.imageURL = `assets/player-images/${this.playerInfo.Id}.jpg`
  }

}
