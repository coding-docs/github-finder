import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.length > 1 ? (
        <h3>Latest Repositories:</h3>
      ) : repos.length === 1 ? (
        <h3>Latest Repository:</h3>
      ) : null}
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
