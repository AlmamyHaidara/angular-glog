import { Component, Inject, OnInit } from '@angular/core';
import { Personne } from '../../interface';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { PersonneService } from '../services/personne';

@Component({
  selector: 'app-personne',
  imports: [CommonModule, FormsModule],
  templateUrl: './personne.html',
  styleUrl: './personne.scss',
})
export class PersonneComponent implements OnInit {
  personnes: Personne[] = [];
  personneForm: Personne = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    filiere: '',
  };

  constructor(private personneService: PersonneService) {
    this.personnes = this.personneService.personnes;
  }
  ngOnInit(): void {
    this.personnes = this.personneService.findAll();
  }

  ajouterPersonne() {
    if (
      this.personneForm.nom.trim() !== '' &&
      this.personneForm.prenom.trim() !== '' &&
      this.personneForm.dateNaissance.trim() !== '' &&
      this.personneForm.filiere.trim() !== ''
    ) {
      this.personneService.save(this.personneForm);
      this.personneForm = {
        nom: '',
        prenom: '',
        dateNaissance: '',
        filiere: '',
      };
    }
  }

  supprimerPersonne(index: number) {
    this.personneService.delete(index);
  }
}
