import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Axios from 'axios'

export default class AddToCart extends Component {
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
        this.onQuantityChanged = this.onQuantityChanged.bind(this)
        this.state = { itemAddedToBasket: false, quanitity: 1}
    }

    async addToCart(e) {
        //alert("add to cart " + this.props.productId)
        e.preventDefault()
        this.setState({ itemAddedToBasket: false})
        let sessionId = localStorage.sessionId;
        let request = { productId: this.props.productId, quantity: this.state.quanitity }
        if (sessionId ) {
            request.sessionId = sessionId;
        }
        console.log("post request", request)
        let result = await Axios.post('/api/cart', request)
       
        localStorage.sessionId = result.data;
        this.setState({
            itemAddedToBasket: true,
            quanitity: 1
        })

        setTimeout(()=> {
            this.setState({ itemAddedToBasket: false, quanitity: 1})
        }, 1500)

      
    }
    onQuantityChanged = (e) => {
        this.setState({quanitity: parseInt(e.target.value)})
    }

    render() {
        return   <form className="form" onSubmit={ this.addToCart }>
                    <div className="row">
                <div className="form-group">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Quantity</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01"
                            onChange={this.onQuantityChanged}>
                            value={this.state.quanitity.toString()}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={this.state.itemAddedToBasket}>Add to cart</button>
                        </div>
                    </div>
          
                {this.state.itemAddedToBasket && <div className="alert alert-success">Item has been added to the cart</div>}   
            </form>
       
    }
}