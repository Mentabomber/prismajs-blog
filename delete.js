const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function destroy(){
prisma.post
.delete({
    where: {
        slug: 'Viaggio-a-Roma',
      },

})
.then((deletePost) => {
console.log("Il post è stato cancellato:", deletePost);
})
.catch((error) => console.error(error));
}

destroy();