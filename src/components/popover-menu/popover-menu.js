import PropTypes from "prop-types";

const PopoverMenu = ({ children }) => {
  return <ul className="-m-4 p-1">{children}</ul>;
};

PopoverMenu.propTypes = {
  children: PropTypes.node,
};

export { PopoverMenu };
