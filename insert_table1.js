var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'navgurukul',
      database: 'girlsInformation'
    },
  
  });


  const information = [
    { name: 'Anjali P', age: 19 , study: 'BCA'},
    { name: 'Shivani J', age: 20 , study: 'BCA' },
    { name: 'Shivani', age: 19 , study: 'BSc(btch.)' },
    { name: 'Anjali S', age: 19 , study: 'BSc(micro.)' },
    { name: 'Bulbul', age: 19 , study: 'BSc(c.s)' },
    { name: 'Sonam G',  age: 19 , study: 'BSc(c.s)' },
    { name: 'Sapna',  age: 21 , study: 'BSc(c.s)'},
]

knex('information').insert(information).then(() =>console.log("data inserted"))
.catch((err) => { console.log(err); throw err })
.finally(() => {
    knex.destroy();
});
