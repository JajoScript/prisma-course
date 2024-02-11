import { PrismaClient } from '@prisma/client'

export default async function deleteUsersByFirstName(firstName: string) {
  return new Promise<number>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient()

      const { count } = await prisma.user.deleteMany({
        where: {
          firstName: firstName
        }
      });

      console.info(`[🦐] Usuarios eliminados correctamente...`)
      console.info(count);
      console.info(`---------`)

      return resolve(count);
    } catch (err) {
      return reject(err);
    }
  })
}