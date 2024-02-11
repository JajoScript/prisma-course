import { PrismaClient, Post } from '@prisma/client'

interface Payload {
  title: string;
  content: string;
}

export default async function createPost(payload: Payload, authorId: number) {
  return new Promise<Post>(async (resolve, reject) => {
    try {
      const prisma: PrismaClient = new PrismaClient();

      const newPost: Post = await prisma.post.create({
        data: {
          ...payload,
          authorId
        }
      })

      console.info(`[🦐] Nueva publicación creada...`)
      console.info(newPost);
      console.info(`---------`)

      return resolve(newPost)
    } catch (err) {
      return reject(err);
    }
  })
}