// components/LoginForm.tsx
import React, { useState, FormEvent } from 'react';
import { Input } from './Input';
import { Button } from './Button';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here, you can add your authentication logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <Input 
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />




      <Input 
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

      
      <Button type="submit">Login</Button>
      <Button type="submit">Signup</Button>
    </form>
  );
}

export default LoginForm;
