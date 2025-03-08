import React from "react";
import profilesData from "../data/profiles.json";

import ProfileCard from "../components/ProfileCard";
import { Banner } from "../components/Banner";

const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to Talent Showcase</h1> */}
      <Banner />
      <div className="profiles-grid">
        {profilesData.map((profile) => (
          <ProfileCard key={profile.slug} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Home;
