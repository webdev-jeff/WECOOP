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
import { REPOSITORIES } from '../shared/repositories';
import RepoDetail from './RepoDetailComponent';
import { PROJECTS } from '../shared/projects';
import NotLogin from './NotLoginComponent';
import PrivateRoute from './PrivateRoute';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: PRICING,
      users: USERS,
      location: props.location,
      transparentHeader: ['/home', '/pricing'],
      features: FEATURES,
      repositories: REPOSITORIES,
      projects: PROJECTS
    }
  }
  render() {
    const RepoWithId = ({ match }) => {
      return (
        <RepoDetail repo={this.state.repositories.filter((repo) => repo.id === parseInt(match.params.repoId, 10))[0]} />
      );
    }
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
          <Route path="/project" component={() => <Project projects={this.state.projects} />} />
          <Route exact path="/repository" component={() => <Repository repositories={this.state.repositories} />} />
          <Route path="/repository/:repoId" component={RepoWithId} />
          <Route path="/contactus" component={Contact} />
          <Route path="/notlogin" component={NotLogin} />
          <Route component={NotFound} />
        </Switch>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(Main);