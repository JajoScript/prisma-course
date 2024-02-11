import { PrismaClient } from '@prisma/client'

export default async function deleteUserById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient()

      const user = await prisma.user.delete({
        where: {
          id
        }
      }).catch((err) => {
        console.log("🩺 Error al eliminar el usuario:", err.meta.cause);
        throw new Error(err.meta.cause);
      })

      console.log("🩺 Usuario Eliminado:", user)

      return resolve(user);
    } catch (err) {
      return reject(null);
    }
  })
}