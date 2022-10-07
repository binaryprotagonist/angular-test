import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GalleryService } from './user.service';
import { retrievedGalleryList, invokeGalleryAPI } from '../store/gallery.action';
import {
  uniqueAlbumIds,
  albumCollectionByAlbumId,
} from '../store/gallery.selector';
import { GalleryModel } from './user.model';

@Component({
  templateUrl: './user.component.html',
  selector: 'user',
  styleUrls: ['./user.component.css']

})
export class GalleryComponent implements OnInit {
  selectedAlbumId = -1;
  detail: any;
  saveId: '';
  userarray: any;
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  allGallery$;

  constructor(
    private store: Store<{ gallery: GalleryModel[] }>,
    private galleryService: GalleryService
  ) {
    this.allGallery$ = this.store.pipe(
      select(albumCollectionByAlbumId(this.selectedAlbumId))
    );
  }

  ngOnInit(): void {

    this.galleryService.loadUser().subscribe((gallery) => {
      console.log(gallery);
      this.userarray = gallery;
      this.store.dispatch(
        retrievedGalleryList({ allGallery: gallery as GalleryModel[] })
      );
    });
  }

  passId(event){
    console.log(event.id);
    this.saveId = event.id;
    this.loadsingleUser(this.saveId);

    // event.id
  }


  searchHandler(e): void{  
    if(e.target.value){         
      const newFilter = this.userarray.filter((el)=>el.email.toLowerCase().includes(e.target.value.toLowerCase()) );
      this.userarray = newFilter;  
    }else{
      this.galleryService.loadUser().subscribe((gallery) => {
        console.log(gallery);
        this.userarray = gallery;
        this.store.dispatch(
          retrievedGalleryList({ allGallery: gallery as GalleryModel[] })
        );
      });
    }
  }
  loadsingleUser(id){
    console.log(id);
    
    this.galleryService.loadsingleuser(id).subscribe((data)=>{
            this.detail = data;
    })
  }
  albumChange(event:number) {
    this.allGallery$ = this.store.pipe(select(albumCollectionByAlbumId(event)));
  }

 

}
