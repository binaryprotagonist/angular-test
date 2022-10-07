import { createSelector } from '@ngrx/store';
import { GalleryModel } from '../gallery/user.model';

import { AppState } from './app.state';

export const gallerySelector =(state: AppState) => state.gallery;

export const uniqueAlbumIds = createSelector(
  gallerySelector,
  (gallery: GalleryModel[]) => {
    return [...new Set(gallery.map((_) => _.id))];
  }
);

export const albumCollectionByAlbumId = (id:number) => createSelector(
    gallerySelector,
    (gallery:GalleryModel[]) => {
        if(id == -1){
            return gallery;
        }
        return gallery.filter(_ => _.id == id);
    }
)
