import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de entrada acessível.
 * 
 * @param {object} props - Propriedades do componente.
 * @param {string} props.id - ID único para o campo de entrada.
 * @param {string} props.label - Texto do rótulo associado ao campo de entrada.
 * @param {string} [props.type='text'] - Tipo do campo de entrada (por exemplo, 'text', 'password').
 * @param {string} [props.value=''] - Valor atual do campo de entrada.
 * @param {function} props.onChange - Função chamada quando o valor do campo muda.
 * @param {string} [props.ariaDescribedBy] - ID do elemento que fornece uma descrição adicional para o campo.
 * @returns {React.Element} O componente `input` dentro de um `div` com um `label`.
 */
const AccessibleInput = ({ id, label, type = 'text', value = '', onChange, ariaDescribedBy }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        style={{ padding: '10px', fontSize: '16px', width: '200px' }}
        aria-describedby={ariaDescribedBy}
      />
    </div>
  );
};

AccessibleInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  ariaDescribedBy: PropTypes.string // Adiciona uma prop para associar texto descritivo adicional
};

AccessibleInput.defaultProps = {
  type: 'text',
  value: ''
};

export default AccessibleInput;


