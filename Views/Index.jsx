const React = require("react");
const Products =require ("../Models/products")
const body = {
    backgroundColor: "lightblue"
}
const image = {
    width: "20%",
    height: "20%",
    display: "flex",
}
class Index extends React.Component {
    render() {
        const {Products} = this.props;
        return (
            <div>
                <body style={body}>
                
                <nav><a href="/products/new">Create a New Product</a></nav>
                <h1>Tooth Fairy's Helper</h1>
                <table>
                    <tr>
                        <td><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvFukdG1y3Qp4G3cyjATYhc3Zc2YdiGM_iQ&usqp=CAU"></img></td>
                        <td><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjujhOKhPhMNtez7Sfrj6PKeAAGzL6oe4sQ&usqp=CAU"></img></td>
                    </tr>
                </table>
                {Products.map((Products,props)=>{
                        return(
                        <div>
                            <img style={image} src={Products.image}></img>
                        </div>
                        )
                })}
                
                         


</body>
            </div>
        )
    }
}
module.exports = Index;