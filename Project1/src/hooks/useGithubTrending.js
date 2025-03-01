import { useState, useEffect } from "react";

const useGithubTrending = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=stars:>5000&sort=stars&order=desc")
      .then((response) => response.json())
      .then((data) => setRepos(data.items))
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, []);

  return repos;
};

export default useGithubTrending;