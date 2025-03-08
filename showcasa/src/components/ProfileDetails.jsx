import React from "react";
import { useParams } from "react-router-dom";
// import profiles from "../data/profiles.json";
import WorkCard from "../components/WorkCard";
import userImg from "../assets/img/user-detail-page.png";
// import WorkCard from "./WorkCard";

const Profile = ({ profile }) => {
  // const data = profile.map(() => portfolio);
  // const { slug } = useParams(); // Get the profile ID from the URL
  // const profile = profiles.find((p) => p.slug === parseInt(slug)); // Find the matching profile

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div className="py-20">
      <div className="profile-detail max-w-[1420px] mx-auto px-4">
        <div className="flex flex-wrap -mx-4 gap-y-12">
          <div className="left-side-details md:flex-shrink-0 px-4">
            <div className="flex flex-col gap-3">
              <img src={userImg} alt={profile.name} width="194" height="1944" />
              <h5 className="font-literata-bold text[#211F24]">
                {profile.name}
              </h5>
              <p className="text-[#646167]">
                <strong>Tagline:</strong> {profile.tagline}
              </p>
              <div className="flex items-start space-x-2 mb-1">
                <p className="text-[#646167]">Skills:</p>
                <ul className="flex flex-wrap p text-[#646167] divide-x divide-[#646167]">
                  {profile.skills.map((skill, index) => (
                    <li className="px-1" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <h5 className="font-literata-bold text[#211F24]">Portfolio</h5>
              {profile.portfolio.map((project, index) => (
                <div key={index} className="project">
                  <p className="text-[#646167]">{project.title}</p>
                  <p className="text-[#646167]">{project.description}</p>
                  <img src={project.image} alt={project.title} />
                </div>
              ))} */}
              <h5 className="font-literata-bold text[#211F24]">
                Personality Highlights
              </h5>
              <p className="text-[#646167]">{profile.personality}</p>
            </div>
          </div>
          <div className="right-side-details md:w-3/4 px-4 md:ml-auto">
            <div className="flex items-center gap-x-3 mb-8 overflow-x-auto whitespace-nowrap">
              {/* {skills.map((crSkill) => (
          <div
            key={crSkill}
            className={`text-lg uppercase rounded-full  px-4 py-3 border border-[#DAD8DD] cursor-pointer
             
             ${
               skill === crSkill
                 ? "bg-[#6D27D6] text-[#FFFFFF] font-bold"
                 : "bg-white text-[#8F8A93] font-medium"
             }`}
            data-active={skill === crSkill}
            onClick={() => setSkill(crSkill)}
          >
            {crSkill}
          </div>
        ))} */}

              <div className="text-lg uppercase rounded-full bg-[#6D27D6] px-4 py-3 border border-[#DAD8DD] text-[#FFFFFF] font-medium">
                Work
              </div>
              {/* <div className="text-lg uppercase rounded-full bg-[#6D27D6] px-4 py-3 border border-[#DAD8DD] text-[#FFFFFF] font-bold">
                3D Model
              </div> */}
            </div>
            <div className="flex flex-wrap -mx-4">
              {profile.portfolio.map((portfolio, index) => (
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <WorkCard key={index} portfolio={portfolio} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
