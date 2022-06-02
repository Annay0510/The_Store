const React = require("react");
//const Products = require ("Products")

   class New extends React.Component {
     render() {
       return (
           <div>
               <h1>New Product page</h1>
               {/* NOTE: action will be the route, method will be the HTTP verb */}
               <form action="/products" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 Price: <input type = "number" name="price" /><br/>
                 Description: <input type="textbox" name="description" /><br/>
                 <input type="submit" name="" value="Create Product"/>
               </form>
           </div>);
       }
     }

   module.exports = New;