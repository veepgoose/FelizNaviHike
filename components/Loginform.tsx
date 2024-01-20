// components/LoginForm.tsx
import React, { useState, FormEvent } from 'react';

const LoginForm: React.FC = () => {
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
        
        <input className="bg-pigment_green text-seasalt placeholder-seasalt/60 p-2 shadow-lg"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
     
     
      
        
        <input className="bg-pigment_green text-seasalt placeholder-seasalt/60 p-2 shadow-lg"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
     
      <button className="bg-fire_engine_red p-2 shadow-lg rounded-lg" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
