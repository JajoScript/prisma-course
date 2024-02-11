import { PrismaClient } from '@prisma/client'

export default async function createPost(payload, authorId) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient();

      // * -- Alternativa 1.
      const newPost = await prisma.post.create({
        data: {
          ...payload,
          authorId: authorId
        }
      })

      // * -- Alternativa 2.
      // const newPost = await prisma.post.create({
      //   data: {
      //     ...payload,

      //     author: {
      //       connect: {
      //         id: authorId
      //       }
      //     }
      //   }
      // })

      console.log("✨ Nuevo post creado:", newPost)

      return resolve(newPost)
    } catch (err) {
      return reject(err);
    }
  })
}