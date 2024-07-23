import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-gray-800 to-gray-200">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};
export default Container;
