import { PrismaClient } from '@prisma/client'

export default async function updateUserById(id, payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient()

      const updatedUser = await prisma.user.update({
        where: {
          id: id
        },

        data: {
          ...payload
        }
      })

      console.log("✨ Usuario actualizado:", updatedUser)

      return resolve(updatedUser);
    } catch (err) {
      console.error(err);
      return reject(err);
    }
  })
}