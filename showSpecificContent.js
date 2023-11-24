const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const textToFind = "Peppo";

function showSpecificContentPosts(){
prisma.post
.findMany({
    where: {
            content: { contains: textToFind },
    }
}
)
.then((readAllSpecificContentPosts) => {
console.log("Tutti i posts pubblicati con all'interno il testo '" + textToFind + "':", readAllSpecificContentPosts);
})
.catch((error) => console.error(error));
}

showSpecificContentPosts();