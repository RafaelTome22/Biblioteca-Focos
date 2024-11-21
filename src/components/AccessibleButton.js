import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de botão acessível.
 * 
 * @param {object} props - Propriedades do componente.
 * @param {string} props.label - Texto do botão. Usado para acessibilidade e, se o botão for um ícone, como rótulo.
 * @param {function} props.onClick - Função chamada quando o botão é clicado.
 * @param {boolean} [props.iconOnly=false] - Indica se o botão é apenas um ícone. Se verdadeiro, usa `aria-label` para acessibilidade e oculta o texto.
 * @param {object} [props.children] - Conteúdo do botão (geralmente ícones).
 * @returns {React.Element} O componente `button`.
 */
const AccessibleButton = ({ label, onClick, iconOnly, ...props }) => {
  return (
    <button
      type="button"
      aria-label={iconOnly && label ? label : undefined} // Se for um botão de ícone, assegure o uso de aria-label
      onClick={onClick}
      style={{
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '4px',
        outline: 'none'
      }}
      {...props}
      onFocus={(e) => e.target.style.outline = '2px solid #000'} // Estilo para indicar foco ao navegar com teclado
      onBlur={(e) => e.target.style.outline = 'none'} // Remove a borda quando o foco é perdido
    >
      {iconOnly ? <span aria-hidden="true">{props.children}</span> : label}
    </button>
  );
};

AccessibleButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  iconOnly: PropTypes.bool,  // Adicionado para diferenciar botões com ícones
};

AccessibleButton.defaultProps = {
  iconOnly: false
};

export default AccessibleButton;


