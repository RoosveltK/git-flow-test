import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BtnOption, Formulaire } from '../models/formulaire';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <mat-card class="card">
      <mat-card-title>{{ formTitle }}</mat-card-title>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <p *ngFor="let form of formFields; trackBy: trackByFn; let i = index">
          <mat-form-field appearance="fill">
            <mat-label>{{ form.label }}</mat-label>
            <input
              matInput
              [id]="form.id"
              [placeholder]="form.placeholder"
              [formControlName]="form.name"
              [type]="form.type"
            />
          </mat-form-field>
        </p>
        <p>
          <button mat-raised-button color="primary">
            {{ btn.label }}
          </button>
        </p>
      </form>
    </mat-card>
  `,
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent {
  @Input()
  formTitle: string;
  @Input()
  btn: BtnOption;
  @Input()
  formFields: Formulaire[];
  @Output() datas = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const controls = this.formFields.reduce((cumul, elt) => {
      return {
        ...cumul,
        [elt.name]: [''],
      };
    }, {});
    this.form = this.fb.group(controls);
  }

  public trackByFn(index) {
    return index;
  }

  onSubmit() {
    this.btn.isSubmit = true;
    this.btn.label = 'Patientez';
    setTimeout(() => {
      this.btn.isSubmit = false;
      this.btn.label = 'Se connecter';
    }, 2000);
    this.datas.emit(this.form.value);
  }
}
