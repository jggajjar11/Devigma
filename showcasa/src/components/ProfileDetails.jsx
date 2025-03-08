import React from "react";
import { useParams } from "react-router-dom";
import profiles from "../data/profiles.json";
import ProfileCard from "../components/ProfileCard";
import userImg from "../assets/img/user-detail-page.png";

const Profile = ({ profile }) => {
  // const { slug } = useParams(); // Get the profile ID from the URL
  // const profile = profiles.find((p) => p.slug === parseInt(slug)); // Find the matching profile

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div className="profile-detail max-w-[1420px] mx-auto">
      <div className="grid grid-flow-col grid-cols-4 gap-5">
        <div className="left-side-details flex flex-col gap-3">
          <img src={userImg} alt={profile.name} width="194" height="1944" />
          <h5 className="font-literata-bold text[#211F24]">{profile.name}</h5>
          <p className="text-[#646167]">
            <strong>Tagline:</strong> {profile.tagline}
          </p>
          <div className="flex items-start space-x-2 mb-1">
            <p className="text-[#646167]">Skills:</p>
            <ul className="flex flex-wrap p text-[#646167] divide-x divide-[#646167]">
              {profile.skills.map((skill, index) => (
                <li className="px-1" key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <h5 className="font-literata-bold text[#211F24]">Portfolio</h5>
          {profile.portfolio.map((project, index) => (
            <div key={index} className="project">
              <p className="text-[#646167]">{project.title}</p>
              <p className="text-[#646167]">{project.description}</p>
              <img src={project.image} alt={project.title} />
            </div>
          ))}
          <h5 className="font-literata-bold text[#211F24]">Personality Highlights</h5>
          <p className="text-[#646167]">{profile.personality}</p>
        </div>
        <div className="right-side-details grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 col-span-3">
      
            <ProfileCard key={profile.id} profile={profile} />
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
