import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../interfaces/icharacter';
import { ICharacters } from '../interfaces/icharacters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ){}

  getCharacters(): Observable<ICharacters>{
    return this.http.get<ICharacters>(this.apiUrl);
  }

  getCharacter(id: string): Observable<ICharacter>{
    return this.http.get<ICharacter>(`${this.apiUrl}/${id}`);
  }
  
}
