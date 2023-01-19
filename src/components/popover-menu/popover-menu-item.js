import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PopoverMenuItem = ({ icon, title, link, button, onClick }) => {
  return { button } ? (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline"
      >
        <span>{icon}</span>
        <span>{title}</span>
      </button>
    </li>
  ) : (
    <li>
      <Link
        to={link}
        className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline"
      >
        <span>{icon}</span>
        <span>{title}</span>
      </Link>
    </li>
  );
};

PopoverMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  link: PropTypes.string,
  button: PropTypes.bool,
  onclick: PropTypes.func,
};

export { PopoverMenuItem };
