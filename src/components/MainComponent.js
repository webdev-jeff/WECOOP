import React, { Component } from 'react';
// import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './HeaderComponent';
import Features from './FeaturesComponent';
import NotFound from './NotFoundComponent';
import Pricing from './PricingComponent';
import Project from './ProjectComponent';
import Repository from './RepositoryComponent';
import { PRICING } from '../shared/pricing';
import { USERS } from '../shared/users';
import { FEATURES } from '../shared/features';
import Contact from './ContactusComponent';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      prices: PRICING,
      users: USERS,
      location: props.location,
      transparentHeader: ['/home', '/pricing'],
      features: FEATURES
    }
  }
  render() {

    return (
      <div>
        {/* <Header /> */}
        {/* <Switch>
          <Route path="/home" component={<Home />} />
          <Route path="/aboutus" component={() => <About leaders={this.state.leaders}/>} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch> */}
        {this.state.transparentHeader.indexOf(this.state.location) < 0 ? <Header users={this.state.users} transparent={false} /> : <Header users={this.state.users} transparent={true} />}
        <Switch>
        <Route path="/home" component={Home} />
          <Route path="/features" component={() => <Features features={this.state.features} />} />
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route path="/pricing" component={() => <Pricing prices={this.state.prices} />} />
          <Route path="/project" component={Project} />
          <Route exact path="/repository" component={Repository} />
          <Route path="/contactus" component={Contact} />
          <Route component={Home} />
        </Switch>
          
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(Main);