import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

const PopoverMenuItem = ({ icon, title, link, button, onClick, preset }) => {
  const menuItemClasses = {
    base: "text-left w-full flex gap-3 items-center py-2 px-2 hover:underline [&>.icon>svg]:w-4 [&>.icon>svg]:h-4",
    preset: {
      default: "text-neutral-900 [&>.icon]:text-neutral-400",
      primary: "text-primary [&>.icon]:text-primary/50",
      danger: "text-red-600 [&>.icon]:text-red-600/50",
    },
  };

  const menuItemClassName = classNames(
    menuItemClasses.base,
    menuItemClasses.preset[preset]
  );

  return (
    <li>
      {button ? (
        <button type="button" onClick={onClick} className={menuItemClassName}>
          <span className="icon">{icon}</span>
          <span>{title}</span>
        </button>
      ) : (
        <Link to={link} className={menuItemClassName}>
          <span className="icon">{icon}</span>
          <span>{title}</span>
        </Link>
      )}
    </li>
  );
};

PopoverMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  link: PropTypes.string,
  button: PropTypes.bool,
  onclick: PropTypes.func,
  preset: PropTypes.oneOf(["default", "primary", "danger"]),
};

PopoverMenuItem.defaultProps = {
  preset: "default",
};

export { PopoverMenuItem };
