"use client";

import {useState} from "react";
import {handleLogin} from "@/app/action";
import {useForm} from "react-hook-form";
import {LoginFormData} from "@/app/types";
import type {User} from "@prisma/client";

export function LoginForm() {
  const [error, setError] = useState<null | string>(null);
  const [handling, setHandling] = useState<boolean>(false);
  const [user, setUser] = useState<null | User>(null);
  const form = useForm<LoginFormData>();

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    setHandling(true);
    try {
      const user = await handleLogin(data);
      console.log(user);
      setUser(user);
    } catch (e: any) {
      setError(e.message);
    }
    setHandling(false);
    console.log(data);
  });

  return user ? (
      <p>Hello, {user?.email}</p>
    ) : (
      <form onSubmit={onSubmit}>
        <input type="email" {...form.register("email", {required: true})}/>
        <input type="password" {...form.register("password", {required: true})}/>
        <button>Войти</button>
        {error && (<p className="alert alert-danger">{error}</p>)}
      </form>
    );
}