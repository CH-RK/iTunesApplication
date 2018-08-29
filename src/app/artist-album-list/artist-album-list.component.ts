import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-album-list',
  template: `
  <ul class="list-group">
	<li class="list-group-item"
	    *ngFor="let album of albums">
		<img src="{{album.artworkUrl60}}">
		<a target="_blank"
		   href="{{album.collectionViewUrl}}">{{ album.collectionName }}
		</a>
	</li>
</ul>
  `,
  styles: []
})
export class ArtistAlbumListComponent implements OnInit {
  private albums: any[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${
            params["artistId"]
          }&entity=album`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
         // this.albums = res.results.slice(1);
        });
    });
  }
  ngOnInit() {
  }

}
