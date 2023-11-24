const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function read(){
prisma.post
.findUnique({
    where: {
        slug: 'Viaggio-a-Napoli',
      },

})
.then((readPost) => {
console.log("Il post che cercavi:", readPost);
})
.catch((error) => console.error(error));
}

read();