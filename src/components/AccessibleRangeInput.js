import React from 'react';
import PropTypes from 'prop-types';

const AccessibleRangeInput = ({ id, label, value, onChange, min, max, step, ariaDescribedBy }) => (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input
        id={id}
        type="range"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        aria-describedby={ariaDescribedBy}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{ width: '200px' }}
      />
    </div>
  );
  
  AccessibleRangeInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    ariaDescribedBy: PropTypes.string
  };
  
  AccessibleRangeInput.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    ariaDescribedBy: null
  };
  
  export default AccessibleRangeInput;
  