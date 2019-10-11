var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'navgurukul',
      database: 'girlsInformation'
    },
  
  });
   
knex.schema.createTable('information',(table) => {
    table.increments('id')
    table.string('name')
    table.integer('age')
    table.string('study')
  })
  .then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });



  