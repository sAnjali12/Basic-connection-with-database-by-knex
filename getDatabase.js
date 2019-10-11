var express = require('express');
var app = express();
var mysql = require('mysql');
const bodyParser=require("body-parser");
app.use(bodyParser.json())
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'navgurukul',
    database : 'movieList'
});

conn.connect();
app.get('/test', function(request, response){
    conn.query('select * from cars', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});

app.post('/postData',function(req, res) {
    var id1 = req.body.id
    name1 = req.body.name
    price1 = req.body.price
    values = [id1,name1,price1];
    var sql = "INSERT INTO cars (id,name,price) VALUES (?,?,?)";
    conn.query(sql,values, function(err, result)  {
        if(err){
            res.send(400).send("There is some error!!!!!!!");
        }else{
            res.send('Data is posted');
        }
    });
});

app.put('/update/:id',function(req,res){
    var userId = req.params.id;
    var name = req.body.name
    var price = req.param.price
    values = [name,price]
    var sql = "UPDATE cars SET name = ? WHERE id =" +userId;
    conn.query(sql, values, function(err, result)  {
        if(err){
            res.send(400).send("There is some error!!!!!!!");
        }else{
            res.send('Data is updated');
        }
    });

})


app.delete('/Delete/:userId', function (req, res) {
    id = req.params.userId
    conn.query('DELETE FROM cars WHERE id=?',id,function(error){
        if(error) throw error;
        res.end('Record has been deleted!')

    });
    
});



    

app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});

