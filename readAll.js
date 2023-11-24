const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function readAll(){
prisma.post
.findMany()
.then((readAllPosts) => {
console.log("Tutti i posts:", readAllPosts);
})
.catch((error) => console.error(error));
}

readAll();