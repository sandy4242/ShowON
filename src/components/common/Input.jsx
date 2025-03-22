import React from 'react';
import styled from '@emotion/styled';

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.625rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
  border: 1px solid ${props => props.error ? '#dc3545' : '#dee2e6'};
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;

  &:focus {
    border-color: ${props => props.error ? '#dc3545' : '#80bdff'};
    box-shadow: 0 0 0 0.2rem ${props => props.error ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'};
  }

  &:disabled {
    background-color: #e9ecef;
    opacity: 0.65;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #6c757d;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc3545;
`;

const HelperText = styled.span`
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #6c757d;
`;

function Input({
  label,
  error,
  helperText,
  id,
  type = 'text',
  ...props
}) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <InputWrapper>
      {label && (
        <Label htmlFor={inputId}>
          {label}
        </Label>
      )}
      <StyledInput
        id={inputId}
        type={type}
        error={error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {helperText && !error && <HelperText>{helperText}</HelperText>}
    </InputWrapper>
  );
}

export default Input;
