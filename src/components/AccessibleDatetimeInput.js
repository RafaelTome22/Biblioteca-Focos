import React from 'react';
import PropTypes from 'prop-types';

const AccessibleDatetimeInput = ({ id, label, value, onChange, ariaDescribedBy }) => (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input
        id={id}
        type="datetime-local"
        value={value}
        onChange={onChange}
        aria-describedby={ariaDescribedBy}
        style={{ padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
  
  AccessibleDatetimeInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    ariaDescribedBy: PropTypes.string
  };
  
  AccessibleDatetimeInput.defaultProps = {
    value: '',
    ariaDescribedBy: null
  };
  
  export default AccessibleDatetimeInput;
  