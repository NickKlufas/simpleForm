import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, Toast, ToastHeader, ToastBody } from "reactstrap";

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextRequestWillSucceed: true,
            showSuccessToast: false,
            showFailureToast: false
        };
    }

    handleCancel = () => {
        console.log("User clicked cancel");
        document.getElementById("userForm").reset();
    };

    handleSubmit = event => {
        this.setState({
            showSuccessToast: false,
            showFailureToast: false,
        });

        event.preventDefault();
        const data = new FormData(event.target);

        if (this.state.nextRequestWillSucceed) {
            this.mockSuccessRequest(data);
        } else {
            this.mockFailedRequest(data);
        }
    };

    mockSuccessRequest(data) {
        fetch("https://httpstat.us/200", {
            method: "POST",
            body: data
        });

        this.toggleSuccessToast();
        this.setState({
            nextRequestWillSucceed: !this.state.nextRequestWillSucceed
        });
    }

    mockFailedRequest(data) {
        fetch("https://httpstat.us/400", {
            method: "POST",
            body: data
        });

        this.toggleFailureToast();
        this.setState({
            nextRequestWillSucceed: !this.state.nextRequestWillSucceed
        });
    }

    toggleSuccessToast() {
        this.setState({
            showSuccessToast: !this.state.showSuccessToast
        });
    }

    toggleFailureToast() {
        this.setState({
            showFailureToast: !this.state.showFailureToast
        });
    }

    render() {
        return (
            <div className="container">
      <Row>
      <Col xs={12}>
        <Form id="userForm" onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name*</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder=""
                  // required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name*</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder=""
                  // required
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="exampleEmail">Email*</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder=""
                  // required
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="phoneNumber">Phone Number*</Label>
                <Input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="123-456-7890"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  // required
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="exampleEmail">Username*</Label>
                <Input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder=""
                  // required
                />
              </FormGroup>
            </Col>
            <Col md={9}>
              <FormGroup>
                <Label for="exampleAddress">Address*</Label>
                <Input
                  type="text"
                  name="address"
                  id="exampleAddress"
                  placeholder=""
                  // required
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="unitNumber">Unit Number</Label>
                <Input
                  type="text"
                  name="unitNumber"
                  id="unitNumber"
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City*</Label>
                <Input 
                type="text"
                name="city"
                id="city"
                // required
              />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State*</Label>
                <Input 
                type="text"
                name="state"
                id="state"
                // required
              />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip*</Label>
                <Input 
                type="text"
                name="zip"
                id="zip"
                // required
                />
              </FormGroup>
            </Col>
          <Col xs={12}>
            <Button id="cancelButton" onClick={this.handleCancel}>
              Cancel
            </Button>
            <Button color="primary" id="submitButton" type="submit">
              Submit
            </Button>
          </Col>
          </Row>
        </Form>
        </Col>
        <Col xs={12}>
          <div className="my-2 rounded bg-success">
            <Toast isOpen={this.state.showSuccessToast}>
              <ToastHeader >
                Dumb luck
              </ToastHeader>
              <ToastBody>
                Bet you the next one fails.
              </ToastBody>
            </Toast>
          </div>
        </Col>
        <Col xs="12">
          <div className="my-2 rounded bg-danger">
            <Toast isOpen={this.state.showFailureToast}>
              <ToastHeader >
                It'll get better
              </ToastHeader>
              <ToastBody>
                Resubmit, it'll work.
              </ToastBody>
            </Toast>
          </div>
        </Col>
        </Row>
      </div>
        );
    }
}