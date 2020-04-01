import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Issues from './components/Issues';
import Issue from './components/Issue';

class App extends Component {
  state = {
    issues: [],
    issue: {}
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.github.com/repos/facebook/create-react-app/issues'
      );
      const data = await res.json();
      this.setState({
        issues: data
      });
    } catch (error) {
      this.setState({
        data: error.message
      });
    }
  }

  getIssue = async number => {
    try {
      const res = await fetch(
        `https://api.github.com/repos/facebook/create-react-app/issues/${number}`
      );
      console.log('response is:', res);
      const data = res.json();
      this.setState({ issue: data });
    } catch (error) {
      this.setState({ data: error.message });
    }
  };

  render() {
    const { issues, issue } = this.state;

    return (
      <Router>
        <Switch>
          <div className='App'>
            <h1>Create React App Issue Board</h1>
            <Route
              exact
              path='/'
              render={props => <Issues issues={issues} />}
            />
          </div>
        </Switch>
        <Route
          exact
          path='/issue/:number'
          render={props => (
            <Issue {...props} getIssue={this.getIssue} issue={issue} />
          )}
        />
      </Router>
    );
  }
}

export default App;
