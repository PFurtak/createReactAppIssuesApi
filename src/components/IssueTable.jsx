import React from 'react';

const IssueTable = ({ issue: { id, title, body } }) => {
  return (
    <div>
      <p>id: {id}</p>
      <p>Title: {title}</p>
      <p>content: {body}</p>
    </div>
  );
};

export default IssueTable;
