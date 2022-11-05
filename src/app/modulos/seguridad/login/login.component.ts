import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidacion = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  identificarUsuario(){}

}
