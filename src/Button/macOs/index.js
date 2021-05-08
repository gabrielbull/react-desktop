import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import x_11 from './styles/10.11';

const styles = { x_11 };

const StyledButton = styled.button`
  ${({ version }) => styles[version]}
`;

const Button = (props) => {
  // Add React.hooks here
  return <StyledButton {...props}/>
};

Button.defaultProps = {
  version: 'x_11'
};

Button.propTypes = {
  color: PropTypes.string,
  version: PropTypes.oneOf(Object.keys(styles))
}

export default Button;
