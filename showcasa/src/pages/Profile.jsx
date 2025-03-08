import React from "react";
import { useParams } from "react-router-dom";
import profiles from "../data/profiles.json";
import ProfileDetails from "../components/ProfileDetails";

const Profile = () => {
  const { slug } = useParams(); // Extract the slug from the URL
  const profile = profiles.find((p) => p.slug === slug); // Find the profile using the slug

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return <ProfileDetails profile={profile} />;
};

export default Profile;
