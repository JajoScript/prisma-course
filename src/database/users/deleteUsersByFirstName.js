import { PrismaClient } from '@prisma/client'

export default async function deleteUsersByFirstName(firstName) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient()

      const deletedUsers = await prisma.user.deleteMany({
        where: {
          firstName: firstName
        }
      });

      console.log("💱 Usuarios eliminados:", deletedUsers.count)

      return resolve(deletedUsers);
    } catch (err) {
      console.error(err);
      return reject(err);
    }
  })
}