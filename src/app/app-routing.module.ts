import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';

const routes: Routes = [
  { path : '' , redirectTo:'home' , pathMatch:'full'},
  { path : 'find', redirectTo:'search'},
  { path : 'home' , component:HomeComponent },
  { path : 'search' , component :SearchComponent },
  { path : 'search/:term' , component :SearchComponent },
  {
    path: "artist/:artistId",
    component: ArtistComponent,
    children: [
      { path: "", redirectTo: "tracks", pathMatch: "full" },
      { path: "tracks", component: ArtistTrackListComponent },
      { path: "albums", component: ArtistAlbumListComponent }
    ]
  },
  { path : '**' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
