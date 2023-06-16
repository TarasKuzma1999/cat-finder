import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private apiUrl = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) {}

  loadCats(): Observable<any[]> {
    const url = `${this.apiUrl}/images/search?limit=10`;
    return this.http.get<any[]>(url);
  }

  searchCats(breedId: string, limit: number): Observable<any[]> {
    const url = `${this.apiUrl}/images/search?breed_ids=${breedId}&limit=${limit}`;
    return this.http.get<any[]>(url);
  }

  getAllBreeds(): Observable<any[]> {
    const url = `${this.apiUrl}/breeds`;
    return this.http.get<any[]>(url);
  }
}
