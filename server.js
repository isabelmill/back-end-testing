const express = require('express')
const app = express()
const port = 3030
app.use(express.json())

const userRoutes = require('./api/user-routes')

app.use('/api/user', userRoutes)

app.listen(port, () => {
    console.log('App listening to port', port);
})

// async function readCSV() {
//     var data = await require("fs").readFileSync("players.csv", "utf8")
//     data = data.split("\r\n").map((el) => el.split(","))
//     let newData = []
//     data = data.map((el) => newData.push({ id: el[0], playerName: el[1] }))
//     newData.splice(0, 1)
//     newData.splice(newData.length - 1, 1)
//     return newData
// }

module.exports = app
