import { PrismaClient } from '@prisma/client'

export default async function updateUsersByFirstName(firstName, payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient()

      const updatedUsers = await prisma.user.updateMany({
        where: {
          firstName
        },

        data: {
          ...payload
        }
      })

      console.log("✨ Numero de usuarios actualizados:", updatedUsers.count)

      return resolve(updatedUsers);
    } catch (err) {
      console.error(err);
      return reject(err);
    }
  })
}