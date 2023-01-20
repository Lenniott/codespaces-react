import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Layers, Clock, Globe, Settings } from "react-feather";

const MaterialCard = ({
  count,
  title,
  link,
  screenCount,
  duration,
  type,
  platform,
}) => {
  return (
    <div className="group bg-white aspect-video min-h-[8rem] max-w-full relative shadow border border-white">
      <Link
        to={link}
        className="peer group block absolute inset-0 p-4 flex flex-col"
      >
        <div className="flex gap-3 items-center">
          <div
            className={`${
              type === "Screen"
                ? "bg-primary border-transparent text-white"
                : "border-primary text-primary"
            } font-normal shrink-0 h-10 w-10 rounded-full border text-sm grid place-items-center`}
          >
            {count}
          </div>
          <div className="relative inline-flex leading-normal text-lg group-hover:underline">
            {title}
          </div>
        </div>
        <div className="bg-neutral-75 -mx-4 -mb-4 py-4 mt-auto text-neutral-600 text-sm flex items-center justify-around gap-3">
          {screenCount && type === "Session" && (
            <div
              title={`${screenCount} screens`}
              className="flex items-center gap-2"
            >
              <Layers className="h-4 w-4" />
              <span>
                {screenCount} <span className="hidden sm:inline">screens</span>
              </span>
            </div>
          )}
          <div
            title="Duration is 2 hours, 30 minutes"
            className="flex items-center gap-1.5"
          >
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div title={platform} className="flex items-center gap-1.5">
            <Globe className="h-4 w-4" />
            <span className="">
              <span className="hidden sm:inline">{platform}</span>
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute top-3 right-3 transition-opacity opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto focus-within:opacity-100 focus-within:pointer-events-auto peer-focus:opacity-100 peer-focus:pointer-events-auto">
        <Button preset="transparent" iconOnly="true" title="Settings">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

MaterialCard.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  screenCount: PropTypes.number,
  duration: PropTypes.string,
  type: PropTypes.oneOf(["Session", "Screen"]).isRequired,
  platform: PropTypes.oneOf(["Online", "Campus"]),
};

export { MaterialCard };
