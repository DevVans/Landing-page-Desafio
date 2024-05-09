import { Component, ElementRef, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefone: [''],
    assunto: [''],
    mensagem: [''],
  });
  emailInvalido: boolean = false;
  nomeVazio: boolean = false;
  mensagemEnviada: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.invalid) {
      this.emailInvalido =
        !!this.form.get('email')?.invalid && !!this.form.get('email')?.touched;
      this.nomeVazio =
        !!this.form.get('nome')?.invalid && !!this.form.get('nome')?.touched;
      return;
    }

    console.log('Dados do formulário:', this.form.value);

    const assunto = this.form.get('assunto')?.value;

    this.mensagemEnviada = true;

    setTimeout(() => {
      this.form.reset();
      this.mensagemEnviada = false;
    }, 3000);
  }
}
