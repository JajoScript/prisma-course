import { PrismaClient } from '@prisma/client'

export default async function getUsers() {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient()

      const users = await prisma.user.findMany();

      console.log("✨ Lista de usuarios:");
      users.map((user) => {
        console.log("✨ Usuario:", user);
      });

      return resolve(users);
    } catch (err) {
      console.error(err);
      return reject(err);
    }
  })
}