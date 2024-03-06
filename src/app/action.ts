"use server";

import {PrismaClient} from "@prisma/client";
import {compare} from "bcrypt";
import {revalidatePath} from "next/cache";
import {LoginFormData} from "@/app/types";

export async function handleLogin(data: LoginFormData) {
  const prisma = new PrismaClient();
  console.log(data);
  const user = await prisma.user.findFirstOrThrow({ where: { email: data.email}});
  const match = await compare(data.password, user.password);
  if (match) {
    revalidatePath('/');
    return user;
  } else {
    throw new Error(`password mismatch`);
  }
}