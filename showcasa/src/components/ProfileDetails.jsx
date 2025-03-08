import React from "react";
import { useParams } from "react-router-dom";
import profiles from "../data/profiles.json";

const Profile = ({ profile }) => {
  // const { slug } = useParams(); // Get the profile ID from the URL
  // const profile = profiles.find((p) => p.slug === parseInt(slug)); // Find the matching profile

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div className="profile-detail">
      <h1>{profile.name}detail</h1>
      <p>
        <strong>Tagline:</strong> {profile.tagline}
      </p>

      <h2>Skills</h2>
      <ul>
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Portfolio</h2>
      {profile.portfolio.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
        </div>
      ))}

      <h2>Personality Highlights</h2>
      <p>{profile.personality}</p>
    </div>
  );
};

export default Profile;
