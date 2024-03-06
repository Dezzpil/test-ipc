import { PrismaClient } from '@prisma/client';
import {hash} from "@/password";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      password: await hash('foobar'),
      email: 'foo@bar.com',
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
