import { PrismaClient, User } from '@prisma/client'

export default async function getUsers() {
  return new Promise<User[]>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient()

      const users: User[] = await prisma.user.findMany();

      console.info(`[🦐] Lista de usuarios...`);
      users.map((user: User) => {
        console.info("✨ Usuario:", user);
      });
      console.info(`---------`);

      return resolve(users);
    } catch (err) {
      return reject(err);
    }
  })
}