import React from 'react'
import { Form, Label, Col, Input } from 'reactstrap'
import { FormGroup } from '@material-ui/core'

export default class CustomerDetails extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: ''
    }


    render() {
        return (
            
            <Form>
                <FormGroup row>
                    <Label for="firstName" sm={2}>First Name </Label>
                    <Col sm={10}>
                        <Input type="text" id="firstName" placeholder="First Name"
                            value={this.state.firstName}
                            onChange={(e) => this.setState({firstName: e.target.value})} />
                    </Col>
                    </FormGroup>
                <FormGroup row>
                    <Label for="lastName" sm={2}>Last Name </Label>
                    <Col sm={10}>
                        <Input type="text" id="lastName" placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={(e) => this.setState({lastName: e.target.value})}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}>Email </Label>
                    <Col sm={10}>
                        <Input type="email" id="email" placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}/>
                    </Col>
                    </FormGroup>
            </Form>

            )
    }
}