import { Component, OnInit } from '@angular/core';
import { ProjectService, Voetbal } from '../services/project.service'

@Component({
  selector: 'app-startpagina',
  templateUrl: './startpagina.component.html',
  styleUrls: ['./startpagina.component.css']
})

export class StartPaginaComponent implements OnInit {
  constructor(private thirdparty: ProjectService) { }
  VideosInfo: Voetbal;
  title: string;

  GetAllVideos() {
    return this.thirdparty.GetThirdPartyAPI().subscribe(videosinfo => {
      this.VideosInfo = videosinfo;
    })
  }

  ngOnInit() {
    this.GetAllVideos();
  }

}