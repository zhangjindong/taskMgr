import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        'wnag@li.dev',
        Validators.compose([
          Validators.required,
          Validators.email,
          this.validate
        ])
      ],
      password: ['', Validators.required]
    });
  }
  onSubmit({ value, valid }, ev: Event) {
    ev.preventDefault();
  }
  validate(c: FormControl): ValidationErrors {
    if (!c.value) {
      return null;
    }
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return { emailNotValid: 'The email must start with wang.' };
  }
}
