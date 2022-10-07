import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder) {}
  UserForm: FormGroup;
  formErrors = {
    username: '',
    email: '',
    address: '',
    phoneNo: '',
    website: '',
  };  
  loginErrorMessages ={
    username:{
      required: 'Username is required'
    },
    email:{
      required:'email is required',
    },
    address:{
      required:'address is required',
    },
    phoneNo:{
      required:'Phone is required',
    },
    website: {
      required: 'website is required',
    }
  }

  ngOnInit(): void {
    this.loadForm();
  }

  onValueChanges() {
    if (!this.UserForm) return;
    const form = this.UserForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && (control.dirty||control.touched) && !control.valid) {
          const messages = this.loginErrorMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    } 
  }
  loadForm(){
    this.UserForm = this.fb.group({
      username:['',[Validators.required,]],
      email:['',[Validators.required]],
      address:['',[Validators.required]],
      phoneNo:['',[Validators.required]],
      website:['',[Validators.required]],
    })
    this.onValueChanges()

  }

  addUser(): void{
    if (this.UserForm.invalid) {
      this.UserForm.markAllAsTouched();
      return;
    }
    console.log(this.UserForm.value, 'asdas')
    this.UserForm.reset();
  }

   
}
