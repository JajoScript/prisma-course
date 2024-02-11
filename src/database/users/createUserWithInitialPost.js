import { PrismaClient } from '@prisma/client'

export default async function createUserWithInitialPost(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient();

      const newUser = await prisma.user.create({
        data: {
          ...payload,

          posts: {
            create: {
              title: "Mi primer post",
              content: "Este es el contenido de mi primer post!"
            }
          }
        }
      });

      console.log("✨ Nuevo usuario:", newUser);

      return resolve(newUser);
    } catch (err) {
      return reject(err);
    }
  })
}