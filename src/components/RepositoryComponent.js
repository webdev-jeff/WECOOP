import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { cookie } from '../shared/cookie';

function RenderRepositoryListForDeveloper({ repo, stages }) {
  return (
    <div className="col-6 mt-5">
      <Card>
        <CardHeader className="bg-dark text-white">
          {repo.name}
          <Link to={`/repository/${repo.id}`}>
            <span className="btn btn-light btn-sm" style={{ position: 'absolute', right: 5 }}> Work on</span>
          </Link>
        </CardHeader>
        <CardBody>
          <div className="container pl-0 pr-0 ml-0 mr-0">
            <div className="row pl-0 pr-0 ml-0 mr-0">
              <div className="col-12 col-md-7 offset-1">
                <p><b>Stage: </b>{stages[repo.stage-1]}</p>
                <p>{repo.description}</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

function RenderRepositoryListForIdeaer({ repo, stages }){
  return (
    <div className="col-6 mt-5">
      <Card>
        <CardHeader className="bg-dark text-white">
          {repo.name}
          <Link to={`/repository/${repo.id}`}>
            <span className="btn btn-light btn-sm" style={{ position: 'absolute', right: 5 }}> Work on</span>
          </Link>
        </CardHeader>
        <CardBody>
          <div className="container pl-0 pr-0 ml-0 mr-0">
            <div className="row pl-0 pr-0 ml-0 mr-0">
              <div className="col-12 col-md-7 offset-1">
                <p><b>Stage: </b>{stages[repo.stage-1]}</p>
                <p>{repo.description}</p>
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
    this.stages = ['Requirements', 'Design', 'Development', 'Verification', 'Documentation', 'Maintenance', 'Finished']
    this.repositories = props.repositories
    this.user = "developer";
  }
  render() {
    const repos =
    (cookie.get("developer") === "true") ? this.repositories.map((repo) =>
      <RenderRepositoryListForDeveloper key={repo.id} repo={repo} stages={this.stages} />
    )
    : this.repositories.map((repo) =>
      <RenderRepositoryListForIdeaer key={repo.id} repo={repo} stages={this.stages} />
    )
    return (
      <div className="container-fluid">
        <div className="row align-items-center" style={{ paddingTop: 100 }}>
        </div>
        <div className="row align-items-center ml-0 mr-0 pl-0 pr-0">
          {repos}
        </div>
      </div>
    );
  }

}

export default Repository;