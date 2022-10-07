import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { GalleryService } from './user.service';

@Injectable()
export class GalleryEffect {
  constructor(
    private actions$: Actions,
    private galleryService: GalleryService
  ) {}

  detail: '';

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Gallery API] Invoke API'),
      mergeMap(() =>
        this.galleryService
          .loadUser()
          .pipe(map((data) => ({ type: '[Gallery API] Gallery API Success', allGallery: data })))
      )
    )
  );

  
  
}
