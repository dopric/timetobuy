

import React, { Component } from 'react'
import CustomerDetails from './CustomerDetails'
import Address from './Address'
import { Input } from '@material-ui/core'
import { Form, FormGroup, Label, Col } from 'reactstrap'

export default class Checkout extends Component{
    state = {
        customer: {},
        billingAddress: {},
        deliveryAddress: {},
        deliverToBillingAddress: true
    }

    onCustomerDetailsChanged = (details) => {
        this.setState({ customer: details })
    }

    onBillingAddressChanged = (newAddress) => {
        this.setState({ billingAddress: newAddress })
    }

    onDeliveryAddressChanged = (newAddress) => {
        this.setState({deliveryAddress: newAddress})
    }

    toggleChange = (e)=>{
        this.setState({deliverToBillingAddress: !this.state.deliverToBillingAddress})
    }

    render() {
        return (
            <div>
                <h4>Your Details</h4>
                <CustomerDetails onChanged={this.onCustomerDetailsChanged}/>
                <h4>Billing Address</h4>
                <Address onAddressChanged={this.onBillingAddressChanged} />

                <Form>
                    <FormGroup check>
                        <Label check>
                            <input type="checkbox" checked={this.state.deliverToBillingAddress}
                                onChange={(e) => this.toggleChange(e)} />Delivery address same as billing address
                           </Label>
                        </FormGroup>
                    </Form>
               
                {!this.state.deliverToBillingAddress &&
                    <div>
                    <h4>Delivery Address</h4>
                    <Address onAddressChanged={this.onDeliveryAddressChanged} />
                    </div>
                }
               
                
            </div>
        )
    }
}