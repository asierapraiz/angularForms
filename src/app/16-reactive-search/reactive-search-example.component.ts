import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, filter, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// create your own API key here https://developers.giphy.com/
const API_KEY = '';

export interface Result {
  url: string;
  images: {
    downsized: {
      url: string;
    }
  };
}

@Component({
  selector: 'app-reactive-search-example',
  templateUrl: './reactive-search-example.component.html',
  styleUrls: ['./reactive-search-example.component.scss']
})
export class ReactiveSearchExampleComponent {
  searchForm: FormGroup;
  results: Observable<Result[]>;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });

    this.results = this.searchForm.controls.search.valueChanges.pipe(
      filter(value => value.length > 2),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query => this.http.get<{data: Result[]}>(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=12`)),
      map(res => res.data)
    );
  }
}
