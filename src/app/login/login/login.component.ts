import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ValidationErrors
} from '@angular/forms';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../domain/quote.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  quote: Quote = {
    cn: '网球内心游戏：高峰表现心理方面的经典指南',
    en:
      'The Inner Game of Tennis: The Classic Guide to the Mental Side of Peak  Performance',
    pic: '/assets/KmTCFx8WwuseQxEn9.jpg'
  };
  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$.getQuote().subscribe(q => (this.quote = q));
  }

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
