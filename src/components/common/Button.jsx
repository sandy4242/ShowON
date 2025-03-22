import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => {
    switch (props.size) {
      case 'small': return '0.5rem 1rem';
      case 'large': return '0.75rem 1.5rem';
      default: return '0.625rem 1.25rem';
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '0.875rem';
      case 'large': return '1.125rem';
      default: return '1rem';
    }
  }};
  font-weight: 500;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: #6c757d;
          color: white;
          &:hover {
            background-color: #5a6268;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          border: 2px solid #007bff;
          color: #007bff;
          &:hover {
            background-color: #007bff;
            color: white;
          }
        `;
      case 'danger':
        return `
          background-color: #dc3545;
          color: white;
          &:hover {
            background-color: #c82333;
          }
        `;
      default:
        return `
          background-color: #007bff;
          color: white;
          &:hover {
            background-color: #0056b3;
          }
        `;
    }
  }}
`;

function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  ...props 
}) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
