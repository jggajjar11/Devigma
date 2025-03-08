import React from "react";
import { Link } from "react-router-dom";

const WorkDetail = ({ portfolioItem, profile }) => {
  // Handle undefined portfolioItem
  if (!portfolioItem) {
    return <p>Portfolio details not available</p>;
  }

  return (
    <div className="work-detail-container max-w-[1200px] mx-auto py-20">
      <div className="flex justify-between items-center mb-14">
        <div className="flex items-center">
          <img
            src="/user-img.png"
            alt={profile.name}
            className="mr-5"
            width="56"
            height="56"
          />
          <div>
            <p className="font-literata-bold text[#211F24]">{profile.name}</p>
            <p className="text-[#211F24]">{profile.tagline}</p>
          </div>
        </div>
        <div>
          <Link to={`/profile/${profile.slug}`} className="btn btn-secondary">
            <span className="relative z-[1]">Back to Profile</span>
          </Link>
        </div>
      </div>
      <div className="work-header mb-5">
        <h1 className="text-2xl font-bold text-[#211F24] mb-10">
          {portfolioItem.title}
        </h1>
      </div>
      <div className="work-image">
        <img
          src={portfolioItem.image}
          alt={portfolioItem.title}
          className="w-full rounded-xl"
        />
      </div>
      <div
        className="mt-10 [&>h3]:text-2xl [&>h3]:mb-5 [&_li]:list-disc"
        dangerouslySetInnerHTML={{ __html: portfolioItem.description }}
      ></div>
    </div>
  );
};

export default WorkDetail;
