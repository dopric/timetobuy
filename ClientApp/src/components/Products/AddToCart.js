import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Axios from 'axios'

export default class AddToCart extends Component {
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
    }

    async addToCart() {
        //alert("add to cart " + this.props.productId)
        await Axios.post('/api/cart', {'productId': this.props.productId})
    }

    render() {
        return (
            <Button color="primary" onClick={this.addToCart}>
                Add to cart
            </Button>
            )
    }
}