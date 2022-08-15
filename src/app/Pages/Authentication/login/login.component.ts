import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Platorm_User_Login: FormGroup;
  is_loading: boolean = false;

  inputType = 'password';
  visible = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private AuthService: AuthService
  ) {
    this.Platorm_User_Login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (localStorage.getItem('token')) {
      this.router.navigate(['']);
    }
    this.is_loading = false;
  }

  ngOnInit() {}

  send() {
    this.is_loading = true;
    console.log(' form :: ', this.Platorm_User_Login.value);
    this.AuthService.loginUser(this.Platorm_User_Login.value).subscribe(
      (res) => {
        console.log('response :: ', res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('expiry', res.data.expiry);
        this.snackbar.open('Login Success !!', 'OK THANKS', {
          duration: 1500,
        });
        this.router.navigate(['dashboard']);
      },
      (error) => {
        this.snackbar.open(error.error.error.message, 'SORRY', {
          duration: 1500,
        });
      }
    );
  }
  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
