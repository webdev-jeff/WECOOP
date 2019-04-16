import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


class RepoDetail extends Component {
  constructor(props) {
    super(props);
    this.repo = props.repo;
    this.state = {

    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.renderRequirement = this.renderRequirement.bind(this);
    this.renderDesign = this.renderDesign.bind(this);
    this.renderDevelopment = this.renderDevelopment.bind(this);
    this.renderVerification = this.renderVerification.bind(this);
  }
  renderRequirement(repoContent, finished){
    if (finished) {
      repoContent.innerHTML=`
      <div class="row align-items-center">
      <div class="col-2 offset-2 title-center2">
        <img src="/WECOOP/assets/images/right-tick.png" />
      </div>
      <div class="col-6 title-center2">
        <h1 class="text-center text-white">You have finished this part!</h1>
      </div>
      </div>
      <div class="row align-items-center mt-5">
      <div class="col" align="center">
      <a class="btn btn-primary text-white" href="/WECOOP/assets/download/requirement.pdf" target="_blank">Download the requirement</a>
      </div>
      </div>
      `;
    } else {
      repoContent.innerHTML=`
      <div class="row mt-5">
        <div class="col">
          <embed src="/WECOOP/assets/download/requirement.pdf" width="960px" height="480px" />
        </div>
      </div>
      <div class="row mt-2">
      <div class="col-12">
      <span class="text-white">Are you satisfied with the requirement?</span>
      <button class="btn btn-success ml-2">Yes, go to the next stage</button>
      <button class="btn btn-danger ml-2">No, contact the ideaer</button>
      </div>
          
      </div>
      `;
    }
  }
  renderDesign(repoContent, finished){
    if (finished) {
      repoContent.innerHTML=`
      <div class="row align-items-center">
      <div class="col-2 offset-2 title-center2">
        <img src="/WECOOP/assets/images/right-tick.png" />
      </div>
      <div class="col-6 title-center2">
        <h1 class="text-center text-white">You have finished this part!</h1>
      </div>
      </div>
      <div class="row align-items-center mt-5">
      <div class="col" align="center">
      <a class="btn btn-primary text-white" href="/WECOOP/assets/download/design.pdf" target="_blank">Download the design</a>
      </div>
      </div>
      `;
    } else {
      repoContent.innerHTML=`
      <div class="row mt-5">
        <div class="col">
          <embed src="/WECOOP/assets/download/design.pdf" width="960px" height="480px" />
        </div>
      </div>
      <div class="row mt-2">
      <div class="col-12">
      <span class="text-white">You have submitted your design! Waiting for ideaer's approval</span>
      </div>
          
      </div>
      `;
    }
  }
  renderDevelopment(repoContent, finished){
    if (finished) {
      repoContent.innerHTML=`
      <div class="row align-items-center">
      <div class="col-2 offset-2 title-center2">
        <img src="/WECOOP/assets/images/right-tick.png" />
      </div>
      <div class="col-6 title-center2">
        <h1 class="text-center text-white">You have finished this part!</h1>
      </div>
      </div>
      <div class="row align-items-center mt-5">
      <div class="col" align="center">
      <a class="btn btn-primary text-white" href="/WECOOP/assets/download/design.pdf" target="_blank">Download the design</a>
      </div>
      </div>
      `;
    } else {
      repoContent.innerHTML=`
      <div class="row mt-5">
        <div class="col">
        <iframe width="960px" height="480px" style="border:none;" src="https://github.com/khwang0/2019S-COMP3111"></iframe>
        </div>
      </div>
      <div class="row mt-2">
      <div class="col-12">
      <span class="text-white">You have submitted your design! Waiting for ideaer's approval</span>
      </div>
          
      </div>
      `;
    }
  }
  renderVerification(repoContent, finished){
    if (finished){
      repoContent.innerHTML=`
      <div class="row align-items-center mt-5">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/right-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-green">Build passed!</h1>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/right-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-green">Pressure test passed!</h1>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/right-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-green">Multi-platform test passed!</h1>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/right-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-green">ABC test passed!</h1>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/right-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-green">DEF test passed!</h1>
        </div>
      </div>
      `;
    } else {
      repoContent.innerHTML=`
      <div class="row align-items-center mt-5">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/right-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-green">Build passed!</h1>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/right-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-green">Pressure test passed!</h1>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/right-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-green">Multi-platform test passed!</h1>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/wrong-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-red">ABC test failed!</h1>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-2 offset-2">
          <img src="/WECOOP/assets/images/right-tick.png" />
        </div>
        <div class="col-8">
          <h1 class="text-green">DEF test passed!</h1>
        </div>
      </div>
      `;
    }
  }
  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
    const repoContent = document.getElementById('repoContent');
    const finished = this.repo.stage > rSelected;
    if (this.repo.stage < rSelected) repoContent.innerHTML="<div class=\"row\"><div class=\"col mt-5 text-white\"><h1 align=\"center\">Please finish previous parts first!</h1></div></div>"
    else if (rSelected === 1) this.renderRequirement(repoContent, finished)
    else if (rSelected === 2) this.renderDesign(repoContent, finished)
    else if (rSelected === 3) this.renderDevelopment(repoContent, finished)
    else if (rSelected === 4) this.renderVerification(repoContent, finished)
    else repoContent.innerHTML = ""
    
  }
  render(){
    if (this.repo != null) {
      return (
        <div className="container">
          <div className="row pt-5 mt-5 align-items-center ml-0">
          <div className="col" align="center">
            <ButtonGroup>
            <Button color={(this.repo.stage > 1 ? "primary" : "danger")} onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Requirement</Button>
            <Button color={(this.repo.stage > 2 ? "primary" : "danger")} onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Design</Button>
            <Button color={(this.repo.stage > 3 ? "primary" : "danger")} onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Development</Button>
            <Button color={(this.repo.stage > 4 ? "primary" : "danger")} onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>Verification</Button>
            <Button color={(this.repo.stage > 5 ? "primary" : "danger")} onClick={() => this.onRadioBtnClick(5)} active={this.state.rSelected === 5}>Document</Button>
            <Button color={(this.repo.stage > 6 ? "primary" : "danger")} onClick={() => this.onRadioBtnClick(6)} active={this.state.rSelected === 6}>Maintenance</Button>
          </ButtonGroup>
          <Button className="ml-5" color="warning">Get Insight</Button>
          <a className="ml-5 btn btn-warning" href="/WECOOP/assets/download/wecoop-toolkit.exe">Get Toolkit</a>
          </div>
          </div>
          <div className="align-items-center" id="repoContent">
            {/* <p id="repoContent">fd</p> */}

          </div>
        </div>
      );
    } else {
      return (
        <div><p>fdadfa</p></div>
      );
    }
  }
}


export default RepoDetail;