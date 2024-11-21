import React from 'react';
import PropTypes from 'prop-types';

const AccessibleSearchInput = ({ id, label, value, onChange, ariaDescribedBy, placeholder }) => (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-describedby={ariaDescribedBy}
        style={{ padding: '10px', fontSize: '16px', width: '200px' }}
      />
    </div>
  );
  
  AccessibleSearchInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    ariaDescribedBy: PropTypes.string,
    placeholder: PropTypes.string
  };
  
  AccessibleSearchInput.defaultProps = {
    value: '',
    ariaDescribedBy: null,
    placeholder: 'Search...'
  };
  
  export default AccessibleSearchInput;
  