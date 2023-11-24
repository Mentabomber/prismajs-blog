const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function update(){
prisma.post
.update({
    where: {
      slug: 'Viaggio-a-Napoli',
    },
    data: {
      content: 'Viaggio a Napoli con la gang',
    },
})
.then((updatedPost) => {
console.log("Il post è stato modificato:", updatedPost);
})
.catch((error) => console.error(error));
}

update();




