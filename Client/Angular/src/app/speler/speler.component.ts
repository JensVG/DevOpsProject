import { Component, OnInit } from '@angular/core';
import { ProjectService, Speler } from '../services/project.service'

@Component({
  selector: 'app-speler',
  templateUrl: './speler.component.html',
  styleUrls: ['./speler.component.css']
})
export class SpelerComponent implements OnInit {
  Idspelerget: string;
  page: number = 1;
  maxPage: number = 3;
  Idspelerdelete: string;
  SpelerInfo: Speler;
  SpelersInfo: Speler;
  VoornaamSpelersInfo: Speler;
  SorteerMethode: string;
  SorteerOp: string;
  SpelerUpdate: Speler;
  SelectedId: number;
  validationdeleteid: boolean = false;
  validationgetid: boolean = false;
  validationsort: boolean = false;
  //Create
  VoornaamNewSpeler: string;
  AchternaamNewSpeler: string;
  WoonplaatsNewSpeler: string;
  EmailNewSpeler: string;
  RugnummerNewSpeler: number;
  PositieNewSpeler: string;
  validationcreate: boolean = false;
  //Update
  IDUpdateSpeler: string;
  VoornaamUpdateSpeler: string;
  AchternaamUpdateSpeler: string;
  WoonplaatsUpdateSpeler: string;
  EmailUpdateSpeler: string;
  RugnummerUpdateSpeler: number;
  PositieUpdateSpeler: string;
  GeleKaartenUpdateSpeler: number;
  RodeKaartenUpdateSpeler: number;
  AantalAssistenUpdateSpeler: number;
  AantalGoalenUpdateSpeler: number;

  constructor(private speler: ProjectService) { }

  SearchSpelerOnID(IdSpeler: string) {
    if(IdSpeler == null){
this.validationgetid = true;
    }
    else{
      this.validationgetid = false;
    this.speler.GetSpelerById(IdSpeler).subscribe((info) => {
      this.SpelerInfo = {
        id: info.id,
        voornaam: info.voornaam,
        achternaam: info.achternaam,
        woonplaats: info.woonplaats,
        email: info.email,
        positie: info.positie,
        rugnummer: info.rugnummer,
        geleKaarten: info.geleKaarten,
        rodeKaarten: info.rodeKaarten,
        aantalGoalen: info.aantalGoalen,
        aantalAssisten: info.aantalAssisten
      };
    })
  }
  }

  DeleteSpelerOnID(IdSpeler: string) {
    if(IdSpeler == null){
      this.validationdeleteid = true;
    }
    else{
      this.validationdeleteid = false;
    this.speler.DeleteSpelerById(IdSpeler).subscribe((info) => {
      this.SpelerInfo = {
        id: info.id,
        voornaam: info.voornaam,
        achternaam: info.achternaam,
        woonplaats: info.woonplaats,
        email: info.email,
        positie: info.positie,
        rugnummer: info.rugnummer,
        geleKaarten: info.geleKaarten,
        rodeKaarten: info.rodeKaarten,
        aantalGoalen: info.aantalGoalen,
        aantalAssisten: info.aantalAssisten,
      };
    })
  }
  }

  GetAllSpelers() {
    return this.speler.GetAllSpelers().subscribe(spelersinfo => {
      this.SpelersInfo = spelersinfo;
    })
  }

  GetAllSpelersWithName(voornaam: Speler) {
    console.log(voornaam);
    return this.speler.SearchOnSpelersVoornaam(voornaam).subscribe(spelersinfo => {
      this.VoornaamSpelersInfo = spelersinfo;
    })
  }

  WayToSort() {
    if(this.SorteerOp == null || this.SorteerMethode == null){
      this.validationsort = true;
    }
    else{
      this.validationsort = false;
    this.speler.SortSpelers(this.SorteerOp, this.SorteerMethode).subscribe(spelersinfo => {
      this.SpelersInfo = spelersinfo;
    })
    
  }
  }

  CreateSpeler() {
    if(this.VoornaamNewSpeler == null || this.AchternaamNewSpeler == null || this.WoonplaatsNewSpeler == null || this.EmailNewSpeler == null || this.RugnummerNewSpeler == null || this.PositieNewSpeler == null){
      this.validationcreate = true;
    }
    else{
      this.validationcreate = false;
    var input = {
      voornaam: this.VoornaamNewSpeler,
      achternaam: this.AchternaamNewSpeler,
      woonplaats: this.WoonplaatsNewSpeler,
      email: this.EmailNewSpeler,
      rugnummer: this.RugnummerNewSpeler,
      positie: this.PositieNewSpeler
    };
    this.speler.CreateSpeler(input).subscribe();
  }
  }


  UpdateSpeler() {
    var input = {
      id: this.IDUpdateSpeler,
      voornaam: this.VoornaamUpdateSpeler,
      achternaam: this.AchternaamUpdateSpeler,
      woonplaats: this.WoonplaatsUpdateSpeler,
      email: this.EmailUpdateSpeler,
      rugnummer: this.RugnummerUpdateSpeler,
      positie: this.PositieUpdateSpeler,
      geleKaarten: this.GeleKaartenUpdateSpeler,
      rodeKaarten: this.RodeKaartenUpdateSpeler,
      aantalGoalen: this.AantalGoalenUpdateSpeler,
      aantalAssisten: this.AantalAssistenUpdateSpeler 

    }
    this.speler.UpdateSpeler(input).subscribe();
  }

  GetPageSpelers() {
    this.speler.GetSpelersPage(this.page).subscribe(SpelersInfo => {
      this.SpelersInfo = SpelersInfo;
    })
  }

  VolgendePagina(){
    this.page++;
    this.GetPageSpelers();
  }

  VorigePagina(){
    this.page--;
    this.GetPageSpelers();
  }

  async ngOnInit() {
    this.GetAllSpelers();
  }

}