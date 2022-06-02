const express = require ("express");
const app = express();
const Products = require("./Models/products")
const toothpasteData = require("./Models/products")
const productData = require ("./Models/products.js")
// Importing dotenv in order to connect to database 
require('dotenv').config();

// Setting engine to display my JSX 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.get("/home", (req,res) => {
    res.render ('Index', {Products: toothpasteData})
})

app.get("/products/", (req,res) =>{
    res.send(Products);
});
app.get('/products/new', (req, res) => {
    res.render('New');
});
app.post('/products', (req, res) => {
    res.send('received');
});
//This is my Show route
app.get("/products/:idOfProduct", function(req,res){
    res.render("Show", {
        Products: productData[req.params.idOfProduct]
    });
});

/*connect database
mongoose.connect(process.env.DB_CONNECTION,
    () => console.log("connected to db")
);
*/

app.listen(3000,() => {
    console.log ("listening");
});