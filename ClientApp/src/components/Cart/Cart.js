import React, { Component } from 'react'
import Axios from 'axios'
import RemoveProduct from './RemoveProduct';

export default class Cart extends Component{
    constructor(props) {
        super(props)
        this.state = { items: [] }
        this.handleItemRemoved = this.handleItemRemoved.bind(this);
        this.loadCartItems = this.loadCartItems.bind(this);
    }
     async loadCartItems() {
        var response = await Axios(`/api/cart?sessionId=${localStorage.sessionId}`);
                console.log("Data for cart is here", response.data)
                this.setState({
                    items: response.data
                })
    }
    componentDidMount() {
        this.loadCartItems(); 
    }

    handleItemRemoved = () => {
        this.loadCartItems();
    }
    render() {
        if (this.state.items.length == 0) {
            return <div>Your cart is empty </div>
        }
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map((item,i) =>
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>
                                <RemoveProduct
                                    productId={item.id}
                                    onItemRemoved={this.handleItemRemoved}>
                                </RemoveProduct>
                            </td>
                         </tr>
                    )}
                </tbody>
                </table>
        )
        
    }
}