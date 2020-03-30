import React, { Component } from 'react';
import IssueTable from './IssueTable';

export class Issues extends Component {
  render() {
    return (
      <div>
        {this.props.issues.map(issue => (
          <IssueTable key={issue.id} issue={issue} />
        ))}
      </div>
    );
  }
}

export default Issues;
