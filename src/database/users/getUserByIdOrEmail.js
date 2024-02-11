import { PrismaClient } from '@prisma/client'

export default async function getUserByIdOrEmail(id, email) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient()

      const user = await prisma.user.findFirst({
        where: {
          OR: [
            { id },
            { email }
          ]
        }
      })

      if (!user) {
        console.log("❌ Usuario no encontrado");
        return resolve(null);
      }

      console.log("✨ Usuario:", user);
      return resolve(user);
    } catch (err) {
      console.error(err);
      return reject(err);
    }
  })
}