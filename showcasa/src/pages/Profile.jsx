import React from "react";
import { useParams } from "react-router-dom";
import profiles from "../data/profiles.json";
import ProfileDetails from "../components/ProfileDetails";

const Profile = () => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  return profile ? (
    <ProfileDetails profile={profile} />
  ) : (
    <p>Profile not found</p>
  );
};

export default Profile;
