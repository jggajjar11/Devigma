import React, { useState } from "react";
import profilesData from "../data/profiles.json";
import ProfileCard from "../components/ProfileCard";

const ProfilesTab = () => {
  const [skill, setSkill] = useState("Frontend");
  // const skills = profilesData.map(({ category }) => category);
  const skills = ["Frontend", "Backend", "Full Stack"];
  const data = profilesData.filter(({ category }) => category === skill);

  console.log(skills);

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-x-3 mb-8 overflow-x-auto whitespace-nowrap">
        {skills.map((crSkill) => (
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
        ))}

        {/* <div className="text-lg uppercase rounded-full bg-white px-4 py-3 border border-[#DAD8DD] text-[#8F8A93] font-medium">
          UI/UX Designs
        </div>
        <div className="text-lg uppercase rounded-full bg-[#6D27D6] px-4 py-3 border border-[#DAD8DD] text-[#FFFFFF] font-bold">
          3D Model
        </div> */}
      </div>
      <div className="profiles-grid flex flex-wrap -mx-4">
        {data.map((profile) => (
          <div className="w-1/4 px-4">
            <ProfileCard key={profile.slug} profile={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesTab;
