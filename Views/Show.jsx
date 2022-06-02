const React = require("react")
const Products = require ("Products")
class Show extends React.Component{
    render (){
        const {Products} =this.props
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