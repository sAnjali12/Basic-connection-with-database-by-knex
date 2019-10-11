// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host:'127.0.0.1',
//   user:'root',
//   password:'navgurukul',
//   database:'girls'
// })
// module.exports = connection;
// connection.connect(function(err){
//   if (err){
//     console.error('error connection: '+ err.stack)
//   }
//   console.log('connected as id ' + connection.threadId)
// })





var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'navgurukul',
    database: 'movieList'
  },

})

knex.schema.createTable('cars', (table) => {
  table.increments('id')
  table.string('name')
  table.integer('price')
})
.then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
  });




  