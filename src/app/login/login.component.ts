import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formulaire } from '../models/formulaire';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formTitle = 'CONNEXION';
  btn = {
    label: 'Se connecter',
    isSubmit: false,
  };
  formFields: Formulaire[] = [
    {
      id: 1,
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Entrez votre email',
    },
    {
      id: 2,
      name: 'password',
      label: 'Mot de passe',
      type: 'password',
      placeholder: 'Entrez votre mot de passe',
    },
  ];
  datas: any;

  login(value: any) {
    this.datas = value;
    console.log(value);
  }
}
