import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { cookie } from '../shared/cookie';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      users: props.users,
      transparent: props.transparent
    };
    this.user = "";
    this.login = false;
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // this.cookie.set("login", false, { path: '/' });
    // alert("login" + this.cookie.get("login"));
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  toggleModal() {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
  }
  handleLogin(event) {
    this.toggleModal();
    // this.cookie.set("login", true, { path: '/' });
    if (this.username.value === "developer" && this.password.value === this.state.users.filter((e) => e.username==="developer")[0].password) {
      cookie.set("login", "true", {path: '/'});
      // this.user = "developer";
      cookie.set('developer', "true", { path: '/' });
    } else if (this.username.value === "ideaer" && this.password.value === this.state.users.filter((e) => e.username==="ideaer")[0].password) {
      cookie.set("login", "true", {path: '/'});
      // this.user = "ideaer";
      cookie.set('ideaer', "true", { path: '/' });
    } else {
      alert("User: " + this.username.value + " does not exist!");
    }
    
    // alert('Username: ' + this.username.value + ' Password: ' + this.password.value + ' Remember: ' + this.remember.checked);

    event.preventDefault();
  }
  handleLogout(event) {
    // this.cookie.set("login", false, { path: '/' });
    cookie.set("login", "false", {path: '/'});
    if (cookie.get("ideaer") === "true") cookie.set("ideaer", "false", {path: '/'})
    else if (cookie.get("developer") === "true") cookie.set("developer", "false", {path: '/'})
    event.preventDefault();
    window.location.reload();
  }
  renderLoginLogout() {
    if (cookie.get("login") !== "false") {
      return (
        <Button outline onClick={this.handleLogout}><span className="fa fa-sign-in fa-lg"> Log out</span></Button>
      )
    } else {
      return (
        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"> Login</span></Button>
      )
    }
  }
  renderProject() {
    if (cookie.get("login") !== "false") {
      return (
        <React.Fragment>
          <NavItem>
            <NavLink className="nav-link" to="/project">
              <span style={{fontSize: "22px"}} className="ml-3 mr-3"> Project</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/repository">
              <span style={{fontSize: "22px"}} className="ml-3 mr-3"> Repository</span>
            </NavLink>
          </NavItem>
        </React.Fragment>

      )
    }
  }
  render() {
    var button = this.renderLoginLogout();
    var project = this.renderProject();
    const navbar =
    <React.Fragment>
      <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="/assets/images/wecoop-logo.png" height="30" width="30" alt="WECOOP" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span style={{fontSize: "22px"}} className="ml-3 mr-3"> Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/features">
                    <span style={{fontSize: "22px"}} className="ml-3 mr-3"> Features</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/pricing">
                    <span style={{fontSize: "22px"}} className="ml-3 mr-3"> Pricing</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span style={{fontSize: "22px"}} className="ml-3 mr-3"> Contact Us</span>
                  </NavLink>
                </NavItem>
                {project}
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {button}
                </NavItem>
              </Nav>
            </Collapse>
          </div>
    </React.Fragment>;
    return (
      <React.Fragment>
        {this.state.transparent
        ? <Navbar dark expand="md" fixed="top">{navbar}</Navbar>
        : <Navbar dark expand="md" fixed="top" style={{backgroundColor: "#000"}}>{navbar}</Navbar>}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" placeholder="developer / ideaer"
                  innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="rememeber"
                    innerRef={(input) => this.remember = input} />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;

