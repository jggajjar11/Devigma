import React from "react";
import { useParams } from "react-router-dom";
import profiles from "../data/profiles.json"; // Adjust the path if necessary
import WorkDetail from "../components/WorkDetail";

const Work = () => {
  const { workSlug } = useParams(); // Extract the workSlug from the URL

  // Find the profile and the portfolio item
  const profile = profiles.find((p) =>
    p.portfolio.some((item) => item.workSlug === workSlug)
  );
  const portfolioItem = profile?.portfolio.find(
    (item) => item.workSlug === workSlug
  );

  // Debugging Logs
  console.log("WorkSlug:", workSlug);
  console.log("Profile:", profile);
  console.log("PortfolioItem:", portfolioItem);

  // Handle undefined portfolioItem or profile
  if (!portfolioItem || !profile) {
    return <p>Portfolio item not found</p>;
  }

  return <WorkDetail portfolioItem={portfolioItem} profile={profile} />;
};

export default Work;
