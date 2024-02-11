import { PrismaClient, User } from '@prisma/client'

interface Payload {
  email: string,
  firstName: string,
  lastName: string,
}

export default async function upsertUserById(id: number, payload: Payload) {
  return new Promise<User>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient();

      const upsertedUser: User = await prisma.user.upsert({
        where: {
          id
        },

        // *-- En caso de que no exista.
        create: {
          email: payload.email,
          firstName: payload.firstName,
          lastName: payload.lastName
        },

        // *-- En caso de que exista.
        update: {
          ...payload
        }
      })

      console.info(`[🦐] Usuario actualizado o creado correctamente...`)
      console.info(upsertedUser);
      console.info(`---------`)

      return resolve(upsertedUser);
    } catch (err) {
      return reject();
    }
  })
}