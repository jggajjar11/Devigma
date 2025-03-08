import React from "react";
import { Link, useParams } from "react-router-dom";

const WorkCard = ({ portfolio }) => {
  //   const { workSlug } = useParams();
  //   portfolio.map((portfolio) => {
  //     const found = portfolio.portfolio.find(
  //       (item) => item.workSlug === workSlug
  //     );
  //     if (found) {
  //       portfolioItem = found;
  //     }
  //   });
  return (
    <Link to={`/portfolio/${portfolio.workSlug}`}>
      <div className="flex flex-col rounded-3xl border border-[#DAD8DD] h-full group">
        <div className="img-wrapper bg-[#D9D9D9] rounded-t-3xl overflow-hidden group-hover:cursor-pointer">
          <img
            src={portfolio.image}
            className="h-[230px] object-cover w-full"
            alt={portfolio.title}
          />
        </div>
        <div className="content-wrapper flex flex-col grow p-5 bg-white rounded-b-3xl overflow-hidden group-hover:bg-[#F3F0FF] duration-300 ease-in-out group-hover:cursor-pointer">
          <h6 className="font-bold text-[#211F24] mb-2">{portfolio.title}</h6>
          <p className="text-[#646167] mb-1">{portfolio.description}</p>
        </div>
      </div>
    </Link>
    // <Link to={`/portfolio/${portfolio}`}>
    // </Link>
  );
};

export default WorkCard;
