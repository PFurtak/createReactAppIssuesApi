import React, { Component } from 'react';

export class Issue extends Component {
  componentDidMount() {
    this.props.getIssue(this.props.match.params.number);
  }

  render() {
    const { title, url } = this.props.issue;
    return (
      <div>
        {title}, {url}
      </div>
    );
  }
}

export default Issue;
