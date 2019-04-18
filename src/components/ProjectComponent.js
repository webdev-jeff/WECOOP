import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Input, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { cookie } from '../shared/cookie';

function RenderProjectListForDeveloper({ project }) {
  return (
    <div className="row align-items-center ml-0 mr-0 pl-0 pr-0">
      <div className="col-12 mt-5">
        <Card>
          <CardHeader className="bg-dark text-white">
            {project.title}
            <button className="btn btn-light btn-sm" src="" style={{ position: 'absolute', right: 5 }}>Get more information</button>
          </CardHeader>
          <CardBody>
            <div className="container pl-0 pr-0 ml-0 mr-0">
              <div className="row pl-0 pr-0 ml-0 mr-0">
                <div className="col-12 col-md-5">
                  <dl className="row p-1">
                    {/* <dt className="col-6">Level required</dt>
                    <dd className="col-6">project.level</dd> */}
                    <dt className="col-6">Number of people needed</dt>
                    <dd className="col-6">{project.numOfPeopleNeeded}</dd>
                    <dt className="col-6">Application due date</dt>
                    <dd className="col-6">{project.appDueDate}</dd>
                    <dt className="col-6">Requirement</dt>
                    <dd className="col-6">{project.requirement}</dd>
                    <dt className="col-6">Contact</dt>
                    <dd className="col-6">{project.contact}</dd>
                  </dl>
                </div>
                <div className="col-12 col-md-6 offset-1">
                  <p><b>Description</b></p>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>

          </CardBody>
        </Card>
      </div>
    </div>
  )
}

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.projects = props.projects;
    this.user = "developer";
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  renderSearchOrPublish(project) {
    if (cookie.get("developer") === "true") {
      return (
        <div className="row">
          {/* <div className="col-3">
        </div> */}
          <div className="col-12">
            <div className="row align-items-center vh" style={{ paddingTop: 100 }}>
              <div className="col-12 text-center masked-copy texture-4">
                <p className="font-weight-bold title-middle">Scroll down to choose a favourite project you would like to work on.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Input placeholder="Or search here" />
              </div>
            </div>
            {project}
          </div>
        </div>
      )
    } else if (cookie.get("ideaer") === "true") {
      return (
        <div className="col-12">
          <div className="row" style={{ paddingTop: 100 }}>
            <div className="col-4 offset-1">
              <Input placeholder="You can search all projects here" />
            </div>
            <div className="col-4 offset-1">
              <React.Fragment>
                <Button onClick={this.toggleModal} className="btn-primary">Or publish your project here</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Publish your project</ModalHeader>
                  <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                      <FormGroup>
                        <Label htmlFor="numOfPeopleNeeded">Number of people needed</Label>
                        <Input type="text" id="numOfPeopleNeeded" name="numOfPeopleNeeded"
                          innerRef={(input) => this.numOfPeopleNeeded = input} placeholder="format: an integer > 0" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appDueDate">Application due date</Label>
                        <Input type="text" id="appDueDate" name="appDueDate"
                          innerRef={(input) => this.appDueDate = input} placeholder="format: YYYY-MM-DD" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="requirement">Requirement</Label>
                        <Input type="text" id="requirement" name="requirement"
                          innerRef={(input) => this.requirement = input} placeholder="e.g. CV, Portfolio, Github link, LinkedIn" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="contact">Contact</Label>
                        <Input type="text" id="contact" name="contact"
                          innerRef={(input) => this.contact = input} />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="description">Description</Label>
                        <Input type="textarea" id="description" name="description"
                          innerRef={(input) => this.description = input} />
                      </FormGroup>
                      <Button type="submit" value="submit" color="primary">Submit</Button>
                    </Form>
                  </ModalBody>
                </Modal>
              </React.Fragment>
            </div>
          </div>
          {project}
        </div>
      )
    }
  }
  render() {
    const project = this.projects.map((project) =>
      <RenderProjectListForDeveloper key={project.id} project={project} />
    );
    return (
      <div className="container-fluid">
        {/* <div className="row">
        <div className="col-3 project-repo align-items-center text-center vh" style={{ position: "fixed", overflowY: "scroll"}}>
          <p className="text-white">Repositories</p>
          <Input placeholder="Search" />
          <div className="align-items-center text-center">
            <p className="text-white mt-3 mb-3">aaa</p>
          </div>
          <div className="align-items-center text-center">
            <p className="text-white mt-3 mb-3">bbb</p>
          </div>
          <div className="align-items-center text-center">
            <p className="text-white mt-3 mb-3">ccc</p>
          </div>
          <div className="align-items-center text-center">
            <p className="text-white mt-3 mb-3">ddd</p>
          </div>
        </div>
        </div> */}
        {this.renderSearchOrPublish(project)}

      </div>

    );
  }

}

export default Project;