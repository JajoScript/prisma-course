import { PrismaClient } from '@prisma/client';

export default async function getPostsByUser(authorId) {
  return new Promise(async (resolve, reject) => {
    try {
      const prisma = new PrismaClient();

      const posts = await prisma.post.findMany({
        where: {
          authorId
        }
      });

      console.log("✨ Lista de publicaciones del autor:", authorId);
      posts.map((post) => {
        console.log("✨ Publicación:", post);
      });

      return resolve(posts);
    } catch (err) {
      return reject(err);
    }
  })
}