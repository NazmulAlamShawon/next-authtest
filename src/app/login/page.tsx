"use client";
import Link from "next/link";
import React from "react";

import {useRouter} from "next/navigation "
import {axios} from "axios";

 export default function LoginPage (){
    const [user,setUser]= React.useState({
        email: "",
        password: "",
       
    })

    const onLogin = async () =>{

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
             <h1> Login</h1>
             
             <labal htmlFor="email">email</labal>
             <input 
             className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
               id="email"
               type="text"
               value={user.email}
               placeholder="email"
               onChange = {(e) => setUser({
                ...user, email : e.target.value
               })}
             />
             <labal htmlFor="password">password</labal>
             <input 
             className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
               id="password"
               type="password"
               value={user.password}
               placeholder="password"
               onChange = {(e) => setUser({
                ...user, password : e.target.value
               })}
             />
             <button 
               onClick = {onLogin}
             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none">Login here</button>
             <Link href="/signup">visit signup</Link> 
        </div>
    )
}