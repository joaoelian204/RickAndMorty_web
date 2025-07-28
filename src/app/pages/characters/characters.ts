import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICharacters } from '../../interfaces/icharacters';
import { CharactersService } from '../../service/characters.service';

@Component({
  selector: 'app-characters',
  imports: [RouterModule],
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class Characters {

  characters: ICharacters = {
    info: {
      count: 0,
      pages: 0,
      next: '',
      prev: null
    },
    results: []
  };

  loading = true;
  error = '';

  constructor(
    private charactersService: CharactersService
  ){}

  ngOnInit(): void {
    console.log('Iniciando carga de personajes...');
    this.charactersService.getCharacters().subscribe({
      next: (data: ICharacters) => {
        this.characters = data;
        this.loading = false;
        console.log('Datos cargados:', this.characters);
      },
      error: (error) => {
        this.loading = false;
        this.error = 'Error al cargar los personajes: ' + error.message;
        console.error('Error al cargar personajes:', error);
      }
    });
  }

}
