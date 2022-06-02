const React = require ("react")
const Products = require ("../Models/products")
const body = {
    backgroundColor: "lightblue"
}
class Show extends React.Component{
    render (){
        const Products =this.props.Products
        return(
            <div>
                <body style={body}>
            <h1>Tooth Paste</h1>
            The {Products.name} is {Products.price}
            <br></br>
            {Products.description}
            </body>
            </div>
        );
    }
}
module.exports = Show;