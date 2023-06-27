import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { google, youtube_v3 } from 'googleapis';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyAaJddSLwuFSxvDGs8zpAYvCOtewX6OMRc';
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) { }

  buscarVideos(query: string, maxResults: number): Promise<any[]> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('part', 'snippet')
      .set('q', query)
      .set('maxResults', maxResults.toString());

    return this.http.get<any>(this.apiUrl, { params })
      .toPromise()
      .then(response => response.items || [])
      .catch(error => {
        console.error('Error al buscar videos:', error);
        throw error;
      });
  }
}