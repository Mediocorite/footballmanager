import { Component, OnInit } from '@angular/core';
import { PlayerList, UpComingMatchesList, TeamsList } from "./PlayerInfoModel";

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Initializing Data Structures & Services
  playerListObj: PlayerList[];
  upComingMatchesListObj: UpComingMatchesList;
  teamsListObj: TeamsList;
  searchCriteria: String = ``;

  configURL = "https://api.npoint.io/d6bd0efc05639084eb17/";

  constructor(private http: HttpClient) { }

  // On loading the website
  ngOnInit() {
    // Retrieve the player information on api fetch service
    this.http.get(this.configURL).subscribe(res => {
      this.playerListObj = res["playerList"];
      this.teamsListObj = res["teamsList"];
      this.playerListObj.sort((a,b) => {
        return parseInt(a.Value) - parseInt(b.Value);
      });
    });
  }
}

