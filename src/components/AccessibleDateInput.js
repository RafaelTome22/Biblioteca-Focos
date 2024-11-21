import React from 'react';
import PropTypes from 'prop-types';

const AccessibleDateInput = ({ id, label, value, onChange, ariaDescribedBy }) => (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input
        id={id}
        type="date"
        value={value}
        onChange={onChange}
        aria-describedby={ariaDescribedBy}
        style={{ padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
  
  AccessibleDateInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    ariaDescribedBy: PropTypes.string
  };
  
  AccessibleDateInput.defaultProps = {
    value: '',
    ariaDescribedBy: null
  };
  
  export default AccessibleDateInput;
  