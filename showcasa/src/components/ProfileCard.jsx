import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p>{profile.tagline}</p>
      <h4>Skills:</h4>
      <ul>
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>
        <strong>Personality:</strong> {profile.personality}
      </p>
      {/* Link to the Profile Detail page */}
      <Link to={`/profile/${profile.slug}`} className="btn btn-primary">
        <span className="relative z-[1]">View Full Profile</span>
      </Link>
    </div>
  );
};

export default ProfileCard;
