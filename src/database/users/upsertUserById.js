import { PrismaClient } from '@prisma/client'

export default async function upsertUserById(id, payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient();

      const upsertedUser = await prisma.user.upsert({
        where: {
          id
        },

        // *-- En caso de que no exista.
        create: {
          ...payload
        },

        // *-- En caso de que exista.
        update: {
          ...payload
        }
      })

      console.log("✨ Usuario actualizado o creado correctamente:", upsertedUser)

      return resolve(upsertedUser);
    } catch (err) {
      return reject();
    }
  })
}