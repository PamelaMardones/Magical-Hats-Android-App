import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  query!: string;
  videos!: any[];

  constructor(private youtubeService: YoutubeService) { }

  buscarVideos(): void {
    this.youtubeService.buscarVideos(this.query, 10)
      .then(videos => {
        this.videos = videos;
      })
      .catch(error => {
        console.error('Error al buscar videos:', error);
      });
  }
}