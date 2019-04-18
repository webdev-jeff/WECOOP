import React, { Component } from 'react';

class NotLogin extends Component {

  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div className="row align-items-center banner banner-1 ml-0 mr-0 pl-0 pr-0">
          <div className="col-12 text-center title-bottom">
            <p className="text-white font-weight-bold title-middle text-center mb-0">Please login to access this page.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NotLogin;