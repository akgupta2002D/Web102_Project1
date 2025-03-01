import React from "react";
import useGithubTrending from "../hooks/useGithubTrending";
import Card from "../components/Card";
import "./GithubTrending.css";

const GithubTrending = () => {
  const repos = useGithubTrending();

  return (
    <div className="github-trending">
      <h1>🔥 Trending GitHub Repositories</h1>
      <div className="repo-grid">
        {repos.length === 0 ? (
          <p>Loading...</p>
        ) : (
          repos.map((repo) => (
            <Card
              key={repo.id}
              imageSrc={repo.owner.avatar_url} // GitHub profile image
              name={repo.name}
              cuisine={repo.description || "No description available"}
              menuLink={repo.html_url} // GitHub repo link
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GithubTrending;