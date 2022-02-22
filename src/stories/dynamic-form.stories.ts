// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DynamicFormComponent } from '../app/dynamic-form/dynamic-form.component';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export default {
  title: 'Dynamic/FORM',
  component: DynamicFormComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<DynamicFormComponent> = (args: DynamicFormComponent) => ({
  component: DynamicFormComponent,
  props: args,
});

export const Connexion = Template.bind({});
Connexion.args = {
  formTitle: 'CONNEXION',
  btn: {
    label: 'Se connecter',
    isSubmit: false,
  },
  formFields: [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Entrez votre email',
    },
    {
      name: 'password',
      label: 'Mot de passe',
      type: 'password',
      placeholder: 'Entrez votre mot de passe',
    },
  ],
  datas: null,
};

export const Inscription = Template.bind({});
Inscription.args = {
  formTitle: 'INSCRIPTION',
  btn: {
    label: "S'inscrire",
    isSubmit: false,
  },
  formFields: [
    {
      name: 'name',
      label: 'Nom',
      type: 'text',
      placeholder: 'Entrez votre nom',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Entrez votre email',
    },
    {
      name: 'phoneNumber',
      label: 'Numéro de téléphone',
      type: 'number',
      placeholder: 'Entrez votre numéro de téléphone',
    },
    {
      name: 'password',
      label: 'Mot de passe',
      type: 'password',
      placeholder: 'Entrez votre mot de passe',
    },
  ],
  datas: null,
};
