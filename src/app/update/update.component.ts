import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  @Input() userId: string;
  updateForm: FormGroup;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      home: new FormControl('', [Validators.required]),
    });
  }

  getErrors(field: string): ValidationErrors {
    return (
      this.updateForm.controls[field].invalid &&
      (this.updateForm.controls[field].dirty ||
        this.updateForm.controls[field].touched) &&
      this.updateForm.controls[field].errors
    );
  }

  sendUpdate(): void {
    const { birthday, gender, home } = this.updateForm.value;
    this.userService
      .updateUserProfile(this.userId, birthday, gender, home)
      .subscribe();
  }
}
