import PropTypes from "prop-types";
import { Button } from "../../components/button";
import { X } from "react-feather";

const ModalHeader = ({ title, icon, customHeader, hide }) => {
  return (
    <>
      {!customHeader ? (
        <header className="flex items-center min-w-0">
          {icon && <div>{icon}</div>}
          {title && (
            <div className="text-xl pr-4 truncate flex-1 min-w-0">{title}</div>
          )}
          <Button
            preset="transparent"
            onClick={hide}
            title="Close"
            iconOnly={true}
            size="small"
          >
            <X className="h-6 w-6 text-neutral-500" />
          </Button>
        </header>
      ) : (
        <header>{customHeader}</header>
      )}
    </>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  customHeader: PropTypes.node,
  hide: PropTypes.func,
};

export { ModalHeader };
