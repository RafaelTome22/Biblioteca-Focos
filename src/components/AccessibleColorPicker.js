import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de seletor de cor acessível.
 */
const AccessibleColorPicker = ({ id, label, value, onChange, ariaDescribedBy }) => (
  <div style={{ marginBottom: '10px' }}>
    <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
      {label}
    </label>
    <input
      id={id}
      type="color"
      value={value}
      onChange={onChange}
      aria-describedby={ariaDescribedBy}
      style={{ cursor: 'pointer', width: '50px', height: '30px', border: 'none' }}
    />
  </div>
);

AccessibleColorPicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  ariaDescribedBy: PropTypes.string
};

AccessibleColorPicker.defaultProps = {
  ariaDescribedBy: null
};

export default AccessibleColorPicker;
