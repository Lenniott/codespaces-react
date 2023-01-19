import React from "react";
import PropTypes from "prop-types";

const PopoverMenu = ({ title }) => {
  return <div className="group bg-white aspect-video min-h-[8rem] max-w-full relative shadow border border-white">{title}</div>;
};

PopoverMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

export { PopoverMenu };
