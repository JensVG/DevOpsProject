import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private http: HttpClient) { }
  //Get all Spelers
  GetAllSpelers() {
    return this.http.get<Speler>(`https://localhost:44377/api/v1/Spelers`)
  }

  //Get all Ploegen
  GetAllPloegen() {
    return this.http.get<Ploeg>(`https://localhost:44377/api/v1/Ploegen`)
  }

  //Get 1 Speler
  GetSpelerById(id) {
    return this.http.get<Speler>(`https://localhost:44377/api/v1/Spelers/${id}`)
  }

  //Get 1 Ploeg
  GetPloegById(id) {
    return this.http.get<Ploeg>(`https://localhost:44377/api/v1/Ploegen/${id}`)
  }

  //ThirdParty
  GetThirdPartyAPI() {
    return this.http.get<Voetbal>(`https://www.scorebat.com/video-api/v1/`)
  }

  //Delete Speler
  DeleteSpelerById(id) {
    return this.http.delete<Speler>(`https://localhost:44377/api/v1/Spelers/${id}`)
  }

  //Delete Ploeg
  DeletePloegById(id) {
    return this.http.delete<Ploeg>(`https://localhost:44377/api/v1/Ploegen/${id}`)
  }

  //Search Speler(s)
  SearchOnSpelersVoornaam(voornaam) {
    return this.http.get<Speler>(`https://localhost:44377/api/v1/Spelers?search=${voornaam}`);
  }

  //Sort Spelers
  SortSpelers(sorttype: string, dir: string) {
    return this.http.get<Speler>(`https://localhost:44377/api/v1/Spelers?sort=${sorttype}&dir=${dir}`)
  }

  //Page Spelers Tabel
  GetSpelersPage(page: number) {
    return this.http.get<Speler>(`https://localhost:44377/api/v1/Spelers?page=${page - 1}`);
  }

  //Create Speler
  CreateSpeler(Speler: any) {
    return this.http.post<Speler>(`https://localhost:44377/api/v1/Spelers`, Speler, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    });
  }

  //Create Ploeg
  CreatePloeg(Ploeg: any) {
    return this.http.post<Ploeg>(`https://localhost:44377/api/v1/Ploegen`, Ploeg, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    });
  }

  //Update Speler
  UpdateSpeler(Speler: any) {
    var input = {
      id: Speler.id,
      voornaam: Speler.voornaam,
      achternaam: Speler.achternaam,
      woonplaats: Speler.woonplaats,
      email: Speler.email,
      positie: Speler.positie,
      rugnummer: Speler.rugnummer,
      geleKaarten: Speler.geleKaarten,
      rodeKaarten: Speler.rodeKaarten,
      aantalGoalen: Speler.aantalGoalen,
      aantalAssisten: Speler.aantalAssisten
    }
    return this.http.put<Speler>(`https://localhost:44377/api/v1/Spelers`, input, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    );
  }
}


export interface Speler {
  id: any;
  voornaam: string;
  achternaam: string;
  woonplaats: string;
  email: string;
  positie: any;
  rugnummer: any;
  geleKaarten: any;
  rodeKaarten: any;
  aantalGoalen: any;
  aantalAssisten: any;
}


export interface SpelerPloeg {
  id: any;
  voornaam: string;
  achternaam: string;
  woonplaats: string;
  email: string;
  positie: any;
  rugnummer: any;
  geleKaarten: any;
  rodeKaarten: any;
  aantalGoalen: any;
  aantalAssisten: any;
  Ploeg: Ploeg[];
}


export interface Ploeg {
  id: any;
  ploegNaam: string;
  gemeente: string;
  website: string;
  stamnummer: any;
  gewonnen: any;
  verloren: any;
  gelijkspel: any;
  punten: any;
}

export interface Side1 {
  name: string;
  url: string;
}

export interface Side2 {
  name: string;
  url: string;
}

export interface Competition {
  name: string;
  id: number;
  url: string;
}

export interface Video {
  title: string;
  embed: string;
}

export interface Voetbal {
  title: string;
  embed: string;
  url: string;
  thumbnail: string;
  date: Date;
  side1: Side1;
  side2: Side2;
  competition: Competition;
  videos: Video[];
}