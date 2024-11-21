import React from 'react';
import PropTypes from 'prop-types';

/**
 * Campo de senha acessível.
 * 
 * @param {object} props - Propriedades do componente.
 * @param {string} props.id - ID único para o campo de entrada.
 * @param {string} props.label - Texto do rótulo associado ao campo de entrada.
 * @param {string} [props.value=''] - Valor atual do campo de entrada.
 * @param {function} props.onChange - Função chamada quando o valor do campo muda.
 * @param {string} [props.ariaDescribedBy] - ID do elemento que fornece uma descrição adicional para o campo.
 * @returns {React.Element} O componente `input` para senhas.
 */
const AccessiblePasswordInput = ({ id, label, value = '', onChange, ariaDescribedBy }) => (
  <div style={{ marginBottom: '10px' }}>
    <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
      {label}
    </label>
    <input
      id={id}
      type="password"
      value={value}
      onChange={onChange}
      style={{ padding: '10px', fontSize: '16px', width: '200px' }}
      aria-describedby={ariaDescribedBy}
    />
  </div>
);

AccessiblePasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  ariaDescribedBy: PropTypes.string,
};

AccessiblePasswordInput.defaultProps = {
  value: '',
};

export default AccessiblePasswordInput;
