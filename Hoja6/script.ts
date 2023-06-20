import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  let url = 'https://jsonplaceholder.typicode.com/albums';
    fetch(url)
      .then(response => response.json())
      .then(data => data.forEach(async (element: any) => {
        console.log(element)
        const user = await prisma.user.create({
            data: {
                userid: element.userId,
                titulo: element.title
            },
          })
          console.log(user)
      }))
      .catch(error => console.log(error))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })