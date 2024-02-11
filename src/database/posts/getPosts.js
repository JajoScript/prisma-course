import { PrismaClient } from '@prisma/client'

export default async function getPosts() {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient();

      const posts = await prisma.post.findMany()

      console.log("✨ Lista de publicaciones:");
      posts.map((post) => {
        console.log("✨ Publicación:", post);
      });

      return resolve(posts);
    } catch (err) {
      return reject(err);
    }
  })
}