import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-track-list',
  template: `
  <ul class="list-group">
	<li class="list-group-item"
	    *ngFor="let track of tracks">
		<img src="{{track.artworkUrl30}}">
		<a target="_blank"
		   href="{{track.trackViewUrl}}">{{ track.trackName }}
		</a>
	</li>
</ul>
  `,
  styles: []
})
export class ArtistTrackListComponent implements OnInit {
  private tracks: any[];

  constructor(private http: HttpClient , private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${
            params["artistId"]
          }&entity=song`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          //this.tracks = res.results.slice(1);
        });
    });
  }

  ngOnInit() {
  }

}
