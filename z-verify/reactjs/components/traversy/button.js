import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="py-2 px-3 text-white bg-blue-400 rounded"
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "blue",
  text: "Hello",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
