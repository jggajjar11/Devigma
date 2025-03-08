import React from "react";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="text-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[700px] mx-auto">
          <h1 className="mb-5">Showcase Your Talent. Get Discovered.</h1>
          <p className="text-[#646167]">
            A dynamic platform where creativity meets opportunity. Build
            interactive profiles, share your best work, and connect with
            recruiters who value skills over degrees.
          </p>
          <div className="flex flex-wrap gap-y-8 gap-x-5 items-center justify-center mt-8">
            <Link to="/search" className="btn btn-secondary">
              <span className="relative z-1">Discover Talent</span>
            </Link>
            <Link to="/login" className="btn btn-primary">
              <span className="relative z-1">Join as Talent</span>
            </Link>
          </div>
        </div>
        <img
          src="/banner-img.png"
          className="h-64 object-cover md:h-auto mt-20 rounded-[20px] mx-auto block"
        />
      </div>
    </div>
  );
};
