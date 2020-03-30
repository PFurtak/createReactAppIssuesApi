import React, { Component } from 'react';
import './App.css';
import IssueTable from './components/IssueTable';
import Issues from './components/Issues';

class App extends Component {
  state = {
    issues: []
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

  render() {
    return (
      <div className='App'>
        <Issues issues={this.state.issues} />
      </div>
    );
  }
}

export default App;
