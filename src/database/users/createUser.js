import { PrismaClient } from '@prisma/client'

export default async function createUser(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient()

      const { firstName, lastName, email } = payload;

      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
        }
      });

      console.log("✨ Usuario Creado:", user)

      return resolve(user);
    } catch (err) {
      console.error(err);
      return reject(err);
    }
  })
}