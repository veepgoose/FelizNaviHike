import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { FormEvent, useState } from "react";
import Link from "next/link";



function Accountcreation() {
    const [user, setUser] = useState({
        email:"",

        
        password:"",
        username:"",
        name:"",
        surname:"",
        location:"",
        imageUrl:"",
        bio:""
    });
   
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // Here, you can add your authentication logic
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <form  className="flex flex-col gap-4">
        <h2 className="font-[1rem]"> Signup </h2>
        <Input 
          placeholder="Email"
          type="email" 
          />
  
        <Input 
          placeholder="Password"
          type="password"
         />

        <Input 
          placeholder="Username"
          type="Username"
         />

        <Input 
          placeholder="Name"
          type="Name"
         />

        <Input 
          placeholder="Surname"
          type="Surname"
          
         />

        <Input 
          placeholder="Location"
          type="Location"
          
         />
  
        <Input 
          placeholder="ImageUrl"
          type="ImageUrl"
         />
        
        <Link href="/profile" className="bg-fire_engine_red p-2 shadow-lg rounded-lg text-center">Create Profile</Link>
      </form>
    );
  }
  
  export default Accountcreation;
  