import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onChange, value }) => {
  return (
    <input value={value} onChange={(event) => onChange(event.target.value)} />
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchInput;
