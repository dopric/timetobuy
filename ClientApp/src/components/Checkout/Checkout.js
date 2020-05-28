

import React, { Component } from 'react'
import CustomerDetails from './CustomerDetails'

export default class Checkout extends Component{
    state = {
        customer: {},
        billingAddress: {},
        deliveryAddress: {}
    }

    onCustomerDetailsChanged = (details) => {
        this.setState({ customer: details })
    }

    render() {
        return (
            <div>
                <h4>Your Details</h4>
                <CustomerDetails onChanged={this.onCustomerDetailsChanged}/>
                <h4>Billing Address</h4>
                <h4>Delivery Address</h4>
            </div>
        )
    }
}