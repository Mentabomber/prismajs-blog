const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function crea(){
prisma.post
.create({
data: 
{
    title: "Viaggio a Parma",
    slug: "Viaggio-a-Parma",
    image: "",
    content: "Il mio viaggio a Parma con Peppo e Jure",
    published: false,
}

})
.then((newPost) => {
console.log("Nuovo post creato:", newPost);
})
.catch((error) => console.error(error));
}

crea();