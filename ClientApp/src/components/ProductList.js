import React, {Component} from 'react'
import Product from './Product'

export default class ProductList extends Component{
    state = {
        products: [
          {id: 1, name: 'Some product', description: 'book', img:'600'},
          {id: 2, name: 'Another product', description: 'another desc', img:'150'},
          {id: 3, name: 'Learn React', description: 'First steps with React', img:''},
          {id: 4, name: 'React by example', description: 'book', img:''},
          {id: 5, name: 'Asp.Net Core & React', description: 'book', img:''},
          {id: 6, name: 'React & Redux', description: 'book', img:''},
        ]
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