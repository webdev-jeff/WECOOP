import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contactType: 'Tel.',
      message: '',
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event){
    console.log('Current State is: ' + JSON.stringify(this.state));
    alert('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();
  }
  validate(firstname, lastname, telnum, email){
    const errors = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: ''
    };
    if (this.state.touched.firstname && firstname.length < 3){
      errors.firstname = "First Name should be >= 3 characters";
    } else if (this.state.touched.firstname && firstname.length > 10){
      errors.firstname = "First Name should be <= 10 characters";
    }
    if (this.state.touched.lastname && lastname.length < 3){
      errors.lastname = "Last Name should be >= 3 characters";
    } else if (this.state.touched.lastname && lastname.length > 10){
      errors.lastname = "Last Name should be <= 10 characters";
    }
    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum)){
      errors.telnum = "Tel. Number should contain only numbers";
    }
    if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1){
      errors.email = "Email should contain a @";
    }
    return errors;
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: {...this.state.touched, [field]: true},
    });
  }
  render() {
    const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
    return (
      <div className="container">
 
        <div className="row row-content pt-xl-5 mt-xl-5 text-white">
          <div className="col-12">
            <h3>Send us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlfor="firstname" md={2}>First Name</Label>
                <Col md={10}>
                  <Input type="text" id="firstname" name="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    valid={errors.firstname === ''}
                    invalid={errors.firstname !== ''}
                    onBlur={this.handleBlur('firstname')}
                    onChange={this.handleInputChange}/>
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlfor="lastname" md={2}>Last Name</Label>
                <Col md={10}>
                  <Input type="text" id="lastname" name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    valid={errors.lastname === ''}
                    invalid={errors.lastname !== ''}
                    onBlur={this.handleBlur('lastname')}
                    onChange={this.handleInputChange}/>
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlfor="telnum" md={2}>Contact Tel.</Label>
                <Col md={10}>
                  <Input type="tel" id="telnum" name="telnum"
                    placeholder="Tel. Number"
                    value={this.state.telnum}
                    valid={errors.telnum === ''}
                    invalid={errors.telnum !== ''}
                    onBlur={this.handleBlur('telnum')}
                    onChange={this.handleInputChange}/>
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlfor="email" md={2}>Email</Label>
                <Col md={10}>
                  <Input type="email" id="email" name="email"
                    placeholder="Email"
                    value={this.state.email}
                    valid={errors.email === ''}
                    invalid={errors.email !== ''}
                    onBlur={this.handleBlur('email')}
                    onChange={this.handleInputChange}/>
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{size: 6, offset: 2}}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange}/> {' '}
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{size: 3, offset: 1}}>
                  <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlfor="message" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                  <Button type="submit" color="primary">Send Feedback</Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;