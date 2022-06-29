const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
const port = process.env.PORT|| 5000;
const router = require ('./src/routes/index');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.set('view engine', '.hbs');
app.use('/', router);

app.listen(port,()=>{
    console.log(`The server is listening on port ${port}`)
})