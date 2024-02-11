import { PrismaClient, User } from '@prisma/client'

export default async function getUserById(id: number) {
  return new Promise<User | null>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient()

      const user: User | null = await prisma.user.findFirst({
        where: {
          id
        }
      })

      if (!user) {
        console.info(`[🦐] Usuario no encontrado...`)
        console.info(`---------`)
        return resolve(null);
      }

      console.info(`[🦐] Usuario encontrado...`)
      console.info(user);
      console.info(`---------`)

      return resolve(user);
    } catch (err) {
      return reject(err);
    }
  })
}