import { PrismaClient, User } from '@prisma/client'

interface Payload {
  firstName: string,
  lastName: string,
  email: string,
}

export default async function createUserWithInitialPost(payload: Payload) {
  return new Promise<User>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient();

      const newUser: User = await prisma.user.create({
        data: {
          ...payload,

          posts: {
            create: {
              title: "Mi primer post",
              content: "Este es el contenido de mi primer post!"
            }
          }
        }
      });

      console.info(`[🦐] Usuario y post creados correctamente...`)
      console.info(newUser);
      console.info(`---------`)

      return resolve(newUser);
    } catch (err) {
      return reject(err);
    }
  })
}