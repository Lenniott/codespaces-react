import PropTypes from "prop-types";

const Main = ({ children }) => {
  return (
    <main id="main" className="p-6">
      <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export { Main };
