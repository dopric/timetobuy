import React, {Component} from 'react'
import Product from './Product'
import Axios from 'axios'

export default class ProductList extends Component{
    state = {
        products: []
    }

    async componentDidMount() {
        let result = await Axios('/api/products')
        //console.log(result)
        this.setState({
            products: result.data
        })
    }

      render(){
          return(
            <div className="row">
     
            {this.state.products.map(product=>
              <Product 
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              img={product.img}
              ></Product>
            )}
      
             </div>
          )
      }
}