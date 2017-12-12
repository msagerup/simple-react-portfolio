import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Projects from '../components/Projects';
import ProjectItem from '../components/ProjectItem';
import Contact from '../components/Contact';
import Home from '../components/Home';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects/" component={Projects} exact={true}/>
        <Route path="/projects/:id" component={ProjectItem} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
