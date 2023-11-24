const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const yargs = require('yargs');



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


yargs.command({
    command: 'crea',
    describe: 'Esegui Funzione crea',
    handler: crea
});

yargs.command({
    command: 'read',
    describe: 'Esegui Funzione read',
    handler: read
});

// Parsa gli argomenti da riga di comando
yargs.parse();