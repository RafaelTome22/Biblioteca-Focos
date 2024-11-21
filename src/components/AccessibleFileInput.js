import React from 'react';
import PropTypes from 'prop-types';

/**
 * Campo de entrada de arquivo acessível.
 * 
 * @param {object} props - Propriedades do componente.
 * @param {string} props.id - ID único para o campo de entrada.
 * @param {string} props.label - Texto do rótulo associado ao campo de entrada.
 * @param {function} props.onChange - Função chamada quando o valor do campo muda.
 * @param {string} [props.ariaDescribedBy] - ID do elemento que fornece uma descrição adicional para o campo.
 * @returns {React.Element} O componente `input` para arquivos.
 */
const AccessibleFileInput = ({ id, label, onChange, ariaDescribedBy }) => (
  <div style={{ marginBottom: '10px' }}>
    <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
      {label}
    </label>
    <input
      id={id}
      type="file"
      onChange={onChange}
      style={{ fontSize: '16px' }}
      aria-describedby={ariaDescribedBy}
    />
  </div>
);

AccessibleFileInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  ariaDescribedBy: PropTypes.string,
};

export default AccessibleFileInput;
