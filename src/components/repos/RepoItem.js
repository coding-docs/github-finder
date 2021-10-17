import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  console.log(repo);
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p>{repo.description ? repo.description : "N/A"}</p>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
