import { Routes } from '@angular/router';
import { Character } from './pages/character/character';
import { Characters } from './pages/characters/characters';

export const routes: Routes = [
    {path: '', component: Characters},
    {path: 'characters/:id', component: Character},
];
