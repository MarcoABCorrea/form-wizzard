import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  @Output() userSaved = new EventEmitter();

  registrationForm: FormGroup;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeat: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  getErrors(field: string): ValidationErrors {
    return (
      this.registrationForm.controls[field].invalid &&
      (this.registrationForm.controls[field].dirty ||
        this.registrationForm.controls[field].touched) &&
      this.registrationForm.controls[field].errors
    );
  }

  sendRegister(): void {
    const { email, username, password } = this.registrationForm.value;
    this.userService
      .registerUser(email, username, password)
      .subscribe((userId) => this.userSaved.emit(userId))
      .unsubscribe();
  }
}
