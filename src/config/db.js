const {Client} = require('pg')
const client = new Client({
    user:"postgres",
    host: 'localhost',
    database: 'crud',
    password: 'root',
    port: 5432,
    })




client.connect( (err) => {
 if(err){
     console.log(err)
 }else{
     console.log("database connected")
 }

})

module.exports = client