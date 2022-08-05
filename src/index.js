import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SinglePage from './SinglePage';
import { Helmet } from 'react-helmet';
import List from './List';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './Top';
import './Blog.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Helmet>
          <html lang="en" />
          <title>Blog with React</title>
          <meta
            content="Blog with React"
            name="description"
          />
          <meta content="Blog with React" property="og:title" />
          <meta
            content="Blog with React"
            property="og:description"
          />
          <meta
            content=""
            property="og:image"
          />
          <meta
            content=""
            property="og:author"
          />
          <meta content="Blog with React" name="facebook:title" />
          <meta content="website" property="og:type" />
          <meta
            content=""
            property="facebook:author"
          />
          <meta
            content=""
            name="facebook:image"
          />
          <meta content="Blog with React" property="og:site_name" />
          <meta
            content="Blog with React"
            property="facebook:description"
          />
          <meta content="summary_large_image" name="twitter:card" />
          <meta
            content=""
            property="twitter:author"
          />

          <link
            href=""
            rel="icon"
            type="image/x-icon"
          />
          <meta content="@hockeycomp" name="twitter:site" />
          <meta
            content=""
            name="twitter:image"
          />
          <meta
            content="Blog with React"
            name="twitter:description"
          />
          <link
            rel="apple-touch-icon"
            href=""
          />
          <meta content="Blog with React" name="twitter:title" />
        </Helmet>
        <Top />
        <div className="container">
          <Nav />
        </div>
        <div>
          <div className="container">
            <div className="row">
              <Route path="/" component={List} exact />
              <Route path="/article" component={List} exact />
              <Route path="/article/:name" component={SinglePage} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
