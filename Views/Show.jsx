const React = require ("react")
const Products = require ("../Models/products")
class Show extends React.Component{
    render (){
        const Products =this.props.Products
        return(
            <div>
            <h1>Tooth Paste</h1>
            The {Products.name} is {Products.price}
            <br></br>
            {Products.description}
            </div>
        );
    }
}
module.exports = Show;