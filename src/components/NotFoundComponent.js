import React, { Component } from 'react';

class NotFound extends Component {

  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div className="row align-items-center banner banner-1 ml-0 mr-0 pl-0 pr-0">
          <div className="col-12 text-center title-bottom">
            <p className="text-white font-weight-bold title-large text-center mb-0">404</p>
            <p className="text-white mt-0">Page not found.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;