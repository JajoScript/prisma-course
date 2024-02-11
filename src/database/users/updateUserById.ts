import { PrismaClient, User } from '@prisma/client'

interface Payload {
  firstName?: string,
  lastName?: string,
  email?: string,
}

export default async function updateUserById(id: number, payload: Payload) {
  return new Promise<User>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient()

      const updatedUser: User = await prisma.user.update({
        where: {
          id: id
        },

        data: {
          ...payload
        }
      })

      console.info(`[🦐] Usuario actualizado...`)
      console.info(updatedUser);
      console.info(`---------`)

      return resolve(updatedUser);
    } catch (err) {
      return reject(err);
    }
  })
}