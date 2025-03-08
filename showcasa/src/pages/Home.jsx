import React from "react";

import { Banner } from "../components/Banner";
import ProfilesTab from "../components/ProfilesTab";

const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to Talent Showcase</h1> */}
      <Banner />
      <ProfilesTab />
    </div>
  );
};

export default Home;
