import { PrismaClient, User } from '@prisma/client'

export default async function deleteUserById(id: number) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient()

      const user: User = await prisma.user.delete({
        where: {
          id
        }
      }).catch((err) => {
        throw new Error(err.meta.cause);
      })

      console.info(`[🦐] Usuario eliminado correctamente...`)
      console.info(user);
      console.info(`---------`)

      return resolve(user);
    } catch (err) {
      return reject(null);
    }
  })
}