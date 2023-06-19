import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from '../interfaces/breed.interface';
import { Cat } from '../interfaces/cat.interface';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private apiUrl = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) {}

  loadCats(count: number): Observable<Cat[]> {
    const url = `${this.apiUrl}/images/search?limit=${count}`;
    return this.http.get<Cat[]>(url);
  }

  searchCats(breedIds: string[], limit: number): Observable<Cat[]> {
    const ids = breedIds.join(',');
    const url = `${this.apiUrl}/images/search?breed_ids=${ids}&limit=${limit}`;
    return this.http.get<Cat[]>(url);
  }

  loadBreeds(): Observable<Breed[]> {
    const url = `${this.apiUrl}/breeds`;
    return this.http.get<Breed[]>(url);
  }
}
