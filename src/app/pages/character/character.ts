import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '../../interfaces/icharacter';
import { CharactersService } from '../../service/characters.service';

@Component({
  selector: 'app-character',
  imports: [CommonModule],
  templateUrl: './character.html',
  styleUrl: './character.css'
})
export class Character {

  id: string = '';

  character: ICharacter = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: ''
    },
    location: {
      name: '',
      url: ''
    },
    image: '',
    episode: [],
    url: '',
    created: new Date()
  };
  
  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = idParam;
        this.charactersService.getCharacter(this.id).subscribe((data: any) => {
          this.character = data;
          console.log(this.character);
        });
      }
    });
  }

}
