import { TestBed } from '@angular/core/testing';
import { YoutubeService } from './youtube.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('YoutubeService', () => {
  let service: YoutubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(YoutubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
