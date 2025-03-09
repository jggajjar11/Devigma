import React from "react";
import { Link } from "react-router-dom";
import dummyRectangle from "../assets/img/dummy-rectangle.png";

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card flex flex-col rounded-3xl border border-[#DAD8DD] h-full group">
      <div className="img-wrapper bg-[#D9D9D9] rounded-t-3xl overflow-hidden group-hover:cursor-pointer">
        <img
          src="/user_image.png"
          className="h-[230px] object-cover w-full"
          alt="user-profile-1"
          width={340}
          height={230}
        />
      </div>
      <div className="content-wrapper flex flex-col grow p-5 bg-white rounded-b-3xl overflow-hidden group-hover:bg-[#F3F0FF] duration-300 ease-in-out group-hover:cursor-pointer">
        <h6 className="font-literata-bold text[#211F24] mb-2">
          {profile.name}
        </h6>
        <p className="text-[#646167] mb-1">{profile.tagline}</p>
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
        <p className="text-[#646167] mb-5">
          <strong>Personality:</strong> {profile.personality}
        </p>
        {/* Link to Profile Detail page */}
        <div className="mt-auto">
          <Link to={`/profile/${profile.slug}`} className="btn btn-secondary">
            <span className="relative z-[1]">View Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
