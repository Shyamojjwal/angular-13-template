import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkFormValidation, makeAllFormControlAsDirty } from '@app-shared/helper/shared-functions';
import { userSignInErrorMessage } from '@app-shared/helper/validation-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup | any;
  public isFormSubmitted: boolean = false;
  public validationMessages: any = null;

  public isFormReadOnly: boolean = true;

  constructor(
    private _FB: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initUserForm();

    setTimeout(() => {
      this.isFormReadOnly = false;
    }, 500);
  }

  initUserForm = () => {
    this.userForm = this._FB.group({
      authUser: ['', [Validators.required]],
      authPass: ['', [Validators.required]],
      rememberMe: [false, [Validators.required]]
    })
  }

  validateUser = () => {
    this.validationMessages = checkFormValidation(this.userForm, userSignInErrorMessage);
  }

  userSignIn = () => {
    if(!this.userForm.valid) {
      makeAllFormControlAsDirty(this.userForm);
      this.validateUser();
      return;
    }

    const _payload:any = {...this.userForm.value};

  }

}
