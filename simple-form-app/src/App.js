import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Example extends React.Component {
    render() {
        return (
            <div className="container">
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="firstName" id="firstName" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="lastName" id="lastName" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input type="tel" name="pohoneNumber" id="pohoneNumber" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input type="text" name="userName" id="userName" placeholder="" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
        <Col md={9}>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder=""/>
        </FormGroup>
        </Col>
        <Col md={3}>
        <FormGroup>
          <Label for="unitNumber">Unit Number</Label>
          <Input type="text" name="unitNumber" id="unitNumber" placeholder=""/>
        </FormGroup>
        </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <div>
          <Button id="cancelButton">Cancel</Button>
          <Button color="primary" id="submitButton">Submit</Button>
        </div>
      </Form>
      </div>
        );
    }
}