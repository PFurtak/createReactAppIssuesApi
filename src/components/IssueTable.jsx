import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IssueTable = ({ issue: { title, user, number } }) => {
  return (
    <div>
      <h3>
        <strong>
          <br />
          <Link to={`/issues/${number}`}>{title}</Link>
        </strong>
      </h3>
      <h4>Submitted by: {user.login}</h4>
      <hr />
    </div>
  );
};
IssueTable.propTypes = {
  issue: PropTypes.object.isRequired
};

export default IssueTable;
