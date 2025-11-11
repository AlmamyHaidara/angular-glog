import { Injectable } from '@angular/core';
import { Personne } from '../../interface';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  personnes: Personne[] = [
    {
      nom: 'Doe',
      prenom: 'John',
      dateNaissance: '1990-01-01',
      filiere: 'Informatique',
    },
    {
      nom: 'Smith',
      prenom: 'Jane',
      dateNaissance: '1992-02-02',
      filiere: 'Mathématiques',
    },
  ];
  findAll(): Personne[] {
    return this.personnes;
  }

  save(personne: Personne) {
    this.personnes.push({ ...personne });
  }

  delete(id: number) {
    this.personnes.splice(id, 1);
  }
}
