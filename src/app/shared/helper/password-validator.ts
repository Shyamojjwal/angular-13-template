import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidators {
  constructor() {}

  static MatchValidator = (controlName: string, matchingControlName: string) => {
		return (control: AbstractControl): ValidationErrors | null => {
			const input = control.get(controlName);
			const matchingInput = control.get(matchingControlName);

			// return if controls are null
			if (input === null || matchingInput === null) {
				return null;
			}

			// return if another validator has already found an error on the matchingControl
			if (matchingInput?.errors && !matchingInput.errors['mustMatch']) {
				return null;
			}

			// checking controls values
			if (input.value !== '' && input.value !== matchingInput.value) {
				matchingInput.setErrors({ mustMatch: true });
				return { mustMatch: true };
			} else {
				matchingInput.setErrors(null);
				return null;
			}
		};
	};
}