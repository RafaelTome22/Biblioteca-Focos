import React from 'react';
import PropTypes from 'prop-types';

/**
 * Caixa de seleção acessível.
 * 
 * @param {object} props - Propriedades do componente.
 * @param {string} props.id - ID único para o campo de entrada.
 * @param {string} props.label - Texto do rótulo associado ao campo de entrada.
 * @param {boolean} [props.checked=false] - Estado atual da caixa de seleção.
 * @param {function} props.onChange - Função chamada quando o valor muda.
 * @returns {React.Element} O componente `input` tipo checkbox.
 */
const AccessibleCheckboxInput = ({ id, label, checked = false, onChange }) => (
  <div style={{ marginBottom: '10px' }}>
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={{ marginRight: '10px' }}
    />
    <label htmlFor={id}>
      {label}
    </label>
  </div>
);

AccessibleCheckboxInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

AccessibleCheckboxInput.defaultProps = {
  checked: false,
};

export default AccessibleCheckboxInput;
