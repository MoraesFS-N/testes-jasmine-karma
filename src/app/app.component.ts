import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/interfaces/Photo';
import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Angular testing';
  public photos$: Observable<Photo[]>;

  constructor( private photoBoardService: PhotoBoardService ) { }

  public ngOnInit(): void {
    this.photos$ = this.photoBoardService.getPhotos();
  }

}
