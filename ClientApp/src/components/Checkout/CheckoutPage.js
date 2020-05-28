import React from 'react'
import { Row, Col } from 'reactstrap'
import OrderSummary from './OrderSummary'
import Checkout from './Checkout'

export default class CheckoutPage extends React.Component {

    constructor(props) {
        super (props)
    }

    render() {
        return (
            <Row>
                <Col md={8}>
                    <Checkout/>
                </Col>
                <Col md={4}>
                    <OrderSummary/>
                </Col>
            </Row>
            )
    }
}