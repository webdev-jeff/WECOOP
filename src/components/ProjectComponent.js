import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Input } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

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
    this.projects = props.projects;
    this.user = "developer";
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
        <div className="row">
          {/* <div className="col-3">
          </div> */}
          <div className="col-12">
            <div className="row align-items-center vh" style={{ paddingTop: 100 }}>
              <div className="col-12 text-center masked-copy texture-4">
                <p className="font-weight-bold title-middle">Scroll down to choose a favourite project you would like to work on.</p>
                
              </div>
            </div>
            <Input placeholder="Or search here" />
            {project}
          </div>
        </div>
      </div>

    );
  }

}

export default Project;