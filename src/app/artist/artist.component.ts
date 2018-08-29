import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  template: `
  <div class="card">
  <div class="card-block">
    <h4>{{artist?.artistName}} <span class="tag tag-default">{{artist?.primaryGenreName}}</span></h4>
    <hr />
    <footer>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link"
             [routerLinkActive]="['active']"
             [routerLink]="['./tracks']">Tracks
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
             [routerLinkActive]="['active']"
             [routerLink]="['./albums']">Albums
          </a>
        </li>
      </ul>
    </footer>
  </div>
</div>

<div class="m-t-1">
  <router-outlet></router-outlet>
</div>
  `,
  styles: []
})
export class ArtistComponent implements OnInit {

  private artist: any;

  constructor(private http: HttpClient , private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${params["artistId"]}`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          //this.artist = res.results[0];
          console.log(this.artist);
        });
    });
  }
  ngOnInit() {
  }

}
