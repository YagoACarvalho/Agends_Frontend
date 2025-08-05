import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) {}
  ngOnInit(): void {
 
  
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  loading = false;
  errorMessage = '';

  

  onSubmit(){
      if(this.loginForm.invalid) return;

      this.loading = true;
      this.errorMessage = '';
      
      const { username, senha } = this.loginForm.value;

      this.authService.login(username!, senha!).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/dashboard']); 
        },
      error: err => {
        this.loading = false;
        this.errorMessage = 'Usuário ou senha inválidos.';
      }
    });
  }
}
