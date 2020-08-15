import React, { Component } from 'react';
import './LoginForm.css';
export const LoginForm = () => {
    return(
      <div className="LoginForm">

          <h1>Sign in</h1>

          <form method="post">
            <div class="form-group username">
              <div class="label">Username</div>
              <input type="text" class="form-control" name="username" placeholder="Luong Quy Tan" />
            </div>

            <div class="form-group password">
            <div class="label">Password</div>
              <input type="password" class="form-control" name="password" placeholder="*****************" />
            </div>

            <div class="form-group button">
              <button type="submit">Sign-in to Coders-X</button>
            </div>
              
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="formCheck" />
              <label for="formCheck">Keep me signed in</label>
            </div>
          </form>
          
          <div class="forgot">
            <a class="username" href="www.coders-x.com">Forgot username?</a>
            <a class="password" href="www.coders-x.com">Forgot password?</a>
          </div>

      </div>  

    );
}
