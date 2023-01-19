import PropTypes from "prop-types";

const ModalFooter = ({ children, customFooter }) => {
  return (
    <>
      {!customFooter ? (
        <footer className="mt-auto self-end flex justify-end gap-4">
          {children}
        </footer>
      ) : (
        <footer>{customFooter}</footer>
      )}
    </>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  customFooter: PropTypes.node
};

export { ModalFooter };
