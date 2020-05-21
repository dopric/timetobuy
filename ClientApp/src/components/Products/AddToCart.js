import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Axios from 'axios'

export default class AddToCart extends Component {
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
        this.state = { itemAddedToBasket: false}
    }

    async addToCart(e) {
        //alert("add to cart " + this.props.productId)
        e.preventDefault()
        this.setState({ itemAddedToBasket: false})
        let sessionId = localStorage.sessionId;
        let request = { productId: this.props.productId, quantity: 1 }
        if (sessionId ) {
            request.sessionId = sessionId;
        }
        console.log("post request", request)
        let result = await Axios.post('/api/cart', request)
       
        localStorage.sessionId = result.data;
        this.setState({
            itemAddedToBasket: true
        })

        setTimeout(()=> {
            this.setState({ itemAddedToBasket: false})
        }, 1500)
    }

    render() {
        return   <form className="form" onSubmit={ this.addToCart }>
                    <div className="row">
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Add to cart</button>
                        </div>
                    </div>
          
                {this.state.itemAddedToBasket && <div className="alert alert-success">Item has been added to the cart</div>}   

            
            </form>
             
    }
}