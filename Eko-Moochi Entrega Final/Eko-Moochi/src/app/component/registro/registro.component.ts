import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{
  
  registerForm: FormGroup
  submitted=false;

  constructor(public formBuilder: FormBuilder ){}

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      
        nombre:([Validators.required,Validators.maxLength(15)]),
        apellido:([Validators.required,Validators.maxLength(10)]),
        usuario:([Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
        email:([Validators.required,Validators.email]),
        password:([Validators.required, Validators.minLength(6)]),
        confirmPassword:([Validators.required]),
      })
      
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // se detiene aqui si el formulario es invalido
    if (!this.registerForm.valid) {
        return;
    }else{
      console.log(this.registerForm.value)
    }

    // muestra si el formulario es valido
    
}

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
