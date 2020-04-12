import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const TextInputGroup = ({
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        className={classnames("form-control", { "is-invalid": error })}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextInputGroup.protoTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
