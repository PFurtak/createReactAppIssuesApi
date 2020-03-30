import React from 'react';

const IssueTable = ({ issue: { url, title, body, user } }) => {
  return (
    <div>
      <a href={url}>
        <h3>
          <strong>
            <br />
            {title}
          </strong>
        </h3>
      </a>
      <h4>
        Submitted by: <a href={user.url}>{user.login}</a>
      </h4>

      <p>
        <br />
        <strong>
          Problem: <br /> <br />
        </strong>{' '}
        {body}
      </p>
      <hr />
    </div>
  );
};

export default IssueTable;
