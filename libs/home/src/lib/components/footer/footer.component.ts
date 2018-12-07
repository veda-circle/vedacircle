import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from './contact.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ngx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  environment = environment.envName;
  entityForm: FormGroup;

  constructor(private fb: FormBuilder, private snack: MatSnackBar, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.entityForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(values) {
    console.log('All form fields are valid -> Ready to submit!');
    const email = new ContactForm();
    email.message = this.entityForm.get('message').value;
    email.name = this.entityForm.get('name').value;
    email.email = this.entityForm.get('email').value;
    /* this.httpClient
      .post(`${this.apiBaseUrl}/email`, email, {})
      .pipe()
      .subscribe(_ => {
        this.snack.open('Successfully Submitted!', 'OK', { duration: 5000 });
      });*/
  }

}
