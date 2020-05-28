

import React, { Component } from 'react'
import CustomerDetails from './CustomerDetails'

export default class Checkout extends Component{
    state = {
        customer: {},
        billingAddress: {},
        deliveryAddress: {}
    }

    render() {
        return (
            <div>
                <h4>Your Details</h4>
                <CustomerDetails/>
                <h4>Billing Address</h4>
                <h4>Delivery Address</h4>
            </div>
        )
    }
}