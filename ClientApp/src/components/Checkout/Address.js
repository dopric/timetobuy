import React, { Component } from 'react'
import { Form, Label, FormGroup, Col, Input } from 'reactstrap'


export default class Address extends Component {
    state = {
        street: '',
        number: '',
        zip: '',
        city: ''
    }

    handleChange = (newState) => {
        this.setState(newState, () => {
            if (this.props.onAddressChanged) {
                this.props.onAddressChanged(this.state)
            }
        })
    }
    render() {
        return (

            <Form>
                <FormGroup row inline>
                    <Label for="street" sm={2}>Street</Label>
                    <Col sm={7}>
                        <Input type="text" 
                            id="street" placeholder="Street"
                            value={this.state.street}
                            onChange={(e) => this.handleChange({street: e.target.value})}/>
                    </Col>
                    <Label for="number" sm={1}>Number</Label>
                    <Col sm={2}>
                        <Input type="text" id="number" 
                            value={this.state.number}
                            onChange={(e) => this.handleChange({number: e.target.value})} />
                        </Col>
                </FormGroup>
                <FormGroup row inline>
                    <Label for="city" sm={2}>City</Label>
                    <Col sm={7}>
                        <Input type="text"
                            id="city" placeholder="City"
                            value={this.state.city}
                            onChange={(e) => this.handleChange({ city: e.target.value })} />
                    </Col>
                    <Label for="zip" sm={1}>ZIP</Label>
                    <Col sm={2}>
                        <Input type="text" id="zip"
                            value={this.state.zip}
                            onChange={(e) => this.handleChange({ zip: e.target.value })} />
                    </Col>
                </FormGroup>
            </Form>
            )
    }
}