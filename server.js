const express = require('express')
const { createServer } = require('node:http')
const { join } = require('node:path')
const { Server } = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server)
// On va gerer l'ajout de fichiers  statiques (css, js, images)
app.use(express.static(join(__dirname, 'public')))

// Le point d'entrée du server qui renvoie le fichier index.html

app.get('/',(req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
})

// on écoute les connexions entrantes

io.on('connection', socket => {
    socket.on('chat message', (pseudo, msg) => {
        io.emit('chat message', pseudo, msg)
    })
})

server.listen(3001, () => {
    console.log("Server running at http://localhost:3001/")
});


