import { PrismaClient, User } from '@prisma/client'
import { createUserError } from '@errors/users'

interface Payload {
  firstName: string;
  lastName: string;
  email: string;
}

export default async function createUser(payload: Payload) {
  return new Promise<User>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient()

      const { firstName, lastName, email } = payload;

      const user: User = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
        }
      }).catch((err) => {
        throw new createUserError(`[🦐] Problemas al crear al usuario`, err.code)
      })

      console.info(`[🦐] Usuario creado correctamente...`)
      console.info(user);
      console.info(`---------`)

      return resolve(user);
    } catch (err) {
      return reject(err);
    }
  })
}