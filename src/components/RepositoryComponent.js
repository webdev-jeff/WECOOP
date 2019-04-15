import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

function RenderRepositoryListForDeveloper({ repo }) {
  return (

    <div className="col-6 mt-5">
      <Card>
        <CardHeader className="bg-dark text-white">
          repo.title
            <button className="btn btn-light btn-sm" src="" style={{ position: 'absolute', right: 5 }}>Work on</button>
        </CardHeader>
        <CardBody>
          <div className="container pl-0 pr-0 ml-0 mr-0">
            <div className="row pl-0 pr-0 ml-0 mr-0">
              <div className="col-12 col-md-7 offset-1">
                <p>repo.description</p>
              </div>
            </div>
          </div>

        </CardBody>
      </Card>
    </div>

  )
}

class Repository extends Component {

  constructor(props) {
    super(props);
    this.user = "developer";
  }
  render() {
    const repo = "";
    return (
      <div className="container-fluid">
        <div className="row align-items-center" style={{ paddingTop: 100 }}>
        </div>
        <div className="row align-items-center ml-0 mr-0 pl-0 pr-0">
          {RenderRepositoryListForDeveloper(repo)}
          {RenderRepositoryListForDeveloper(repo)}
          {RenderRepositoryListForDeveloper(repo)}
        </div>
      </div>
    );
  }

}

export default Repository;