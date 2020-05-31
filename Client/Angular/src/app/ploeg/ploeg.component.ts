import { Component, OnInit } from '@angular/core';
import { ProjectService, Ploeg } from '../services/project.service'

@Component({
  selector: 'app-ploeg',
  templateUrl: './ploeg.component.html',
  styleUrls: ['./ploeg.component.css']
})
export class PloegComponent implements OnInit {
  PloegenInfo: Ploeg;
  PloegInfo: Ploeg;
  //get on id
  Idploegget: string;
  validationgetid: boolean = false;
  //delete on id
  Idploegdelete: string;
  validationdelete: boolean = false;
  //Create
  PloegnaamNewPloeg: string;
  GemeenteNewPloeg: string;
  WebsiteNewPloeg: string;
  StamnummerNewPloeg: number;
  validationcreate: boolean = false;

  constructor(private ploeg: ProjectService) { }

  GetAllPloegen() {
    return this.ploeg.GetAllPloegen().subscribe(ploegeninfo => {
      this.PloegenInfo = ploegeninfo;
    })
  }

  SearchPloegOnID(IdPloeg: string) {
    if(IdPloeg == null){
      this.validationgetid = true;
    }
    else{
      this.validationgetid = false;  
    this.ploeg.GetPloegById(IdPloeg).subscribe((info) => {
      this.PloegInfo = {
        id: info.id,
        ploegNaam: info.ploegNaam,
        gemeente: info.gemeente,
        website: info.website,
        stamnummer: info.stamnummer,
        gewonnen: info.gewonnen,
        verloren: info.verloren,
        gelijkspel: info.gelijkspel,
        punten: info.punten
      };
    })
  }
  }

  DeletePloegOnID(IdPloeg: string) {
    if(IdPloeg == null){
      this.validationdelete = true;
    }
    else{
      this.validationdelete = false;
    this.ploeg.DeletePloegById(IdPloeg).subscribe((info) => {
      this.PloegInfo = {
        id: info.id,
        ploegNaam: info.ploegNaam,
        gemeente: info.gemeente,
        website: info.website,
        stamnummer: info.stamnummer,
        gewonnen: info.gewonnen,
        verloren: info.verloren,
        gelijkspel: info.gelijkspel,
        punten: info.punten
      };
    })
  }
  }

  CreatePloeg() {
    if(this.PloegnaamNewPloeg == null || this.GemeenteNewPloeg == null || this.WebsiteNewPloeg == null || this.StamnummerNewPloeg == null){
      this.validationcreate = true;
    }
    else{
    this.validationcreate = false;
    var input = {
      ploegNaam: this.PloegnaamNewPloeg,
      gemeente: this.GemeenteNewPloeg,
      website: this.WebsiteNewPloeg,
      stamnummer: this.StamnummerNewPloeg
    };

    this.ploeg.CreatePloeg(input).subscribe();
          
  }
  }

  async ngOnInit() {
    this.GetAllPloegen();
  }

}
