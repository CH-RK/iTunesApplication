import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchItem{
  constructor(
    public name:string,
    public artist:string,
    public link :string,
    public thumbnail:string,
    public artistId : string
  ) {}
}
export class SearchService {
  apiRoot : string ="https://itunes.apple.com/search";
  results: SearchItem[];
  constructor(private http:HttpClient) { 
    this.results = [];
  }
search(term: string){
        return new Promise((resolve,reject)=>{
          this.results = [];
          let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
          this.http.jsonp(apiURL,"Callback").toPromise().then( res => {
            this.results = res.results.map(item =>{
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            }) ;
            resolve();
          })
          msg => {
            // Error
            reject(msg);
          }
        })
}
}
