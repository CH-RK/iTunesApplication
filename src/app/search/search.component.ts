import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  template: `
  <div class="Mtop">
  <div class="col-md-12">
  <form class="form-inline">
  <div class="form-group">
    <input type="search"
           class="form-control"
           placeholder="Enter search string"
           #search>
  </div>
  <button type="button"
          class="btn btn-primary"
          (click)="onSearch(search.value)">
    Search
  </button>
</form>

</div>
<hr />

<div class="text-center">
  <p class="lead"
     *ngIf="loading">Loading...</p>
</div>

<div class="list-group">
  <a href="#"
     class="list-group-item list-group-item-action"
     *ngFor="let track of itunes.results">
    <img src="{{track.thumbnail}}">
    {{ track.name }} <span class="text-muted">by</span> {{ track.artist }}
  </a>
</div>
</div>
  `,
  styles: [`.Mtop { margin-top: 50px;}`]
})
export class SearchComponent implements OnInit {

  private loading :boolean = false;
  constructor(
    //private itunes: SearchService,
    private route: ActivatedRoute,
    private router : Router
    ) { 
      this.route.params.subscribe(params => {
        console.log(params);
        if (params["term"]) {
          this.doSearch(params["term"]);
        }
      });
    }
  
    doSearch(term: string) {
      this.loading = true;
      //this.itunes.search(term).then(_ => (this.loading = false));
    }
  
    onSearch(term: string) {
      this.router.navigate(["search", { term: term }]);
    }
  

  ngOnInit() {
  }

}
