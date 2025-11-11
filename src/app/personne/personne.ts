import { Component } from '@angular/core';
import { Personne } from '../../interface';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-personne',
  imports: [CommonModule, FormsModule],
  templateUrl: './personne.html',
  styleUrl: './personne.scss',
})
export class PersonneComponent {
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

  personneForm: Personne = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    filiere: '',
  };

  ajouterPersonne() {
    if (
      this.personneForm.nom.trim() !== '' &&
      this.personneForm.prenom.trim() !== '' &&
      this.personneForm.dateNaissance.trim() !== '' &&
      this.personneForm.filiere.trim() !== ''
    ) {
      this.personnes.push({ ...this.personneForm });
      this.personneForm = {
        nom: '',
        prenom: '',
        dateNaissance: '',
        filiere: '',
      };
    }
  }

  supprimerPersonne(index: number) {
    this.personnes.splice(index, 1);
  }
}
