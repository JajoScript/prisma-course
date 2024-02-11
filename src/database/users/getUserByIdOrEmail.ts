import { PrismaClient, User } from '@prisma/client'

export default async function getUserByIdOrEmail(id: number, email: string) {
  return new Promise<User | null>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient()

      const user: User | null = await prisma.user.findFirst({
        where: {
          OR: [
            { id },
            { email }
          ]
        }
      })

      if (!user) {
        console.info(`[🦐] Usuario no encontrado...`)
        console.info(`---------`)
        return resolve(null);
      }

      console.info(`[🦐] Usuario encontrado mediante su Id o Email...`)
      console.info(user);
      console.info(`---------`)

      return resolve(user);
    } catch (err) {
      return reject(err);
    }
  })
}