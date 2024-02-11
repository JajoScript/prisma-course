import { PrismaClient, User } from '@prisma/client'

interface Payload {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export default async function updateUsersByFirstName(firstName: string, payload: Payload) {
  return new Promise<number>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient()

      const { count } = await prisma.user.updateMany({
        where: {
          firstName
        },

        data: {
          ...payload
        }
      })

      console.info(`[🦐] Número de usuarios actualizados...`)
      console.info(count);
      console.info(`---------`)

      return resolve(count);
    } catch (err) {
      return reject(err);
    }
  })
}