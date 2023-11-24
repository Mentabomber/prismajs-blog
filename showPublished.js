const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function showPublished(){
prisma.post
.findMany({
    where: {
        published: true,
    }
}
)
.then((readAllPublishedPosts) => {
console.log("Tutti i posts pubblicati:", readAllPublishedPosts);
})
.catch((error) => console.error(error));
}

showPublished();